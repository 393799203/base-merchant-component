import React, { Component } from 'react';
import UpDatePicker from '@mogu/up-components/lib/DatePicker';
import Datepicker from 'source_path/datepicker/index';

export default class DatepickerView extends Component {
	constructor () {
		super();
		this.state = {
			date: ''
		};
	}
	onChange(value) {
		this.setState({ date: value})
	}
	componentDidMount () {
		
	}
	render () {
		var { date } = this.state;
		return (
			<div className="wrapper">
				<h2 
					className="font-thin b-b b-light line-dashed m-n" 
					style={{ 
						padding:'0 0 15px 0',
						fontSize: '20px', 
						color: '#58666e'
					}}>
					时间选择 - Datepicker
				</h2>
				<div className="m-t">
					<UpDatePicker
						value={ date } 
						format="yyyy/MM/dd"
						onChange={this.onChange.bind(this)} />
				</div>
			</div>
		)
	}
}