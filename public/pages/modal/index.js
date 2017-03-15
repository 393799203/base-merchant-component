/* eslint-disable */

import React, { Component } from 'react';
import Modal from 'source_path/modal';
import Readme from './README.md';

export default class ModalView extends Component {
	constructor () {
			super();
			this.state = { modalId: ''}
	}
	showTipModal () {
		Modal.tip('2000ms 后消失', 2000);
	}
	showModal () {
		Modal.alert('这是alert提示');

		// setTimeout(function(){
		// 	Modal.updateTitle('kkskdkdkdk');
		// },1000)
	}
	showConfirmModal () {
		Modal.confirm('这是确认弹出层', () => {
			Modal.close();
		})
	}
	openModal () {
		var modalId = Modal.open({
			title: '自定义弹出层',
			body: (
				<div>
					<p>这是内容区</p>
				</div>
			),
			footer: (
				<div>
					<button className="btn btn-sm btn-primary-border mr" onClick={ (e) => this.closeModal(modalId) }>取消</button>
					<button className="btn btn-sm btn-primary" onClick={ (e) => this.closeModal(modalId) }>确认</button>
				</div>
			)
		});
		this.setState({ modalId: modalId });
	}
	closeModal () {
		var modalId = this.state.modalId;
		if (!modalId) { return; }
		Modal.close( modalId );
	}
	
	render () {
		var { md } = this.state;
		return (
			<div className="ml mr mb-xxl">
				<h2 className='pb-5 b-b dashed'>
					弹框（小店） - Modal
					<a href="mactt://message/user/03084" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<div className="mb mt">
					<button
						className="btn btn-info-border w"
						onClick={ (e) => { this.showTipModal() }}>
						Modal.tip()
					</button>

					<button
						className="btn btn-success-border w ml"
						onClick={ (e) => { this.showModal() }}>
						Modal.alert()
					</button>

					<button
						className="btn btn-danger-border w ml" 
						onClick={ (e) => { this.showConfirmModal() }}>
						Modal.confirm()
					</button>

					<button
						className="btn btn-primary-border w ml" 
						onClick={ (e) => { this.openModal() }}>
						Modal.open()
					</button>
					
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
		)
	}
}
/* eslint-enable */
