/* eslint-disable */
import React, { Component } from 'react';
import PieCharts from 'source_path/piecharts';
import echarts from 'echarts';

import chartsData from './readme/chartsData.md';
import quote from './readme/quote.md';
import defaultDemo from './readme/defaultDemo.md';
import eventDemo from './readme/eventDemo.md';
import extendDemo from './readme/extendDemo.md';
import seriesDemo from './readme/seriesDemo.md';
import seriesDemo2 from './readme/seriesDemo2.md';
import Readme from './README.md';

export default class TeamTalkView extends Component {
	constructor() {
		super();
		this.state = {
			chartsData: {
				'series': [{
					name: '半径模式',
					data: [
						{ value: 11, name: 'rose1' },
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
				<h2 className='p-b-5 b-b dashed'>
					饼图－PieCharts
					<a href='mactt://message/uname/youyou' style={{ border: 'none', boxShadow: 'none' }} className='m-l-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<div className="m-t m-b">
					<div style={{width:'100%'}} className='clearfix'>
						<h4>引用方式</h4>
						<div dangerouslySetInnerHTML={{ __html: quote }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>示例数据</h4>
						<div dangerouslySetInnerHTML={{ __html: chartsData }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>默认图表：width为100%，需在外层设置宽度</h4>
						<PieCharts data={this.state.chartsData}></PieCharts>
						<div dangerouslySetInnerHTML={{ __html: defaultDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>多个图表，配置series属性</h4>
						<PieCharts data={this.state.chartsData1}></PieCharts>
						<div dangerouslySetInnerHTML={{ __html: seriesDemo }}></div>
						
						<PieCharts data={this.state.chartsData2}></PieCharts>
						<div dangerouslySetInnerHTML={{ __html: seriesDemo2 }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>event事件</h4>
						<PieCharts
							data={this.state.chartsData1}
							events={this.state.events}
						>
						</PieCharts>
						<div dangerouslySetInnerHTML={{ __html: eventDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>常用extend属性配置</h4>
						<PieCharts data={this.state.chartsData2} extend={this.state.extend}></PieCharts>
						<div dangerouslySetInnerHTML={{ __html: extendDemo }}></div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}
/* eslint-enable */
