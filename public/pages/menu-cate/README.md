### 2. 使用说明

```
import React, { Component } from 'react';
import Menu from '@meili/base-merchant-component/lib/menu-cate';

export default class MenuView extends Component {
    constructor () {
        super();
        var data = this.getData();
        this.state = { menus: data }
    }
    getData () {
        //此处可返回ajax获取的数据
        //数据里的title,link是必须的, id和titleColor可有可无
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
                        "titleColor": "#FF0077"
                    },
                    {
                        "id": 1,
                        "title": "开店流程",
                        "link": "http://peixun.xiaodian.com/list?ptp=1.TH8znb.0.0.zkzJH#pid=-1&cid=29&page=1"
                    },
                    {
                        "id": 30,
                        "title": "营销推广",
                        "link": "http://www.mogujie.com/",
                        "titleColor": "#FF0077"
                    },
                    {
                        "id": 2,
                        "title": "店铺设置",
                        "link": "http://www.mogujie.com/"
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

        return (
            <div >
               <h2>示例1: 默认样式</h2>
               <Menu menus={this.state.menus} />

               <h2>示例2: 配置样式</h2>
               <div style={{backgroundColor:'#fd7575'}}>
                   <Menu menus={this.state.menus} width={'225px'} height={'300px'} menuBackground={'#FF5555'} menuItemColor={'#fff'} menuItemHoverBg={'#EB362F'} menuItemBorderColor={'#eee'} />
               </div>
            </div>
        )
    }
}


```

### 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| menus        | 数据,内容参看上面的例子| 数组   |  []       |
| width        | 主菜单的宽      | string      |  '225px'       |
| height       | 主菜单的宽      | string      |  '350px'      |
| menuBackground | 主菜单的背景色  | string     |  '#494757'      |
| menuItemHoverBg | 主菜单项的hover色  | string     |  '#34323d'      |
| menuItemBorderColor|  主菜单项下面横线色  | string     |  '#4f4d5c'      |
