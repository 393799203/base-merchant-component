export default {
    options:[{
        type:'moduleTitle',  //类型
        title: "美妆开店经营资质补充"
    },{
        type:'labelList',  //类型
        defaultValue:[
            "1.化妆品生产厂商的化妆品卫生许可证复印件;",
            "2.化妆品生产厂商的化妆品生产许可证复印件；"
        ]
    },{
        type:'uploadBox',  //类型
        required: true,
        defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        name: 'uploadBoxtest'    //生成数据对应的字段
    },{
        type:'labelList',  //类型
        defaultValue:[
            "3.近一年内所有单品检测报告复印件；（如经营蘑菇街已有旗舰店的品牌，只需提供近一年内该品牌下一款产品检测报告复印件；否则，需提供近一年内所有单品检测报告复印件"
        ]
    },{
        type:'uploadList',  //类型
        disabled:false,
        value: '',
        defaultValue:[{url:"http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"}],
        name: 'uploadListtest',    //生成数据对应的字段
    },{
        type:'labelList',  //类型
        defaultValue:[
            "4.化妆品生产厂商的营业执照副本复印件",
            "5.若为委托加工，则需提供委托加工合同",
            "6.特殊用途化妆品需提交所有特殊用途化妆品卫生许可批件复印件。"
        ]
    },{
        type:'uploadBox',  //类型
        defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        name: 'uploadBoxtest'    //生成数据对应的字段
    },{
        type:'labelList',  //类型
        defaultValue:[
            "7.进口化妆品需要",
            "①近两年内中华人民共和国海关进口货物报关单复印件；",
            "②近两年内的商品出入境检验检疫卫生证书复印件；",
            "③所有中华人民共和国进口非特殊用途/特殊用途化妆品备案凭证复印件。"
        ]
    },{
        type:'uploadBox',  //类型
        defaultValue:["http://s2.mogucdn.com/p2/170227/67813645_7al3ek6hl0keklag08jbe4ccf108a_167x167.png"],
        name: 'uploadBoxtest'    //生成数据对应的字段
    }]
}