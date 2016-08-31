# Notification
> 提示信息弹出层

## 使用

### 基本用法

	import React, { Component } from 'react'
	import Notification from 'widgets_path/notification/index'
	
	export default class TipView extends Component {
		constructor () {
			super();
		}
		showNotice () {
			Notification.open({
      			message: '这是提示',
      			duration: 2 // 单位秒
			});
		}
		componentDidMount () {
			this.showNotice();
		}
		render () {
			return <div></div>
		}
	}
	

## function

> 通过Notification调用的方法

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| open          | message: 提示信息，默认空；duration: 延迟消失时间，默认3s      | -       | 





