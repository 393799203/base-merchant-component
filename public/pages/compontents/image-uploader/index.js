/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Notification from 'source_path/notification';
import ImageUploader from 'source_path/image-uploader';

import SingleUpload from './modules/single-upload';
import MultiUpload from './modules/multi-upload';
import SingleUploadWithProgress from './modules/single-upload-with-progress';
import MultiUploadWithProgress from './modules/multi-upload-with-progress';
import AbortUploadfile from './modules/abort-upload-file';

import Readme from './Readme.md';

import './style/index.less';

class ImageUploaderDemo extends Component {
    render () {
        return (
            <div className="mb-lg ml mr image-uploader-demo">
                <h2 className='pb-5 b-b dashed'>
                    图片上传 - ImageUploader
                    <a href="mactt://message/user/01173" style={{border: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <SingleUpload />
                <MultiUpload />
                <SingleUploadWithProgress />
                <MultiUploadWithProgress />
                <AbortUploadfile />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

export default ImageUploaderDemo;
/* eslint-enable */
