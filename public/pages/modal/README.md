### 2. 方法

* #### 警告：Modal.alert(msg, callback, options)
* #### 提示：Modal.tip(msg, callback, delay, options)
* #### 确认：Modal.confirm(msg, callback, options)
* #### 自定义：Modal.open(options)
* #### 关闭：Modal.close(id)

### 3. 使用说明

#### 3.1 Modal.alert(msg, callback, options) 

> 如果 第二个参数为点击确定按钮时的回调函数, 当callback 类型不是 function时，则方法解析参数规则为 Modal.tip(msg, options)

#### 3.1.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

#### 3.1.2 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| msg        | 提示内容           | string       | -        |
| callback    | 点击确定按钮的回调函数      | function       | -    |
| options     | 其他配置（ 参考 Modal.open() 说明）   | object | － | 

#### 3.1.3 使用示例
	
	import React, { Component } from 'react'
	import Modal from '@meili/base-merchant-component/lib/modal';
	
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

> 如果 第二个参数为点击确定按钮时的回调函数, 当callback 类型不是 function时，则方法解析参数规则为 Modal.tip(msg, delay, options)

#### 3.2.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

#### 3.2.2 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| msg        | 提示内容           | string       | -        |
| callback    | 点击确定按钮的回调函数      | function       | -    |
| delay    | 延时关闭时间（ 单位 ms ）     | number       | 800    |
| options     | 其他配置（ 参考 Modal.open() 说明）   | object | － | 

#### 3.2.3 使用示例
	
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

#### 3.3.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

#### 3.3.3 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| msg        | 提示内容           | string       | -        |
| callback    | 点击确定按钮的回调函数      | function       | -    |
| options     | 其他配置（ 参考 Modal.open() 说明）   | object | － | 

#### 3.3.3 使用示例
	
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
			
			/**
             * Open a confirm modal
             * @param {string} msg
             * @param {function} [callback=_.noop]
             * @param {object} [params] Modal设置（title、class、id,theme等）
             */
			Modal.confirm('这是确认弹出层', () => {
            			Modal.close();  // 回调方法
            		}, {
            		    theme: 'warning'
            		})
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

#### 3.4.1 返回值

> modalId, 用于关闭弹出层 Modal.close( modalId );

#### 3.4.2 options 参数说明

> options 类型为 object

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| title        | 弹出层title          | string       | -        |
| body         | 内容区               | html         | -        |
| footer       | 按钮操作区           | html       | -        |
| callback     | 点击确定时的回调函数（alert, confirm点确定时的回调; tip消失后的回调)| function     | － | 
| beforeClose  | 关闭前执行函数         | function     | － | 
| className    | 样式名(v1.0.0 废弃不用)               | string       | -        | 
| isAbsolute   | 是否绝对定位 (v1.0.0 废弃不用)         | boolean     | false | 
| showMask     | 是否显示透明遮层       | boolean | true | 
| closeByMask  | 是否点击透明遮层关闭弹出层   | boolean | false | 
| theme  | 皮肤 （v1.0.0新增）   | string | 'primary' | 


** 皮肤可选项有 'primary', 'danger', 'info', 'warning', 'bark'; 默认为theme

#### 3.4.3 静态方法

具体使用参见示例 3.4.5 使用示例2

     /**
      * 说明: 根据id更新 title
      * @param1 title  类型:jsx
      * @param2 modalId 类型: Modal的id值
      */
     Modal.updateTitle(title, modalId);
        
     / **
     * 根据id更新 body
     * @param1 body 类型:jsx
     * @param2 modalId 类型: Modal的id值
     */
     Modal.updateBody(body, modalId); 
    
    /**
     * 根据id更新 footer
     * @param1 footer 类型:jsx
     * @param2 modalId 类型: Modal的id值
     */
    Modal.updateFooter(footer,modalId);
			
#### 3.4.4使用示例1
	
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

#### 3.4.5 使用示例2
```
/* 示例: body里内容的修改后,可立即更新。 */

import React, { Component } from 'react';
import Modal from 'source_path/modal';
import Readme from './README.md';

export default class ModalView extends Component {
	constructor () {
			super();
			this.state = { openModal: '',  goodsList:[ ]}
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
			)
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
			Modal.updateBody(str, self.state.openModal);    //updateBody
			Modal.updateTitle('获取完数据',self.state.openModal);    //updateTitle方法
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

			setTimeout(function(){
				let str = self.rendBody();
				Modal.updateBody(str, self.state.openModal);    //updateBody
				Modal.close(confirm1);
			}, 0);
		})
	}
	render () {
        return (
            <div>
                <button onClick={ (e) => { this.openModal() }}>显示弹出框</button>
            </div>
        )
    }
}


```

#### 3.5 Modal.close(modalId) 

> 关闭弹出层

#### 3.5.1 使用示例
	
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
                    </div>
                ),
                footer: (
                    <div>
                        <button className="btn btn-sm btn-primary-border mr" onClick={ (e) => this.closeModal(modalId) }>取消</button>
                        <button className="btn btn-sm btn-primary" onClick={ (e) => this.closeModal(modalId) }>确认</button>
                    </div>
                ),
                isAbsolute: false,
                showMask: true,
                closeByMask: false
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
