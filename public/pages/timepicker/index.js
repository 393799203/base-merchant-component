import React, { Component } from 'react';
import Timepicker from 'source_path/timepicker';
import Notification from 'source_path/notification';
import Readme from './README.md';

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
		},() => {
			Notification.info({
	            message: "你选择的日期是:"+value,
	            duration: 2000
	        });
		})
	}

	disabledDate(value){
		return value > 30
	}

	render () {
		return (
			<div className="m-l m-r m-b-xxl mc-date-picker">
				<h1>
					时间选择 - Timepicker
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t-30">
					<div className="date-picker-demo clearfix">
						<div className='f-l'>
							<h4>默认情况时间选择器</h4>
							<Timepicker />
						</div>

						<div className='f-l sub-demo'>
							<h4>禁用时间选择器（disabled），设置水印（placeholder）</h4>
							<Timepicker 
								disabled
								placeholder="有不可选时间"/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>配置的日期格式（format），设置默认值（defaultValue）</h4>
						<div className='f-l'>
							<h5>默认时间格式：HH:mm:ss</h5>
							<Timepicker 
								defaultValue="12:08:23" />
						</div>

						<div className="f-l sub-demo">
							<h5>设置时间格式：HH:mm</h5>
							<Timepicker 
								format="HH:mm"
								defaultValue="12:08"/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>事件：禁用时间段</h4>
						<div className='f-l'>
							<h5>禁用小时（disabledHours）：0,1,2,3,4,5,6,22,23</h5>
							<Timepicker
								disabledHours={ () => [0,1,2,3,4,5,6,7,8,9] }/>
						</div>

						<div className="f-l sub-demo">
							<h5>禁用分钟（disabledMinutes）：0,1,2,3,4,5,6,7,8,9</h5>
							<Timepicker 
								disabledMinutes={ () => [0,1,2,3,4,5,6,7,8,9] }/>
						</div>

						<div className="f-l sub-demo">
							<h5>禁用秒（disabledSeconds）：0,1,2,3,4,5,6,7,8,9</h5>
							<Timepicker 
								disabledSeconds={ () => [0,1,2,3,4,5,6,7,8,9] }/>
						</div>

						<div className="f-l sub-demo">
							<h5>禁用并隐藏（hideDisabledOptions）</h5>
							<Timepicker 
								disabledHours={ () => [0,1,2,3,4,5,6,7,8,9] }
								disabledMinutes={ () => [0,1,2,3,4,5,6,7,8,9] }
								disabledSeconds={ () => [0,1,2,3,4,5,6,7,8,9] }
								hideDisabledOptions />
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>事件：onchange</h4>
						<div className='f-l'>
							<h5>时间发生变化的回调，发生在用户选择时间时（onChange）</h5>
							<Timepicker 
								onChange={value => this.onChange(value)} />
						</div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
		)
	}
}