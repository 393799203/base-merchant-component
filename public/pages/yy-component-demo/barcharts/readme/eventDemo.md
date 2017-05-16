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

events: {
	'click': function (params) {
		alert('你点击了' + params.name + '的' + params.seriesName);
	}
}

<BarCharts data={chartsData} events={events}></BarCharts>

```