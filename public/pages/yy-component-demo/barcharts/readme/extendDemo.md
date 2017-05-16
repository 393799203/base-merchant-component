```

chartsData: {
	yAxis: { // X轴数据
		data: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"]
	},
	series: [{ // 数值
		name: '男生',
		data: [8, 32, 36, 45, 26, 36]
	}, {
		name: '女生',
		data: [20, 17, 34, 10, 38, 23]
	}]
}

extend:{
    title: {
        text: 'barCharts实例图标-再举个例子-🌰',
        subtext: '我是例子',
        x: 'center'
    },
	color:[
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#ff8ba5' // 0% 处的颜色
        }, {
            offset: 1, color: '#FF2555' // 100% 处的颜色
        }], false), // 渐变颜色，需要：import echarts from 'echarts';
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
<BarCharts data={chartsData} extend={extend}></BarCharts>

```