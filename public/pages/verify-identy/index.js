/* eslint-disable */
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
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    身份认证 - VerifyIdenty
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className="m" style={{border:"1px solid #eee" , padding:"10px"}}>
                    <VerifyIdenty 
                        disabled={false}
                        btnName={"weewe"}
                        className={"test"}
                        getResult={(e) => this.getResult(e)}
                        hideModule={{identy:false,phone:false}}/>

                    <button className="btn btn-success-border" style={{position:"relative",top:"-30px",left:"115px" , padding:"4px 12px",borderRadius:"4px"}} onClick={()=>this.clearData()}>清空</button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}
/* eslint-enable */
