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
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#999999'
            },
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
        padding: 10
    },
    toolbox: {
        show: true,
        orient: 'horizontal',
        right: '0',
        top: '0',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: false,
                readOnly: false
            },
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            saveAsImage: {
                show: false
            }
        }
    },
    color: ['#FFBB66', '#C05EFF', '#60A9FF', '#7DE59F', '#FF6D6D', '#FFF678', '#20B223', '#1F93C3', '#321AB2', '#68225A'],
    textStyle: {
        fontSize: 14,
        color: '#333'
    },
    grid: {
        padding: 0,
        containLabel: true,
        left: 15,
        right: 15,
        borderColor: '#DDDDDD'
    },
    legend: {
        data: [],
        bottom: 0,
        itemGrp: 20,
        selectedMode: true,
        itemWidth: 10
    },
    xAxis: [
        {
            boundaryGap: ['10%', '10%'],
            type: 'category',
            data: [],
            nameGap: '65',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#666'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            nameTextStyle: {
                color: '#666'
            },
            scale: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                },
                onZero: false
            },
            axisLabel: {
                textStyle: {
                    color: '#666'
                }
            }
        }
    ],
    series: []
};

const series = {
    type: 'line',
    smooth: true,
    symbol: 'none',
    lineStyle: {
        normal: {
            width: '3'
        }
    }
};

export default class LineCharts extends Component {
    constructor (props) {
        super(props);
        this.domId = props.id || `chartId_${(Math.random() * 100000).toFixed(0)}`;
        this.state = {
            chartsData: props.data,
            extend: props.extend,
            seriesExtend: props.seriesExtend
        };
    }

    componentDidMount () {
        this.mergeData();
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            chartsData: nextProps.data,
            extend: nextProps.extend,
            seriesExtend: nextProps.seriesExtend
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
            tempSeries[index] = Util.extend(tempSeries[index], series, this.props.seriesExtend || {});
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
    seriesExtend: PropTypes.object
};
