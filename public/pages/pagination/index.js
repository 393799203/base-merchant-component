import React, { Component } from 'react';
import Pagination from 'source_path/pagination';
import Readme from './README.md';

export default class PaginationView extends Component {
	constructor () {
		super();
		this.state = {
			currentPage: 1,
			totalPage: 20,
			onChangePage: this.changePage.bind(this)
		};
	}
	componentDidMount () {
		
	}
	changePage (current){
		this.setState({ currentPage: current });
	}
	render () {
		return (
			<div className="m-b-lg m-l m-r">
				<h1>
					分页 - Pagination
				</h1>
				<h2>
					1. 示例
				</h2>
				<Pagination {...this.state} /> 
				<br/>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
				</div>
			</div>
		)
	}
}

