import React from 'react';
import { Placeholder }  from 'module_path/index';
require('./style/index.less');

export default React.createClass({
    render(){
        return(
            <div className="placeholderDemo">
            	<input type="text"  placeholder="请设置密码（6-20位密码）" className="input"/>
            </div>
        );
    }
});
