## 2. 使用说明

	import React, { Component } from 'react'
	import Datepicker from '@meili/base-merchant-component/lib/datepicker';
	
	export default class DatepickerView extends Component {
		constructor () {
			super();
			this.state = {
				date: ''
			}
		}

		onChange(value) {
			this.setState({ date: value });
		}
		
		render () {
			return (
				<div>
					<Datepicker
						showTime
						value={ date } 
						defaultValue={ date }
						placeholder="有默认时间的日期控件"
						style={{ marginLeft: '15px' }}
						format="yyyy-MM-dd HH:mm:ss" 
						timeConfig={{defaultValue: "00:00:00"}}
						onChange={this.onChange.bind(this, 'date')} />
				</div>
			)
		}
	}
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| value        | 日期           | string or Date	 | -         |
| defaultValue        | 默认日期	           | string or Date	 | -         |
| format        | 展示的日期格式，配置参考[GregorianCalendarFormat](https://github.com/yiminghe/gregorian-calendar-format)           | string	 | "yyyy-MM-dd"         |
| disabledDate        | 不可选择的日期           | function	 | -         |
| onChange        | 时间发生变化的回调，发生在用户选择时间时           | function(Date value)	 | -         |
| disabled        | 禁用           | bool	 | -         |
| showTime        | 增加时间选择功能           | bool | false         |
| timeConfig        | 时间选择器相关配置,可参考TimePicker           | object	 | -         |







