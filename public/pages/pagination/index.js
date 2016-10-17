import React, { Component } from 'react';
import Pagination from 'source_path/pagination/Pagination';
import Readme from './README.md';

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
    	// 当前点击页面
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
				 		isEnd={this.state.isEnd}
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