/* eslint-disable */
import React, { Component } from 'react'
import VerifyPhone from 'source_path/verify-phone';
import Readme from './README.md';

export default class VerifyPhoneView extends Component {
    constructor () {
        super();
    }

    getResult(data){
        console.info(data);
    }

    clearData(){
        VerifyPhone.clearData();
    }

    render () {
        return (
            <div className='mb-lg ml m-r'>
                <h2 className='pb-5 b-b dashed'>
                    手机验证 - VerifyPhone
                    <a href='mactt://message/uname/youyou' style={{ border: 'none', boxShadow: 'none' }} className='m-l-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className="m" style={{border:"1px solid #eee" , padding:"10px"}}>
                    <VerifyPhone
                        disabled={false}
                        btnName={"test"}
                        getResult={(data)=>this.getResult(data)}/>

                    <button
                        className="btn btn-success-custom btn-sm"
                        style={{
                            position:"relative",
                            top:"-52px",
                            left:"175px"
                        }}
                        onClick={()=>this.clearData()}
                    >
                        清空
                    </button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>

                </div>
            </div>
        )
    }
}
/* eslint-enable */
