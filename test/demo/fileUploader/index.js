import React from 'react';
import { FileUploader }  from 'module_path/index';
export default React.createClass({
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
            <FileUploader title='上传'/>
        );
    }
});
