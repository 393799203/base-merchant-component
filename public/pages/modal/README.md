## 2. 方法

1. ##### 警告：Modal.alert(msg, callback, options)
* ##### 提示：Modal.tip(msg, callback, delay, options)
* ##### 确认：Modal.comfirm(msg, callback, options)
* ##### 自定义：Modal.open(options)
* ##### 关闭：Modal.close(id)

## 3. 使用说明

#### 3.1 Modal.alert(msg, callback, options) 

> 如果 第二个参数 callback 类型不是 function，则方法解析参数规则为 Modal.tip(msg, options)

##### 3.1.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

##### 3.1.2 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| msg        | 提示内容           | string       | -        |
| callback    | 点击确定按钮的回调函数      | function       | -    |
| options     | 其他配置（ 参考 Modal.open() 说明）   | object | － | 

##### 3.1.3 使用示例
	
	import React, { Component } from 'react'
	import Modal from '@meili/base-merchant-component/lib/modal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		alertModal () {
			Modal.alert('这是弹出提示');
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.alertModal() }}>显示弹出框</button>
				</div>
			)
		}
	}

#### 3.2 Modal.tip(msg, callback, delay, options) 

> 如果 第二个参数 callback 类型不是 function，则方法解析参数规则为 Modal.tip(msg, delay, options)

##### 3.2.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

##### 3.2.2 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| msg        | 提示内容           | string       | -        |
| callback    | 点击确定按钮的回调函数      | function       | -    |
| delay    | 延时关闭时间（ 单位 ms ）     | number       | 800    |
| options     | 其他配置（ 参考 Modal.open() 说明）   | object | － | 

##### 3.2.3 使用示例
	
	import React, { Component } from 'react'
	import Modal from '@meili/base-merchant-component/lib/modal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		showTipModal () {
			Modal.tip('2000ms 后消失', 2000);
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showTipModal() }}>显示弹出框</button>
				</div>
			)
		}
	}

#### 3.3 Modal.confirm(msg, callback, options) 

##### 3.3.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

##### 3.3.3 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| msg        | 提示内容           | string       | -        |
| callback    | 点击确定按钮的回调函数      | function       | -    |
| options     | 其他配置（ 参考 Modal.open() 说明）   | object | － | 

##### 3.3.3 使用示例
	
	import React, { Component } from 'react'
	import Modal from '@meili/base-merchant-component/lib/modal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		showConfirmModal () {
			var modalId = Modal.confirm('这是确认弹出层', () => {
				Modal.close(modalId);
			});
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showConfirmModal() }}>显示弹出框</button>
				</div>
			)
		}
	}

#### 3.4 Modal.open(options) 

##### 3.4.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

##### 3.4.2 options 参数说明

> options 类型为 object

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| title        | 弹出层title          | string       | -        |
| body         | 内容区               | html         | -        |
| className    | 样式名               | string       | -        | 
| callback     | 关闭回调函数          | function     | － | 
| beforeClose  | 关闭前执行函数         | function     | － | 
| isAbsolute   | 是否绝对定位          | boolean     | false | 
| showMask     | 是否显示透明遮层       | boolean | true | 
| closeByMask  | 是否点击透明遮层关闭弹出层   | boolean | false | 

##### 3.4.3 使用示例
	
	import React, { Component } from 'react'
	import Modal from '@meili/base-merchant-component/lib/modal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		openModal () {
			var modalId = Modal.open({
				title: '自定义弹出层',
				body: (
					<div>
						<p>这是内容区</p>
					</div>
				)
			});
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.openModal() }}>显示弹出框</button>
				</div>
			)
		}
	}



#### 3.5 Modal.close(modalId) 

> 关闭弹出层

##### 3.5.1 使用示例
	
	import React, { Component } from 'react'
	import Modal from '@meili/base-merchant-component/lib/modal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
			this.state = { modalId: ''}
		}
		openModal () {
			var modalId = Modal.open({
				title: '自定义弹出层',
				body: (
					<div>
						<p>这是内容区</p>
						<button onClick={ (e) => this.closeModal(modalId) }>关闭</button>
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
			return (
				<div>
					<button onClick={ (e) => { this.openModal() }}>显示弹出框</button>
				</div>
			)
		}
	}
