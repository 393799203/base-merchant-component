## 2. 使用说明
#### 2.1 field表单使用

```
import React, { Component } from 'react'
import FormComponent from '@meili/base-merchant-component/lib/field/index';

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
					表单 - Field
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
				<div dangerouslySetInnerHTML={{ __html: FieldReadme }}>
					
				</div>
			</div>
	  	)
	}
}

```

#### 2.2 data数据的配置

```
export default {
	options:[
		{
          type:'radio',  //类型
          text:'单选条件',  //文案
          key: 'radiotest',    //生成数据对应的字段
		  defaultValue: 1,    //默认选中的值，如果不填默认选第一个
          content:[
		   {
			label:'单选1',    //选项文案
			value: 0         //选项的值
		   },
		   {
			label: '单选2',    
			value: 1
		   },{
			label: '单选3',
			value: 2
		   }
		   ]
	    },{
           type:'checkbox',
           text: '多选条件',
           key: 'checkboxtest',
		   defaultValue: ['1','2'],   //多选的默认值是数组
           content: [
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
			value: 2
		   }
		   ]
	    },{
	    	type: 'select',
	    	text: '下拉框条件',
	    	key: 'selecttest',
	    	defaultValue: 'adwd',
	    	content: [
	    	{
              label: '顺丰',
              value: 'dsa'
            }, {
              label: '圆通',
              value: 'adwd'
            }, {
              label: '申通',
              value: 'fdsaf'
            }
	    	]
	    },{
	    	type: 'text',
	    	text: '输入框文案',
	    	key: 'texttest',
	    	defaultValue: 'adwd',
	    	placeholder: '这里是提示文案'     //支持提示文案
	    },{
	    	type: 'textarea',
	    	text: 'textarea文案',
	    	key: 'textarea',
	    	defaultValue: 'adwd',
	    	placeholder: '这里是提示文案'     //支持提示文案
	    }
	],
	btns : [{
        text: '查询',
        className:"field-submit",
        type: 'submit',
    }]
}

```
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| data        | 数据           | 对象       | ｛｝         |
| onQuery     | 查询按钮，需要在data中配置btns配合使用       | fun       | null    |
| prefixcls     | 全局样式 | string | " "  |
| form     | 所有表单所属类别 | string | " "   |

## 4. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取表单数据    | form           | 表单中的数据       |
| resetData   |  重置表单数据    | form        | 无      | 
| clearData   |  清空表单数据    | form        | 无      | 





