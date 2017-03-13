/* eslint-disable */
import React, { Component } from 'react';
import AreaCode from 'source_path/area-code';
import Readme from './README.md';

export default class AreaCodeView extends Component {
    constructor () {
        super();
        this.state = {
            code: '93'
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
            <div className="ml mr mb-xxl">
                <h2 className='pb-5 b-b dashed'>
                    手机区号 - AreaCode
                    <a href="mactt://message/user/00639" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className='clearfix'>
                    <div className='fl mr'>
                        <h4>默认属性</h4>
                        <AreaCode />
                    </div>
                    <div className="fl mr">
                        <h4>默认值：defaultValue，禁用（disabled）,样式（className）</h4>
                        <AreaCode
                            disabled={true}
                            className={"area-code-class"}
                            defaultValue={'1684'}
                        />
                    </div>
                    <div className="fl">
                        <h4>赋值：value（展示的数值以传递的value值为主）,与onChange共用</h4>
                        <AreaCode
                            value={code}
                            onChange = {(code) => this.handleChange(code)} 
                        />
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}
/* eslint-enable */