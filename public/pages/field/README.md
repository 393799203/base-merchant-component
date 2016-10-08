## 5. 使用说明－Code
#### 5.1 field表单使用

```
import React, { Component } from 'react'
import {Field} from 'source_path/field/index';

//详细配置信息见test.js
import testData from './test.js'

export default class FieldComponentView extends Component {
	constructor () {
		super();
	}

	//获取表单数据
	getData(){
		var data = Field.getData("FieldName");
		console.info(data);
	}

	//初始化表单数据
	resetData(){
		Field.resetData("FieldName");
	}

	//清除表单数据
	clearData(){
		Field.clearData("FieldName");
	}

	//查询表单改变
    onQueryChange(data){
        console.info(data);
    }

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h1>
				表单组件 - Field
			</h1>
			<h2>
				1. 示例
			</h2>
			<div className="m-b m-t">
				<button
					className="btn btn-success-custom w-sm m-r" 
					onClick={ (e) => { this.getData() }}>
					获取数据
				</button>
				<button
					className="btn btn-info-custom w-sm m-r" 
					onClick={ (e) => { this.resetData() }}>
					初始化数据
				</button>
				<button
					className="btn btn-warning-custom w-sm m-r" 
					onClick={ (e) => { this.clearData() }}>
					清除数据
				</button>

				<Field type="checkbox"
			        name="checkbox"
			        form="FieldName"
			        defaultValue={['1','2']}
			        options={testData.checkboxOptions}
			        label="checkbox:">
			    </Field>

			    <Field type="radio"
			        name="radio"
			        form="FieldName"
			        defaultValue={2}
			        options={testData.radioOptions}
			        label="radio:">
			    </Field>

			    <Field type="text"
			        name="text"
			        form="FieldName"
			        label="text:">
			    </Field>

			    <Field type="select"
			        name="select"
			        form="FieldName"
			        defaultValue='1'
			        options = {testData.selectOptions}
			        label="select:">
			    </Field>

			    <Field type="textarea"
			        name="textarea"
			        form="FieldName"
			        label="textarea:">
			    </Field>

			    <Field type="password"
			        name="password"
			        form="FieldName"
			        label="password:">
			    </Field>
			</div>
		</div>
	}
}

```

#### 5.2 data数据的配置

```
export default {
	checkboxOptions:[
	   	{
			label: '多选1',
			value: 0
	   	},
	   	{
			label: '多选2',
			value: 1
	   	},
	   	{
			label: '多选3',
			value: 2,
			defaultChecked:true
	   	}
	],

	radioOptions:[
		{
			label:'单选1',    //选项文案
			value: 0         //选项的值
		},
		{
			label: '单选2',    
			value: 1,
			defaultChecked:true
		},{
			label: '单选3',
			value: 2
		}
	],

	selectOptions:[
		{
			text:'单选1',    //选项文案
			value: 0         //选项的值
		},
		{
			text: '单选2',    
			value: 1
		},{
			text: '单选3',
			value: 2
		}
	]
}

```