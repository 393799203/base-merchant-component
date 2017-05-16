export default {
    options:[{
        type: 'text',
        label: '姓名：',
        name: 'contactName',
        required: true,
        grid:1,
        width:"165px",
        placeholder: '请输入姓名',
        errorMsg:"请输入姓名"
    },{
        type: 'text',
        label: '联系邮箱：',
        name: 'email',
        required: true,
        grid:1,
        width:"165px",
        placeholder: '请输入联系邮箱',
        errorMsg:"请输入联系邮箱"
    },{
        type: 'text',
        label: 'QQ账号：',
        name: 'contactQQ',
        required: true,
        grid:1,
        width:"165px",
        placeholder: '请输入QQ帐号',
        errorMsg:"请输入QQ帐号"
    },{
        type:'fullAddress',  //类型
        label:'所在地区：',  //文案
        required: true,
        name: 'location',
        placeholder: '请输入所在地区',
        errorMsg:"请输入所在地区"
    },{
        type: 'text',
        label: '企业微博：',
        name: 'contactWeibo',
        grid:1,
        width:"165px",
        placeholder: '请输入企业微博'     //支持提示文案
    },{
        type: 'text',
        label: '企业微信：',
        name: 'contactWeixin',
        grid:1,
        width:"165px",
        placeholder: '请输入企业微信'     //支持提示文案
    }],
    defaultValue:{
        contactName:'飞飞',
        contactQQ:'10000000',
        fullAddress:{
            province: "上海",
            city:"上海市",
            area:"卢湾区",
            street:"测试测试"
        },
    }
}