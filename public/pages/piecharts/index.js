import React, { Component } from 'react';
import PieCharts from 'source_path/piecharts';
import Readme from './README.md';

export default class TeamTalkView extends Component {
	constructor() {
		super();
		this.state = {
			chartsData1: {

				'series': [{
					name: '半径模式',
					center: ['15%', '50%'],
					roseType: 'radius',     //type决定图标样式
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: true
						}
					},
					data: [
						{ value: 10, name: 'rose1' },
						{ value: 5, name: 'rose2' },
						{ value: 15, name: 'rose3' },
						{ value: 25, name: 'rose4' },
						{ value: 20, name: 'rose5' },
						{ value: 35, name: 'rose6' },
						{ value: 30, name: 'rose7' },
						{ value: 40, name: 'rose8' }
					]
				},
				{
					name: '面积模式',
					center: ['45%', '50%'],
					roseType: 'area',
					data: [
						{ value: 10, name: 'rose1' },
						{ value: 5, name: 'rose2' },
						{ value: 15, name: 'rose3' },
						{ value: 25, name: 'rose4' },
						{ value: 20, name: 'rose5' },
						{ value: 35, name: 'rose6' },
						{ value: 30, name: 'rose7' },
						{ value: 40, name: 'rose8' }
					]
				}, {
					name: '全圆模式',
					center: ['80%', '50%'],
					data: [
						{ value: 10, name: 'rose1' },
						{ value: 5, name: 'rose2' },
						{ value: 15, name: 'rose3' },
						{ value: 25, name: 'rose4' },
						{ value: 20, name: 'rose5' },
						{ value: 35, name: 'rose6' },
						{ value: 30, name: 'rose7' },
						{ value: 40, name: 'rose8' }
					]
				}]
			},
			chartsData2: {
				'series': [{
					name: '访问来源1',
					radius: ['50%', '70%'], //内部空白部分大小， 外部整个圆形大小
					center: ['15%', '50%'],  //图形位移位置， left top 
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						//圆形中间的文字
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					avoidLabelOverlap: false,  //圆形中间文字是否重叠
					labelLine: {
						normal: {
							show: true
						}
					},
					data: [
						{ value: 335, name: '直接访问' },
						{ value: 310, name: '邮件营销' },
						{ value: 234, name: '联盟广告' },
						{ value: 135, name: '视频广告' },
						{ value: 1548, name: '搜索引擎' }
					]
				}, {
					name: '访问来源2',

					radius: [0, '30%'],

					label: {
						normal: {
							position: 'inner'
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [
						{ value: 335, name: '直达', selected: true },
						{ value: 679, name: '营销广告' },
						{ value: 1548, name: '搜索引擎' }
					]
				},
				{
					name: '访问来源2',
					radius: ['40%', '55%'],

					data: [
						{ value: 335, name: '直达' },
						{ value: 310, name: '邮件营销' },
						{ value: 234, name: '联盟广告' },
						{ value: 135, name: '视频广告' },
						{ value: 1048, name: '百度' },
						{ value: 251, name: '谷歌' },
						{ value: 147, name: '必应' },
						{ value: 102, name: '其他' }
					]
				}]
			},
			extend: {
				title: {
					text: 'PieCharts实例图标-再举个例子-🌰',
					subtext: '我是例子',
					x: 'center'
				},
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
					1. 饼状图表
				</h2>
				<div className="m-t m-b">
					<PieCharts className="ocsen" data={this.state.chartsData1} extend={this.state.extend} events={this.state.events} ></PieCharts>
					<br />
					<PieCharts className="ocsen" data={this.state.chartsData2} extend={this.state.extend} events={this.state.events} ></PieCharts>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}