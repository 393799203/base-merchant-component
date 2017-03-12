/* eslint-disable */
import React, { Component } from 'react';
import Tooltip from 'source_path/tooltip';
import Readme from './README.md';

export default class ToolTipView extends Component {
    constructor () {
        super();
        this.state = {
            text: '提示层信息，Hello!'
        };
    }

    render () {
        return (
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    提示信息层 - toolTip
                    <a href="mactt://message/user/03108" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div style={{ clear: 'both', float: 'left', width: 200 }}>
                    <Tooltip placement='leftTop' tooltip={this.state.text}>
                        <button className='btn btn-default mb'>左上</button>
                    </Tooltip><br />
                    <Tooltip placement='left' tooltip={this.state.text}>
                        <button className='btn btn-default mb'>左侧</button>
                    </Tooltip><br />
                    <Tooltip placement='leftBottom' tooltip={this.state.text}>
                        <button className='btn btn-default mb'>左下</button>
                    </Tooltip><br />
                    <Tooltip placement='rightTop' tooltip={this.state.text}>
                        <button className='btn btn-default mb'>右上</button>
                    </Tooltip><br />
                    <Tooltip placement='right' tooltip={this.state.text}>
                        <button className='btn btn-default mb'>右侧</button>
                    </Tooltip><br />
                    <Tooltip placement='rightBottom' tooltip={this.state.text}>
                        <button className='btn btn-default mb'>右下</button>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip placement='topLeft' tooltip={this.state.text}>
                        <button className='btn btn-default mr-xxl ml-xxl'>上左</button>
                    </Tooltip>
                    <Tooltip placement='top' tooltip={this.state.text}>
                        <button className='btn btn-default mr-xxl ml-xxl'>上面</button>
                    </Tooltip>
                    <Tooltip placement='topRight' tooltip={this.state.text}>
                        <button className='btn btn-default ml-xxl'>上右</button>
                    </Tooltip>
                    <br />
                    <Tooltip placement='bottomLeft' tooltip={this.state.text}>
                        <button className='btn btn-default mr-xxl mt-xxl ml-xxl'>下左</button>
                    </Tooltip>
                    <Tooltip placement='bottom' tooltip={this.state.text}>
                        <button className='btn btn-default mr-xxl ml-xxl mt-xxl'>下面</button>
                    </Tooltip>
                    <Tooltip placement='bottomRight' tooltip={this.state.text}>
                        <button className='btn btn-default ml-xxl mt-xxl'>下右</button>
                    </Tooltip>
                </div>
                <div style={{ clear: 'both' }} dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */
