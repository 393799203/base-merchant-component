import React, { Component } from 'react';
import Datepicker from 'source_path/datepicker';
import Readme from './README.md';

export default class DatepickerView extends Component {
	constructor () {
		super();
		this.state = {
			date: '',
			dateTime: '',
			dateDefaultTime: ''
		};
	}
	onChange(key, value) {
		var copy = this.state;
		copy[key] = value || '';
		this.setState(copy);
	}
	componentDidMount () {
		
	}
	render () {
		var { date, dateTime, dateDefaultTime } = this.state;
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					时间选择 - Datepicker
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t">
					<Datepicker
						value={ date } 
						format="yyyy-MM-dd"
						onChange={this.onChange.bind(this, 'date')} />

					<Datepicker
						showTime
						value={ dateTime } 
						placeholder="有时间的日期控件"
						style={{ marginLeft: '15px' }}
						format="yyyy-MM-dd HH:mm:ss" 
						onChange={this.onChange.bind(this, 'dateTime')} />

					<Datepicker
						showTime
						value={ dateDefaultTime } 
						placeholder="有默认时间的日期控件"
						style={{ marginLeft: '15px' }}
						format="yyyy-MM-dd HH:mm:ss" 
						timeConfig={{defaultValue: "00:00:00"}}
						onChange={this.onChange.bind(this, 'dateDefaultTime')} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
		)
	}
}