import React, { Component } from 'react'
import FormComponent from 'source_path/form/index';
import Readme from './README.md';

//详细配置信息见test.js
import testData from './test.js'
import './index.less'

export default class FormComponentView extends Component {
	constructor () {
		super();
	}
	
	//获取表单数据
	getData(){
		var data = FormComponent.getData("textForm");
		console.info(data);
	}

	//初始化表单数据
	resetData(){
		FormComponent.resetData("textForm");
	}

	//清除表单数据
	clearData(){
		FormComponent.clearData("textForm");
	}

	//查询表单改变
    onQueryChange(data){
        console.info(data);
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
					<FormComponent 
						data = {testData} 
						onQuery={this.onQueryChange.bind(this)} 
						prefixcls="field-test"
						form='textForm'/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
	  	)
	}
}