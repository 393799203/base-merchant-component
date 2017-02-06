import React, { Component, PropTypes } from 'react';
import './style/index.less';

/** @constant AppKey upload appkey for server authorization */
const AppKey = '12a';
const generateId = (prefix = 'v') => {
    const timestamp = +new Date();
    const num = Math.floor(Math.random() * 10000);
    return `${prefix}${num}${timestamp}`;
};

class ImageUploader extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            uploading: false
        };
        this.cid = generateId();
        this.callbackName = generateId('_callback');
        this.queue = []; // the upload queue
        this.successQueue = [];
        this.failQueue = []; // the failed file queue
        this.xhr = undefined; // current uploading xhr object
    }

    componentDidMount () {
        /**
         * @func bind a global uploaded callback function on window
        */
        const { success, fail } = this.props;

        window[this.callbackName] = (result) => {
            const resp = JSON.parse(result);
            if (resp.status.code === 1001) {
                success(resp.result);
            } else {
                fail(resp.result);
            }
        };
    }

    componentWillUnmount () {
        /**
         * @desc gc the global callback function binded on the 'window' object
        */
        window[this.callbackName] = undefined;
    }

    onChange (e) {
        const target = e.target;
        const files = target.files;
        this.beforeUpload(files);
    }

    enQueue (queue, items = []) {
        /**
         * @func add the files into the upload queue
        */
        const isEqual = (o, type) => {
            return Object.prototype.toString.call(o) === `[object ${type}]`;
        };

        if (!isEqual(items, 'Array')) {
            queue.push(items);
        } else {
            items.forEach((item) => {
                queue.push(item);
            });
        }

        return queue.length;
    }

    outQueue (queue) {
        /**
         * @desc delete the front file in the queue
        */
        return queue.splice(0, 1).length;
    }

    isEmptyQueue (queue) {
        /**
         * @desc is the queue an empty queue
        */
        return queue.length === 0;
    }

    clearQueue () {
        this.queue = [];
        this.failQueue = [];
        this.successQueue = [];
    }

    delete (fid) {
        /**
         * @func delete the file with passed fid in the queue
        */
        const queue = this.queue;
        let index;

        for (let i = 0; i < queue.length; i++) {
            if (queue[i].fid === fid) {
                index = i;
                break;
            }
        }

        if (typeof index === 'undefined') {
            return;
        }

        if (index === 0) {
            /**
             * @desc when the file is uploading, stop the transportation
            */
            this.xhr.abort();
        }
        queue.splice(index, 1);
    }

    beforeUpload (fileList) {
        const me = this;
        const { before } = this.props;
        const files = Array.prototype.slice.call(fileList);

        files.forEach((file) => {
            const item = file;
            item.fid = generateId('f');
            return item;
        });

        if (before) {
            /**
             * @desc when before is an async function,
             * wait the success callback before exec the next
            */
            if (typeof before.then === 'function') {
                before(files).then(() => {
                    me.enQueue(me.queue, files);
                    me.start();
                });
            } else {
                const result = before(files);
                if (result !== false) {
                    /**
                     * @desc when before function returns false, stop executing next steps
                    */
                    me.enQueue(me.queue, files);
                    me.start();
                }
            }
        } else {
            me.enQueue(me.queue, files);
            me.start();
        }
    }

    start () {
        const me = this;
        if (window.FormData) { // if browser supports FormData upload
            me.fdUpload();
        } else { // use the tradional iframe upload
            me.iframeUpload();
        }
    }

    fdUpload (index = 0) {
        const me = this;
        const file = me.queue[index];
        const { singleSuccess, singleFail } = me.props;

        me.uploadFile(file).then((resp) => {
            me.outQueue(me.queue);
            me.enQueue(me.successQueue, resp);

            singleSuccess && singleSuccess(resp, file);

            if (!me.isEmptyQueue(me.queue)) {
                me.fdUpload();
            } else {
                me.finish();
            }
        }, (resp) => {
            me.outQueue(me.queue);
            me.enQueue(me.failQueue, {
                file, // original file object
                resp // resp from server
            });

            singleFail && singleFail(resp, file);

            if (!me.isEmptyQueue(me.queue)) {
                me.fdUpload();
            } else {
                me.finish();
            }
        });
    }

    iframeUpload () {
        this.form.getDOMNode().submit();
    }

    isSuccessCode (status) {
        /**
         * @desc judge whether the http status code is in the success range
        */
        return (status >= 200 && status < 300) || status === 304;
    }

    uploadFile (file) {
        const me = this;
        const { url, progress } = this.props;

        return new Promise((resolve, reject) => {
            const fd = new FormData();
            const xhr = new XMLHttpRequest();

            me.xhr = xhr;

            fd.append('image', file);

            if (progress) {
                xhr.upload.onprogress = function (e) {
                    progress(e, file, xhr);
                };
            }

            xhr.onload = function (e) {
                if (me.isSuccessCode(this.status)) {
                    const resp = JSON.parse(this.responseText);
                    if (resp.status.code === 1001) {
                        resolve(resp.result);
                    } else {
                        reject(resp);
                    }
                } else {
                    reject(e);
                }
            };

            xhr.onerror = function (e) {
                reject(e);
            };

            xhr.onabort = function (e) {
                reject(e);
            };

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.send(fd);
        });
    }

    finish () {
        const me = this;
        const { success, fail, finish } = me.props;
        if (me.isEmptyQueue(me.failQueue)) {
            /** @desc no failed upload images */
            success && success(me.successQueue);
        } else {
            fail && fail(me.failQueue, me.successQueue);
        }

        finish && finish();

        me.clearQueue();
    }

    render () {
        const cid = this.cid;
        const { className, url, inputAttrs, type } = this.props;
        return (
            <div className={`${type === 'raw' ? '' : 'mc-image-uploader'} ${className}`}>
                <form action={url} method='post' target={`${cid}`} encType='mutipart/form-data' ref={(c) => { this.form = c; }}>
                    <input type='file' name='image' accept='image/png, image/jpeg' onChange={e => this.onChange(e)} {...inputAttrs} />
                    <input type='hidden' name='domain' value={document.domain} />
                    <input type='hidden' name='callback' value={this.callbackName} />
                    {
                        type !== 'raw' ? <div className='add-file-btn' /> : null
                    }
                </form>
                <iframe id={`${cid}`} className='hidden' />
            </div>
        );
    }
}

ImageUploader.defaultProps = {
    url: `http://media.xiaodian.com/image/put?appKey=${AppKey}`,
    className: ''
};

ImageUploader.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    inputAttrs: PropTypes.object,
    singleSuccess: PropTypes.func,
    singleFail: PropTypes.func,
    success: PropTypes.func,
    finish: PropTypes.func,
    fail: PropTypes.func,
    before: PropTypes.func,
    progress: PropTypes.func
};

export default ImageUploader;
