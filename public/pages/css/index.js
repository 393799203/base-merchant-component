import React, { Component } from 'react';
import './style/index.less';

export default class CSSView extends Component {
    render () {
        return (
            <div className='m-l m-r m-b-xxl mc-theme'>
                <h1 className='m-l m-r clearfix'>
                    商家后台主题样式
                </h1>
                <div className='m-l m-r' style={{ padding: '20px 0', borderBottom: '1px dashed #eee' }}>
                    <a
                      className='btn btn-danger-custom w m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme.git'
                    >
                      查看 Gitlab 源码
                    </a>
                </div>
            </div>
        );
    }
}
