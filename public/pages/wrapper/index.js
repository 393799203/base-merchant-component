/* eslint-disable */
import React, { Component } from 'react';
import Wrapper from 'source_path/wrapper';
import Readme from './README.md';

export default class WrapperView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }
    showLoading () {
        this.setState({isLoading: true});
    }
    stopLoading () {
        this.setState({isLoading: false});
    }
    render () {
        const { isLoading } = this.state;
        return (
            <div className='mb-lg ml m-r'>
                <h2 className='pb-5 b-b dashed'>
                    加载容器 - Wrapper
                    <a href="mactt://message/user/00639" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div>
                    <button
                      className='mb btn btn-primary-border w-sm m-r'
                      onClick={() => { this.showLoading(); }}
                    >
                        开始加载
                    </button>
                    <button
                      className='mb btn btn-success-border w-sm m-r'
                      onClick={() => { this.stopLoading(); }}
                    >
                        停止加载
                    </button>
                </div>
                <Wrapper isLoading={isLoading}>
                    <div style={{
                        height: '200px',
                        background: '#FEFAF4',
                        fontSize: '30px',
                        lineHeight: '200px',
                        textAlign: 'center'}}>
                        这是内容加载区
                    </div>
                </Wrapper>
                <div style={{ clear: 'both' }} dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */
