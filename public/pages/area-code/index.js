import React, { Component } from 'react'
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
    render () {
        let {code} = this.state;

        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    手机区号 - AreaCode
                </h1>
                <h2>
                    1. 示例
                </h2>
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