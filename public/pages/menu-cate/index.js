import React, { Component } from 'react';
import Menu from 'source_path/menu-cate';
import Readme from './README.md';

export default class MenuView extends Component {
    constructor () {
        super();
        var data = this.getData();
        this.state = { menus: data }
    }
    getData () {
        return  [
            {
                "id": 16,
                "title": "新手开店",
                "link": "http://www.mogujie.com/",
                "items": [
                    {
                        "id": 29,
                        "title": "基础运营",
                        "link": "http://www.mogujie.com/",
                        "titleColor": "#FF5557"
                    },
                    {
                        "id": 1,
                        "title": "开店流程",
                        "link": "http://peixun.xiaodian.com/list?ptp=1.TH8znb.0.0.zkzJH#pid=-1&cid=29&page=1"
                    },
                    {
                        "id": 30,
                        "title": "营销推广",
                        "link": "http://www.mogujie.com/"
                    },
                    {
                        "id": 2,
                        "title": "店铺设置",
                        "link": "http://www.mogujie.com/",
                        "titleColor": "#FF5557"
                    },
                    {
                        "id": 3,
                        "items": null,
                        "title": "店铺装修",
                        "link": "http://www.mogujie.com/"
                    },
                    {
                        "id": 4,
                        "items": null,
                        "title": "平台规则",
                        "link": "http://www.mogujie.com/"
                    }
                ]
            },
            {
                "id": 24,
                "title": "特色课程",
                "link": "http://www.mogujie.com/",
                "items": [
                    {
                        "id": 25,
                        "link": "http://www.mogujie.com/",
                        "title": "直播回顾"
                    },
                    {
                        "id": 26,
                        "link": "http://www.mogujie.com/",
                        "title": "蘑菇小课"
                    },
                    {
                        "id": 27,
                        "link": "http://www.mogujie.com/",
                        "title": "时尚频道"
                    }
                ]
            }];
    }

    render () {
        var { md } = this.state;
        return (
            <div className="m-l m-r m-b-xxl">
                <h1>
                    类目菜单（小店） - MenuCate
                    <a href="mactt://message/user/03084" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例1
                </h2>
                <div className="m-b m-t">
                    <h2>示例1: 默认样式</h2>
                    <Menu menus={this.state.menus} />

                    <h2>示例2: 配置样式</h2>
                    <div style={{backgroundColor:'#fd7575'}}>
                        <Menu menus={this.state.menus} width={'225px'} height={'300px'} menuBackground={'#FF5555'} menuItemColor={'#fff'} menuItemHoverBg={'#EB362F'} menuItemBorderColor={'#eee'} />
                    </div>

                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }}>

                </div>
            </div>
        )
    }
}