import React from 'react';
import { Capture }  from 'module_path/index';

require("./index.less")

export default React.createClass({
    render(){
        return(
            <Capture ref="capture" enabled={true} captureId='123123'/> 
        );
    }
});
