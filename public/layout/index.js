import React, { Component } from 'react';
import menuData from './menu';

export default class LayoutView extends Component {
	constructor () {
		super();
		this.state = {
			menuData: menuData,
			activeUrl: ''
		};
	}
	activeMenu (item) {
		this.setState({
			activeUrl: item.link
		});
	}
	componentDidMount () {
		this.setState({
			activeUrl: window.location.hash.slice(0, window.location.hash.indexOf('?'))
		});
	}
	render () {
		var { menuData, activeUrl } = this.state;
		return (
			<div className="app-header-fixed app-aside-fixed">
				<div className="app-header navbar bg-danger clearfix">
					<div className="navbar-header bg-danger">
						<a href="#/" className="navbar-brand text-lt">商家后台组件</a>
					</div>
					<div className="pull-left" style={{marginLeft: "215px"}}>
						<ul className="nav navbar-nav">
							<li><a href="#/">首页</a></li>
							<li><a href="#/css">CSS</a></li>
							<li>
								<a href="http://gitlab.mogujie.org/Aveng/meili-base-merchant-component">
									我要贡献代码
								</a>
							</li>
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
				<div>
					<div className="app-aside bg-light">
						<div className="aside-wrap" style={{overflow: "scroll"}}>
							<ul className="nav" style={{background: '#edf1f2'}}>
								{
									menuData.map( (item, index) => {
										return <li 
											className={activeUrl == item.link ? 'active' : ''}
											key={index} 
											onClick={ (e) => this.activeMenu(item) }>
											<a href={item.link}>{item.title}</a>
										</li>
									})
								}
							</ul>
					
						</div>
					</div>
					<div className="app-content">
						{ this.props.children }
					</div>
				</div>
			</div>
		)
	}
}