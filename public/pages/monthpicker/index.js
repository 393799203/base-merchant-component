import React, { Component } from 'react';
import Monthpicker from 'source_path/monthpicker';
import Notification from 'source_path/notification';
import Readme from './README.md';
import './style/index.less';

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
				<h1>
					月份选择 - Monthpicker
					<a href="mactt://message/user/01825" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t-30">
					<div className="date-picker-demo clearfix">
						<div className='f-l'>
							<h4>默认情况时间选择器</h4>
							<Monthpicker />
						</div>

						<div className='f-l sub-demo'>
							<h4>禁用时间选择器（disabled）、添加水印（placeholder）</h4>
							<Monthpicker 
								disabled 
								placeholder="请设置水印" />
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>配置的日期格式（format），设置默认值（defaultValue）</h4>
						<div className='f-l'>
							<h5>默认时间格式：yyyy-MM</h5>
							<Monthpicker 
								defaultValue={"2016-11"} />
						</div>

						<div className="f-l sub-demo">
							<h5>设置时间格式：yyyy/MM</h5>
							<Monthpicker 
								format={"yyyy/MM"}
								defaultValue={1486197669000}/>
						</div>

						<div className="f-l sub-demo">
							<h5>设置时间格式：yyyy年MM月</h5>
							<Monthpicker 
								format={"yyyy年MM月"}
								defaultValue={new Date()}/>
						</div>
					</div>

					<div className="date-picker-demo clearfix">
						<h4>事件：不可选择的日期（disabledDate），回调函数（onChange）</h4>
						<div className='f-l'>
							<h5>设置不可选择的日期</h5>
							<Monthpicker
								disabledDate={(value) => this.disabledDate(value)} />
						</div>

						<div className="f-l sub-demo">
							<h5>时间发生变化的回调，发生在用户选择时间时</h5>
							<Monthpicker 
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