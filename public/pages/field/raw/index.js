import React, { Component } from 'react'
import {Field} from 'source_path/field';
import Datepicker from 'source_path/datepicker';
import Readme from './README.md';

export default class RawComponentView extends Component {
	constructor () {
		super();
		this.state={
			date:""
		}
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
			<h4>
				1.1. textarea实例
			</h4>
			<div className="m-b m-t">
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
			    <div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		</div>
	}
}