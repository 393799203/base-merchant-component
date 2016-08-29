import React from 'react';
var UploadFile = require('./UploadFile');
require('./index.less');

var FileUploader = React.createClass({
    // 上传开始
    uploadFileStart: function(){
        this.setState({
            path: '正在上传...'
        });
    },
    // 上传完成
    uploadFileFinish: function(msg){
        Modal.tip(msg);        
    },
    // 上传失败
    uploadFileFailed: function(msg){
        Modal.tip(msg);  
    },
    render(){
        return(
            <button className="ml file xd-btn primary">
                            {this.props.title}
                            <UploadFile onStart={this.uploadFileStart} onFinish={this.uploadFileFinish} onFailed={this.uploadFileFailed} />
                            <div className="hide">
                                <iframe name="J_UploadFileFrame" id="J_UploadFileFrame" src="about:blank" />
                            </div>
            </button>


        );
    }
});

module.exports = FileUploader;