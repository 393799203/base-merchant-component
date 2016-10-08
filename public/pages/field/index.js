import React, { Component } from 'react'
import {Field} from 'source_path/field/index';
import Readme from './README.md';
import PROPS from './PROPS.md';

//详细配置信息见test.js
import testData from './test.js'

import TextareaComponentView from './textarea/index.js';
import TextComponentView from './text/index.js';
import PasswordComponentView from './password/index.js';
import SelectComponentView from './select/index.js';
import RadioComponentView from './radio/index.js';
import CheckboxComponentView from './checkbox/index.js';

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

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h1>
				表单组件 - Field
			</h1>

			<div dangerouslySetInnerHTML={{ __html: PROPS }}></div>
			
			<h2>
				3. 示例－Demo
			</h2>

			<TextareaComponentView />
			<TextComponentView />
			<SelectComponentView />
			<RadioComponentView />
			<PasswordComponentView />
			<CheckboxComponentView />

			<h2>
				4. 表单示例－FieldDemo
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
			<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
		</div>
	}
}