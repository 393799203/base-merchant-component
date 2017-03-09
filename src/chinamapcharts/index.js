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


require('./style/index.less');
require('./ChinaJson.js');
// 指定图表的配置项和数据
const defaultOption = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },
    series: []
};
const MchartsType = 'map';
const MchartsMapType = 'china';
const MchartsLabel = {
    normal: {
        show: true
    },
    emphasis: {
        show: true
    }
};

export default class ChinaMapCharts extends Component {
    constructor (props) {
        super(props);
        this.domId = props.id || `chartId_${(Math.random() * 100000).toFixed(0)}`;
        this.state = {
            chartsData: props.data,
            extend: props.extend
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
            tempSeries[index].type = MchartsType; // 拼接类型
            tempSeries[index].mapType = MchartsMapType; // 拼接类型
            tempSeries[index].label = MchartsLabel; // 拼接类型
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

ChinaMapCharts.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.object,
    extend: PropTypes.object
};

