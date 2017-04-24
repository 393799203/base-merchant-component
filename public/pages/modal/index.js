/* eslint-disable */

import React, { Component } from 'react';
import Modal from 'source_path/modal';
import Readme from './README.md';

export default class ModalView extends Component {
	constructor () {
			super();
			this.state = { openModal: '',  goodsList:[ ]}
	}
	showTipModal () {
		Modal.tip('2000ms 后消失', 2000);
	}
	showModal () {
		Modal.alert('这是alert提示');
	}
	showConfirmModal () {
		Modal.confirm('这是确认弹出层', () => {
			Modal.closeAll();
		})
	}
	openModal () {
		var self = this;
		var str = self.rendBody();

		var openModal = Modal.open({
			title: '自定义弹出层',
			body: str,
			footer: (
				<div>
					<button className="btn btn-sm btn-primary-border m-r" onClick={ (e) => this.closeOpenModal(openModal) }>取消</button>
					<button className="btn btn-sm btn-primary" onClick={ (e) => this.closeOpenModal(openModal) }>确认</button>
				</div>
			),
			showMask: true,
			closeByMask: false
		});
		this.setState({ openModal: openModal });

	}
	closeOpenModal () {
		var openModal = this.state.openModal;
		if (!openModal) { return; }
		Modal.close( openModal );
	}
	rendBody () {
		var self = this;
		return (
			<div>
				<p>这是内容区</p>
				<button className="btn btn-sm btn-primary-border m-r" onClick={ (e) => this.getAjax() }>测试,获取ajax数据</button>
				<ul>
					{
						self.state.goodsList.map(function(item, i){
							return (
								<li key={i} >
									id:{item.id}, name:{item.name}, price: {item.price}
									<a href="javascript:void(0)" onClick={(e) => self.handleDelete(item.id, item.name)} >删除</a>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
	getAjax () {
		var self = this;
		let list = [
			{id: 1, name: '连衣裙', price: 329.00},
			{id: 2, name: '上衣', price: 120.00},
			{id: 3, name: '裤子', price: 80.00}
		];
		this.setState({goodsList: list});
		// setTimeout是为了让 setSate立即执行
		setTimeout(function(){
			let str = self.rendBody();
			Modal.updateBody(str, self.state.openModal);
			Modal.updateTitle('获取完数据',self.state.openModal);
		}, 0);

	}

	handleDelete (id,name) {
		let self = this;

		let confirm1 = Modal.confirm(`id:${id} name: ${name}, 确定要删除吗?`, () => {
			let list = self.state.goodsList.filter((item) => {
				return item.id !== id;
			});

			self.setState({
				goodsList: list
			});
			// setTimeout是为了让 setSate立即执行
			setTimeout(function(){
				let str = self.rendBody();
				Modal.updateBody(str, self.state.openModal);
				Modal.close(confirm1);
			}, 0);
		})
	}
	render () {
		var { md } = this.state;
		return (
			<div className="m-l m-r m-b-xxl">
				<h2 className='p-b-5 b-b dashed'>
					弹框（小店） - Modal
					<a href="mactt://message/user/03084" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<div className="m-b m-t">
					<button
						tabIndex='2'
						className="btn btn-info-border"
						onClick={ (e) => { this.showTipModal() }}>
						Modal.tip()
					</button>

					<button
						tabIndex='3'
						className="btn btn-success-border m-l"
						onClick={ (e) => { this.showModal() }}>
						Modal.alert()
					</button>
					<button
						className="btn btn-danger-border m-l"
						onClick={ (e) => { this.showConfirmModal() }}>
						Modal.confirm()
					</button>
					<button
						tabIndex='4'
						className="btn btn-primary-border m-l"
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
