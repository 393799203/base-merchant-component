/* eslint-disable */
import React, { Component } from 'react';
import Field from 'source_path/field';
import Notification from 'source_path/notification';
import Datepicker from 'source_path/datepicker';
import Readme from './README.md';

export default class RawView extends Component {
	constructor () {
		super();
		this.state = {
			date:"",
			date2:"",
			date3:"2017-02-15 09:56:31",
		};
	}

	getData(form){
		var data = Field.getData(form);
		Notification.info({
		    message: '获取文本框的信息为：'+JSON.stringify(data),
		    duration: 2000 // 单位毫秒
		});
	}

	clearData(form){
		Field.clearData(form);
	}

	resetData(form){
		Field.resetData(form);
	}

	validate(form){
		if(!Field.validate(form)){
			return false;
		}
	}

	getFieldData(key){
        return this.state[key];
    }

    validateField(){
        if( this.state.date3 ){
            return true;
        }
        else {
        	return false;
        }
    }

    resetField(){
    	this.setState({
    		date3:''
    	})
    }

	clearField(){
    	this.setState({
    		date3:''
    	})
    }    

    handleDateChange( date , type ){
    	console.info(date);
    	var error = false;
    	if(!date && type=="date2"){
    		error = true
    	}
        this.setState({ 
        	[type]: date ,
        	error: error
        });
    }

	render () {
		return (
			<div className="field-demo clearfix">
				<h3>
					1. 示例
				</h3>
				<div className="title">
					<button className="mb btn btn-success-border mr" onClick={() => this.getData("raw")}>获取文本框信息</button>
					<button className="mb btn btn-warning-border mr" onClick={() => this.clearData("raw")}>清空文文本框信息</button>
					<button className="mb btn btn-info-border mr" onClick={() => this.resetData("raw")}>重置文本框信息</button>
					<button className="mb btn btn-danger-border mr" onClick={() => this.validate("raw")}>提交文本框信息并校验</button>
				</div>

				<div className='demo clearfix'>
					<div className='fl field-demo'>
						<h5>必填属性：类型（type）、name、自定义表单体、表单复杂的情况下建议设置form给表单归类</h5>
						<Field 
						 	type="raw"
	                        label="必填属性："
	                        name="date"
	                        form="raw"
	                        onData={ () => this.getFieldData("date") }
	                    >
	                        <Datepicker 
	                            onChange={ (e) => this.handleDateChange(e,'date') }
	                            format="yyyy-MM-dd HH:mm:ss"
	                            value={ this.state.date }
	                            showTime/>
	                    </Field>
					</div>
					<div className="fl field-demo">
						<h5>其他配置属性：标题（label）、子标题信息（subInfo）、必填（required）、校验错误信息（errorMsg）、校验是否展示（error）</h5>
						<Field 
						 	type="raw"
	                        label="配置属性1："
	                        name="date2"
	                        form="raw"
	                        subInfo="我是表单信息"
	                        required
	                        onData={ () => this.getFieldData("date2") }
	                        error={this.state.error}
	                        errorMsg="我是错误提示信息"
	                    >
	                        <Datepicker
	                        	onChange={ (e) => this.handleDateChange(e,'date2') }
	                            format="yyyy-MM-dd HH:mm:ss"
	                            value={ this.state.date2 }
	                            showTime/>
	                    </Field>
					</div>
					<div className="fl field-demo">
						<h5>方法：将值填入表单中（onData）、校验（onValidate）、重置（onReset）、清空（onClear）</h5>
						<Field 
						 	type="raw"
	                        label="方法onData："
	                        name="date3"
	                        form="raw"
	                        onData={ () => this.getFieldData("date3") }
	                        onValidate={ () => this.validateField() }
	                        onReset={ () => this.resetField() }
	                        onClear={ () => this.clearField() }
	                        required
	                    >
	                        <Datepicker 
	                            onChange={ (e) => this.handleDateChange(e,'date3') }
	                            value={ this.state.date3 }
	                            showTime/>
	                    </Field>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
				</div>
			</div>
		)
	}
}
/* eslint-enable */
