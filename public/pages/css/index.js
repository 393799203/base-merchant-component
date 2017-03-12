/* eslint-disable */
import React, { Component } from 'react';
import './style/index.less';

export default class CSSView extends Component {
    render () {
        return (
            <div className='ml mr mb-xxl'>
                <h2 className='pb-5 b-b dashed'>
                    商家后台主题样式
                </h2>
                <div className='ml mr' style={{ padding: '20px 0', borderBottom: '1px dashed #eee' }}>
                    <a
                      className='btn btn-danger-border w ml'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme.git'
                    >
                      查看 Gitlab 源码
                    </a>
                </div>
            </div>
        );
    }
}
/* eslint-enable */

