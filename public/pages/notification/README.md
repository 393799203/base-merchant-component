### 2. 示例代码

#### 2.1 错误提示

	Notification.error({
		message: '这是错误提示',
		duration: 2000 // 单位毫秒
	});

#### 2.2 成功提示

	Notification.success({
		message: '这是成功提示',
		duration: 2000 // 单位毫秒
	});

#### 2.3 警告提示

	Notification.warn({
		message: '这是警告提示',
		duration: 2000 // 单位毫秒
	});

#### 2.4 普通提示

	Notification.info({
		message: '这是普通提示',
		duration: 2000 // 单位毫秒
	});

#### 2.5 右上角错误提示

	Notification.error({
		message: '这是右上角错误提示',
		duration: 2000, // 单位毫秒
		position: 'right'
	});

#### 2.6 自定义位置成功提示
	Notification.success({
		message: '这是自定义位置成功提示',
		duration: 2000, // 单位毫秒
		position: 'custom',
		style: {
			top: '50px',
			left:  '50%', 
			marginLeft: '-150px'
		}
	});


### 3. 详细使用说明

	import React, { Component } from 'react'
	import Notification from '@meili/base-merchant-component/lib/notification'
	
	export default class TipView extends Component {
		constructor () {
			super();
		}
		showNotice () {
			Notification.error({
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

### 4. Function

> 通过Notification调用的方法，共提供四种类型的提示 (`error`, `success`, `warn`, `info`)；兼容0.x.x版本的`Notification`，`Notification.open = Notification.error`；1.0.0以上版本建议使用以下四种方法。

	Notification.error({...});   // 错误提示

	Notification.success({...}); // 成功提示

	Notification.warn({...});    // 警告提示

	Notification.info({...});    // 普通提示

#### 3.1 参数说明

| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |  
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| prefixCls| -    |样式前缀   | string | 需要重写样式时使用 | mc-notification | 
| duration| -    |延迟消失时间   | number | 单位毫秒 | 3000 | 
| message   | 必填    |提示信息   | string | - |  - | 
| position   | -    |提示显示的位置，可选 'center', 'right','custom' | string | - |  center | 
| style   | -  |自定义提示位置样式  | object | 如果position的值为'custom'时，提示显示的位置则使用style样式 |  - | 




