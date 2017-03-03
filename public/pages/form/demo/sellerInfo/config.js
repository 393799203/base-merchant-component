export default {
    options:[{
        type: 'text',
        label: '姓名：',
        name: 'contactName',
        defaultValue: '飞飞',
        required: true,
        grid:1,
        width:"165px",
        placeholder: '请输入姓名',
        errorMsg:"请输入姓名"
    },{
        type: 'text',
        label: '联系邮箱：',
        name: 'email',
        defaultValue: '',
        required: true,
        grid:1,
        width:"165px",
        placeholder: '请输入联系邮箱',
        errorMsg:"请输入联系邮箱"
    },{
        type: 'text',
        label: 'QQ账号：',
        name: 'contactQQ',
        defaultValue: '10000000',
        required: true,
        grid:1,
        width:"165px",
        placeholder: '请输入QQ帐号',
        errorMsg:"请输入QQ帐号"
    },{
        type:'fullAddress',  //类型
        label:'所在地区：',  //文案
        required: true,
        defaultValue:{
            province: "上海",
            city:"上海市",
            area:"卢湾区",
            street:"测试测试"
        },
        name: 'location',
        placeholder: '请输入所在地区',
        errorMsg:"请输入所在地区"
    },{
        type: 'text',
        label: '企业微博：',
        name: 'contactWeibo',
        defaultValue: '',
        grid:1,
        width:"165px",
        placeholder: '请输入企业微博'     //支持提示文案
    },{
        type: 'text',
        label: '企业微信：',
        name: 'contactWeixin',
        defaultValue: '',
        grid:1,
        width:"165px",
        placeholder: '请输入企业微信'     //支持提示文案
    }]
}