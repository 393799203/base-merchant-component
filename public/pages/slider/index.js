import React, { Component } from 'react';
import Carousel from '@mogu/up-components/lib/Carousel';
import './style/index.less';

const style = {
    background: '#23b7e5',
    textAlign: 'center',
    padding: '30px',
    color: '#fff'
};

export default class SliderView extends Component {
	constructor () {
		super();
		this.state = {};
	}
	componentDidMount () {
		
	}
	onChange(a, b, c) {
      	console.log(a, b, c);
  	}
	render () {
		return (
			<div>
				<Carousel afterChange={ this.onChange }>
			        <div style={ style }><h3>1</h3></div>
			        <div style={ style }><h3>2</h3></div>
			        <div style={ style }><h3>3</h3></div>
			        <div style={ style }><h3>4</h3></div>
			    </Carousel>
			</div>
		)
	}
}