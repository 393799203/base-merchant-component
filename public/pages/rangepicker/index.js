/* eslint-disable */
import React, { Component } from 'react';
import Rangepicker from 'source_path/rangepicker';
import Notification from 'source_path/notification';
import Readme from './README.md';
import './style/index.less';

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
		},() => {
			Notification.info({
	            message: "你选择的日期是:"+value,
	            duration: 2000
	        });
		})
	}

	disabledDate(value){
		var currenDate = new Date();
		return value.getTime() > currenDate.getTime();
	}

	render () {
		return (
			<div className="m-l m-r m-b-xxl mc-date-picker">
				<h2 className='p-b-5 b-b dashed'>
					日期区间 - Rangepicker
					<a href="mactt://message/user/01825" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
				</h2>
				<h3>
					1. 示例
				</h3>
				<div>
					<div className="date-picker-demo clearfix">
						<div className='f-l'>
							<h4>默认情况时间选择器</h4>
							<Rangepicker />
						</div>

						<div className='f-l sub-demo'>
							<h4>禁用时间选择器</h4>
							<Rangepicker disabled/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>展示时分秒（showTime），设置水印（startPlaceholder、endPlaceholder）</h4>
						<div className='f-l'>
							<h4>默认为当前时间</h4>
							<Rangepicker
								showTime
								startPlaceholder='请设置水印'
        						endPlaceholder='请设置水印'/>
						</div>

						<div className="f-l sub-demo">
							<h4>设置默认时分秒（timeConfig）</h4>
							<Rangepicker
								showTime
								placeholder="请设置水印"
								timeConfig={{defaultValue: "00:00:00"}} />
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>配置的日期格式（format），设置默认值（defaultValue）</h4>
						<div className='f-l'>
							<h4>默认时间格式：yyyy-MM-dd</h4>
							<Rangepicker
								defaultValue={["2016-11-11","2016-12-12"]} />
						</div>

						<div className="f-l sub-demo">
							<h4>设置时间格式：yyyy/MM/dd</h4>
							<Rangepicker
								format={"yyyy/MM/dd"}
								defaultValue={[1486197669000,1486346046000]}/>
						</div>

						<div className="f-l sub-demo">
							<h4>设置时间格式：yyyy年MM月dd日</h4>
							<Rangepicker
								format={"yyyy年MM月dd日"}
								defaultValue={[new Date(),new Date(1486197669000)]}/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>事件：不可选择的日期（disabledDate），回调函数（onChange）</h4>
						<div className='f-l'>
							<h4>设置不可选择的日期</h4>
							<Rangepicker
								disabledDate={(value) => this.disabledDate(value)} />
						</div>

						<div className="f-l sub-demo">
							<h4>时间发生变化的回调，发生在用户选择时间时</h4>
							<Rangepicker
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
/* eslint-enable */
