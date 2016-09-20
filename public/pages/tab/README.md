## 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| list       | tab切换的标题赋值的数组          | array       | 数组元素为object形式，包含KEY为text和link，text为标题文案，link为链接或者回调函数        | -    |
| active     | 当前选中标签页索引，从0开始   | number | - |  0| 

#### 2.2 使用示例
	
	import React, { Component } from 'react';
	import Tab from '@meili/base-merchant-component/lib/tab';

	export default class TabView extends Component {
		constructor () {
			super();
			this.state = {
				tabId: 0,
				options:[
					{text:'标签页 1',link: this.changeTab.bind(this)},
					{text:'标签页 2',link: this.changeTab.bind(this)},
					{text:'蘑菇街首页',link: "http://www.mogujie.com"}
				]
			};
		}
		changeTab (item, index){
			this.setState({ tabId: index })
		}
		render () {
			return (
				<div>
					<Tab list={this.state.options} active={this.state.tabId} /> 
				</div>
			)
		}
	}