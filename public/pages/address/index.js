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
        Notification.info({
            message: '获取地址的信息为：'+JSON.stringify(data),
            duration: 4000 // 单位毫秒
        });
    }

    clearData () {
        Address.clearData();
    }

    resetData () {
        Address.resetData();
    }

    addressChange (e) {
        this.setState({
            address1 : e
        });
    }

    render () {
        return (
            <div className='m-l m-r m-b-xxl mc-field'>
                <h1>
                    地址 - Address
                    <a href='mactt://message/user/01825' style={{ border: 'none' }} className='m-l-lg btn-info-custom btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className='title'>
                    <button className="m-b btn btn-success-custom m-r" onClick={() => this.getData()}>获取数据</button>
                    <button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData()}>清空数据</button>
                    <button className="m-b btn btn-info-custom m-r" onClick={() => this.resetData()}>重置数据</button>
                </div>

                <div className='demo clearfix'>
                    <div className='f-l field-demo'>
                        <h5>默认情况：</h5>
                        <Address name="test"/>
                    </div>
                    <div className="f-l field-demo">
                        <h5>基础配置属性：禁用（provinceDisabled、cityDisabled、areaDisabled）、样式（className、style）</h5>
                        <Address 
                            style={{width:'200px'}}
                            className='mc-addressSelector'
                            provinceDisabled={true}
                            cityDisabled={true}
                            areaDisabled={true}
                            name="test1"
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h5>赋值属性：defaultProvince、defaultCity、defaultArea</h5>
                        <Address 
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            name="test2"
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h5>回调函数：onChange</h5>
                        <Address
                            onChange = {(e) => this.addressChange(e)}
                            name="test3"
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h5>表单属性：form（多个address同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h5>
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