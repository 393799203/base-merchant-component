/* eslint-disable */
import React, { Component } from 'react'
import FullAddress from 'source_path/full-address';
import Readme from './README.md';
import Notification from 'source_path/notification';

export default class FullAddressView extends Component {
    getData(){
        var data = FullAddress.getData();
        // Notification.info({
        //     message: '获取地址的信息为：'+JSON.stringify(data),
        //     duration: 4000 // 单位毫秒
        // });
        console.info(JSON.stringify(data));
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
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    全地址 - FullAddress
                    <a href="mactt://message/user/01825" style={{ border: 'none', boxShadow: 'none' }} className='ml-lg btn-info-border btn'>
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
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
                        <FullAddress name="test"/>
                    </div>
                    <div className="fl">
                        <h4>基础配置属性：禁用（provinceDisabled、cityDisabled、areaDisabled、streetDisabled）、样式（className、style）</h4>
                        <FullAddress 
                            provinceDisabled={true}
                            cityDisabled={true}
                            areaDisabled={true}
                            streetDisabled={true}
                            name="test1"
                        />
                    </div>
                    <div className="fl">
                        <h4>赋值属性：defaultProvince、defaultCity、defaultArea、defaultStreet</h4>
                        <FullAddress 
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            defaultStreet="test"
                            name="test2"
                        />
                    </div>

                    <div className="fl">
                        <h4>回调函数：onChange</h4>
                        <FullAddress
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            defaultStreet="test"
                            onChange = {(e) => this.addressChange(e)}
                            name="test3"
                        />
                    </div>

                    <div className="fl">
                        <h4>表单属性：form（多个address同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h4>
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
/* eslint-enable */
