/* eslint-disable */
import React, {Component, PropTypes} from 'react';
import Notification from 'source_path/notification';
import ImageUploader from 'source_path/image-uploader';

class AbortUploadFile extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgList: [],
            uploading: false,
            file: null
        };
        this.imageUploader = null;
    }

    getRef (instance) {
        this.imageUploader = instance;
    }

    before (fileList) {
        console.log('选中的图片列表: ', fileList);
        this.setState({
            uploading: true,
            percent: '0%',
            file: fileList[0]
        });
    }

    progress (e, file, xhr) {
        this.setState({
            percent: `${(e.loaded / e.total * 100).toFixed(2)}%`
        });
    }

    success (uploadList) {
        let { imgList } = this.state;
        imgList = imgList.concat(uploadList);
        this.setState({
            imgList
        });
    }

    fail (failList, successList) {
        let { imgList } = this.state;
        imgList = imgList.concat(successList);
        this.setState({
            imgList
        });

        Notification.error({
            message: '图片上传失败'
        });
    }

    finish () {
        this.setState({
            uploading: false,
            file: null
        });
    }

    delete () {
        const { file } = this.state;
        this.imageUploader.delete(file.fid);
    }
    
    render() {
        const me = this;
        const { imgList, uploading, percent } = me.state;

        return (
            <div className="example">
                <h4>1.5 取消文件上传</h4>
                <ul className="image-list clearfix">
                {
                    imgList.map((item) => {
                        return (
                            <li>
                                <img src={item.url} />
                            </li>
                        )
                    })
                }
                    <li className='upload-entry'>
                        <ImageUploader
                            ref={(r) => me.getRef(r)}
                            className={`${uploading ? 'hidden' : null}`}
                            before={(files) => me.before(files)}
                            progress={(e, file, xhr) => me.progress(e, file, xhr)}
                            success={(a) => me.success(a)}
                            fail={(a, b) => me.fail(a, b)}
                            finish={() => me.finish()}
                        />
                        <div className={`uploading-img ${uploading ? null : 'hidden'}`}>
                            <span className='del-btn' onClick={() => me.delete()}>&times;</span>
                            <p>{percent}</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

AbortUploadFile.propTypes = {

};

export default AbortUploadFile;
/* eslint-enable */
