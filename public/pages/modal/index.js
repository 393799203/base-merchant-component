import React, { Component } from 'react';
import Modal from 'source_path/modal';
import Readme from './README.md';

export default class ModalView extends Component {
	constructor () {
		super();
		this.state = {};
	}
	showModal () {
		Modal.alert('aa');
	}
	showTipModal () {
		
	}
	closeTipModal () {
		
	}
	closeCallback () {
		
	}
	showTimeModal () {
		
	}
	render () {
		var { md } = this.state;
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					弹框 - Modal
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-b m-t">
					<button
						className="btn btn-success-custom w-sm m-r" 
						onClick={ (e) => { this.showModal() }}>
						有标题 - Modal
					</button>
					

					<button
						className="btn btn-info-custom w-sm" 
						onClick={ (e) => { this.showTipModal() }}>
						无标题 - Modal
					</button>
					

					<button
						className="btn btn-warning-custom w-sm m-l" 
						onClick={ (e) => { this.showTimeModal() }}>
						定时关闭 - Modal
					</button>
					
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
		)
	}
}