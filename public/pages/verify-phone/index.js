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
        VerifyPhone.clearData("phone");
    }
    
    render () {
        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    手机验证 - VerifyPhone
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className="m-l m-r m-t m-b" style={{border:"1px solid #eee" , padding:"10px"}}>
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