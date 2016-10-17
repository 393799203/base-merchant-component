## 2. 使用说明
#### 2.1 有标题 UpModal 使用

	import React, { Component } from 'react'
	import UpModal from '@meili/base-merchant-component/lib/upmodal/upModal';
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		showModal () {
			this.refs.forModal.open();
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showModal() }}>显示弹出框</button>
					<UpModal 
						ref='forModal'
						size='large'				
						title='弹出层' >
						这个是弹出层
					</UpModal>
				</div>
			)
		}
	}

#### 2.2 无标题 UpModal 使用
> 如果没有设置title，则不显示默认的头部; 如果设置onClose属性，关闭弹出层时则执行该回调函数。

	import React, { Component } from 'react'
	import UpModal from '@meili/base-merchant-component/lib/upModal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		showModal () {
			this.refs.forModal.open();
		}
		closeCallback () {
			alert( '关闭时执行的回调函数' );
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showModal() }}>显示弹出框</button>
					<UpModal
						onClose={ this.closeCallback } 
						ref='forModal'
						size='small'>
						无标题弹出层
					</UpModal>
				</div>
			)
		}
	}

#### 2.3 定时关闭 UpModal 使用
> 如果传入定时关闭属性 duration, 单位毫秒（ms）, 则执行定时关闭功能; 否则不执行定时关闭功能。

	import React, { Component } from 'react'
	import UpModal from '@meili/base-merchant-component/lib/upModal'
	
	export default class ModalView extends Component {
		constructor () {
			super();
		}
		showModal () {
			this.refs.forModal.open();
		}
		render () {
			return (
				<div>
					<button onClick={ (e) => { this.showModal() }}>显示弹出框</button>
					<UpModal
						duration='2000'
						ref='forModal'
						size='small'>
						定时关闭
					</UpModal>
				</div>
			)
		}
	}
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| title        | 标题           | string       | 如果没有设置title，则不显示默认的头部         |
| size          | 弹出层大小，可填写 'large', 'normal', 'small'       | string       | normal    |
| children     | 子节点| html | -   |
| onClose     | 关闭弹出层时执行的回调函数| function | -   |
| duration | 定时关闭时间（ms），如果没有传入这个属性，则不执行定时关闭功能| number | -   |

## 4. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| close        | -           | -       |
| open          | -        | -       | 





