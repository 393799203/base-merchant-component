import React, { Component } from 'react';

export default class FullPageView extends Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div>
				<div className="app-header-fixed app-aside-fixed">
					<div className="app-header navbar bg-white-only clearfix">
						<div className="navbar-header bg-white-only">
							<a href="#/" className="navbar-brand text-lt">商家后台组件</a>
						</div>
						<div className="pull-left" style={{marginLeft: "215px"}}>
							<ul className="nav navbar-nav">
								<li><a href="#/">首页</a></li>
								<li><a>我要贡献代码</a></li>
								<li>
									<a href="http://gitlab.mogujie.org/Aveng/meili-base-merchant-component">
										组件源码
									</a>
								</li>
								<li>
									<a href="http://gitlab.mogujie.org/Aveng/meili-base-merchant-component/issues">
										问题反馈
									</a>
								</li>
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
				<div style={{
					position: 'absolute',
					width: '100%',
					top: '0',
					minHeight: '100%',
					background: 'linear-gradient(135deg, #f52121, #f57272, #f5a6a6)'
				}}>
					{ this.props.children }
				</div>
			</div>
		)
	}
}