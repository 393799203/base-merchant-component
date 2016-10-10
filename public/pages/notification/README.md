## 2. 使用说明

#### 2.1 中间提示

	import React, { Component } from 'react'
	import Notification from '@meili/base-merchant-component/lib/notification'
	
	export default class TipView extends Component {
		constructor () {
			super();
		}
		showNotice () {
			Notification.open({
      			message: '这是提示',
      			duration: 2000 // 单位毫秒
			});
		}
		componentDidMount () {
			this.showNotice();
		}
		render () {
			return <div></div>
		}
	}
	
#### 2.2 右上角提示

	import React, { Component } from 'react'
	import Notification from '@meili/base-merchant-component/lib/notification'
	
	export default class TipView extends Component {
		constructor () {
			super();
		}
		showNotice () {
			Notification.open({
      			message: '这是提示',
      			duration: 2000, // 单位毫秒
      			position: 'right'
			});
		}
		componentDidMount () {
			this.showNotice();
		}
		render () {
			return <div></div>
		}
	}

#### 2.3 自定义提示

	import React, { Component } from 'react'
	import Notification from '@meili/base-merchant-component/lib/notification'
	
	export default class TipView extends Component {
		constructor () {
			super();
		}
		showNotice () {
			Notification.open({
      			message: '这是提示',
      			duration: 2000, // 单位毫秒
      			position: 'custom',
      			style: {
      				top: '50px',
  					left:  '50%', 
  					marginLeft: '-150px'
      			}
			});
		}
		componentDidMount () {
			this.showNotice();
		}
		render () {
			return <div></div>
		}
	}

## 3. Function

> 通过Notification调用的方法

	Notification.open({
		message: '',
		duration: 3000, // 单位毫秒
		position: 'center',  // 可选 'center', 'right','custom'
		style: { ... }
	});

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| open          | message: 提示信息，默认空；duration: 延迟消失时间，默认3000ms；position: 提示显示的位置，可选 'center', 'right','custom', 默认 'center'；style: 如果position的值为'custom'时，提示显示的位置则使用style样式      | -       | 





