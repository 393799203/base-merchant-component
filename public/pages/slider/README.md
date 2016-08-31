## 2. 使用说明

#### 2.1 各种轮播图使用

	import React, { Component } from 'react'
	import Slider from '@meili/base-merchant-component/lib/slider/index'
	
	const style = {
	    background: '#fff',
	    textAlign: 'center',
	    padding: '30px 30px 45px 30px',
	    color: '#f55',
	    border: '1px solid #f55'
	};

	export default class ModalView extends Component {
		constructor () {
			super();
		}
		// 切换后执行函数
		afterChange(current) {
			console.log('afterChange', current);
		}
		// 切换前执行函数
		beforeChange (from, to) {
			console.log('beforeChange', from, to);
		}
		render () {
			return (
				<div>
					<Slider 
						autoplay="true" 
						vertical="false" 
						effect="scrollx" 
						afterChange={ this.afterChange } 
						beforeChange={ this.beforeChange }>
				        <div style={ style }><h3>渐变轮播图1</h3></div>
				        <div style={ style }><h3>渐变轮播图2</h3></div>
				        <div style={ style }><h3>渐变轮播图3</h3></div>
				        <div style={ style }><h3>渐变轮播图4</h3></div>
				    </Slider>
				</div>
			)
		}
	}
	
## 3. 属性 - Props

| props       | 说明           | 类型         |   默认值       |
| ------------| ------------- | ------------ | ------------  |
| effect      | 动画效果函数，可取 scrollx, fade | string       | scrollx         |
| vertical    |   垂直显示     | Boolean       | false    |
| autoplay    | 是否自动切换| Boolean | false  |
| beforeChange| 切换面板的回调| function | -   |
| afterChange | 切换面板的回调| number | -   |






