## 2 示例代码
    import React, { Component } from 'react';
    import Pager from '@meili/base-merchant-component/lib/pager';

    export default class PagerView extends Component {
        constructor (props) {
            super(props);
            this.state = {
                currentPage: 1,
                totalPage: 20,
                onChangePage: this.changePage.bind(this)
            };
        }
        componentDidMount () {
        }
        changePage (currentPage) {
            this.setState({ currentPage });
        }
        render () {
            const { currentPage, totalPage, onChangePage } = this.state;
            return (
                <Pager
                  currentPage={currentPage}
                  totalPage={totalPage}
                  onChangePage={onChangePage}
                />
            );
        }
    }

## 3. 参数说明

| 参数        |  是否必填        |说明           | 类型         |  备注       |   默认       |  
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| className | -  | 组件最外层包裹的样式         | string       | 如果你需要重写样式时使用     | mc-pager  |
| currentPage| 必填    |当前页   | number | - |  1| 
| totalPage   | 必填    |总页数   | number | - |  1| 
| onChangePage  | -   |点击上一页，下一页的回调函数   | function | - |  － | 
| preText  | - |上一页按钮内容   | string，node | 可以传入字符串或者html | 上一页 | 
| nextText  | - |下一页按钮内容   | string，node | 可以传入字符串或者html | 下一页 | 
| link  |- |页面直接跳转链接   | string | 如果link有值，则点击按钮就不执行回调，直接跳转页面 | － | 
| linkParam  |- |链接拼接参数   | string | 如果 currentPage = 2, link = 'http://www.mogujie.com', linkParam = 'page' 下一页按钮的跳转链接为：'http://www.mogujie.com?page=3' | page | 


