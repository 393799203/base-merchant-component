/* eslint-disable */
import React, { Component } from 'react'
import Form from 'source_path/form';
import Readme from './README.md';

import Quality from './demo/quality';
import SellerInfo from './demo/sellerInfo';
import CompanyLegal from './demo/companyLegal';
import CompanyCert from './demo/companyCert';
import Login from './demo/login';

//详细配置信息见test.js
import config from './config.js';
import config2 from './config2.js'
import './index.less'

export default class FormComponentView extends Component {
	constructor () {
		super();
		this.state = {
			data: []
		}
	}

	componentWillMount () {
        this.setState({
        	data: config.options.concat()
        })
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

    changeData () {
    	this.setState({
    		data: config.options2.concat()
    	})
    }

    sexChange (e) {
    	const data = this.state.data;
    	data.
    	this.setState({

    	})
    }

	render () {
		return (
			<div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
					页面配置 - Form
					<a href="mactt://message/user/youyou" style={{border: 'none', boxShadow: 'none'}} className='m-l-lg btn-info-border btn'>
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<div className="m-b m-t">
					<Quality />
					
					<SellerInfo />

					<CompanyLegal />

					<CompanyCert />

					<button
						className="btn btn-success-custom w-sm m-r"
						onClick={ (e) => { this.changeData() }}>
						改变表单配置
					</button>
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
					<button
						className="btn btn-danger-custom w-sm m-r"
						onClick={ (e) => { this.validate() }}>
						校验数据
					</button>
					<Form
						data = {this.state.data}
						prefixcls="field-test"
						form='textForm'
					/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>

				</div>
			</div>
	  	)
	}
}
/* eslint-enable */