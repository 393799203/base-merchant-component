```

events: {
	'click': function (params) {
		alert('你点击了' + params.name + '的' + params.seriesName);
	}
}

<ChinaMapCharts data={chartsData} events={events}></ChinaMapCharts>

```