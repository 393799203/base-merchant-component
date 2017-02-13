import React, { Component } from 'react';
import { ProcessBar } from 'source_path/process-bar';
import README from './README.md';


export default class ProcessBarView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            stepTp6: ['第一步', '第二步', '第三步', '第四步', '第五步', '第六步'],
            stepBt6: [<div>第一步描述<div>可以给dom</div></div>, '第二步描述', '第三步描述', '第四步描述', '第五步描述', '第六步描述'],
            stepBt3: ['第一步描述', '第二步描述', '第三步描述']
        };
    }
    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    进度条 - ProcessBar
                    <a href="mactt://message/user/02017" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className='m-t m-b'>
                    <ProcessBar
                        stepTp={this.state.stepTp6}
                        stepBt={this.state.stepBt6}
                        cur={3}
                    />
                    <div className='m-t-lg'>
                        <ProcessBar
                            stepBt={this.state.stepBt3}
                            cur={1}
                        />
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: README }} />
            </div>
        );
    }
}
