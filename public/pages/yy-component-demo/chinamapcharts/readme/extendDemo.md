```

extend: {
    // 颜色
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
    ], 
    // 提示框样式
    tooltip:{
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
    // 工具栏
    toolbox: {
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
    // 左侧数值，设置区间（min、max），默认为0-200
    visualMap: {
        max: 800,
        text: ['高', '低'],
        calculable: true,
        color: ['#ff8ba5', '#FF2555'],
        realtime: true
    }
}

<ChinaMapCharts data={chartsData} extend={extend}></ChinaMapCharts>

```