import React, { Component } from 'react'
import Address from 'source_path/address/Address';
import Readme from './README.md';

export default class AddressSelectorView extends Component {
    constructor () {
        super();
    }

    getData(){
        var data = Address.getData();
        console.info(data);
    }

    addressChange(e){
        console.info(e);
    }

    render () {
        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    地址 - Address
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className="m-l m-r m-t m-b">
                    <button
                        className="btn btn-success-custom w-sm m-b" 
                        onClick={ (e) => { this.getData(e) }}>
                        获取数据
                    </button>

                    <Address 
                        style={{width:"200px"}}
                        className="mc-addressSelector"
                        onChange = {(e) => this.addressChange(e)}
                        defaultProvince="山西省" 
                        defaultCity = "大同市"
                        defaultArea="南郊区" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}