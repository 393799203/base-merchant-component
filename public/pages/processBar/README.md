## 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| stepTp       | 步骤（如果没有stepBt，则出现在进度条下面）           | array       | -        |
| stepBt    | 步骤（如果有stepTp，则出现在进度条下面）    | array       | -    |
| cur     | 当前选中步骤索引，从0开始   | number | - | 


#### 2.2 使用示例

	import React, { Component } from 'react';
	import ProcessBar from '@meili/base-merchant-component/lib/process-bar';

	export default class ProcessBarView extends Component {
		constructor () {
			super();
			this.state = {
				stepTp: ['第一步', '第二步', '第三步', '第四步', '第五步'],
				stepBt: ['第一步描述', '第二步描述', '第三步描述', '第四步描述', '第五步描述'],
				cur: 3
			};
		}		
		render () {
			return (
				<div>
				 	<ProcessBar 
				 		stepTp={this.state.stepTp} 
				 		stepBt={this.state.stepBt}
				 		cur={this.state.cur}/>
				 	<ProcessBar 
				 		stepTp={this.state.stepTp} 
				 		cur={this.state.cur}/>
				</div>
			)
		}
	}