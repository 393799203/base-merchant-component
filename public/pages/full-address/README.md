## 2. 使用说明

```
import React, { Component } from 'react'
import FullAddress from '@meili/base-merchant-component/lib/full-address';

export default class FullAddressView extends Component {
    constructor () {
        super();
    }

    getData(){
        var data = FullAddress.getData();
    }

    resetData () {
        FullAddress.resetData();
    }

    clearData () {
        FullAddress.clearData();
    }

    addressChange(e){
    }

    render () {
        return (
            <div className="m-l m-r m-b-xxl mc-field">
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
            </div>
        )
    }
}

```
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| style        | 样式           | 对象       | ｛｝         |
| className     | 类名       | string       | ""    |
| onChange     | 方法 | fun | null   |
| defaultProvince     | 默认省级 | string | " "   |
| defaultCity     | 默认城市 | string | " "   |
| defaultArea     | 默认区域 | string | " "   |
| defaultStreet     | 默认详细地址 | string | " "   |
| name | 表单描述字段的名称 | String  | - |
| form | 地址所属的form组，如果不传则默认归集到同一组 | String   | - |
| provinceDisabled     | 禁用省 | bool | " "   |
| cityDisabled     | 禁用市 | bool | " "   |
| areaDisabled     | 禁用区 | bool | " "   |
| streetDisabled     | 禁用街 | bool | " "   |
| placeholder     | 详细地址的水印 | string | "请填写详细地址"   |


## 4. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取地址信息    | form (默认为空)          | 对象       |
| clearData    |   重置地址信息    | form  (默认为空)            | 对象       |
| resetData    |   清除地址信息    | form  (默认为空)            | 对象       |