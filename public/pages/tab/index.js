import React, { Component } from 'react';
import Tab from 'source_path/tab';
import Readme from './README.md';

export default class TabView extends Component {
	constructor () {
		super();
		this.state = {
			tabId: 0,
			options:[
				{text:'标签页 1',link: this.changeTab.bind(this)},
				{text:'标签页 2',link: this.changeTab.bind(this)},
				{text:'蘑菇街首页',link: "http://www.mogujie.com"}
			]
		};
	}
	changeTab (item, index){
		this.setState({ tabId: index })
	}
	componentDidMount () {
		
	}
	render () {
		return (
			<div className="m-b-lg m-l m-r">
				<h1>
					标签页 - Tab
				</h1>
				<h2>
					1. 示例
				</h2>
				<Tab list={this.state.options} active={this.state.tabId} /> 
				<br/>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
				</div>
			</div>
		)
	}
}