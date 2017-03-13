### 2. 使用说明
#### 2.1 使用范例

```javascript
import React, { Component } from 'react';
import BarCharts from '@meili/base-merchant/component/lib/barcharts';

export default class BarChartsView extends Component {
	constructor() {
		super();
		this.state = {
			chartsData: {
				//X轴显示的文字，或者其他的附加属性
				'xAxis': {
					boundaryGap: true,
					data: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"]
				},
				//对应X轴data数组的长度的数值
				'series': [{
					name: '男生',
					data: [30, 32, 36, 42, 26, 36]
				}, {
					name: '女生',
					data: [20, 17, 34, 10, 38, 23]
				}]
			},
			extend: {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				}
			},
			events: {
				'click': function (params) {
					alert('你点击了' + params.name + '的' + params.seriesName);
				}
			}
		};
	}
	changeData() {
		//随机返回一个数据
		var Arr1 = [8, 32, 36, 45, 26, 36],
				Arr2 = [20, 17, 34, 10, 38, 23];
		Arr1.sort(function () {
			return Math.random() > 0.5 ? -1 : 1;
		});

		Arr2.sort(function () {
			return Math.random() > 0.5 ? -1 : 1;
		});

		this.setState({
			chartsData: {
				'xAxis': {
					data: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"]
				},
				'series': [{
					name: '男生',
					data: Arr1
				}, {
					name: '女生',
					data: Arr2
				}]
			}
		});
	}

	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					图表组件📈，依赖百度的echarts
				</h1>
				<h2>
					1. 柱状图表
				</h2>
				<div className="m-t m-b">
					<BarCharts className="ocsen" data={this.state.chartsData} extend={this.state.extend} events={this.state.events} ></BarCharts>
					<button onClick={this.changeData.bind(this)} className="btn btn-success-custom w-sm">点击更改数据</button>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}

```

### 3. 属性 - Props ---

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
|{width}     |  图表占的总宽度,只需传数值，单位为像素 | string | 100% |
|{height}    |  图表占的总高度,只需传数值，单位为像素 | string | 400 |
|{data}      |  传给图表的数据，格式见后面 | {object} | - |
|{extend}    |  自定义chart属性，参照百度echarts官网 | object | - |
|{events}    |  绑定事件，参照百度Echarts官网 | object |  |
|{className} |  图表外层容器的class | string | - |
|{id}        |  图表外层容器的id | string | chartsId_随机数 |

### 4. 方法 - Function

> 还有很多属性，可以查询百度echarts官网，通过extend来扩展，类型太多，我这不全部列举

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| events       | 绑定事件，参照百度Echarts官网            | --       |


