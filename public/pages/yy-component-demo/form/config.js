export default {
    options:[{
        type:'labelList',  //类型
        defaultValue:[
            "1.化妆品生产厂商的化妆品卫生许可证复印件;",
            "2.化妆品生产厂商的化妆品生产许可证复印件；"
        ]
    },{
        type:'uploadList',  //类型
        label:'上传列表',  //文案
        subInfo:'我是一个小文案',
        required: true,
        disabled:false,
        value: '',
        defaultValue:[{url:"http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"}],
        name: 'uploadListtest',    //生成数据对应的字段
        attrs:{

        }
    },{
        type:'uploadBox',  //类型
        label:'上传',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        name: 'uploadBoxtest'    //生成数据对应的字段
    },{
        type:'fullAddress',  //类型
        label:'地址组件',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:{
            province: "上海",
            city:"上海市",
            area:"卢湾区",
            street:"测试测试"
        },
        name: 'addresstest'    //生成数据对应的字段
    },{
        type:'datepicker',  //类型
        label:'时间组件',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:1486197669000,
        name: 'datepickertest'    //生成数据对应的字段
    },{
        type:'deadline',  //类型
        label:'身份证截止日期',  //文案
        subInfo:'我是一个小文案',
        required: true,
        defaultValue:1486197669000,
        name: 'deadlinetest'    //生成数据对应的字段
    },{
        type:'radio',  //类型
        label:'单选条件',  //文案
        name: 'radiotest',    //生成数据对应的字段
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
        label: '多选条件',
        name: 'checkboxtest',
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
        type: 'text',
        label: '输入框文案',
        name: 'texttest',
        defaultValue: 'adwd',
        width:"500px",
        required: true,
        placeholder: '这里是提示文案'     //支持提示文案
    },{
        type: 'textarea',
        label: 'textarea文案',
        name: 'textarea',
        width:"500px",
        height:"200px",
        required: true,
        defaultValue: 'adwd',
        placeholder: '这里是提示文案'     //支持提示文案
    }],
    options2:[{
        type:'radio',  //类型
        label:'单选条件',  //文案
        name: 'radiotest2',    //生成数据对应的字段
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
        label: '多选条件',
        name: 'checkboxtest2',
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
        label: '下拉框条件',
        name: 'selecttest2',
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
        label: '输入框文案',
        name: 'texttest2',
        defaultValue: 'adwd',
        width:"500px",
        required: true,
        placeholder: '这里是提示文案'     //支持提示文案
    },{
        type: 'textarea',
        label: 'textarea文案',
        name: 'textarea2',
        width:"500px",
        height:"200px",
        required: true,
        defaultValue: 'adwd',
        placeholder: '这里是提示文案'     //支持提示文案
    }]
}