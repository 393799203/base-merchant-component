import React, {Component, PropTypes} from 'react';
import Notification from 'source_path/notification';
import ImageUploader from 'source_path/image-uploader';

class MultiUpload extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgList: [],
            uploading: false,
            percent: '0%',
            uploadList: []
        }
    }

    before (fileList) {
        console.log('选中的图片列表: ', fileList);
        let { uploadList } = this.state;
        for (let i = 0; i < fileList.length; i++) {
            let file = fileList[i];
            uploadList.push(file);
        }
        this.setState({
            uploading: true
        });
    }

    progress (e, file, xhr) {
        this.setState({
            percent: `${(e.loaded / e.total * 100).toFixed(2)}%`
        });
    }

    singleSuccess (resp) {
        let { imgList, uploadList } = this.state;

        imgList.push(resp);
        uploadList.shift();
        this.setState({
            imgList,
            uploadList
        });
    }

    singleFail (resp, file) {
        let { uploadList } = this.state;
        uploadList.shift();
        this.setState({
            uploadList
        });

        Notification.error({
            message: `${file.name}上传失败`
        });
    }

    finish () {
        this.setState({
            uploading: false
        });
    }
    
    render() {
        const me = this;
        const { imgList, uploading, percent, uploadList } = me.state;

        return (
            <div className="example">
                <h4>1.4 多文件上传-附带进度</h4>
                <ul className="image-list clearfix">
                {
                    imgList.map((item) => {
                        return (
                            <li><img src={item.url} /></li>
                        )
                    })
                }
                {
                    uploadList.map((item, i) => {
                        return (
                            <li>
                                <div className='uploading-item'>
                                    <p className="one-line">{item.name}</p>
                                    <p>{i === 0 ? percent : '待上传'}</p>
                                </div>
                            </li>
                        )
                    })
                }
                    <li className='upload-entry'>
                        <ImageUploader
                            className={`${uploading ? 'hidden' : null}`}
                            inputAttrs = {{ multiple: true }}
                            before={(list) => me.before(list)}
                            progress={(e, file, xhr) => me.progress(e, file, xhr)}
                            singleSuccess={(a) => me.singleSuccess(a)}
                            singleFail={(a, b) => me.singleFail(a, b)}
                            finish={() => me.finish()}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

MultiUpload.propTypes = {

};

export default MultiUpload;