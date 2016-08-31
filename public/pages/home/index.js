import React, { Component } from 'react';

export default class HomeView extends Component {
	constructor () {
		super();
		this.state = {};
	}
	componentDidMount () {
		
	}
	render () {
		return (
			<div style={{
					fontSize: '20px',
					width: '1000px',
					margin: '0 auto',
					textAlign: 'center',
					padding: '150px 0'
				}}>
				<p className="font-thin text-white">
					商家后台组件是基于 React@0.14 封装的一套组件， 主要用于 美丽说商家后台、蘑菇街商家后台（小店）快速构建页面。
					react 组件化，实现快速开发，管理升级，从而达到更加高效地支撑业务。
				</p>
				<p className="m-t-xxl">
					<a className="btn"
						href="#/modal"
						style={{
							padding: '12px 40px',
							color: '#fff',
							fontSize: '16px',
							border: '1px solid #fff'
						}}>
						开始探索
					</a>
				</p>
				<p className="text-white text-base text-center wrapper-lg"
					style={{ position: 'absolute', bottom: '0', width: '500px', left: '50%', marginLeft: '-250px' }}>
					©copyright 美丽联合研发部 - 无线应用（会员&前端）
				</p>
			</div>
		)
	}
}