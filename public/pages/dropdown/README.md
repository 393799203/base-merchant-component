### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |
| ------------ | ------------- | ------------ | ------------  |------------  |
| className       | css选择器    | string       | 需要自定义样式时使用   |   -  |
| options     | 下拉列表   | array | 具体查看 options 说明 |  [ ] |
| children     | 被dropdown标签包裹的代码片段   | node | 用于绑定点击事件（显示、隐藏下拉列表）的元素 |  - |
| handleClick     | 点击选项回调函数   | func | 返回参数 item, index, subItem, subIndex 后两项在有自选项时才返回 |  - |

#### 2.2 options 说明

> options 字段格式: `[{...}, {...}]`, 由于options里面的对象元素可选字段较多，单独说明

|  字段        | 说明           | 类型         |  备注       |   默认       |
| ------------ | ------------- | ------------ | ------------  |------------  |
| id       | 必填字段, 唯一标示    | －      |  － |   －  |
| text     | 必填字段, 文字描述   | － | － |  － |
| link     | 选项跳转链接   | － | 如果选项中传入link,则不执行回调函数 |  － |
| target     | 选项跳转方式，新开标签或是在当前页面打开 | － | － |  － |
| options     | 子选项 | [ ] | 其中字段和options一致，但是不支持三级选项 |  － |


#### 2.3 使用示例

    import React, { Component } from 'react';
    import Dropdown from '@meili/base-merchant-component/lib/dropdown';
    import Notification from '@meili/base-merchant-component/lib/notification';

    export default class DropdownView extends Component {
        constructor (props) {
            super(props);
            this.state = {
                options: [
                    {
                        id: 1,
                        text: '下拉选项1'
                    }, {
                        id: 2,
                        text: '下拉选项2',
                        options: [
                            {
                                id: 21,
                                text: '下拉选项21',
                            },{
                                id: 22,
                                text: '下拉选项22',
                            }

                        ]
                    }, {
                        id: 3,
                        text: '下拉选项3',
                        link: 'http://xiaodian.com'
                    }, {
                        id: 4,
                        text: '下拉选项4',
                        options: [
                            {
                                id: 41,
                                text: '子选项1'
                            },{
                                id: 42,
                                text: '子选项2'
                            },{
                                id: 43,
                                text: '子选项2'
                            }
                        ]
                    }
                ]
            };
        }
        handleClick (item, index, subItem, subIndex) {
            const str = JSON.stringify(item);
            Notification.info({message: str});
        }
        render () {
            const { options } = this.state;

            return (

                <div className='w-sm'>
                    <Dropdown options={options} handleClick={this.handleClick}>
                        <a className='btn btn-danger'>下拉</a>
                    </Dropdown>
                </div>
            );
        }
    }