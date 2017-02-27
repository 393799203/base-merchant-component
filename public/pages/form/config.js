export default {
    options:[{
        type:'uploadList',  //类型
        text:'上传列表',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        key: 'uploadListtest'    //生成数据对应的字段
    },{
        type:'uploadBox',  //类型
        text:'上传',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        key: 'uploadBoxtest'    //生成数据对应的字段
    },{
        type:'fullAddress',  //类型
        text:'地址组件',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:{
            province: "上海",
            city:"上海市",
            area:"卢湾区",
            street:"测试测试"
        },
        key: 'addresstest'    //生成数据对应的字段
    },{
        type:'datepicker',  //类型
        text:'时间组件',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:1486197669000,
        key: 'datepickertest'    //生成数据对应的字段
    },{
        type:'deadline',  //类型
        text:'身份证截止日期',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:1486197669000,
        key: 'deadlinetest'    //生成数据对应的字段
    },{
        type:'radio',  //类型
        text:'单选条件',  //文案
        key: 'radiotest',    //生成数据对应的字段
        defaultValue: 1,    //默认选中的值，如果不填默认选第一个
        required: true,
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
        type: 'select',
        text: '下拉框条件',
        key: 'selecttest',
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
        type: 'text',
        text: '输入框文案',
        key: 'texttest',
        defaultValue: 'adwd',
        width:"500px",
        required: true,
        placeholder: '这里是提示文案'     //支持提示文案
    },{
        type: 'textarea',
        text: 'textarea文案',
        key: 'textarea',
        width:"500px",
        height:"200px",
        required: true,
        defaultValue: 'adwd',
        placeholder: '这里是提示文案'     //支持提示文案
    }],
    options2:[{
        type:'radio',  //类型
        text:'单选条件',  //文案
        key: 'radiotest2',    //生成数据对应的字段
        defaultValue: 1,    //默认选中的值，如果不填默认选第一个
        required: true,
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
        key: 'checkboxtest2',
        defaultValue: ['1','2'],   //多选的默认值是数组
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
        type: 'select',
        text: '下拉框条件',
        key: 'selecttest2',
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
        type: 'text',
        text: '输入框文案',
        key: 'texttest2',
        defaultValue: 'adwd',
        width:"500px",
        required: true,
        placeholder: '这里是提示文案'     //支持提示文案
    },{
        type: 'textarea',
        text: 'textarea文案',
        key: 'textarea2',
        width:"500px",
        height:"200px",
        required: true,
        defaultValue: 'adwd',
        placeholder: '这里是提示文案'     //支持提示文案
    }]
}