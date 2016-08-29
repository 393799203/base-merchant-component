## Modal 弹框 

#### 打开自定义弹层open


#### 关闭自定义弹层

#### 关闭所有弹层


####参数说明  

params  | 说明 | 备注
-------|-----|----
title |标签名称|
body | (text/radio/checkbox/select/raw)| 默认为text
className | 表单元素名称 |
callback | 表单名称 |
beforeClose | 自定义样式名称 |
isAbsolute |type=radio/checkbox/select时必填 | object对象组成的数组，object包含text,value属性
showMask | 表单元素初始值 | type=checkbox时传入数组，数组元素为默认选中的选项的value
closeByMask | 是否必填 |
   
  
#### 基本用法

```
     var React = require('react');
     var Field = require('module_path/field/Field.jsx');
     var Test = React.createClass({
	    getInitialState: function(){
            return {};
	    },
	    options:[
		   {text:'test1',value:'0'},
		   {text:'test2',value: '1'}
		],
	   postData: function(){
	      //校验表格的必填项是否为空
	      var check = '';
	      //表格中提取的数据
          var data = {};
          check = Field.validate('test');
	       if(!check){
	          return;
	       }
	       data =  Field.getData('test');   
	       console.log(data);
	    },
	   /***postData()打印出来的值
	   {
	      t-text: 'hello',
	      t-radio: '1',
	      t-checkbox: ['0','1'],
	      t-select: '1'
	    }
	    ***/
	    render: function () {
		    return <div>
		     <Field type="text" label="text:" value="hello" disabled name="t-text" form="test"/>
		     <Field type="radio" options={this.options} name="t-radio" form="test" value="1" required />
		     <Field type="checkbox" options={this.options} value={['0','1']} name="t-checkbox" form="test"/>
		     <Field type="select" options={this.options} name="t-select" form="test" value="1"/>
		     <Field type="textarea" name="t-textarea" form="test"/>
		     <button onClick={this.postData}>click me</button>
		 </div>
	   }
    });
    React.render(
	<Test />,document.getElementById('J_Page')
	);

```


#### 校验特殊格式的输入：
  
```
    var Test = React.createClass({
	     getInitialState: function(){
            return {};
	     },
	     options:[
		     {text:'test1',value:'0'},
		     {text:'test2',value: '1'}
		 ],
	    postData: function(){
	        //校验test表单中form中format的特殊格式是否被满足
		     console.log(Field.validate('test')); 
	     },
	    render: function () {
		    return <div>
		     <Field type="text" label="text:"  format="+int" name="t-text" form="test"/>
		     {/*
		     *format是特殊格式，可选参数有number,int,+int,mobile,phone,email,realname,password
		     */}
		     <button onClick={this.postData}>click me</button>
		     </div>
	    }
       });	
       
```


