import React, { Component } from 'react';
import Carousel from '@mogu/up-components/lib/Carousel';
import './style/index.less'

export default class Slider extends Component {
	constructor () {
		super();
	}
	render () {
		return <Carousel {...this.props} />
	}
}