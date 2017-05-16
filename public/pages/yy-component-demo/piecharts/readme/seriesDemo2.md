```

chartsData2: {
	'series': [{
		name: '访问来源1',
		radius: ['50%', '70%'], //内部空白部分大小， 外部整个圆形大小
		center: ['15%', '50%'],  //图形位移位置， left top
		label: {
			normal: {
				show: false,
				position: 'center'
			},
			//圆形中间的文字
			emphasis: {
				show: true,
				textStyle: {
					fontSize: '30',
					fontWeight: 'bold'
				}
			}
		},
		avoidLabelOverlap: false,  //圆形中间文字是否重叠
		labelLine: {
			normal: {
				show: true
			}
		},
		data: [
			{ value: 335, name: '直接访问' },
			{ value: 310, name: '邮件营销' },
			{ value: 234, name: '联盟广告' },
			{ value: 135, name: '视频广告' },
			{ value: 1548, name: '搜索引擎' }
		]
	}, {
		name: '访问来源2',

		radius: [0, '30%'],

		label: {
			normal: {
				position: 'inner'
			}
		},
		labelLine: {
			normal: {
				show: false
			}
		},
		data: [
			{ value: 335, name: '直达', selected: true },
			{ value: 679, name: '营销广告' },
			{ value: 1548, name: '搜索引擎' }
		]
	},
	{
		name: '访问来源2',
		radius: ['40%', '55%'],

		data: [
			{ value: 335, name: '直达' },
			{ value: 310, name: '邮件营销' },
			{ value: 234, name: '联盟广告' },
			{ value: 135, name: '视频广告' },
			{ value: 1048, name: '百度' },
			{ value: 251, name: '谷歌' },
			{ value: 147, name: '必应' },
			{ value: 102, name: '其他' }
		]
	}]
}

```