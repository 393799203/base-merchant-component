import React, { Component } from 'react'
import VerifyIdenty from 'source_path/verify-identy';
import Readme from './README.md';

export default class VerifyIdentyView extends Component {
    constructor () {
        super();
    }

    clearData(){
        VerifyIdenty.clearData();
    }

    getResult(e){
        console.info(e);
    }
    
    render () {
        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    身份认证 - VerifyIdenty
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className="m-l m-r m-t m-b" style={{border:"1px solid #eee" , padding:"10px"}}>
                    <VerifyIdenty 
                        disabled={false}
                        btnName={"weewe"}
                        className={"test"}
                        getResult={(e) => this.getResult(e)}
                        hideModule={{identy:false,phone:false}}/>

                    <button className="btn btn-success-custom" style={{position:"relative",top:"-30px",left:"115px" , padding:"4px 12px",borderRadius:"4px"}} onClick={()=>this.clearData()}>清空</button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}