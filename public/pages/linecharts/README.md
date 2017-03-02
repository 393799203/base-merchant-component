## 2. 使用说明
#### 2.1 使用范例

```javascript

import React, { Component } from 'react';
import LineCharts from 'source_path/linecharts';

export default class LineChartsView extends Component {
	constructor() {
		super();
		this.state = {
			chartsData: {
				//X轴显示的文字，或者其他的附加属性
				'xAxis': {
					boundaryGap: false,
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				//对应X轴data数组的长度的数值
				'series': [{
					name: '邮件营销',
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: '联盟广告',
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: '视频广告',
					data: [150, 232, 201, 154, 190, 330, 410]
				},
				{
					name: '直接访问',
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: '搜索引擎',
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}]
			},
			events: {
				'click': function (params) {
					alert('你点击了' + params.name + '的' + params.seriesName);
				}
			},
			needArea: false
		};
	}
	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<h2>
					1. 折线图示例
				</h2>
				<div className="m-t m-b">
					<LineCharts className="ocsen" data={this.state.chartsData} extend={this.state.extend} events={this.state.events} needArea={this.state.needArea}></LineCharts>
				</div>
			</div>
		)
	}
}

```
	
## 3. 属性 - Props --- 

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
|{width}     |  图表占的总宽度,只需传数值，单位为像素 | string | 100% |
|{height}    |  图表占的总高度,只需传数值，单位为像素 | string | 400 |
|{data}      |  传给图表的数据，格式见后面 | {object} | - |
|{extend}    |  自定义chart属性，参照百度echarts官网 | object | - |
|{events}    |  绑定事件，参照百度Echarts官网 | object |  |
|{className} |  图表外层容器的class | string | - |
|{id}        |  图表外层容器的id | string | chartsId_随机数 |
|{needArea}  |  图表外层容器的id | boolean | 是否需要阴影 |

## 4. 方法 - Function

> 还有很多属性，可以查询百度echarts官网，通过extend来扩展，类型太多，我这不全部列举

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| events       | 绑定事件，参照百度Echarts官网            | --       |


