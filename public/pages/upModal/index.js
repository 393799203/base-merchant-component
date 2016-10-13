import React, { Component } from 'react';
import UpModal from 'source_path/upmodal/upModal';
import Readme from './README.md';

export default class UpModalView extends Component {
	constructor () {
		super();
		this.state = {};
	}
	showModal () {
		this.refs.forModal.open();
	}
	showTipModal () {
		this.refs.forTipModal.open();
	}
	closeTipModal () {
		this.refs.forTipModal.close();
	}
	closeCallback () {
		alert( '点击关闭按钮时的回调函数' );
	}
	showTimeModal () {
		this.refs.forTimeModal.open();
	}
	render () {
		var { md } = this.state;
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					弹框 - UpModal
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-b m-t">
					<button
						className="btn btn-success-custom w-sm m-r" 
						onClick={ (e) => { this.showModal() }}>
						有标题 - UpModal
					</button>
					<UpModal 
						ref='forModal'
						size='normal'				
						title='弹出层' >
						这个是弹出层
					</UpModal>

					<button
						className="btn btn-info-custom w-sm" 
						onClick={ (e) => { this.showTipModal() }}>
						无标题 - UpModal
					</button>
					<UpModal
						onClose={ this.closeCallback } 
						ref='forTipModal'
						size='small'>
						
						<p>无标题，有回调的弹出层</p>

						<p className="text-center">
							<button
								onClick={ (e) => this.closeTipModal(e) } 
								className="btn btn-default">
								关闭
							</button>
						</p>
					</UpModal>

					<button
						className="btn btn-warning-custom w-sm m-l" 
						onClick={ (e) => { this.showTimeModal() }}>
						定时关闭 - UpModal
					</button>
					<UpModal
						duration='2000'
						ref='forTimeModal'
						size='small'>
						2000ms后定时关闭 - 弹出层
					</UpModal>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
		)
	}
}