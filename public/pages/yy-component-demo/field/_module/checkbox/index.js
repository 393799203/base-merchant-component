/* eslint-disable */

import React, { Component } from 'react';
import Field from 'source_path/field';
import Notification from 'source_path/notification';
import Readme from './README.md';

const checkboxOptions = [
       {
        label: '多选1',
        value: true
       },
       {
        label: '多选2',
        value: false
       },
       {
        label: '多选3',
        value: 2,
        defaultChecked:true
       }
]

const checkboxOptions2 = [
    {
        label: '多选1',
        value: true,
        defaultChecked:true
    },
    {
        label: '多选2',
        value: false
    },
    {
        label: '多选3',
        value: 2,
        defaultChecked:true
    }
]

export default class CheckboxView extends Component {
	constructor () {
		super();
		this.state = {

		};
	}

	getData(form){
		var data = Field.getData(form);
		console.info(JSON.stringify(data));
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

	onChange(value){
    	Notification.info({
		    message: '回调函数表单的值为：'+JSON.stringify(value),
		    duration: 2000 // 单位毫秒
		});
    }

    onCheckboxValidate(value){
    	console.info(value);
    	if(value && value.length > 2){
    		return false
    	}
    	return true
    }

    onMouseOver(){
    	Notification.info({
		    message: '我是自定义的onMouseOver事件',
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
					<button className="m-b btn btn-success-border m-r" onClick={() => this.getData("checkbox")}>获取文本框信息</button>
					<button className="m-b btn btn-warning-border m-r" onClick={() => this.clearData("checkbox")}>清空文文本框信息</button>
					<button className="m-b btn btn-info-border m-r" onClick={() => this.resetData("checkbox")}>重置文本框信息</button>
					<button className="m-b btn btn-danger-border m-r" onClick={() => this.validate("checkbox")}>提交文本框信息并校验</button>
				</div>
				<div className='demo clearfix'>
					<div className='f-l field-demo'>
						<h4>必填属性：类型（type）、name、选择数据列表（options）</h4>
						<Field
							type="checkbox"
					        name="checkbox"
					        defaultValue={[2]}
					        options={checkboxOptions}>
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h4>其他配置属性：表单复杂的情况下建议设置form给表单归类(form)、禁用（disabled）、标题（label）、子标题信息（subInfo）、样式（className）</h4>
						<Field
							type="checkbox"
					        name="checkbox2"
					        form="checkbox"
					        options={checkboxOptions}
					        disabled
					        subInfo="我是一个小表单信息"
					        label="配置属性1：">
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h4>其他配置属性：必填（required）、校验错误信息（errorMsg）、校验是否展示（error,默认会自动失去焦点校验）</h4>
						<Field
							type="checkbox"
					        name="checkbox3"
					        form="checkbox"
					        options={checkboxOptions}
					        required
					        error={true}
					        errorMsg="我是一个错误提示"
					        subInfo="我是一个小表单信息"
					        label="配置属性：">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h4>其他配置属性：校验是否展示（error,默认会自动失去焦点校验）</h4>
						<Field
							type="checkbox"
					        name="checkbox4"
					        form="checkbox"
					        options={checkboxOptions}
					        required
					        errorMsg="我是一个错误提示"
					        subInfo="我是一个小表单信息"
					        label="配置属性：">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h4>赋值属性：value、defaultValue</h4>
						<Field
							type="checkbox"
					        name="checkbox5"
					        form="checkbox"
					        label="配置属性3："
					        required
					        options={checkboxOptions}
					        defaultValue={[2]}
					        className='field-text'
					        subInfo="赋值defaultValue">
					    </Field>
					    <Field
							type="checkbox"
					        name="checkbox6"
					        form="checkbox"
					        label="配置属性4："
					        required
					        errorMsg="我是一个错误提示"
					        options={checkboxOptions2}
					        className='field-text'
					        subInfo="赋值option中的defaultChecked">
					    </Field>
					    <Field
							type="checkbox"
					        name="checkbox7"
					        form="checkbox"
					        label="配置属性5："
					        required
					        value={[2]}
					        options={checkboxOptions}
					        className='field-text'
					        subInfo="赋值value">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h4>方法：校验（onValidate）、修改数据回调（onChange）</h4>
						<Field
							type="checkbox"
					        name="checkbox8"
					        form="checkbox"
					        label="配置属性6："
					        required
					        onChange={(value)=>this.onChange(value)}
					        options={checkboxOptions}
					        className='field-text'
					        subInfo="数据回调onChange方法">
					    </Field>
					    <Field
							type="checkbox"
					        name="checkbox8"
					        form="checkbox"
					        label="配置属性6："
					        required
					        errorMsg="我是一个错误校验提示"
					        onValidate={(value) => this.onCheckboxValidate(value)}
					        options={checkboxOptions}
					        className='field-text'
					        subInfo="校验onValidate方法">
					    </Field>
					    <div style={{height:"41px"}}></div>
					</div>

					<div className="f-l field-demo">
						<h4>{"自定义属性：attrs={{style: {width:'100px'}}}"}</h4>
						<Field
							type="checkbox"
					        name="checkbox9"
					        form="checkbox"
					        label="自定义属性："
					        required
					        options={checkboxOptions}
					        attrs={{readOnly: 'readOnly'}}
					        className='field-text'>
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h4>{"自定义方法：events={{onMouseOver:()=>{}}}"}</h4>
						<Field
							type="checkbox"
					        name="checkbox10"
					        form="checkbox"
					        label="配置属性6："
					        required
					        options={checkboxOptions}
					        events={{onMouseOver:()=>this.onMouseOver()}}
					        className='field-text'>
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
