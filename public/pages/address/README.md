### 2. 使用说明

```

import React, { Component } from 'react'
import Address from '@meili/base-merchant-component/lib/address';

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
        console.info(data);
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
            <div className='ml mr mb-xxl mc-field'>
                <div className='title'>
                    <button className="mb btn btn-success-custom mr" onClick={() => this.getData()}>获取数据</button>
                    <button className="mb btn btn-warning-custom mr" onClick={() => this.clearData()}>清空数据</button>
                    <button className="mb btn btn-info-custom mr" onClick={() => this.resetData()}>重置数据</button>
                </div>

                <div className='demo clearfix'>
                    <div className='fl field-demo'>
                        <h5>默认情况：</h5>
                        <Address name="test"/>
                    </div>
                    <div className="fl field-demo">
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
                    <div className="fl field-demo">
                        <h5>赋值属性：defaultProvince、defaultCity、defaultArea</h5>
                        <Address 
                            defaultProvince="山西省" 
                            defaultCity = "大同市"
                            defaultArea="南郊区"
                            name="test2"
                        />
                    </div>

                    <div className="fl field-demo">
                        <h5>回调函数：onChange</h5>
                        <Address
                            onChange = {(e) => this.addressChange(e)}
                            name="test3"
                        />
                    </div>

                    <div className="fl field-demo">
                        <h5>表单属性：form（多个address同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h5>
                        <Address 
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
    
### 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| style        | 样式           | 对象       | ｛｝         |
| className     | 类名       | string       | ""    |
| onChange     | 方法 | fun | null   |
| defaultProvince     | 默认省级 | string | " "   |
| defaultCity     | 默认城市 | string | " "   |
| defaultArea     | 默认区域 | string | " "   |
| provinceDisabled     | 禁用省 | bool | " "   |
| cityDisabled     | 禁用市 | bool | " "   |
| areaDisabled     | 禁用区 | bool | " "   |
| form | 地址所属的form组，如果不传则默认归集到同一组 | String   | - |
| name |  地址描述字段的名称 | String  | - |


### 4. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取地址信息    | form (默认为空)          | 对象       |
| clearData    |   重置地址信息    | form  (默认为空)            | 对象       |
| resetData    |   清除地址信息    | form  (默认为空)            | 对象       |