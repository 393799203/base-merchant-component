```

seriesExtend: {
    type: 'line',
    stack: '总量', // 数值累加
    areaStyle: { // 展示阴影
        normal: {}
    }
},

<LineCharts data={chartsData} seriesExtend={seriesExtend}></LineCharts>

```