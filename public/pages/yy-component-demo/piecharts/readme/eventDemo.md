```

events: {
	'click': function (params) {
		alert('你点击了' + params.name + '的' + params.seriesName);
	}
}

<PieCharts data={chartsData} events={events}></PieCharts>

```