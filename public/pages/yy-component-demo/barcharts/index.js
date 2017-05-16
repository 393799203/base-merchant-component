/* eslint-disable */
import React, { Component } from 'react';

import echarts from 'echarts';

import BarCharts from 'source_path/barcharts';

import quote from './readme/quote.md';
import defaultxDemo from './readme/defaultxDemo.md';
import defaultyDemo from './readme/defaultyDemo.md';
import eventDemo from './readme/eventDemo.md';
import extendDemo from './readme/extendDemo.md';
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
			events: {
				'click': function (params) {
					alert('你点击了' + params.name + '的' + params.seriesName);
				}
			},
			extend:{
				title: {
					text: 'barCharts实例图标-再举个例子-🌰',
					subtext: '我是例子',
					x: 'center',
					padding:[0,0,10,0]
				},
				color:[
					new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			            offset: 0, color: '#ff8ba5' // 0% 处的颜色
			        }, {
			            offset: 1, color: '#FF2555' // 100% 处的颜色
			        }], false),
					'#439FFF',
					'#FFA425',
					'#2A2E3F',
					'#3ACE9F',
					'#F2F3F5'
				], // 颜色
				tooltip:{ // 提示框样式
					trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        backgroundColor: '#fff9f1',
			        borderColor: '#ffcf8b',
			        borderWidth: 1,
			        textStyle: {
			            fontSize: 12,
			            color: '#f18c00',
			            textAlign: 'center'
			        },
			        padding: 10
			    },
			    toolbox: { // 工具栏
			        show: true,
			        feature: {
			            dataZoom: {
			                yAxisIndex: 'none'
			            },
			            dataView: {readOnly: false},
			            magicType: {type: ['line', 'bar']},
			            restore: {},
			            saveAsImage: {}
			        }
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
			<div className="m-l m-r m-b-xxl">
				<h2 className='p-b-5 b-b dashed'>
					柱状图－BarCharts
					<a href='mactt://message/uname/youyou' style={{ border: 'none', boxShadow: 'none' }} className='m-l-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<button onClick={this.changeData.bind(this)} className="btn btn-danger-border w-sm">点击更改数据</button>
				<div className="m-t m-b">
					<div style={{width:'100%'}} className='clearfix'>
						<h4>引用方式</h4>
						<div dangerouslySetInnerHTML={{ __html: quote }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>默认图表：width为100%，需在外层设置宽度</h4>
						
						<div className='f-l' style={{width:'49%', marginRight:'2%'}}>
							<BarCharts data={this.state.chartsData}></BarCharts>
							<div dangerouslySetInnerHTML={{ __html: defaultxDemo }}></div>
						</div>

						<div className='f-l' style={{width:'49%'}}>
							<BarCharts data={this.state.chartsData1}></BarCharts>
							<div dangerouslySetInnerHTML={{ __html: defaultyDemo }}></div>
						</div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>event事件</h4>
						<BarCharts
							data={this.state.chartsData}
							events={this.state.events}
						>
						</BarCharts>
						<div dangerouslySetInnerHTML={{ __html: eventDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>常用extend属性配置</h4>
						<BarCharts data={this.state.chartsData} extend={this.state.extend}></BarCharts>
						<div dangerouslySetInnerHTML={{ __html: extendDemo }}></div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}
/* eslint-enable */
