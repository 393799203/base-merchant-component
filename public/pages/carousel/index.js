import React, { Component } from 'react';
import Carousel from 'source_path/carousel/Carousel';
import Readme from './README.md';

const style = {
    background: '#fff',
    textAlign: 'center',
    padding: '30px 30px 45px 30px',
    color: '#f55',
    border: '1px solid #f55'
};

export default class CarouselView extends Component {
	constructor () {
		super();
		this.state = {
			autoplay: true
		};
	}
	componentDidMount () {
		
	}
	componentWillUnmount () {
		this.setState({ autoplay: false });
	}
	afterChange(current) {
      	console.log('afterChange', current);
  	}
  	beforeChange (from, to) {
  		console.log('beforeChange', from, to);
  	}
	render () {
		var {autoplay} = this.state;
		console.info(autoplay);
		return (
			<div className="m-b-lg m-l m-r">
				<h1>
					轮播图 - Carousel
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="clearfix">
					<div className="col-sm-3">
						<Carousel 
							afterChange={ this.afterChange } 
							beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>不自动滚动1</h3></div>
					        <div style={ style }><h3>不自动滚动2</h3></div>
					        <div style={ style }><h3>不自动滚动3</h3></div>
					        <div style={ style }><h3>不自动滚动4</h3></div>
					    </Carousel>
					</div>
					<div className="col-sm-3">
						<Carousel 
							autoplay={ autoplay } 
							afterChange={ this.afterChange } 
							beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>滚动轮播图1</h3></div>
					        <div style={ style }><h3>滚动轮播图2</h3></div>
					        <div style={ style }><h3>滚动轮播图3</h3></div>
					        <div style={ style }><h3>滚动轮播图4</h3></div>
					    </Carousel>
					</div>
					<div className="col-sm-3">
						<Carousel 
							autoplay={ autoplay } 
							effect="fade" 
							afterChange={ this.afterChange } 
							beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>渐变轮播图1</h3></div>
					        <div style={ style }><h3>渐变轮播图2</h3></div>
					        <div style={ style }><h3>渐变轮播图3</h3></div>
					        <div style={ style }><h3>渐变轮播图4</h3></div>
					    </Carousel>
					</div>
					<div className="col-sm-3">
						<Carousel 
							autoplay={ autoplay } 
							vertical="true" 
							afterChange={ this.afterChange } 
							beforeChange={ this.beforeChange }>
					        <div style={ style }><h3>垂直轮播图1</h3></div> 
					        <div style={ style }><h3>垂直轮播图2</h3></div>
					        <div style={ style }><h3>垂直轮播图3</h3></div>
					        <div style={ style }><h3>垂直轮播图4</h3></div>
					    </Carousel>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
					
				</div>
			</div>
		)
	}
}