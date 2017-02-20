## 2. 使用说明

```

import React, { Component } from 'react'
import Address from '@meili/base-merchant-component/lib/address';

export default class AddressSelectorView extends Component {
    constructor () {
        super();
    }

    getData(){
        var data = Address.getData();
    }

    addressChange(e){
    }

    render () {
        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    表单 - Form
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

## 4. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取地址信息    | 无参数           | 对象       |