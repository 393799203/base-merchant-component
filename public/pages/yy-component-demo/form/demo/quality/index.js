/* eslint-disable */
import React, { Component } from 'react'
import Form from 'source_path/form';

//详细配置信息见test.js
import testData from './config.js'

export default class QualityView extends Component {
	constructor () {
		super();
	}

	//获取表单数据
	getData(){
		var data = Form.getData("quality");
		console.info(JSON.stringify(data));
	}

	//初始化表单数据
	resetData(){
		Form.resetData("quality");
	}

	//清除表单数据
	clearData(){
		Form.clearData("quality");
	}

	validate(){
		console.info(Form.validate("quality"));
	}

	//查询表单改变
    onQueryChange(data){
        console.info(data);
    }

	render () {
		return (
			<div className="m-b m-t">
				<button
					className="btn btn-success-border w-sm m-r"
					onClick={ (e) => { this.getData() }}>
					获取数据
				</button>
				<button
					className="btn btn-info-border w-sm m-r"
					onClick={ (e) => { this.resetData() }}>
					初始化数据
				</button>
				<button
					className="btn btn-warning-border w-sm m-r"
					onClick={ (e) => { this.clearData() }}>
					清除数据
				</button>
				<button
					className="btn btn-danger-border w-sm m-r"
					onClick={ (e) => { this.validate() }}>
					校验数据
				</button>
				<Form
					data = {testData.options.concat()}
					prefixcls="field-test"
					defaultValue={testData.defaultValue}
					form='quality'/>
			</div>
	  	)
	}
}
/* eslint-enable */
