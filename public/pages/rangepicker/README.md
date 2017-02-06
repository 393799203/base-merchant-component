## 2. 使用说明

```

import React, { Component } from 'react'
import Rangepicker from '@meili/base-merchant-component/lib/rangepicker';
	
export default class RangepickerView extends Component {
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

	disabledDate(value){
		var currenDate = new Date();
		return value.getTime() > currenDate.getTime();
	}

	render () {
		return (
			<div>
				<div>
					<h5>默认情况时间选择器</h5>
					<Rangepicker />
				</div>

				<div>
					<h5>禁用时间选择器</h5>
					<Rangepicker disabled/>
				</div>
				
				<div>
					<h5>默认为当前时间</h5>
					<Rangepicker 
						showTime
						startPlaceholder='请设置水印'
						endPlaceholder='请设置水印'/>
				</div>

				<div>
					<h5>设置默认时分秒（timeConfig）</h5>
					<Rangepicker
						showTime
						placeholder="请设置水印" 
						timeConfig={{defaultValue: "00:00:00"}} />
				</div>
				<div>
					<h5>默认时间格式：yyyy-MM-dd</h5>
					<Rangepicker 
						defaultValue={["2016-11-11","2016-12-12"]} />
				</div>

				<div>
					<h5>设置时间格式：yyyy/MM/dd</h5>
					<Rangepicker 
						format={"yyyy/MM/dd"}
						defaultValue={[1486197669000,1486346046000]}/>
				</div>

				<div>
					<h5>设置时间格式：yyyy年MM月dd日</h5>
					<Rangepicker 
						format={"yyyy年MM月dd日"}
						defaultValue={[new Date(),new Date(1486197669000)]}/>
				</div>
			
				<div>
					<h5>设置不可选择的日期</h5>
					<Rangepicker
						disabledDate={(value) => this.disabledDate(value)} />
				</div>

				<div>
					<h5>时间发生变化的回调，发生在用户选择时间时</h5>
					<Rangepicker 
						onChange={value => this.onChange(value)} />
				</div>
			</div>
		)
	}
}
	
```

## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| showTime        | 展示时分秒          | bool | false         |
| format        | 展示的日期格式，配置参考[GregorianCalendarFormat](https://github.com/yiminghe/gregorian-calendar-format)   | string	 | "yyyy-MM-dd"         |
| disabled        | 不可编辑，禁用          |  bool	 | false        |
| style        |  外层文本框样式           | string  | -         |
| popupStyle        | 展示的时间选择器样式           | string  | -   |
| timeConfig   | 时间选择器相关配置,可参考TimePicker   | object	 | -  |
| startPlaceholder   | 开始时间水印   | string	 | -  |
| endPlaceholder   | 结束时间水印   | string	 | -  |
| defaultValue        | 默认日期	           | array(数组中是string、date、number)	 | - |
| value        |  日期           | array(数组中是string、date、number)	 | -      |
| disabledDate        | 不可选择的日期           | function	 | -         |
| onChange  | 时间发生变化的回调，发生在用户选择时间时   | function(Date value)	 | -  |










