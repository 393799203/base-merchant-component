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
/* 指定图表的配置项和数据 */
const MchartsType = 'bar';
const defaultOption = {
    title: {
        text: 'BarCharts 柱状图示例'
    },
    tooltip: {},
    toolbox: {
        feature: {
            saveAsImage: {}
        }
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
    xAxis: [],
    yAxis: [],
    series: []
};
export default class BarCharts extends Component {
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
    /* 合并图标数据 */
    mergeData () {
        const self = this;
        const chartsData = self.state.chartsData;
        const tempSeries = chartsData.series || [];
        const newOptionData = self.state.extend;
        const userEvents = self.props.events;
        let tempXaxis = {};
        let tempYaxis = {};
        let renderOption = {};
        if (chartsData.xAxis) {
            tempXaxis = {
                type: 'category',
                data: chartsData.xAxis.data
            };
            tempYaxis = {
                type: 'value'
            };
        }
        if (chartsData.yAxis) {
            tempYaxis = {
                type: 'category',
                data: chartsData.yAxis.data
            };
            tempXaxis = {
                type: 'value'
            };
        }
        tempSeries.map((item, index) => {
            tempSeries[index].type = MchartsType;      /* 拼接类型 */
            defaultOption.legend.data.push(item.name);      /* 拼接选项提示 */
            defaultOption.series = tempSeries;      /* 合并Series */
            defaultOption.xAxis = tempXaxis;      /* 合并xAxis */
            defaultOption.yAxis = tempYaxis;      /* 合并yAxis */
        });
        renderOption = Util.extend({}, defaultOption, newOptionData);
        if (!self.myChart) {
            self.myChart = echarts.init(document.getElementById(self.domId));
            /* 支持绑定事件 */
            if (userEvents) {
                for (const event in userEvents) {
                    if (typeof event === 'string' && typeof userEvents[event] === 'function') {
                        self.myChart.on(event, userEvents[event]);
                    }
                }
            }
            /* 自适应宽度 */
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
                <div
                    id={this.domId}
                    className={this.props.className}
                    style={{
                        width: this.props.width || '100%',
                        height: this.props.height || '400'
                    }}
                >
                    loading...
                </div>
            </div>
        );
    }
}
BarCharts.propTypes = {
    id: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.object,
    extend: PropTypes.object,
    className: PropTypes.string
};
