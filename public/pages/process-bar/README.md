### 2. 使用说明

#### 2.1 参数说明

|参数    |说明         |类型    |默认值
|--|--|--|--|
|size|process大小, 可选`normal`, `sm`, `xs`|string|`normal`|
| theme  | 主题色,可选 `danger`, `info`, `dark`, `success`, `warning` | string | `danger` |
|cur|当前步骤，如 0, 1|数值|0|
|数组stepTp|在步骤条上面,可以是dom节点|数组|[`<div>第一步,可以给dom</div>`,'第二步']|
|数组stepBt|在步骤条下面,可以是dom节点|数组|[`<div>第一步描述<div>可以给dom</div></div>`, '第二步描述']|


#### 2.2 使用示例

	import React ,{ Component } from 'react';
	import { ProcessBar } from '@meili/base-merchant-component/lib/process-bar';

	export default class ProcessBarView extends Component {
		constructor (props) {
			super(props);
			this.state = {
				cur: 2,
				stepBt: ['第一步', '第二步', '第三步', '第四步', '第五步']
			}
		}
		render () {
			let { cur, stepBt } = this.state;
			return (
				<div>
					<ProcessBar cur={cur} stepBt={stepBt} />
				</div>
			)
		}
	}
