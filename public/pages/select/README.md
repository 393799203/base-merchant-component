### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| value   | 值    | string       |  选中的值   |   －  |
| defaultValue   | 默认值    | string       |  默认选中项的value   |   请选择  |
| options       | 选项数据    | array       | -    |  []   |
| className       | css选择器    | string       | -    |     |
| onChange       | 取实际选中的选项    | function       | 默认参数是选中的选项，如{text:'选项1',value:0}  |     |
| disabled     | 禁止下拉菜单点击   | boolean | - |  false | 
| id     | id   | string | - |   | 
| form | 下拉框所属的form组，如果不传则默认归集到同一组 | String   | - |
| name |  下拉框描述字段的名称 | String  | - |



#### 2.2 使用示例
	
```

import React, { Component } from 'react';
import {Select} from '@meili/base-merchant-component/lib/select';
import Notification from 'source_path/notification';
import config from './config.js'
import './index.less';

export default class SelectView extends Component {
    constructor () {
        super();
        this.state = {
            selectData1: config.selectData1,
            selectData2: config.selectData2,
            selectData3: config.selectData3,
            selectValue: "0",
            selectDefaultValue: "1"
        };
    }

    getResult (item) {
        this.setState({
            selectValue: item.value
        })
    }

    getData(){
        var data = Select.getData("selectform");
        Notification.info({
            message: '获取文本框的信息为：'+JSON.stringify(data),
            duration: 2000 // 单位毫秒
        });
    }

    clearData(){
        Select.clearData('selectform');
    }

    resetData(){
        Select.resetData('selectform');
    }

    render () {
        let {selectData1, selectData2, selectData3, selectValue, selectDefaultValue} = this.state;
        return (
            <div className='m-b-lg m-l m-r mc-field mc-select-demo'>
                <div className="title">
                    <button className="m-b btn btn-success-custom m-r" onClick={() => this.getData()}>获取文本框信息</button>
                    <button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData()}>清空文文本框信息</button>
                    <button className="m-b btn btn-info-custom m-r" onClick={() => this.resetData()}>重置文本框信息</button>
                </div>
                <div className='demo clearfix'>
                    <div className='f-l field-demo'>
                        <h5>必填属性：name、options</h5>
                        <Select 
                            className="select-demo"
                            name="select1"
                            options={selectData1}
                            placeholder={"请选择"}
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h5>其他基础配置属性：禁用（disabled）、样式（className）、水印（placeholder）</h5>
                        <Select
                            options={selectData2}
                            disabled={true}
                            name="select2"
                            placeholder={"请选择"}
                            className="select-demo"
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h5>赋值属性：value,一般要与onChange事件搭配使用，组件以传递的value值为主，进行赋值，如果传入的value不再options中，则展示数据为空</h5>
                        <Select 
                            className="select-demo"
                            name="select3"
                            value = {selectValue}
                            options={selectData3}
                            onChange={this.getResult.bind(this)}
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h5>赋值属性：defaultValue</h5>
                        <Select 
                            className="select-demo"
                            name="select4"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h5>表单属性：form（多个select同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h5>
                        <Select 
                            className="select-demo m-t-15"
                            name="select5"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                            form="selectform"
                        />

                        <Select 
                            className="select-demo m-t-15"
                            name="select6"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                            form="selectform"
                        />

                        <Select 
                            className="select-demo m-t-15"
                            name="select7"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                            form="selectform"
                        />
                    </div>
                </div>
            </div>
        );
    }
}



```