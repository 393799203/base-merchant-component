### 1.2、Tag 基本用法

	import React, { Component } from 'react'
    import {Tag}  from '@meili/base-merchant-component/lib/tag';

    class TagView extends Component {
        render () {
            return (<div>
			<Tag
				className='custom-tag'
				theme='warning'
				shape='round'
				type='border'
				disabled={true}
			>
				<i className='iconfont icon-warn'/> 警告
			</Tag>
	    </div>);
        }
    }

### 1.3、Tag 参数说明
| 参数          | 说明                  | 类型         |默认值        |是否必需
| ----------   | -------------------- | ----------- |------------ |
| className    | 自定义样式 |    string   |   -   | false
| theme       | 主题色，可选 `default`,`danger`,`dark`,`success`,`info`,`warning` |   string      |   `default`     | false
| shape    | 形状，可选 `round`, `normal` |    string     |   `normal`     | false
| type   | 线条或者填充，可选 `fill`, `border`        |    string     |   `fill`      | false
| disabled   | 是否禁用 |    bool     |   -      | false
| children   | tag显示内容 |    node     |   -      | true



