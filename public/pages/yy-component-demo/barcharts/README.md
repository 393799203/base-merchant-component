### 2. 属性 - Props ---

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| width     |  图表占的总宽度,只需传数值，单位为像素 | string | 100% |
| height    |  图表占的总高度,只需传数值，单位为像素 | string | 400 |
| data      |  传给图表的数据，格式见后面 | {object} | - |
| extend    |  自定义chart属性，参照百度echarts官网 | object | - |
| events    |  绑定事件，参照百度Echarts官网 | object |  |
| className |  图表外层容器的class | string | - |
| id        |  图表外层容器的id | string | chartsId_随机数 |

### 3. 方法 - Function

> 还有很多属性，可以查询百度echarts官网<http://echarts.baidu.com/option.html#title>，通过extend来扩展，类型太多，我这不全部列举

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| events       | 绑定事件，参照百度Echarts官网            | --       |


