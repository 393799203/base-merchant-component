export default {
    options:[{
        type: 'text',
        label: '公司名称：',
        name: 'companyName',
        required: true,
        placeholder: '请输入公司名称',
        errorMsg:"请输入公司名称",
        subInfo:"必须跟营业执照上相同"
    },{
        type:'address',  //类型
        label:'公司住所：',  //文案
        required: true,
        // defaultValue:{
        //     province: "上海",
        //     city:"上海市",
        //     area:"卢湾区"
        // },
        name: 'address',
        subInfo:"必须跟营业执照上相同",
        placeholder: '请输入公司住所',
        errorMsg:"请输入公司住所"
    },{
        type: 'text',
        label: '社会统一信用代码：',
        name: 'uniscid',
        placeholder: '请输入社会统一信用代码',
        errorMsg:"请输入社会统一信用代码"
    },{
        type: 'text',
        label: '注册号：',
        name: 'linceNo',
        placeholder: '请输入注册号',
        errorMsg:"请输入注册号",
        subInfo:"社会统一信用代码和注册号必须填写一项，且必须和营业执照上相同"
    },{
        type:'uploadBox',  //类型
        label:'公司营业执照：',  //文案
        required: true,
        attrs:{
            mostImg:1
        },
        demoImg:"//s10.mogucdn.com/p1/160712/upload_ie4tsobqmi3tindchezdambqgqyde_800x600.jpg",
        grid:1,
        errorMsg:'请上传公司营业执照',
        name: 'companyLicense'    //生成数据对应的字段
    },{
        type:'uploadBox',  //类型
        label:'组织机构代码证：',  //文案
        required: true,
        attrs:{
            demoImg:"//s10.mogucdn.com/p1/160712/upload_ifqtimjrge4tindchezdambqgyyde_1588x1138.jpg",
            mostImg:1
        },
        grid:1,
        
        name: 'companyCode'    //生成数据对应的字段
    },{
        type:'uploadBox',  //类型
        label:'税务登记证：',  //文案
        required: true,
        attrs:{
            mostImg:1,
            demoImg:"//s10.mogucdn.com/p1/160712/upload_ie4wey3dme4tindchezdambqgqyde_1000x731.jpg"
        },
        grid:1,
        name: 'companyTax'    //生成数据对应的字段
    },{
        type:'uploadBox',  //类型
        label:'银行开户许可证：',  //文案
        required: true,
        attrs:{
            demoImg:"//s10.mogucdn.com/p1/160712/upload_ifrdcojtg5qtindchezdambqmeyde_1244x926.jpg",
            mostImg:1
        },
        grid:1,
        name: 'companyBank'    //生成数据对应的字段
    }]
}