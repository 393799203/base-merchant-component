### 2. 使用说明

```

import React, { Component } from 'react'
import Monthpicker from '@meili/base-merchant-component/lib/monthpicker';

export default class MonthpickerView extends Component {
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
					<Monthpicker />
				</div>

				<div>
					<h5>禁用时间选择器（disabled）、添加水印（placeholder）</h5>
					<Monthpicker 
						disabled 
						placeholder="请设置水印" />
				</div>
			
				<div>
					<h5>默认时间格式：yyyy-MM-dd</h5>
					<Monthpicker 
						defaultValue={"2016-11"} />
				</div>

				<div>
					<h5>设置时间格式：yyyy/MM/dd</h5>
					<Monthpicker 
						format={"yyyy/MM"}
						defaultValue={1486197669000}/>
				</div>

				<div>
					<h5>设置时间格式：yyyy年MM月dd日</h5>
					<Monthpicker 
						format={"yyyy年MM月"}
						defaultValue={new Date()}/>
				</div>
			
				<div>
					<h5>设置不可选择的日期</h5>
					<Monthpicker
						disabledDate={(value) => this.disabledDate(value)} />
				</div>

				<div>
					<h5>时间发生变化的回调，发生在用户选择时间时</h5>
					<Monthpicker 
						onChange={value => this.onChange(value)} />
				</div>
			</div>
		)
	}
}

```
	
### 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| format        | 展示的日期格式，配置参考[GregorianCalendarFormat](https://github.com/yiminghe/gregorian-calendar-format)   | string	 | "yyyy-MM-dd"         |
| disabled        | 不可编辑，禁用          |  bool	 | false        |
| style        |  外层文本框样式           | string  | -         |
| popupStyle        | 展示的时间选择器样式           | string  | -   |
| placeholder   | 水印   | string	 | -  |
| defaultValue        | 默认日期	           | string or Date or number	 | - |
| value        |  日期           | string or Date or number	 | -      |
| disabledDate        | 不可选择的日期           | function	 | -         |
| onChange  | 时间发生变化的回调，发生在用户选择时间时   | function(Date value)	 | -  |










