import React, {Component, PropTypes} from 'react';
import Notification from 'source_path/notification';
import ImageUploader from 'source_path/image-uploader';

class MultiUpload extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgList: [],
            uploading: false
        }
    }

    before (fileList) {
        console.log('选中的图片列表: ', fileList);
        this.setState({
            uploading: true
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
            message: `有${failList.length}张图片上传失败`
        });
    }

    finish () {
        this.setState({
            uploading: false
        });
    }
    
    render() {
        const me = this;
        const { imgList, uploading } = me.state;

        return (
            <div className="example">
                <h4>1.2 多文件上传</h4>
                <ul className="image-list clearfix">
                {
                    imgList.map((item) => {
                        return (
                            <li><img src={item.url} /></li>
                        )
                    })
                }
                    <li className='upload-entry'>
                        <ImageUploader
                            className={`${uploading ? 'hidden' : null}`}
                            inputAttrs = {{ multiple: true }}
                            before={(list) => me.before(list)}
                            success={(a) => me.success(a)}
                            fail={(a, b) => me.fail(a, b)}
                            finish={() => me.finish()}
                        />
                        <div className={`uploading-img ${uploading ? null : 'hidden'}`}>
                            <p>上传中...</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

MultiUpload.propTypes = {

};

export default MultiUpload;