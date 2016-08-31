import React, { Component } from 'react';
import Confirm from 'source_path/confirm/index';
import ConfirmReadme from './README.md';

export default class ConfirmView extends Component {
	constructor () {
		super();
	}
	showConfirm () {
		this.refs.confirm.ensure( ensure => {
		
        	// 点击确认按钮的回调函数
        	alert(ensure);
        	
    	}, '点击确认按钮的参数',cancel => {
    	
    		// 点击取消按钮的回调函数
    		alert(cancel);
    		
    	}, '点击取消按钮的参数');
	}
	showNormalConfirm () {
    	this.refs.normalConfirm.ensure( ensure => {
		
        	// 点击确认按钮的回调函数
        	alert(ensure);
        	
    	}, '点击确认按钮的参数');
	}
	render () {
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					确认弹出层 - Confirm
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t m-b">
					<button className="btn btn-success-custom w-sm" onClick={ (e) => { this.showConfirm() }}>
						自定义 - Confirm
					</button>
					<Confirm
						btnTexts={{
							ensureText : '使用草稿',
	            			cancelText : '重新编辑'
						}}  
						title="友情提示"
						ref="confirm">
							点击使用草稿，重新编辑分别执行相应回调
					</Confirm>

					<button className="btn btn-info-custom w-sm m-l" onClick={ (e) => { this.showNormalConfirm() }}>
						普通 - Confirm
					</button>
					<Confirm
						title="普通警告"
						ref="normalConfirm">
							这是普通警告弹出层
					</Confirm>
				</div>
				<div dangerouslySetInnerHTML={{ __html: ConfirmReadme }}>
					
				</div>
			</div>
		)
	}
}