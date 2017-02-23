export default {
	options:[{
       	type:'radio',  //类型
        text:'单选条件',  //文案
        key: 'radiotest',    //生成数据对应的字段
		defaultValue: 1,    //默认选中的值，如果不填默认选第一个
		grid:"4",
        options:[{
			label:'单选1',    //选项文案
			value: 0         //选项的值
		},{
			label: '单选2',    
			value: 1
		},{
			label: '单选3',
			value: 2
		}]
	},{
       	type:'checkbox',
       	text: '多选条件',
       	key: 'checkboxtest',
	   	defaultValue: ['1','2'],   //多选的默认值是数组
	   	grid:"4",
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
    	type: 'select',
    	text: '下拉框条件',
    	key: 'selecttest',
    	defaultValue: 'adwd',
    	grid:"4",
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
    	type: 'text',
    	text: '输入框文案',
    	key: 'texttest',
    	defaultValue: 'adwd',
    	width:"500px",
    	placeholder: '这里是提示文案'     //支持提示文案
    },{
    	type: 'textarea',
    	text: 'textarea文案',
    	key: 'textarea',
    	width:"500px",
    	height:"200px",
    	defaultValue: 'adwd',
    	placeholder: '这里是提示文案'     //支持提示文案
    }]
}