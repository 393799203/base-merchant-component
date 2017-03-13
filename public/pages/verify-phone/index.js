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
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    手机验证 - VerifyPhone
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className="m" style={{border:"1px solid #eee" , padding:"10px"}}>
                    <VerifyPhone 
                        disabled={false}
                        btnName={"test"}
                        getResult={(data)=>this.getResult(data)}/>

                    <button className="btn btn-success-custom" style={{position:"relative",top:"-50px",left:"175px" , padding:"4px 12px",borderRadius:"4px"}} onClick={()=>this.clearData()}>清空</button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}
/* eslint-enable */
