/* eslint-disable */

import React, { Component } from 'react';
import Field from 'source_path/field';
import Notification from 'source_path/notification';
import Readme from './README.md';

export default class TextareaView extends Component {
	constructor () {
		super();
		this.state = {
			
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

    onValidate (value) {
    	value = Number(value);
    	return !isNaN(value) && Math.floor(value) === value;
    }

    textChange(value){
    	Notification.info({
		    message: '回调函数表单的值为：'+value,
		    duration: 2000 // 单位毫秒
		});
    }

    onClick(){
    	Notification.info({
		    message: '我是自定义的onClick事件',
		    duration: 2000 // 单位毫秒
		});
    }
	
	render () {
		return (
			<div className="field-demo clearfix">
				<h3>
					1. 示例
				</h3>
				<div className="title">
					<button className="mb btn btn-success-border mr" onClick={() => this.getData("textarea")}>获取文本框信息</button>
					<button className="mb btn btn-warning-border mr" onClick={() => this.clearData("textarea")}>清空文文本框信息</button>
					<button className="mb btn btn-info-border mr" onClick={() => this.resetData("textarea")}>重置文本框信息</button>
					<button className="mb btn btn-danger-border mr" onClick={() => this.validate("textarea")}>提交文本框信息并校验</button>
				</div>
				<div className='demo clearfix'>
					<div className='fl field-demo'>
						<h4>必填属性：类型（type）、name、表单复杂的情况下建议设置form给表单归类</h4>
						<Field 
							type="textarea"
					        name="textarea1"
					        label="必填属性："
					        form="textarea">
					    </Field>
					</div>
					<div className="fl field-demo">
						<h4>其他配置属性：禁用（disabled）、标题（label）、子标题信息（subInfo）、水印（placeholder）、样式（className）</h4>
						<Field 
							type="textarea"
					        name="textarea2"
					        form="textarea"
					        label="配置属性1："
					        disabled
					        className='field-text'
					        placeholder="我是一个水印"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>
					<div className="fl field-demo">
						<h4>其他配置属性：必填（required）、校验错误信息（errorMsg）、校验是否展示（error,默认会自动失去焦点校验）</h4>
						<Field 
							type="textarea"
					        name="textarea3"
					        form="textarea"
					        label="配置属性2："
					        required
					        error={true}
					        errorMsg="我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="fl field-demo">
						<h4>其他配置属性：校验是否展示（error,默认会自动失去焦点校验）</h4>
						<Field 
							type="textarea"
					        name="textarea4"
					        form="textarea"
					        label="配置属性3："
					        required
					        errorMsg="我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="fl field-demo">
						<h4>赋值属性：value、defaultValue</h4>
						<Field 
							type="textarea"
					        name="textarea5"
					        form="textarea"
					        label="配置属性4："
					        required
					        defaultValue="我是默认值"
					        errorMsg="我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="fl field-demo">
						<h4>方法：校验（onValidate）、修改数据回调（onChange）</h4>
						<Field 
							type="textarea"
					        name="textarea6"
					        form="textarea"
					        label="配置属性4："
					        required
					        onValidate={(value) => this.onValidate(value)}
					        onChange={(value) => this.textChange(value)}
					        errorMsg="我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="fl field-demo">
						<h4>{"自定义属性：attrs={{style: {width:'100px'}}}"}</h4>
						<Field 
							type="textarea"
					        name="textarea7"
					        form="textarea"
					        label="自定义属性："
					        required
					        attrs={{style: {width:"100px"}}}
					        errorMsg="请输入整数"
					        subInfo="用attrs修改了文本框的宽度100px">
					    </Field>
					</div>

					<div className="fl field-demo">
						<h4>{"自定义方法：events={{onClick:()=>{}}}"}</h4>
						<Field 
							type="textarea"
					        name="textarea8"
					        form="textarea"
					        label="自定义方法："
					        required
					        events={{onClick:()=>this.onClick()}}
					        errorMsg="请输入整数"
					        subInfo="用events自定义onClick事件">
					    </Field>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}
/* eslint-enable */
