# Form组件
## 简介
Form组件封装了常用的HTML表单，目前包含text、radio、checkbox、select、textarea、raw六种。
传送门:http://upfront.mogujie.org/static/up-demo/#/form?_k=lu4zix

## 使用
首先引入component/Form下的Field.js和Field.Mixins.js，组件外层需要包裹from表单，如`<form className="form-horizontal">`class样式可选，水平排列`form-inline`，垂直排列`form-horizontal`,组件以`<Field></Field>`形式使用.

### 各字段含义
组件以`<Field></Field>`形式使用，
各个字段的含义：
* form: 表明<Field>表单所属的form组，如果不传则默认获取所有未设置form字段的<Field>组件。如：getData(form)函数，若指明参数则获取指定form属性对应的<Field>组件值，若未指定form则获取页面中所有未设置form字段的<Field>组件值。
* type: 表单类型类型，可传递传递text、radio、checkbox、select、textarea、raw六种类型
* label: 传递input对应label显示的文字说明
* name: 表单描述字段的名称
* placeholder: 同input的placeholder，提供输入字段预期值的提示信息
* format: 表示表单校验使用的校验规则
* onValidate: type='raw'时的自定义表单校验函数
* required: 表示是必要的字段
* errorMsg: 校验失败时显示的提示
* className: 添加在表单最顶部的自定义样式
* totalCols: 整个表单组件占用的MainBox列数，传递范围为(0~12)的数字
* inputCols: input占用的MainBox列数，传递范围为(0~12)的数字
* labelCols: label占用的MainBox列数，传递范围为(0~12)的数字
* options: checkbox类型和radio类型需要传递的一组值，类型为array，数组成员为object
* on(Events): 可自行添加事件侦听和对应处理函数，如onClick

### text组件使用：
```javascript
import Field from @mogu/up-components/lib/Form/Field;

ReactDOM.render(
    <form className="form-horizontal">
        <Field type="text" label="E-mail" name="e-mail"
        placeholder="邮箱地址" format="email" required errorMsg="请填写正确的邮箱地址"></Field>
    </form>
    , document.getElementById('container'));
```

### radio组件使用
```
import Field from @mogu/up-components/lib/Form/Field;

ReactDOM.render(
    <Field type="radio"
        name="gender"
        options={options}
        label="gender">
    </Field>
    , document.getElementById('container'));
```
options为array，数组成员为object，例如
```
[
    {
        label: '男',
        value: 0,
        defaultChecked: true
        className: 'male'
    }, {
        label: '女',
        value: 1,
        className: 'female'
    }
]
```
label为radio显示的说明文字，value为radio的值，defaultChecked为默认勾选的值，className为添加在该option渲染input的父级div的样式。

### checkbox组件使用
```
import Field from @mogu/up-components/lib/Form/Field;

ReactDOM.render(
    <Field type="checkbox"
        name="express"
        options={options}
        label="快递">
    </Field>
    , document.getElementById('container'));
```
options为array，数组成员为object，例如
```
[
    {
        label: '顺丰',
        value: 0,
        defaultValue: true
    }, {
        label: '圆通',
        value: 1
    }, {
        label: '申通',
        value: 2
    }
]
```
label为checkbox显示的说明文字，value为radio的值，defaultValue为默认勾选的值。

### select组件使用
```
import Field from @mogu/up-components/lib/Form/Field;

ReactDOM.render(
    <Field type="select"
        label="select"
        name="number"
        options={options}>
    </Field>
    , document.getElementById('container'));
```
options值的传递格式，options为array，数组成员为object，例如
```
[
    {
        text: '顺丰',
        value: 0,
        defaultValue: true
    }, {
        text: '圆通',
        value: 1
    }, {
        text: '申通',
        value: 2
    }
]
```

备注：select的默认值还可通过defaultValue设置。

### textarea组件
使用方式和text相同，仅需要把type改为'textarea';

### 自定义raw组件：
* raw组件是自定义组件，需要手动将input表单添加到`<Field></Field>`之间，此时Field.Mixins中提供了通用的`onChange`方法`handlePathChange()`，需要绑定到input表单上。以及需要在Field组件上绑定`onData`方法，供给Field组件调用获取表单数据，可使用默认提供的`getFieldData()`，含校验方法`onValidate`可自定义或使用默认的`validateField()`;

```
import Field from @mogu/up-components/lib/Form/Field;

ReactDOM.render(
    <Field type="raw"
           label="username"
           name="username"
           onData={() => this.getFieldData('username')}
           onValidate={() => this.validateField('username')}
           errorMsg="请输入用户名" required>
        <input type="text" ref="username" onChange={(e) => this.handlePathChange(e, 'username')} />
    </Field>
    , document.getElementById('container'));
```

* 对于简单的数据校验，可以使用Field组件提供的 `validateField(fields)` 函数，参数 `fields` 可以是字符串，如 'username'，表示校验 'this.state.username' 是否为空；也可以是字符串的数组，如 `['username', 'sex']`，同时校验多个字段；
也可以是对象，如`{'username': 'realname', 'password': 'password'}`，以指定的格式校验字段，或者直接传入正则表达式。
`getFieldData(fields)` 与之类似，一般与 `validateField(fields)` 的参数相同即可。

### 获取数据以及校验
获取数据可直接调用Field.getData(form)的方法，form为string类型，为props.form中传入的字符串，如果不传则返回默认组别的数据，默认组别为所有未传props.form的组的表单。
返回值为一个object，key值为props.name，value值为真实表单的值。

如果props.name为点号分割的字符串，则按照字符串的取值顺序返回相应的对象。比如props.name = 'user.name'，则getData()方法返回的值为：
```
{
    user: {
        name: 'xxx'
    }
}
```

数据校验使用Field.validate(form)方法，form为string类型，为props.form中传入的字符串，如果不传则校验默认组别的数据。
执行required、props.format传入的校验规则或者正则表达式，如果每组表单都校验成功则返回true，反之返回false.并显示props.errorMsg传入的错误提示信息。

### 数据重置和清空
1. 数据重置可直接调用Field.resetData(form)的方法，指定表单数据恢复到初始状态
2. 数据重置可直接调用Field.clearData(form)的方法，指定表单数据全部清空

form为string类型，为props.form中传入的字符串，如果不传处理默认组数据，默认组别为所有未传props.form的组的表单。

<img src="http://s16.mogucdn.com/p1/160429/upload_ie4dcmdbhayggobthazdambqgiyde_1309x532.jpg" />

## 实例

```javascript

import React, { Component } from 'react';
import Breadcrumb  from '@mogu/up-components/lib/Breadcrumb';
import Panel  from '@mogu/up-components/lib/Panel';
import { Form }  from '@mogu/up-components/lib/Form';
import { FormItem }  from '@mogu/up-components/lib/FormItem';
import DatePicker from '@mogu/up-components/lib/DatePicker';
import { options ,express , province } from './testData';

const breadList = [{
	title: '首页',
	url: '/'
}, {
	title: 'form2',
	url: '/form2',
	active: true
}];

let FieldView = React.createClass({
	getInitialState() {
		return {};
	},

	componentDidMount(){
		this.setState({
			email : 'xxx@mogujie.com',
			gender : 1,
			express : ['sf', 'st'],
			province : 1,
			description : 'test',
			date : new Date()
		});
	},
	handleChange(){
		console.log( arguments );
	},
	getFieldData(){
		return this.state.date;
	},
	validateField(){
		if( this.state.date ){
			return true;
		}
	},
	handleDateChange( date ){
		this.setState({ date });
	},
	render() {
		let state = this.state;

		return (
			<div>
				<Breadcrumb breadList={ breadList }/>
				<Panel title="form">
					<form className="form-horizontal">
						<Field value={ state.email } type="text" label="E-mail" name="e-mail" format="email" required errorMsg="请填写正确的邮箱地址"/>
						<Field value={ state.gender} type="radio" name="gender" options={options} label="gender"/>
						<Field value={ state.express } type="checkbox" required name="express" options={express} label="快递"/>
						<Field value={ state.province } type="select" label="省份" name="province" options={province} onChange={ this.handleChange }/>
						<Field value={ state.description } type="textarea" label="description" name="description"/>
						<Field type="raw"
							   label="活动开始时间"
							   name="date"
							   onData={ this.getFieldData }
							   onValidate={ this.validateField }
							   errorMsg="请选择时间" required>
							<DatePicker onChange={ this.handleDateChange }
										format="yyyy-MM-dd HH:mm:ss"
										value={ state.date }
										showTime/>
						</Field>
					</form>
					<input type="button" onClick={this.getData} value="获取数据" className="btn btn-primary"/>
					<input type="button" onClick={this.reset} value="重置" className="btn btn-warning"/>
					<input type="button" onClick={this.clear} value="清空" className="btn btn-info"/>
				</Panel>
			</div>
		)
	},

	getData() {
		Field.validate();
		console.log(Field.getData());
	},

	reset(){
		Field.resetData();
	},
	clear(){
		Field.clearData();
	}
});

ReactDOM.render(<FieldView />, document.getElementById('container'));

```

## Props
| props   | 说明    | 类型    | 默认值  |
| ------- |--------|---------|-------|
| defaultValue | 默认值 | All | - |
| value | 值 | All | - |
| type | 控件类型:'text','textarea','select','checkbox','radio','raw'(自定义控件) | String | － |
| id | 控件id属性 | String   | - |
| name | 表单描述字段的名称 | String  | - |
| form | 表单所属的form组，如果不传则默认归集到同一组 | String   | - |
| totalCols | 控件容器在栅栏布局中占的列数，可选值1-12 | String | 12 |
| className | 扩展class | String | - |
| labelCols | 标题在栅栏布局中占的列数，可选值1-12 | String | 2 |
| required | 是否必填 | boolean | false |
| inputCols | 控件在栅栏布局中占的列数，可选值1-12 | String | 10 |
| label |  传递input对应label显示的文字说明 | String | - |
| placeholder | 同input的placeholder，提供输入字段预期值的提示信息 | String | - |
| format | 表示表单校验使用的校验规则,提供的校验有:'number','int','+int'(正整数),'mobile','phone','email','realname'(中文名),'password'(密码长度6-20) | String | - |
| onValidate | type='raw'时的自定义表单校验函数 | function | - |
| errorMsg | 校验失败时显示的提示 | String | - |
| options | checkbox类型、select类型和radio类型需要传递的一组值，类型为array，数组成员为object | Array | - |
| on(Events) | 可自行添加事件侦听和对应处理函数，如onClick | function | - |
| attrs | 追加到控件上得自定义属性，以对象形式传递如{readOnly: 'readOnly'} | Object | - |
