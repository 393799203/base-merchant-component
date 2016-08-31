## 2. 使用说明
#### 2.1 自定义 Confirm

	import React, { Component } from 'react'
	import Confirm from '@meili/base-merchant-component/lib/confirm/index'
	
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
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showConfirm() }}>
						显示Confirm
					</button>
					<Confirm
						btnTexts={{
							ensureText : '使用草稿',
                			cancelText : '重新编辑'
						}}  
						title="友情提示"
						ref="confirm">
							草稿箱中有未保存装修，是否使用草稿继续编辑？
					</Confirm>
				</div>
			)
		}
	}

#### 2.2 普通 Confirm

	import React, { Component } from 'react'
	import Confirm from '@meili/base-merchant-component/lib/confirm/index'
	
	export default class ConfirmView extends Component {
		constructor () {
			super();
		}
		showConfirm () {
			this.refs.confirm.ensure( ensure => {
			
            	// 点击确认按钮的回调函数
            	alert(ensure);
            	
        	}, '点击确认按钮的参数');
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showConfirm() }}>
						显示Confirm
					</button>
					<Confirm
						title="普通警告"
						ref="confirm">
							这是普通警告弹出层
					</Confirm>
				</div>
			)
		}
	}
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| title        | 标题           | string       | Confirm         |
| msg          | 弹窗消息        | string       | Confirm msg     |
| btnTexts     | 确认，取消按钮文案| object       | { ensureText : '确定',cancelText : '取消'}     |
| children     | 子节点,确认弹出层内容区,优先处理自节点,没子节点再显示msg| html, string | -   |

## 4. 方法 - Function

> 通过refs获取Confirm实例调用的方法

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| ensure       | ensureCb: 点击确定按钮的回调函数； ensureParam: 点击确认按钮回调函数的参数 ；cancelCb: 点击取消按钮的回调函数； cancelParam: 点击取消按钮回调函数的参数            | -       |






