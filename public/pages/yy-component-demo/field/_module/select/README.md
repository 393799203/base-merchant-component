### 2. 实现代码

```
import React, { Component } from 'react';
import Field from '@meili/base-merchant-component/lib/field';
const selectOptions = [
    {
        text:'单选1',    //选项文案
        value: 0         //选项的值
    },
    {
        text: '单选2',    
        value: 1
    },{
        text: '单选3',
        value: 2
    }
]

const selectOptions2 = [
    {
        text:'单选1',    //选项文案
        value: 0         //选项的值
    },
    {
        text: '单选2',    
        value: 1
    },{
        text: '单选3',
        value: 2,
        defaultChecked:true
    }
]

export default class SelectView extends Component {
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

    // text的方法
    onValidate (value) {
    	value = Number(value);
    	return !isNaN(value) && Math.floor(value) === value;
    }

    textChange(value){
    }

    onClick(){
    }
	
	render () {
		return (
			<div className="field-demo clearfix">
				<div className="title">
					<button className="m-b btn btn-success-custom m-r" onClick={() => this.getData("select")}>获取文本框信息</button>
					<button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData("select")}>清空文文本框信息</button>
					<button className="m-b btn btn-info-custom m-r" onClick={() => this.resetData("select")}>重置文本框信息</button>
					<button className="m-b btn btn-danger-custom m-r" onClick={() => this.validate("select")}>提交文本框信息并校验</button>
				</div>
				<div className='demo clearfix'>
					<div className='f-l field-demo'>
						<h5>必填属性：类型（type）、name、表单复杂的情况下建议设置form给表单归类</h5>
						<Field 
							type="select"
					        name="select1"
					        form="select"
					        options = {selectOptions}
					        label="必填属性：">
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h5>其他配置属性：禁用（disabled）、标题（label）、子标题信息（subInfo）、样式（className）</h5>
						<Field 
							type="select"
					        name="select2"
					        form="select"
					        disabled
					        subInfo="我是一个小信息"
					        options = {selectOptions}
					        className="field-select"
					        label="必填属性：">
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h5>其他配置属性：必填（required）、校验错误信息（errorMsg）、校验是否展示（error）</h5>
						<Field 
							type="select"
					        name="select3"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        error={true}
					        subInfo="我是一个小信息"
					        options = {selectOptions}
					        className="field-select"
					        label="必填属性：">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>其他配置属性：校验是否展示（error,默认会自动失去焦点校验）</h5>
						<Field 
							type="select"
					        name="select4"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        attrs={{style: {width:"200px"}}}
					        subInfo="为设置error时，默认为下拉框失去焦点进行校验"
					        options = {selectOptions}
					        className="field-select"
					        label="必填属性：">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>赋值属性：value、defaultValue、defaultChecked</h5>
						<Field 
							type="select"
					        name="select5"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        subInfo="设置defaultValue来赋默认值"
					        defaultValue='1'
					        options = {selectOptions}
					        className="field-select"
					        label="赋值属性：">
					    </Field>
					    <Field 
							type="select"
					        name="select6"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        subInfo="在options中添加defaultValue来赋默认值"
					        options = {selectOptions2}
					        className="field-select"
					        label="赋值属性：">
					    </Field>
					    <Field 
							type="select"
					        name="select7"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        subInfo="以value来赋默认值"
					        value={"1"}
					        options = {selectOptions}
					        className="field-select"
					        label="必填属性：">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>方法：校验（onValidate）、修改数据回调（onChange）</h5>
						<Field 
							type="select"
					        name="select8"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        subInfo="我是一个小信息"
					        options = {selectOptions}
					        onChange={(value)=>this.textChange(value)}
					        className="field-select"
					        label="必填属性：">
					    </Field>
					    <Field 
							type="select"
					        name="select8"
					        form="select"
					        required
					        errorMsg="我是错误提示信息"
					        subInfo="我是一个小信息"
					        options = {selectOptions}
					        onValidate={(value) => this.onValidate(value)}
					        className="field-select"
					        label="必填属性：">
					    </Field>
					    <div style={{height:"40px"}}></div>
					</div>

					<div className="f-l field-demo">
						<h5>{"自定义属性：attrs={{style: {width:'100px'}}}"}</h5>
						<Field 
							type="select"
					        name="select9"
					        form="select"
					        label="自定义属性："
					        options = {selectOptions}
					        attrs={{style: {width:"100px"}}}
					        errorMsg="请输入整数"
					        subInfo="用attrs修改了文本框的宽度">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>{"自定义方法：events={{onClick:()=>{}}}"}</h5>
						<Field 
							type="select"
					        name="select10"
					        form="select"
					        label="自定义方法："
					        options = {selectOptions}
					        events={{onClick:()=>this.onClick()}}
					        errorMsg="请输入整数"
					        subInfo="用events自定义onClick事件">
					    </Field>
					</div>
				</div>
			</div>
		)
	}
}

```