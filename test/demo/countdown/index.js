import React from 'react';
//import { Countdown }  from 'module_path/index';
var Countdown = require('../../../lib/countdown/index')
require("./style/index.less");

export default React.createClass({
    render(){
        return(
            <div className="countdownDemo">
            	<p>展示秒，不停止倒计时：</p>
                <Countdown remaining={1000} showSecond={true} stopped={false}/>

                <p>不展示秒，不停止倒计时：</p>
                <Countdown remaining={1000} showSecond={false} stopped={false}/>

                <p>不展示秒，停止倒计时：</p>
                <Countdown remaining={1000} showSecond={false} stopped={true}/>
            </div>
        );
    }
});
