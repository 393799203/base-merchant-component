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
            <div className="m-l m-r m-b-xxl  mc-field">
                <h1>
                    手机区号 - AreaCode
                    <a href="mactt://message/user/00639" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className='demo clearfix'>
                    <div className='f-l field-demo'>
                        <h5>默认属性</h5>
                        <AreaCode />
                    </div>
                    <div className="f-l field-demo">
                        <h5>默认值：defaultValue，禁用（disabled）,样式（className）</h5>
                        <AreaCode
                            disabled={true}
                            className={"area-code-class"}
                            defaultValue={'1684'}
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h5>赋值：value（展示的数值以传递的value值为主）,与onChange共用</h5>
                        <AreaCode
                            value={code}
                            onChange = {(code) => this.handleChange(code)} 
                        />
                    </div>
                </div>

                <div className="m-l m-r m-t m-b">
                    
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}