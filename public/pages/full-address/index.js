import React, { Component } from 'react'
import FullAddress from 'source_path/full-address';
import Readme from './README.md';

export default class FullAddressView extends Component {
    constructor () {
        super();
    }

    getData1(){
        var data = FullAddress.getData("test1");
        console.info(data);
    }

    getData2(){
        var data = FullAddress.getData("test2");
        console.info(data);
    }

    addressChange(e){
        console.info(e);
    }

    render () {
        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    全地址 - FullAddress
                    <a href="mactt://message/user/01825" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className="m-l m-r m-t m-b">
                    <button
                        className="btn btn-success-custom w-sm m-b" 
                        onClick={ (e) => { this.getData1(e) }}>
                        获取数据1
                    </button>

                    <button
                        className="btn btn-success-custom w-sm m-b m-l" 
                        onClick={ (e) => { this.getData2(e) }}>
                        获取数据2
                    </button>

                    <FullAddress 
                        style={{width:"200px"}}
                        className="mc-addressSelector"
                        onChange = {(e) => this.addressChange(e)}
                        defaultProvince="山西省" 
                        defaultCity = "大同市"
                        name="test1"
                        defaultArea="南郊区"
                        defaultStreet="test" />

                    <div style={{marginTop:"20px"}}></div>

                    <FullAddress 
                        style={{width:"200px"}}
                        className="mc-addressSelector"
                        onChange = {(e) => this.addressChange(e)}
                        defaultProvince="重庆" 
                        defaultCity = "重庆市"
                        defaultArea="巴南区"
                        name="test2"
                        defaultStreet="test2" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}