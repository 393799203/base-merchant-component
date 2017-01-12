import React, { Component } from 'react';
import Panel from 'source_path/panel';
import './style/index.less';
import Readme from './Readme.md';

class PanelDemo extends Component {
    render () {
        const elem = [
            <span className='panel-header-option-1'>时间:2017-01-01</span>,
            <a className='panel-header-option-2' target='_blank' href='http://www.xiaodian.com'>查看更多</a>
        ]
        
        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    面板 - Panel
                </h1>
                <h2>
                    1. 示例
                </h2>
                <Panel title='示例代码' elem={elem}>
                    <p>你的组件内容</p>
                </Panel>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

export default PanelDemo;
