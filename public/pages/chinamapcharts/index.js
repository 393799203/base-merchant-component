import React, { Component } from 'react';
import ChinaMapCharts from 'source_path/chinamapcharts';
import Readme from './README.md';
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
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}