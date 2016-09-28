import React, { Component } from 'react';

export default class FullPageView extends Component {
	constructor () {
		super();
	}
	render () {
		let curHash = window.location.hash ? window.location.hash.split("?")[0] : "";
		let linkHash = ["#/doc", "#/css"];
		let isHome = linkHash.indexOf(curHash) > -1 ? false : true;

		return (
			<div>
				<div className="app-header-fixed app-aside-fixed">
					<div className={isHome ? "app-header navbar bg-white-only clearfix" : "app-header navbar bg-danger clearfix"}>
						<div className={isHome ? "navbar-header bg-white-only" : "navbar-header bg-danger"}>
							<a href="#/" className="navbar-brand text-lt">商家后台</a>
						</div>
						<div className="pull-left" style={{marginLeft: "215px"}}>
							<ul className="nav navbar-nav">
								<li><a href="#/css">CSS</a></li>
								<li><a href="#/modal">组件</a></li>
								<li>
									<a href="http://gitlab.mogujie.org/Aveng/meili-base-merchant-component">
										组件源码
									</a>
								</li>
								<li>
									<a href="http://gitlab.mogujie.org/Aveng/meili-base-merchant-component/issues">
										组件问题反馈
									</a>
								</li>
								<li><a href="http://gitlab.mogujie.org/Aveng/meili-base-merchant-component">我要贡献代码</a></li>
								<li><a href="#/doc">商家后台文档</a></li>
							</ul>
						</div>
						<div className="pull-right">
							<ul className="nav navbar-nav">
								<li>
									<a href="http://aveng.meili-inc.com/#/doc/%40meili%2Fbase-merchant-component?_k=ij7y6x">
										返回Aveng
									</a>
								</li>
							</ul> 
						</div>
					</div>
				</div>
				<div style={
					isHome ? 
					{
						position: 'absolute',
						width: '100%',
						top: '0',
						minHeight: '100%',
						background: 'linear-gradient(135deg, #f52121, #f57272, #f5a6a6)'
					} : {
						background: '#fefefe'
					}
				}>
					{ this.props.children }
				</div>
			</div>
		)
	}
}