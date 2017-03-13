### 2. 使用说明
#### 2.1 使用范例

```javascript
import React, { Component } from 'react';
import ChinaMapCharts from '@meili/base-merchant/component/lib/chinamapcharts';
const randomData = function () {
	return Math.round(Math.random() * 1000);
};
export default class TeamTalkView extends Component {
	constructor() {
		super();
		this.state = {
			chartsData: {
				//对应X轴data数组的长度的数值
				'series': [{
					name: 'iphone5',
					data: [{ name: '北京', value: randomData() },
					{ name: '天津', value: randomData() },
					{ name: '上海', value: randomData() },
					{ name: '重庆', value: randomData() },
					{ name: '河北', value: randomData() },
					{ name: '河南', value: randomData() },
					{ name: '云南', value: randomData() },
					{ name: '辽宁', value: randomData() },
					{ name: '黑龙江', value: randomData() },
					{ name: '湖南', value: randomData() },
					{ name: '安徽', value: randomData() },
					{ name: '山东', value: randomData() },
					{ name: '新疆', value: randomData() },
					{ name: '江苏', value: randomData() },
					{ name: '浙江', value: randomData() },
					{ name: '江西', value: randomData() },
					{ name: '湖北', value: randomData() },
					{ name: '广西', value: randomData() },
					{ name: '甘肃', value: randomData() },
					{ name: '山西', value: randomData() },
					{ name: '内蒙古', value: randomData() },
					{ name: '陕西', value: randomData() },
					{ name: '吉林', value: randomData() },
					{ name: '福建', value: randomData() },
					{ name: '贵州', value: randomData() },
					{ name: '广东', value: randomData() },
					{ name: '青海', value: randomData() },
					{ name: '西藏', value: randomData() },
					{ name: '四川', value: randomData() },
					{ name: '宁夏', value: randomData() },
					{ name: '海南', value: randomData() },
					{ name: '台湾', value: randomData() },
					{ name: '香港', value: randomData() },
					{ name: '澳门', value: randomData() }]
				}, {
					name: 'iphone6',
					data: [
						{ name: '北京', value: randomData() },
						{ name: '天津', value: randomData() },
						{ name: '上海', value: randomData() },
						{ name: '重庆', value: randomData() },
						{ name: '河北', value: randomData() },
						{ name: '安徽', value: randomData() },
						{ name: '新疆', value: randomData() },
						{ name: '浙江', value: randomData() },
						{ name: '江西', value: randomData() },
						{ name: '山西', value: randomData() },
						{ name: '内蒙古', value: randomData() },
						{ name: '吉林', value: randomData() },
						{ name: '福建', value: randomData() },
						{ name: '广东', value: randomData() },
						{ name: '西藏', value: randomData() },
						{ name: '四川', value: randomData() },
						{ name: '宁夏', value: randomData() },
						{ name: '香港', value: randomData() },
						{ name: '澳门', value: randomData() }
					]
				},
				{
					name: 'iphone7',
					data: [
						{ name: '北京', value: randomData() },
						{ name: '天津', value: randomData() },
						{ name: '上海', value: randomData() },
						{ name: '广东', value: randomData() },
						{ name: '台湾', value: randomData() },
						{ name: '香港', value: randomData() },
						{ name: '澳门', value: randomData() }
					]
				}]
			},
			extend: {

			},
			events: {
				'click': function (params) {
					alert('你点击了' + params.name + '的' + params.seriesName);
				}
			}
		};
	}

	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					图表组件📈，依赖百度的echarts
				</h1>
				<h2>
					1. 中国地图
				</h2>
				<div className="m-t m-b">
					<ChinaMapCharts className="ocsen" data={this.state.chartsData} extend={this.state.extend} events={this.state.events} ></ChinaMapCharts>
				</div>
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


