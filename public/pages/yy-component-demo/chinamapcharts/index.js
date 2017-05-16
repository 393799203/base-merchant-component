/* eslint-disable */
import React, { Component } from 'react';
import echarts from 'echarts';

import ChinaMapCharts from 'source_path/chinamapcharts';

import chartsData from './readme/chartsData.md';
import quote from './readme/quote.md';
import defaultDemo from './readme/defaultDemo.md';
import eventDemo from './readme/eventDemo.md';
import extendDemo from './readme/extendDemo.md';
import seriesDemo from './readme/seriesDemo.md';
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
				color:[
					new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			            offset: 0, color: '#ff8ba5' // 0% 处的颜色
			        }, {
			            offset: 1, color: '#FF2555' // 100% 处的颜色
			        }], false),
					'#3ACE9F',
					'#439FFF',
					'#FFA425',
					'#2A2E3F',
					'#F2F3F5'
				], // 颜色
				tooltip:{ // 提示框样式
					trigger: 'item',
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
			    },
			    visualMap: { // 左侧数值，设置区间（min、max），默认为0-200
			        max: 800,
			        text: ['高', '低'],
			        calculable: true,
			        color: ['#ff8ba5', '#FF2555'],
			        realtime: true
			    }
			},
			seriesExtend: {
			    type: 'map',
			    mapType: 'china',
			    selectedMode: 'single',
			    showLegendSymbol: true, // 是否在地图中展示data的颜色图标
			    itemStyle: {
			        emphasis: {
			            label: {
			                show: true
			            },
			            areaColor: '#FF6868',
			            color: '#FF6868',
			            borderColor: '#FF6868'
			        }
			    },
			    avoidLabelOverlap: true,
			    label: {
			        normal: {
			            show: true
			        },
			        emphasis: {
			            show: true
			        }
			    },
			    labelLine: {
			        normal: {
			            show: true
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
					中国地图－ChinaMapCharts
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
						<ChinaMapCharts data={this.state.chartsData}></ChinaMapCharts>
						<div dangerouslySetInnerHTML={{ __html: defaultDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>event事件</h4>
						<ChinaMapCharts
							data={this.state.chartsData}
							events={this.state.events}
						></ChinaMapCharts>
						<div dangerouslySetInnerHTML={{ __html: eventDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>常用extend属性配置</h4>
						<ChinaMapCharts
							data={this.state.chartsData}
							extend={this.state.extend}
						>
						</ChinaMapCharts>
						<div dangerouslySetInnerHTML={{ __html: extendDemo }}></div>
					</div>

					<div style={{width:'100%'}} className='clearfix'>
						<h4>series数据配置：因为series为数组包括展示的数据，可以在data中对每组数据设置series，此处则可真对所有数据进行属性配置</h4>
						<ChinaMapCharts
							data={this.state.chartsData}
							seriesExtend={this.state.seriesExtend}
						>
						</ChinaMapCharts>
						<div dangerouslySetInnerHTML={{ __html: seriesDemo }}></div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}
/* eslint-enable */
