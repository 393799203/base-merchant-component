/* eslint-disable */
import React, { Component } from 'react';
import Panel from 'source_path/panel';
import './style/index.less';
import Readme from './Readme.md';

class PanelDemo extends Component {
    render () {
        const elem = <span>
            <span className='panel-header-option-1'>时间:2017-01-01</span>
            <a className='panel-header-option-2' target='_blank' href='http://www.xiaodian.com'>查看更多</a>
        </span>;

        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='pb-5 b-b dashed'>
                    面板 - Panel
                    <a href="mactt://message/user/01173" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <Panel title='示例代码' elem={elem}>
                    <p>你的组件内容</p>
                </Panel>
                <Panel title='示例代码' elem={elem} theme='info' className='mt'>
                    <p>你的组件内容</p>
                </Panel>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

export default PanelDemo;
/* eslint-enable */
