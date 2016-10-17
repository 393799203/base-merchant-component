## 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| currentPage (必填)       | 当前页           | number       | -        |
| totalPage    | 总页数      | number       | -    |
| display_num     | 显示数字的页码数   | number | 4 | 
| onChangePage     | 页面点击回调函数   | function | - | 
| link     | 页面直接跳转链接   | string | - | 

#### 2.2 使用示例
	import React, { Component } from 'react';
	import Pagination from '@meili/base-merchant-component/lib/pagination/Pagination';
	export default class PaginationView extends Component {
		constructor () {
			super();
			this.state = {
				currentPage: 1,
				totalPage: 8
			};
		}
		componentDidMount () {
			
		}
		handleChangePage (page) {
	    	this.setState({ currentPage: page });
	    }
		render () {
			return (
				<div className="m-b-lg m-l m-r">
					<h1>
						翻页 - Pagination
					</h1>
					<h2>
						1. 示例
					</h2>
					<div className="m-t m-b">
					 	<Pagination 
					 		currentPage={this.state.currentPage} 
					 		totalPage={this.state.totalPage} 
					 		onChangePage={this.handleChangePage.bind(this)}/>
					</div>
					<div dangerouslySetInnerHTML={{ __html: Readme }}>
					</div>
				</div>
			)
		}
	}
	





