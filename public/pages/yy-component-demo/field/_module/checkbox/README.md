### 2. 实现代码

```
import React, { Component } from 'react';
import Field from '@meili/base-merchant-component/lib/field';

const checkboxOptions = [
       {
        label: '多选1',
        value: 0
       },
       {
        label: '多选2',
        value: 1
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
        value: 0,
        defaultChecked:true
       },
       {
        label: '多选2',
        value: 1
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
    }

    onCheckboxValidate(value){
    	console.info(value);
    	if(value && value.length > 2){
    		return false
    	}
    	return true
    }

    onMouseOver(){
    }
	
	render () {
		return (
			<div className="field-demo clearfix">
				<div className="title">
					<button className="m-b btn btn-success-custom m-r" onClick={() => this.getData("checkbox")}>获取文本框信息</button>
					<button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData("checkbox")}>清空文文本框信息</button>
					<button className="m-b btn btn-info-custom m-r" onClick={() => this.resetData("checkbox")}>重置文本框信息</button>
					<button className="m-b btn btn-danger-custom m-r" onClick={() => this.validate("checkbox")}>提交文本框信息并校验</button>
				</div>
				<div className='demo clearfix'>
					<div className='f-l field-demo'>
						<h5>必填属性：类型（type）、name、表单复杂的情况下建议设置form给表单归类</h5>
						<Field 
							type="checkbox"
					        name="checkbox"
					        form="checkbox"
					        options={checkboxOptions}
					        label="必填属性：">
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h5>其他配置属性：禁用（disabled）、标题（label）、子标题信息（subInfo）、样式（className）</h5>
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
						<h5>其他配置属性：必填（required）、校验错误信息（errorMsg）、校验是否展示（error,默认会自动失去焦点校验）</h5>
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
						<h5>其他配置属性：校验是否展示（error,默认会自动失去焦点校验）</h5>
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
						<h5>赋值属性：value、defaultValue</h5>
						<Field 
							type="checkbox"
					        name="checkbox5"
					        form="checkbox"
					        label="配置属性3："
					        required
					        options={checkboxOptions}
					        defaultValue={["2"]}
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
					        value={["2"]}
					        options={checkboxOptions}
					        className='field-text'
					        subInfo="赋值value">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>方法：校验（onValidate）、修改数据回调（onChange）</h5>
						<Field 
							type="checkbox"
					        name="checkbox8"
					        form="checkbox"
					        label="配置属性6："
					        required
					        onChange={(value)=>this.onChange(value)}
					        options={checkboxOptions}
					        className='field-text'
					        subInfo="onChange方法">
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
					        subInfo="onValidate方法">
					    </Field>
					    <div style={{height:"40px"}}></div>
					</div>

					<div className="f-l field-demo">
						<h5>{"自定义属性：attrs={{style: {width:'100px'}}}"}</h5>
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
						<h5>{"自定义方法：events={{onMouseOver:()=>{}}}"}</h5>
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
			</div>
		)
	}
}

```