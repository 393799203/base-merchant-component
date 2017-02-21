import React, { Component } from 'react'
import Address from 'source_path/address';
import Readme from './README.md';

export default class AddressSelectorView extends Component {
    constructor () {
        super();
        this.state={
            address1:{},
            address2:{}
        }
    }

    getData1 () {
        let data = Address.getData('test1');
        // let data = Address.getData();
        console.info(data);
    }

    getData2 () {
        let data2 = Address.getData('test2');
        console.info(data2);
    }

    addressChange (e) {
        this.setState({
            address1 : e
        });
    }

    addressChange2 (e) {
        this.setState({
            address2 : e
        }, () => {
            console.info(this.state);
        });
    }

    render () {
        return (
            <div className='m-l m-r m-b-xxl'>
                <h1>
                    地址 - Address
                    <a href='mactt://message/user/01825' style={{ border: 'none' }} className='m-l-lg btn-info-custom btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className='m-l m-r m-t m-b'>
                    <button
                        className='btn btn-success-custom w-sm m-b'
                        onClick={ e => {this.getData1(e) }}
                    >
                        获取数据1
                    </button>

                    <button
                        className='btn btn-success-custom w-sm m-b m-l' 
                        onClick={ (e) => { this.getData2(e) }}>
                        获取数据2
                    </button>

                    <Address 
                        style={{width:'200px'}}
                        className='mc-addressSelector'
                        onChange = {(e) => this.addressChange(e)}
                        name='test1'
                        defaultProvince='山西省' 
                        defaultCity = '大同市'
                        defaultArea='南郊区' />

                    <div style={{marginTop:'20px'}}></div>
                    <Address 
                        style={{width:'200px'}}
                        className='mc-addressSelector'
                        onChange = {(e) => this.addressChange(e)}
                        name='test2'
                        defaultProvince='重庆' 
                        defaultCity = '重庆市'
                        defaultArea='巴南区' />
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>
                    
                </div>
            </div>
        )
    }
}