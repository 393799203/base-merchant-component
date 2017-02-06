import React, { Component } from 'react';
import Datepicker from 'source_path/datepicker';
import Notification from 'source_path/notification';
import Readme from './README.md';
import './style/index.less';

export default class DatepickerView extends Component {
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
		var currenDate = new Date();
		return value.getTime() < currenDate.getTime();
	}

	render () {
		return (
			<div className="m-l m-r m-b-xxl mc-date-picker">
				<h1>
					日期选择 - Datepicker
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t-30">
					<div className="date-picker-demo clearfix">
						<div className='f-l'>
							<h4>默认情况时间选择器</h4>
							<Datepicker />
						</div>

						<div className='f-l sub-demo'>
							<h4>禁用时间选择器（disabled）</h4>
							<Datepicker disabled/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>展示时分秒（showTime），设置水印（placeholder）</h4>
						<div className='f-l'>
							<h5>默认为当前时间</h5>
							<Datepicker 
								showTime
								placeholder="请设置水印" />
						</div>

						<div className="f-l sub-demo">
							<h5>设置默认时分秒（timeConfig）</h5>
							<Datepicker
								showTime
								placeholder="请设置水印" 
								timeConfig={{defaultValue: "00:00:00"}} />
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>配置的日期格式（format），设置默认值（defaultValue）</h4>
						<div className='f-l'>
							<h5>默认时间格式：yyyy-MM-dd</h5>
							<Datepicker 
								defaultValue={"2016-11-11"} />
						</div>

						<div className="f-l sub-demo">
							<h5>设置时间格式：yyyy/MM/dd</h5>
							<Datepicker 
								format={"yyyy/MM/dd"}
								defaultValue={1486197669000}/>
						</div>

						<div className="f-l sub-demo">
							<h5>设置时间格式：yyyy年MM月dd日</h5>
							<Datepicker 
								format={"yyyy年MM月dd日"}
								defaultValue={new Date()}/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>事件：不可选择的日期（disabledDate），回调函数（onChange）</h4>
						<div className='f-l'>
							<h5>设置不可选择的日期</h5>
							<Datepicker
								disabledDate={(value) => this.disabledDate(value)} />
						</div>

						<div className="f-l sub-demo">
							<h5>时间发生变化的回调，发生在用户选择时间时</h5>
							<Datepicker 
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