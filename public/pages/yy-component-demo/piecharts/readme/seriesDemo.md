```

chartsData1: {
	'series': [{
		name: '半径模式',
		center: ['15%', '50%'],
		roseType: 'radius',     //type决定图标样式
		label: {
			normal: {
				show: false
			},
			emphasis: {
				show: true
			}
		},
		data: [
			{ value: 10, name: 'rose1' },
			{ value: 5, name: 'rose2' },
			{ value: 15, name: 'rose3' },
			{ value: 25, name: 'rose4' },
			{ value: 20, name: 'rose5' },
			{ value: 35, name: 'rose6' },
			{ value: 30, name: 'rose7' },
			{ value: 40, name: 'rose8' }
		]
	},
	{
		name: '面积模式',
		center: ['45%', '50%'],
		roseType: 'area',
		data: [
			{ value: 10, name: 'rose1' },
			{ value: 5, name: 'rose2' },
			{ value: 15, name: 'rose3' },
			{ value: 25, name: 'rose4' },
			{ value: 20, name: 'rose5' },
			{ value: 35, name: 'rose6' },
			{ value: 30, name: 'rose7' },
			{ value: 40, name: 'rose8' }
		]
	}, {
		name: '全圆模式',
		center: ['80%', '50%'],
		data: [
			{ value: 10, name: 'rose1' },
			{ value: 5, name: 'rose2' },
			{ value: 15, name: 'rose3' },
			{ value: 25, name: 'rose4' },
			{ value: 20, name: 'rose5' },
			{ value: 35, name: 'rose6' },
			{ value: 30, name: 'rose7' },
			{ value: 40, name: 'rose8' }
		]
	}]
}

```