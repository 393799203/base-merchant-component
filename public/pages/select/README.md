## 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| defaultValue   | 默认值    | string       |  默认选中项的value,如果有子选项，请用逗号隔开   |   请选择  |
| options       | 选项数据    | array       | -    |  []   |
| onChange       | 取实际选中的选项    | function       | 默认参数是选中的选项，如{text:'选项1',value:0}  |     |
| className       | css选择器    | string       | -    |     |
| disabled     | 禁止下拉菜单点击   | boolean | - |  false | 
| id     | id   | string | - |   | 
| attrs     | 其他属性   | object | - |   | 



#### 2.2 使用示例
	
	import React, { Component } from 'react';
	import {Select} from 'source_path/select';
	import Readme from './README.md';

	export default class SelectView extends Component {
	    constructor () {
	        super();
	        this.state = {
	            selectData1: [
	                {
	                    text: '选项1',
	                    value: 0,
	                },{
	                    text: '选项2',
	                    value: 1,
	                },{
	                    text: '选项3',
	                    value: 2,
	                }
	            ],
	            selectData2: [
	                [{
	                    text: '选项1',
	                    value: 0,
	                },{
	                    text: '选项2',
	                    value: 1,
	                },{
	                    text: '选项3',
	                    value: 2,
	                }],[{
	                    text: '选项4',
	                    value: 3,
	                },{
	                    text: '选项5',
	                    value: 4,
	                }]
	            ],
	            selectData3: [
	                {
	                    text: '选项1',
	                    value: 0,
	                },{
	                    text: '选项2',
	                    value: 1,
	                    options: [{
	                        text: '子选项1',
	                        value: 11
	                    },{
	                        text: '子选项2',
	                        value: 12
	                    }]
	                },{
	                    text: '选项3',
	                    value: 2,
	                    options: [{
	                        text: '子选项3',
	                        value: 21
	                    },{
	                        text: '子选项4',
	                        value: 22
	                    }]
	                }
	            ]
	        };
	    }
	    getResult (value) {
	        console.log(value)
	    }
	    render () {
	        let {selectData1, selectData2, selectData3} = this.state;
	        return (
	            <div className='m-b-lg m-l m-r'>
	                <h1>
	                    下拉菜单 - Select
	                </h1>
	                <table>
	                    <tbody>
	                        <tr>
	                            <td>
	                                <h2>
	                                    1. 普通下拉菜单
	                                </h2>
	                                <Select selectData={selectData1} onChange={this.getResult.bind(this)}/>
	                            </td>
	                            <td>
	                                <h2>
	                                    2. 禁止点击、有默认值的下拉菜单
	                                </h2>
	                                <Select selectData={selectData1} defaultValue="默认值" disabled={true} onChange={this.getResult.bind(this)}/>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <h2>
	                                    3. 分组的下拉菜单
	                                </h2>
	                                <Select selectData={selectData2} onChange={this.getResult.bind(this)}/>
	                            </td>
	                            <td>
	                                <h2>
	                                    4. 有二级选项的下拉菜单
	                                </h2>
	                                <div style={{width: '150px'}}>
	                                    <Select selectData={selectData3} onChange={this.getResult.bind(this)}/>
	                                </div>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
	                <div dangerouslySetInnerHTML={{ __html: Readme }} />
	            </div>
	        );
	    }
	}