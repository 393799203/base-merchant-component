import React, { Component } from 'react'
import Notification from 'source_path/notification/index'
import Readme from './README.md';

export default class NotificationView extends Component {
	constructor () {
		super();
	}
	showNotice () {
		Notification.open({
  			message: '这是中间提示',
  			duration: 2000,
  			position: 'center'
		});
	}
	showRightNotice () {
		Notification.open({
  			message: '这是右上角提示',
  			duration: 2000,
  			position: 'right'
		});
	}
	showCustomNotice () {
		Notification.open({
  			message: '这是自定义位置提示',
  			duration: 2000,
  			position: 'custom',
  			style: {
  				top: '100px',
  				left:  '30%', 
  				marginLeft: '-150px'
  			}
		});
	}
	render () {
		return <div className="m-b-lg m-l m-r">
			<h1>
				提示 - Notification
			</h1>
			<h2>
				1. 示例
			</h2>
			<div className="m-t m-b">
			 	<button 
			 		onClick={ (e) => this.showNotice() }
			 		className="btn btn-success-custom w-sm">
			 		中间提示
			 	</button>
			 	<button 
			 		onClick={ (e) => this.showRightNotice() }
			 		className="btn btn-info-custom w-sm m-l">
			 		右上角提示
			 	</button>
			 	<button 
			 		onClick={ (e) => this.showCustomNotice() }
			 		className="btn btn-warning-custom w-sm m-l">
			 		自定义提示
			 	</button>
			</div>
			<div dangerouslySetInnerHTML={{ __html: Readme }}>
			</div>
		</div>
	}
}