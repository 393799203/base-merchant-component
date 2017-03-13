### 2. 配置的json格式

```
options:[{
    type:'uploadList', // 上传图片列表
    defaultValue:[{url:"http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"}],
    disabled: true,
    style: {},
    attrs: {
        demoImg: '', // 模版图片
        mostImg: -1, // 最多上传图片数量
        leastImg: 1 // 最少上传图片数量
    },
    name: 'uploadListtest'
    label:'上传列表',
    text: '上传列表',
    subInfo:'我是一个小文案',
    errorMsg: '校验失败的提示',
    required: true
},{
    type:'uploadBox',  //上传图片
    defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
    disabled: true,
    style: {},
    attrs: {
        demoImg: '', // 模版图片
        mostImg: -1, // 最多上传图片数量
        leastImg: 1 // 最少上传图片数量
    },
    name: 'uploadBoxtest'
    label:'上传图片', 
    text: '上传图片', 
    subInfo:'我是一个小文案',
    errorMsg: '校验失败的提示',
    required: true
},{
    type:'fullAddress',  // 全地址
    label:'全地址组件',
    text:'全地址组件', // label选其一，做了兼容
    defaultValue:{
        province: "上海",
        city:"上海市",
        area:"卢湾区",
        street:"测试测试"
    },
    className: "fullAddress",
    style: {width:"200px"},
    name: 'fullAddresstest'
    errorMsg: "我是校验失败时的提示",
    required: true,
    subInfo:'我是一个小文案',
    attrs: {}, // 地址组件内部属性，可参考全地址FullAddress
    disabled: {
        province: true,
        city: true,
        area: true,
        street: true
    }
},{
    type:'address',  // 地址
    label:'地址组件',
    text:'地址组件', // label选其一，做了兼容
    defaultValue:{
        province: "上海",
        city:"上海市",
        area:"卢湾区"
    },
    className: "address",
    style: {width:"200px"},
    name: 'addresstest'
    errorMsg: "我是校验失败时的提示",
    required: true,
    subInfo:'我是一个小文案',
    attrs: {}, // 地址组件内部属性，可参考全地址FullAddress
    disabled: {
        province: true,
        city: true,
        area: true
    }
},{
    type:'datepicker',  //
    label:'时间组件',
    subInfo:'我是一个小文案',
    required: true,
    defaultValue:1486197669000,
    name: 'datepickertest' 
},{
    type:'deadline',  //截止如期
    label:'身份证截止日期', 
    subInfo:'我是一个小文案',
    required: true,
    defaultValue:1486197669000,
    name: 'deadlinetest' 
},
//以下为表单的基础控件，可以参照field的属性
{
    type:'radio',  
    label:'单选条件',
    name: 'radiotest',
    defaultValue: 1,  
    required: true,
    options:[{
        label:'单选1', 
        value: 0      
    },{
        label: '单选2',    
        value: 1
    },{
        label: '单选3',
        value: 2
    }]
},{
    type:'checkbox', // 多选
    label: '多选条件',
    name: 'checkboxtest',
    defaultValue: ['1','2'],
    required: true,
    options: [{
        label: '多选1',
        value: 0
    },{
        label: '多选2',
        value: 1
    },{
        label: '多选3',
        value: 2
    }]
},{
    type: 'select', // 下拉框
    label: '下拉框条件',
    name: 'selecttest',
    defaultValue: 'adwd',
    required: true,
    width:"500px",
    options: [{
        label: '顺丰',
        value: 'dsa'
    }, {
        label: '圆通',
        value: 'adwd'
    }, {
        label: '申通',
        value: 'fdsaf'
    }]
},{
    type: 'text', // 文本框
    label: '输入框文案',
    name: 'texttest',
    defaultValue: 'adwd',
    width:"500px",
    required: true,
    placeholder: '这里是提示文案'     //支持提示文案
},{
    type: 'textarea', // 富文本
    label: 'textarea文案',
    name: 'textarea',
    width:"500px",
    height:"200px",
    required: true,
    defaultValue: 'adwd',
    placeholder: '这里是提示文案'     //支持提示文案
}]
```

### 3. 代码

```

import React, { Component } from 'react'
import Form from '@meili/base-merchant-component/lib/form';

import testData from './config.js';

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
            <div className="ml mr mb-xxl">
                <button
                    className="btn btn-success-custom w-sm mr" 
                    onClick={ (e) => { this.getData() }}>
                    获取数据
                </button>
                <button
                    className="btn btn-info-custom w-sm mr" 
                    onClick={ (e) => { this.resetData() }}>
                    初始化数据
                </button>
                <button
                    className="btn btn-warning-custom w-sm mr" 
                    onClick={ (e) => { this.clearData() }}>
                    清除数据
                </button>
                <button
                    className="btn btn-danger-custom w-sm mr" 
                    onClick={ (e) => { this.validate() }}>
                    校验数据
                </button>
                <Form 
                    data = {testData.options.concat()} 
                    prefixcls="field-test"
                    form='textForm'/>
            </div>
        )
    }
}


```

### 4. 组件属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| form | 表单组名称 | string | 'defaultKey' |
| data | json数据 | array | [] |
| prefixcls | 最外层样式 | string | '' |


### 4. json属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| type | 控件类型:'text','textarea','select','checkbox','radio','datapicker','deadline','address','fullAddress','uploadList','uploadBox'(自定义控件) | String | - |
| label |  传递input对应label显示的文字说明 | String | - |
| subInfo |  表单的提示文案 | String | - |
| name | 表单描述字段的名称 | String  | - |
| id | 控件id属性 | String   | - |
| form | 表单所属的form组，如果不传则默认归集到同一组 | String   | - |
| placeholder | 同input的placeholder，提供输入字段预期值的提示信息 | String | - |
| errorMsg | 校验失败时显示的提示 | String | - |
| className | 扩展class | String | - |
| required | 是否必填 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| defaultValue | 默认值 | All | - |
| options | checkbox类型、select类型和radio类型需要传递的一组值，类型为array，数组成员为object | Array | - |
| attrs | 追加到控件上得自定义属性，以对象形式传递如{readOnly: 'readOnly'} | Object | - |
| onValidate | 自定义表单校验函数 | function | - |
| onChange | 表单改变的回调函数 | function | - |


### 5. 方法 - Function

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取表单信息    | form (默认为空)          | 对象       |
| clearData    |   重置表单信息    | form  (默认为空)            | 对象       |
| resetData    |   清除表单信息    | form  (默认为空)            | 对象       |
| resetData    |   清除表单信息    | form  (默认为空)            | 对象       |