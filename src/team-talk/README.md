# TeamTalk
> 唤起多多花朵-联系在线客服

## 使用

### 基本用法

	import React, { Component } from 'react'
	import UpModal from '@meili/base-merchant-component/upModal'
	
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

	
## Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| title        | 标题           | string       | 如果没有设置title，则不显示默认的头部         |
| size          | 弹出层大小        | string 可填写 'large','middle','small'       | middle    |
| children     | 子节点| html | -   |

## function

> 通过refs获取Modal实例调用的方法

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| close        | -           | -       |
| open          | -        | -       | 





