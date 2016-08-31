import React, { Component } from 'react';
import UpDatePicker from '@mogu/up-components/lib/DatePicker';
import './style/index.less'

export default class DatePicker extends Component {
	constructor () {
		super();
	}
	render () {
		return <UpDatePicker { ...this.props }/>
	}
}