```
extend: {
    title: {
        text: 'PieCharts实例图标-再举个例子-🌰',
        subtext: '我是例子',
        x: 'center'
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
}

<PieCharts data={chartsData} extend={extend}></PieCharts>

```