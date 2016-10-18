import React, { Component } from 'react';
import ProcessBar from 'source_path/process-bar';
import Readme from './README.md';

export default class ProcessBarView extends Component {
	constructor () {
		super();
		this.state = {
			stepTp: ['第一步', '第二步', '第三步', '第四步', '第五步'],
			stepBt: ['第一步描述', '第二步描述', '第三步描述', '第四步描述', '第五步描述'],
			cur: 3
		};
	}
	componentDidMount () {
		
	}
	
	render () {
		return (
			<div className="m-b-lg m-l m-r">
				<h1>
					进度条 - ProcessBar
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t m-b">
				 	<ProcessBar 
				 		stepTp={this.state.stepTp} 
				 		stepBt={this.state.stepBt}
				 		cur={this.state.cur}/>
				 	<ProcessBar 
				 		stepTp={this.state.stepTp} 
				 		cur={this.state.cur}/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
				</div>
			</div>
		)
	}
}