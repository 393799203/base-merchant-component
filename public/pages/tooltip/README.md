### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| placement       | 气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom          | string       |         | "top"   |
| tooltip     | 气泡浮层提示信息   | string/React.Element | - |  - | 
| trigger     | 显示提示的触发类型，['hover','click','focus']   | string | - |  "hover" | 
| overlayClassName |  附加的popup层样式类  | string | - |   | 
| overlayStyle |  overlay节点增加style对象  | Object | - |   | 
| prefixCls |  增加class前缀  | string | - |  "rc-tooltip" | 
| mouseEnterDelay |  鼠标滑入时显示提示层的延时，单位：s  | number | - |  0 | 
| mouseLeaveDelay |  鼠标滑出时隐藏提示层的延时，单位：s  | number | - |  0.1 | 


> 更多参数说明请参考 - [rc-tooltip](https://www.npmjs.com/package/rc-tooltip)

#### 2.2 使用示例
	
	import React, { Component } from 'react';
	import Tooltip from '@meili/base-merchant-component/lib/toolTip';

	export default class ToolTipView extends Component {
		constructor () {
	        super();
	        this.state = {
	            text: '提示层信息，Hello!'
	        };
	    }

	    render () {
	        return (
	            <div>
	                <Tooltip placement='leftTop' tooltip={this.state.text}>
	                    <button className='btn btn-default m-r'>左上</button>
	                </Tooltip>
	            </div>
	        );
	    }
	}