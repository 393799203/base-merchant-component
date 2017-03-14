/* eslint-disable */
import React, { Component } from 'react';
import LineCharts from 'source_path/linecharts';
import Readme from './README.md';

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
			extend: {
				tooltip: {
					trigger: 'axis',
					// axisPointer: {
					// 	type: 'shadow'
					// }
				}
			},
			events: {
				'click': function (params) {
					alert('你点击了' + params.name + '的' + params.seriesName);
				}
			},
			needArea: false
		};
	}
	changeData() {
		//随机返回一个数据
		// var Arr1 = [8, 32, 36, 45, 26, 36];
		// Arr1.sort(function () {
		// 	return Math.random() > 0.5 ? -1 : 1;
		// });

		this.setState({
			chartsData: {
				'xAxis': {
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				'series': [{
					name: '邮件营销',
					data: [120, 132, 101, 134, 90, 230, 210].sort(function () {
						return Math.random() > 0.5 ? -1 : 1;
					})
				},
				{
					name: '联盟广告',
					data: [220, 182, 191, 234, 290, 330, 310].sort(function () {
						return Math.random() > 0.5 ? -1 : 1;
					})
				},
				{
					name: '视频广告',
					data: [150, 232, 201, 154, 190, 330, 410].sort(function () {
						return Math.random() > 0.5 ? -1 : 1;
					})
				},
				{
					name: '直接访问',
					data: [320, 332, 301, 334, 390, 330, 320].sort(function () {
						return Math.random() > 0.5 ? -1 : 1;
					})
				},
				{
					name: '搜索引擎',
					data: [820, 932, 901, 934, 1290, 1330, 1320].sort(function () {
						return Math.random() > 0.5 ? -1 : 1;
					})
				}]
			}
		});
	}

	needArea() {
		let need = this.state.needArea;
		this.setState({
			needArea: !need
		});
	}
	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<h2 className='p-b-5 b-b dashed'>
					图表组件📈，依赖百度的echarts
				</h2>
				<h3>
					1. 折线图示例
				</h3>
				<div className="m-t m-b">
					<LineCharts className="ocsen" data={this.state.chartsData} extend={this.state.extend} events={this.state.events} needArea={this.state.needArea}></LineCharts>
					<button onClick={this.changeData.bind(this)} className="btn btn-success-border w-sm">点击更改数据</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<button onClick={this.needArea.bind(this)} className="btn btn-success-border w-sm">是否需要阴影</button>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>



			</div>
		)
	}
}
/* eslint-enable */
