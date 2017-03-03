import React, { Component } from 'react'
import Form from 'source_path/form';
import Readme from './README.md';

import SellerInfo from './demo/sellerInfo';
import CompanyLegal from './demo/companyLegal';
import CompanyCert from './demo/companyCert';

//详细配置信息见test.js
import testData from './config.js'
import './index.less'

export default class FormComponentView extends Component {
	constructor () {
		super();
	}
	
	//获取表单数据
	getData(){
		var data = Form.getData("textForm");
		console.info(data);
	}

	//初始化表单数据
	resetData(){
		Form.resetData("textForm");
	}

	//清除表单数据
	clearData(){
		Form.clearData("textForm");
	}

	validate(){
		console.info(Form.validate("textForm"));
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
					<SellerInfo />

					<CompanyLegal />

					<CompanyCert />
					{/*<button
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
					<button
						className="btn btn-danger-custom w-sm m-r" 
						onClick={ (e) => { this.validate() }}>
						校验数据
					</button>
					<Form 
						data = {testData.options.concat()} 
						prefixcls="field-test"
						form='textForm'/>*/}
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
	  	)
	}
}