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

require('./ChinaJson.js');

// 指定图表的配置项和数据
const defaultOption = {
    title: {
        text: '',
        subtext: '',
        sublink: '',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
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
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        color: ['#FFAB42', '#FFDEB4'],
        realtime: true
    },
    textStyle: {
        color: '#555'
    },
    color: ['#FFBB66', '#C05EFF', '#60A9FF', '#7DE59F', '#FF6D6D'],
    legend: {
        data: [],
        bottom: 0,
        itemGrp: 20,
        selectedMode: true,
        itemWidth: 10
    },
    grid: {
        padding: 0,
        containLabel: true,
        left: 15,
        right: 15,
        borderColor: '#DDDDDD'
    },
    series: []
};

const series = {
    type: 'map',
    mapType: 'china',
    selectedMode: 'single',
    showLegendSymbol: false, // 是否在地图中展示data的颜色图标
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
    avoidLabelOverlap: false,
    label: {
        normal: {
            show: false
        },
        emphasis: {
            show: true
        }
    },
    labelLine: {
        normal: {
            show: false
        }
    }
};

export default class ChinaMapCharts extends Component {
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

    // 添加配置
    mergeData () {
        const self = this;
        const chartsData = self.state.chartsData;
        const tempSeries = chartsData.series || [];

        const newOptionData = self.state.extend;

        let renderOption = {};

        // 合并series的配置和数据
        tempSeries.map((item, index) => {
            tempSeries[index] = Util.extend(tempSeries[index], series, this.props.seriesExtend || {});
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
                <div
                    id={this.domId}
                    className={this.props.className}
                    style={{
                        width: this.props.width || '100%',
                        height: this.props.height || 400
                    }}
                >
                    loading...
                </div>
            </div>
        );
    }
}

ChinaMapCharts.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.object,
    extend: PropTypes.object,
    seriesExtend: PropTypes.object
};

