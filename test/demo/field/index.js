import React from 'react';
import { Field , FieldMixins }  from 'module_path/index';

export default React.createClass({
	mixins: [FieldMixins],

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
        return(
        	<div>
			    <Field type="text" label="text disabled:" value="hello" disabled name="t-text" form="test"/>
			    <Field type="text" label="text2:" value="hello2" name="t-text" form="test"/>
			    <Field type="radio" options={this.options} name="t-radio" form="test" value="1" required />
			    <Field type="checkbox" options={this.options} value={['0','1']} name="t-checkbox" form="test"/>
			    <Field type="select" options={this.options} name="t-select" form="test" value="1"/>
			    <Field type="textarea" name="t-textarea" form="test"/>
			    <button onClick={this.postData}>click me</button>
			</div>
        )
   }
});
