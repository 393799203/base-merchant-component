### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| size      |大小,可选`normal`, `xs`, `sm`, `md` | string | sm |
| theme      | 主题色,可选 `danger`, `info`, `dark`, `success`, `warning` | string | danger |
| currentPage (必填)       | 当前页           | number       | -        |
| totalPage(必填)    | 总页数      | number       | -    |
| displayNum     | 显示数字的页码数   | number | 4 |
| onChangePage     | 页面点击回调函数   | function | - |
| link     | 页面直接跳转链接,如: 'http://www.mogujie.com?page='   | string | - |

#### 2.2 使用示例
	import React, { Component } from 'react';
	import Pagination from '@meili/base-merchant-component/lib/pagination';
	export default class PaginationView extends Component {
	    constructor (props) {
	        super(props);
	        this.state = {
	            currentPage: 1,
	            totalPage: 20,
	            onChangePage: this.changePage.bind(this)
	        };
	    }
	    changePage (current) {
	        this.setState({ currentPage: current });
	    }
	    render () {
	        const {currentPage, totalPage, onChangePage } = this.state;
	        return (
	            <div>
	                <Pagination
	                  totalPage={totalPage}
	                  currentPage={currentPage}
	                  onChangePage={onChangePage}
	                />
	            </div>
	        );
	    }
	}





