```

seriesExtend: {
    type: 'map',
    mapType: 'china',
    selectedMode: 'single',
    showLegendSymbol: true, // 是否在地图中展示data的颜色图标
    itemStyle: {
        emphasis: {
            label: {
                show: true
            },
            areaColor: '#FF6868',
            color: '#FF6868',
            borderColor: '#FF6868'
        }
    },
    avoidLabelOverlap: true,
    label: {
        normal: {
            show: true
        },
        emphasis: {
            show: true
        }
    },
    labelLine: {
        normal: {
            show: true
        }
    }
}

<ChinaMapCharts data={chartsData} seriesExtend={seriesExtend}></ChinaMapCharts>

```