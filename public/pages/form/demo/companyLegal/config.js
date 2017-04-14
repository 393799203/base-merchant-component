export default {
    options:[{
        type:'radio',  //类型
        label:'类型：',  //文案
        name: 'certificateType',    //生成数据对应的字段
        required: true,
        options:[{
            label:'身份证',    //选项文案
            value: 0         //选项的值
        },{
            label: '护照',    
            value: 1
        }]
    },{
        type: 'text',
        label: '身份证姓名：',
        name: 'companyIdentityName',
        defaultValue: '飞飞',
        required: true,
        placeholder: '请输入身份证姓名',
        errorMsg:"请输入身份证姓名姓名"
    },{
        type: 'text',
        label: '身份证号码：',
        name: 'companyIdentityId',
        defaultValue: '',
        required: true,
        placeholder: '请输入身份证号码',
        errorMsg:"请输入身份证号码"
    },{
        type: 'deadline',
        label: '身份证到期时间：',
        name: 'deadlineDate',
        required: true,
        style:{width:"240px"},
        attrs:{
            placeholder: '请输入到期时间'
        },
        errorMsg:"请输入到期时间"
    },{
        type:'uploadBox',  //类型
        label:'身份证正面照：',  //文案
        required: true,
        attrs:{
            mostImg:1
        },
        grid:1,
        // defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        name: 'identityFrontImage'    //生成数据对应的字段
    },{
        type:'uploadBox',  //类型
        label:'身份证反面照：',  //文案
        required: true,
        attrs:{
            mostImg:1
        },
        grid:1,
        // defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        name: 'identityBackImage'    //生成数据对应的字段
    }]
}