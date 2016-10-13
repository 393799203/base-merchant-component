import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Field} from 'source_path/field/index';
import Datepicker from 'source_path/datepicker';
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
import RawComponentView from './raw/index.js';


export default class FieldComponentView extends Component {
	constructor () {
		super();
		this.state = {
			date:""
		}
		FieldComponentView.instance = this;
	}

	//获取表单数据
	getData(){
		if(!Field.validate("shopInfo")){
            return false;
        }
        
		var data = Field.getData("FieldName");
	}

	//初始化表单数据
	resetData(){
		Field.resetData("FieldName");
	}

	//清除表单数据
	clearData(){
		Field.clearData("FieldName");
	}

	getFieldData(){
		return this.state.date;
	}

	validateField(){
		if( this.state.date ){
			return true;
		}
	}

	handleDateChange( date ){
		this.setState({ date });
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
			<RawComponentView />

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
				        id="checkbox"
				        form="FieldName"
				        required
				        defaultValue={['1','2']}
				        options={testData.checkboxOptions}
				        label="checkbox：">
				    </Field>

				    <Field type="radio"
				        name="radio"
				        id="radio"
				        form="FieldName"
				        required
				        options={testData.radioOptions}
				        label="radio：">
				    </Field>

				    <Field type="text"
				        name="text"
				        id="text"
				        form="FieldName"
				        required
				        label="text：">
				    </Field>

			    <Field type="select"
			        name="select"
			        form="FieldName"
			        defaultValue='1'
			        required
			        options = {testData.selectOptions}
			        label="select：">
			    </Field>

			    <Field type="textarea"
			        name="textarea"
			        form="FieldName"
			        required
			        label="textarea：">
			    </Field>

			    <Field type="password"
			        name="password"
			        form="FieldName"
			        required
			        label="password：">
			    </Field>

			    <Field type="raw"
					label="自定义表单："
					name="date"
					onData={ this.getFieldData }
					onValidate={ this.validateField }
					errorMsg="请选择时间" 
					required>
					<Datepicker 
						onChange={ (e) => this.handleDateChange(e) }
						format="yyyy-MM-dd HH:mm:ss"
						value={ this.state.date }
						style={{width: "365px"}}
						showTime/>
				</Field>
			</div>
			<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
		</div>
	}
}