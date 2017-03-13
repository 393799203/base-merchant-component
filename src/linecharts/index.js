/**
 * @author ziyi-wang 依赖百度的Echarts简单封装而来
 * @param create at 2017-02-14
 * @param {width}       图表占的总宽度,只需传数值，单位为像素 | string | 100% |
 * @param {height}      图表占的总高度,只需传数值，单位为像素 | string | 400 |
 * @param {data}        传给图表的数据，格式见后面 | {object} | - |
 * @param {extend}      自定义chart属性，参照百度echarts官网 | object | - |
 * @param {events}      绑定事件，参照百度Echarts官网 | object |  |
 * @param {className}   图表外层容器的class | string | up-charts |
 * @param {id}          图表外层容器的id | string | chartsId_随机数 |
 * @param {needArea}    图表外层容器的id | boolean | 是否需要阴影 |
 */

import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';
import Util from '../_module/js/util';

// require('./style/index.less');
// 指定图表的配置项和数据
const defaultOption = {
    title: {
        text: ''
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        // trigger: 'axis',
        // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        // }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data: []
    },
    xAxis: {},
    yAxis: {
        type: 'value'
    },
    series: []
};
const MchartsType = 'line';
const MchartsStack = '总量';
const MchartsAreaStyle = { normal: {} };

export default class LineCharts extends Component {
    constructor (props) {
        super(props);
        this.domId = props.id || `chartId_${(Math.random() * 100000).toFixed(0)}`;
        this.state = {
            chartsData: props.data,
            extend: props.extend,
            needArea: props.needArea
        };
    }

    componentDidMount () {
        this.mergeData();
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            chartsData: nextProps.data,
            extend: nextProps.extend,
            needArea: nextProps.needArea
        }, () => {
            this.mergeData();
        });
    }

    // 合并图标数据
    mergeData () {
        const self = this;
        const chartsData = self.state.chartsData;
        const tempSeries = chartsData.series || [];
        const tempXaxis = chartsData.xAxis || {};
        const newOptionData = self.state.extend;
        let renderOption = {};

        tempSeries.map((item, index) => {
            tempSeries[index].type = MchartsType; // 拼接类型
            tempSeries[index].stack = MchartsStack; // Y轴显示总量
            tempSeries[index].areaStyle = self.state.needArea ? MchartsAreaStyle : {}; // Y轴显示总量
            defaultOption.legend.data.push(item.name); // 拼接选项提示
            defaultOption.series = tempSeries; // 合并Series
            defaultOption.xAxis = tempXaxis; // 合并xAxis
        });

        renderOption = Util.extend({}, defaultOption, newOptionData);
        if (!self.myChart) {
            self.myChart = echarts.init(document.getElementById(self.domId));
            // 支持绑定事件
            const userEvents = self.props.events;
            if (userEvents) {
                for (const event in userEvents) {
                    if (typeof event === 'string' && typeof userEvents[event] === 'function') {
                        self.myChart.on(event, userEvents[event]);
                    }
                }
            }
            // 自适应宽度
            if (!self.hasonResize) {
                self.hasonResize = true;

                window.addEventListener('resize', () => {
                    self.myChart.resize();
                });
            }
        }
        self.myChart.showLoading();
        self.myChart.setOption(renderOption);
        self.myChart.hideLoading();
    }

    render () {
        return (
            <div>
                <div id={this.domId} className={this.props.className} style={{ width: this.props.width || '100%', height: this.props.height || 400 }}>loading...</div>
            </div>
        );
    }
}

LineCharts.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.object,
    extend: PropTypes.object,
    needArea: PropTypes.bool
};
