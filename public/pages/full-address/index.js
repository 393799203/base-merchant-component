import React, { Component } from 'react'
import FullAddress from 'source_path/full-address';
import Readme from './README.md';
import Notification from 'source_path/notification';

export default class FullAddressView extends Component {
    constructor () {
        super();
    }

    getData(){
        var data = FullAddress.getData();
        Notification.info({
            message: '获取地址的信息为：'+JSON.stringify(data),
            duration: 4000 // 单位毫秒
        });
    }

    resetData () {
        FullAddress.resetData();
    }

    clearData () {
        FullAddress.clearData();
    }

    addressChange(e){
        Notification.info({
            message: '获取地址的信息为：'+JSON.stringify(e),
            duration: 4000 // 单位毫秒
        });
    }

    render () {
        return (
            <div className="m-l m-r m-b-xxl mc-field">
                <h1>
                    全地址 - FullAddress
                    <a href="mactt://message/user/01825" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
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
                        <FullAddress name="test"/>
                    </div>
                    <div className="f-l field-demo">
                        <h5>基础配置属性：禁用（provinceDisabled、cityDisabled、areaDisabled、streetDisabled）、样式（className、style）</h5>
                        <FullAddress 
                            provinceDisabled={true}
                            cityDisabled={true}
                            areaDisabled={true}
                            streetDisabled={true}
                            name="test1"
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h5>赋值属性：defaultProvince、defaultCity、defaultArea、defaultStreet</h5>
                        <FullAddress 
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            defaultStreet="test"
                            name="test2"
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h5>回调函数：onChange</h5>
                        <FullAddress
                            onChange = {(e) => this.addressChange(e)}
                            name="test3"
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h5>表单属性：form（多个address同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h5>
                        <FullAddress 
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