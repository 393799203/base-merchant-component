import React, { Component } from 'react';
import Slider from 'source_path/slider/index';
import SliderReadme from './README.md';

const style = {
    background: '#fff',
    textAlign: 'center',
    padding: '30px 30px 45px 30px',
    color: '#f55',
    border: '1px solid #f55'
};

export default class SliderView extends Component {
	constructor () {
		super();
		this.state = {};
	}
	componentDidMount () {
		
	}
	afterChange(current) {
      	console.log('afterChange', current);
  	}
  	beforeChange (from, to) {
  		console.log('beforeChange', from, to);
  	}
	render () {
		return (
			<div className="m-b-lg m-l m-r">
				<h1>
					轮播图 - Slider
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="clearfix">
					<div className="col-sm-3">
						<Slider afterChange={ this.afterChange } beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>不自动滚动1</h3></div>
					        <div style={ style }><h3>不自动滚动2</h3></div>
					        <div style={ style }><h3>不自动滚动3</h3></div>
					        <div style={ style }><h3>不自动滚动4</h3></div>
					    </Slider>
					</div>
					<div className="col-sm-3">
						<Slider 
							autoplay="true"
							afterChange={ this.afterChange } 
							beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>滚动轮播图1</h3></div>
					        <div style={ style }><h3>滚动轮播图2</h3></div>
					        <div style={ style }><h3>滚动轮播图3</h3></div>
					        <div style={ style }><h3>滚动轮播图4</h3></div>
					    </Slider>
					</div>
					<div className="col-sm-3">
						<Slider autoplay="true" effect="fade" afterChange={ this.afterChange } beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>渐变轮播图1</h3></div>
					        <div style={ style }><h3>渐变轮播图2</h3></div>
					        <div style={ style }><h3>渐变轮播图3</h3></div>
					        <div style={ style }><h3>渐变轮播图4</h3></div>
					    </Slider>
					</div>
					<div className="col-sm-3">
						<Slider autoplay="true" vertical="true" afterChange={ this.afterChange } beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>垂直轮播图1</h3></div> 
					        <div style={ style }><h3>垂直轮播图2</h3></div>
					        <div style={ style }><h3>垂直轮播图3</h3></div>
					        <div style={ style }><h3>垂直轮播图4</h3></div>
					    </Slider>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: SliderReadme }}>
					
				</div>
			</div>
		)
	}
}