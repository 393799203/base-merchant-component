### 2. 实现代码

```

import React, { Component } from 'react'
import Field from '@meili/base-merchant-component/lib/field';

export default class TextView extends Component {
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
			<div className="field-demo">
				<div className="title">
					<button className="m-b btn btn-success-custom m-r" onClick={() => this.getData("text")}>获取文本框信息</button>
					<button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData("text")}>清空文文本框信息</button>
					<button className="m-b btn btn-info-custom m-r" onClick={() => this.resetData("text")}>重置文本框信息</button>
					<button className="m-b btn btn-danger-custom m-r" onClick={() => this.validate("text")}>提交文本框信息并校验</button>
				</div>
				<div className='demo clearfix'>
					<div className='f-l field-demo'>
						<h5>必填属性：类型（type）、name、表单复杂的情况下建议设置form给表单归类</h5>
						<Field 
							type="text"
					        name="test1"
					        label="必填属性："
					        form="text">
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h5>其他配置属性：禁用（disabled）、标题（label）、子标题信息（subInfo）、水印（placeholder）、样式（className）</h5>
						<Field 
							type="text"
					        name="test2"
					        form="text"
					        label="配置属性1："
					        disabled
					        className='field-text'
					        placeholder="我是一个水印"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>
					<div className="f-l field-demo">
						<h5>其他配置属性：必填（required）、校验错误信息（errorMsg）、校验是否展示（error）</h5>
						<Field 
							type="text"
					        name="test3"
					        form="text"
					        label="配置属性2："
					        required
					        error={true}
					        errorMsg="我是一个校验错误提示我是一个校验错误提示我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>其他配置属性：校验是否展示（error,默认会自动失去焦点校验）</h5>
						<Field 
							type="text"
					        name="test4"
					        form="text"
					        label="配置属性3："
					        required
					        errorMsg="我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>赋值属性：value、defaultValue</h5>
						<Field 
							type="text"
					        name="test5"
					        form="text"
					        label="配置属性4："
					        required
					        defaultValue="我是默认值"
					        errorMsg="我是一个校验错误提示"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>方法：校验（onValidate）、修改数据回调（onChange）</h5>
						<Field 
							type="text"
					        name="test6"
					        form="text"
					        label="配置属性4："
					        required
					        onValidate={(value) => this.onValidate(value)}
					        onChange={(value) => this.textChange(value)}
					        errorMsg="请输入整数"
					        subInfo="我是一个表单信息">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>{"自定义属性：attrs={{style: {width:'100px'}}}"}</h5>
						<Field 
							type="text"
					        name="test7"
					        form="text"
					        label="自定义属性："
					        required
					        attrs={{style: {width:"100px"}}}
					        errorMsg="请输入整数"
					        subInfo="用attrs修改了文本框的宽度">
					    </Field>
					</div>

					<div className="f-l field-demo">
						<h5>{"自定义方法：events={{onClick:()=>{}}}"}</h5>
						<Field 
							type="text"
					        name="test8"
					        form="text"
					        label="自定义方法："
					        required
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