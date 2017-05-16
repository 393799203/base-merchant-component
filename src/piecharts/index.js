/**
 * @author ziyi-wang 依赖百度的Echarts简单封装而来
 * @param create at 2017-02-14
 * @param {width}       图表占的总宽度,只需传数值，单位为像素 | string | 100% |
 * @param {height}      图表占的总高度,只需传数值，单位为像素 | string | 400 |
 * @param {data}        传给图表的数据，格式见后面 | object | - |
 * @param {extend}      自定义chart属性，参照百度echarts官网 | object | - |
 * @param {extend}      绑定事件，参照百度Echarts官网 | object |  |
 * @param {className}   图表外层容器的class | string | up-charts |
 * @param {id}          图表外层容器的id | object | chartsId_随机数 |
 */

import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';
import Util from '../_module/js/util';

// 指定图表的配置项和数据
const defaultOption = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: '#fff',
        borderColor: '#d5d8df',
        borderWidth: 1,
        textStyle: {
            fontSize: 12,
            color: '#555',
            textAlign: 'center'
        },
        padding: 10,
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        data: [],
        bottom: 0,
        itemGrp: 20,
        selectedMode: true,
        itemWidth: 10
    },
    textStyle: {
        fontSize: 13,
        color: '#555'
    },
    grid: {
        padding: 0,
        containLabel: true,
        left: 15,
        right: 15,
        borderColor: '#DDDDDD'
    },
    color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#FFD174' // 0% 处的颜色
        }, {
            offset: 1, color: '#FF904B' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#74D6FF' // 0% 处的颜色
        }, {
            offset: 1, color: '#4D7EFF' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#AF74FF' // 0% 处的颜色
        }, {
            offset: 1, color: '#CE4DFF' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#8AEFA3' // 0% 处的颜色
        }, {
            offset: 1, color: '#71DD9C' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#FD8282' // 0% 处的颜色
        }, {
            offset: 1, color: '#FF6363' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#EDF02E' // 0% 处的颜色
        }, {
            offset: 1, color: '#FFF678' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#7DE580' // 0% 处的颜色
        }, {
            offset: 1, color: '#20B223' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#37ABB9' // 0% 处的颜色
        }, {
            offset: 1, color: '#1F93C3' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#3A4AB0' // 0% 处的颜色
        }, {
            offset: 1, color: '#321AB2' // 100% 处的颜色
        }], false),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#833F3F' // 0% 处的颜色
        }, {
            offset: 1, color: '#68225A' // 100% 处的颜色
        }], false)
    // '#FFBB66','#C05EFF','#60A9FF','#7DE59F','#FF6D6D'
    ],
    calculable: true,
    series: []
};

const series = {
    type: 'pie',
    selectedMode: 'single'
};

export default class PieCharts extends Component {

    constructor (props) {
        super(props);
        this.domId = props.id || `chartId_${(Math.random() * 100000).toFixed(0)}`;
        this.state = {
            chartsData: this.props.data,
            extend: this.props.extend
        };
    }

    componentDidMount () {
        this.mergeData();
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            chartsData: nextProps.data,
            extend: nextProps.extend
        }, () => {
            this.mergeData();
        });
    }

    // 合并图标数据
    mergeData () {
        const self = this;
        const chartsData = self.state.chartsData;
        const tempSeries = chartsData.series || [];
        const newOptionData = self.state.extend;
        let renderOption = {};

        tempSeries.map((item, index) => {
            tempSeries[index] = Util.extend(tempSeries[index], series);
            defaultOption.legend.data.push(item.name); // 拼接选项提示
            defaultOption.series = tempSeries; // 合并Series
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

PieCharts.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.object,
    extend: PropTypes.object
};

