### 2. 使用说明

```

import React, { Component } from 'react';
import Timepicker from '@meili/base-merchant-component/lib/timepicker';

export default class TimepickerView extends Component {
	constructor () {
		super();
		this.state = {
			date:""
		};
	}
	
	onChange(value) {
		this.setState({
			date : value
		})
	}

	render () {
		return (
			<div>
				<h5>默认情况时间选择器</h5>
				<Timepicker />

				<h5>禁用时间选择器(设置水印)</h5>
				<Timepicker 
					disabled
					placeholder="有不可选时间"/>
						
				<h5>默认时间格式：HH:mm:ss</h5>
				<Timepicker 
					defaultValue="12:08:23" />
				
				<h5>设置时间格式：HH:mm</h5>
				<Timepicker 
					format="HH:mm"
					defaultValue="12:08"/>
				
				<h5>禁用小时0,1,2,3,4,5,6,22,23</h5>
				<Timepicker
					disabledHours={ () => [0,1,2,3,4,5,6,7,8,9] }/>
				
				<h5>禁用分钟:0,1,2,3,4,5,6,7,8,9</h5>
				<Timepicker 
					disabledMinutes={ () => [0,1,2,3,4,5,6,7,8,9] }/>
				
				<h5>禁用秒:0,1,2,3,4,5,6,7,8,9</h5>
				<Timepicker 
					disabledSeconds={ () => [0,1,2,3,4,5,6,7,8,9] }/>
						
				<h5>禁用并隐藏</h5>
				<Timepicker 
					disabledHours={ () => [0,1,2,3,4,5,6,7,8,9] }
					disabledMinutes={ () => [0,1,2,3,4,5,6,7,8,9] }
					disabledSeconds={ () => [0,1,2,3,4,5,6,7,8,9] }
					hideDisabledOptions />

				<h5>时间发生变化的回调，发生在用户选择时间时</h5>
					<Timepicker 
						onChange={value => this.onChange(value)} />
			</div>
		)
	}
}

```


### 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| defaultValue | 初始默认时间 | string or Date | － |
| value | 默认时间 | string or Date | － |
| placeholder | 没有值的时候显示的内容 | string | "请选择时间" |
| onChange | 时间发生变化的回调 | function(Date value) | －|
| format | 展示的时间格式 | string | "HH:mm:ss"、"HH:mm"、"mm:ss" |
| disabled | 禁用全部操作 | bool | false |
| disabledHours | 禁止选择部分小时选项 | function() | － |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | － |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | － |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |






