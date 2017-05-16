```
chartsData: {
    //X轴显示的文字，或者其他的附加属性
    'xAxis': {
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    //对应X轴data数组的长度的数值
    'series': [{
        name: '邮件营销',
        data: [120, 132, 101, 134, 90, 230, 210],
        yAxisIndex:1 // 选择以第几Y轴为标准，左0右1，默认为左
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
}

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
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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

<LineCharts data={chartsData} extend={extend}></LineCharts>

```