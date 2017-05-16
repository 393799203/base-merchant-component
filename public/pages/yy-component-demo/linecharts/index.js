/* eslint-disable */
import React, { Component } from 'react';
import LineCharts from 'source_path/linecharts';

import echarts from 'echarts';

import chartsData from './readme/chartsData.md';
import quote from './readme/quote.md';
import defaultDemo from './readme/defaultDemo.md';
import eventDemo from './readme/eventDemo.md';
import extendDemo from './readme/extendDemo.md';
import seriesDemo from './readme/seriesDemo.md';
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
			chartsData2: {
				//X轴显示的文字，或者其他的附加属性
				'xAxis': {
					boundaryGap: false,
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				//对应X轴data数组的长度的数值
				'series': [{
					name: '邮件营销',
					data: [120, 132, 101, 134, 90, 230, 210],
					yAxisIndex:1
				},
				{
					name: '联盟广告',
					data: [220, 182, 191, 234, 290, 330, 310],
					yAxisIndex:1
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
				yAxis : [
			        {
			            type : 'value'
			        },
			        {
			            type : 'value',
			            axisLabel: {
                            formatter: '{value} %'
                        },
                        splitLine: {
                            lineStyle: {
                                type:'dashed'
                            }
                        }
			        }
			    ],
				title: {
					text: 'lineCharts实例图标-再举个例子-🌰',
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
			},
			seriesExtend: {
			    type: 'line',
			    stack: '总量',
			    areaStyle: {
			    	normal: {}
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
	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<h2 className='p-b-5 b-b dashed'>
					折线图－LineCharts
					<a href='mactt://message/uname/youyou' style={{ border: 'none', boxShadow: 'none' }} className='m-l-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<button onClick={this.changeData.bind(this)} className="btn btn-success-border w-sm">点击更改数据</button>

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
						<LineCharts data={this.state.chartsData}></LineCharts>
						<div dangerouslySetInnerHTML={{ __html: defaultDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>event事件</h4>
						<LineCharts
							data={this.state.chartsData}
							events={this.state.events}
						>
						</LineCharts>
						<div dangerouslySetInnerHTML={{ __html: eventDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>常用extend属性配置</h4>
						<LineCharts data={this.state.chartsData2} extend={this.state.extend}></LineCharts>
						<div dangerouslySetInnerHTML={{ __html: extendDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>series数据配置：因为series为数组包括展示的数据，可以在data中对每组数据设置series，此处则可真对所有数据进行属性配置</h4>
						<LineCharts
							data={this.state.chartsData}
							seriesExtend={this.state.seriesExtend}
						>
						</LineCharts>
						<div dangerouslySetInnerHTML={{ __html: seriesDemo }}></div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}
/* eslint-enable */
