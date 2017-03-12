/* eslint-disable */
import React, { Component } from 'react';
import BarCharts from 'source_path/barcharts';
import Readme from './README.md';

export default class TeamTalkView extends Component {
	constructor() {
		super();
		this.state = {
			chartsData: {
				//X轴显示的文字，或者其他的附加属性
				'xAxis': {
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

			//如果需要Y轴展示，就把Y轴的data写上
			chartsData1: {
				//Y轴显示的文字，或者其他的附加属性
				'yAxis': {
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
			},
			chartsData1: {
				'yAxis': {
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
			<div className="ml mr mb-xxl">
				<h2 className='pb-5 b-b dashed'>
					图表组件📈，依赖百度的echarts
				</h2>
				<h3>
					1. 柱状图表
				</h3>
				<div className="mt mb">
					<BarCharts className="ocsen" data={this.state.chartsData} extend={this.state.extend} events={this.state.events} ></BarCharts>

					<BarCharts className="ocsen" data={this.state.chartsData1} extend={this.state.extend} events={this.state.events} ></BarCharts>

					<button onClick={this.changeData.bind(this)} className="btn btn-success-custom w-sm">点击更改数据</button>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>

			</div>
		)
	}
}
/* eslint-enable */
