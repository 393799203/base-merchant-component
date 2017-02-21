import React, { Component } from 'react';
import AreaCode from 'source_path/area-code';
import Readme from './README.md';

export default class AreaCodeView extends Component {
    constructor () {
        super();
        this.state = {
            code: '86'
        }
    }
    handleChange(code){
        this.setState({ code: code });
    }

    clearData(){
        AreaCode.clearData();
    }

    render () {
        let {code} = this.state;

        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    手机区号 - AreaCode
                    <a href="mactt://message/user/00639" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className="title">
                    <button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData()}>清空文文本框信息</button>
                </div>
                <div className="m-l m-r m-t m-b">
                    <AreaCode
                        defaultValue={code}
                        onChange = {(code) => this.handleChange(code)} 
                    />
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}