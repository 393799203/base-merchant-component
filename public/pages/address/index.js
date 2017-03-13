/* eslint-disable */
import React, { Component } from 'react'
import Address from 'source_path/address';
import Readme from './README.md';
import Notification from 'source_path/notification';

export default class AddressSelectorView extends Component {
    constructor () {
        super();
        this.state={
            address1:{},
            address2:{}
        }
    }

    getData () {
        let data = Address.getData();
        // Notification.info({
        //     message: '获取地址的信息为：'+JSON.stringify(data),
        //     duration: 4000 // 单位毫秒
        // });
        console.info(JSON.stringify(data));
        console.info(JSON.stringify(this.state.address1));
    }

    clearData () {
        Address.clearData();
    }

    resetData () {
        Address.resetData();
    }

    addressChange (e) {
        console.info(e);
    }

    render () {
        return (
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    地址 - Address
                    <a href='mactt://message/user/01825' style={{ border: 'none', boxShadow: 'none' }} className='ml-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div>
                    <button className="mb btn btn-success-border mr" onClick={() => this.getData()}>获取数据</button>
                    <button className="mb btn btn-warning-border mr" onClick={() => this.clearData()}>清空数据</button>
                    <button className="mb btn btn-info-border mr" onClick={() => this.resetData()}>重置数据</button>
                </div>

                <div className='clearfix'>
                    <div className='fl'>
                        <h4>默认情况：</h4>
                        <Address name="test"/>
                    </div>
                    <div className="fl">
                        <h4>基础配置属性：禁用（provinceDisabled、cityDisabled、areaDisabled）、样式（className、style）</h4>
                        <Address 
                            style={{width:'200px'}}
                            className='mc-addressSelector'
                            provinceDisabled={true}
                            cityDisabled={true}
                            areaDisabled={true}
                            name="test1"
                        />
                    </div>
                    <div className="fl">
                        <h4>赋值属性：defaultProvince、defaultCity、defaultArea</h4>
                        <Address 
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            name="test2"
                        />
                    </div>

                    <div className="fl">
                        <h4>回调函数：onChange</h4>
                        <Address
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            onChange = {(e) => this.addressChange(e)}
                            name="test3"
                        />
                    </div>

                    <div className="fl">
                        <h4>表单属性：form（多个address同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h4>
                        <Address 
                            name="test4"
                            form="formtest"
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
