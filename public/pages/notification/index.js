/* eslint-disable */
import React, { Component } from 'react';
import Notification from 'source_path/notification';
import Readme from './README.md';

function showError () {
    Notification.error({
        message: '这是错误提示',
        duration: 2000
    });
}
function showSuccess () {
    Notification.success({
        message: '这是成功提示',
        duration: 2000
    });
}
function showWarn () {
    Notification.warn({
        message: '这是警告提示',
        duration: 2000
    });
}
function showInfo () {
    Notification.info({
        message: '这是普通提示',
        duration: 2000
    });
}
function showRight () {
    Notification.error({
        message: '这是右上角错误提示',
        duration: 2000,
        position: 'right'
    });
}
function showCustom () {
    Notification.success({
        message: '这是自定义位置成功提示',
        duration: 2000,
        position: 'custom',
        style: {
            top: '50px',
            left: '50%',
            marginLeft: '-150px'
        }
    });
}
export default class NotificationView extends Component {
    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    消息提示 - Notification
                    <a href="mactt://message/uname/qianqiao" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div>
                    <button
                      className='m-b btn btn-danger-border w-sm m-r'
                      onClick={showError}
                    >
                        错误提示
                    </button>
                    <button
                      className='m-b btn btn-success-border w-sm m-r'
                      onClick={showSuccess}
                    >
                        成功提示
                    </button>
                    <button
                      className='m-b btn btn-warning-border w-sm m-r'
                      onClick={showWarn}
                    >
                        警告提示
                    </button>
                    <button
                      className='m-b btn btn-info-border w-sm m-r'
                      onClick={showInfo}
                    >
                        普通提示
                    </button>
                    <button
                      className='m-b btn btn-danger w-sm m-r'
                      onClick={showRight}
                    >
                        右上角错误提示
                    </button>
                    <button
                      className='m-b btn btn-success w-sm m-r'
                      onClick={showCustom}
                    >
                        自定义位置成功提示
                    </button>
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */

