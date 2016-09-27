import React, { Component } from 'react';
import './style/index.less';

export default class CSSView extends Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div className="m-l m-r m-b-xxl mc-theme">
				<h1 className="m-l m-r clearfix">
					商家后台主题样式 
					
				</h1>
				<div className="m-l m-r" style={{padding: '20px 0',borderBottom: '1px dashed #eee'}}>
					<a
						className="btn btn-danger-custom w m-l" 
						href="http://gitlab.mogujie.org/f2e/merchant-theme.git">
						查看 Gitlab 源码
					</a>
				</div>
				<h2 className="m-l m-r">
					Color variables
				</h2>
				<div className="m-l m-t clearfix">
					<div style={{ background: '#e53132', color: '#fff' }} 
						className="col-sm-3 wrapper">
						@color-primary-dark: #e53132;
					</div>
					<div style={{ background: '#f55', color: '#fff' }} 
						className="col-sm-3 wrapper">
						@color-primary: #f55;
					</div>
					<div style={{ background: '#2ad', color: '#fff' }} 
						className="col-sm-3 wrapper">
						@color-helper: #2ad;
					</div>
					<div style={{ background: '#fff'}} 
						className="col-sm-3 wrapper">
						@color-button: #fff;
					</div>
					<div style={{ background: '#333', color: '#fff' }} 
						className="col-sm-3 wrapper">
						@color-text-primary: #333;
					</div>
					<div style={{ background: '#666', color: '#fff' }} 
						className="col-sm-3 wrapper">
						@color-text-secondary: #666;
					</div>
					<div style={{ background: '#888', color: '#fff' }} 
						className="col-sm-3 wrapper">
						@color-text-helper: #888;
					</div>
					<div style={{ background: '#c4c4c4'}} 
						className="col-sm-3 wrapper">
						@color-button-border: #c4c4c4;
					</div>
					<div style={{ background: '#ddd'}} 
						className="col-sm-3 wrapper">
						@color-button-disabled: #ddd;
					</div>
					<div style={{ background: '#e2e2e2'}} 
						className="col-sm-3 wrapper">
						@color-border: #e2e2e2;
					</div>
					<div style={{ background: '#f4f5fa'}} 
						className="col-sm-3 wrapper">
						@color-table-header: #f4f5fa;
					</div>
					<div style={{ background: '#f5f5f5'}} 
						className="col-sm-3 wrapper">
						@color-button-active: #f5f5f5;
					</div>
					<div style={{ background: '#f9fafc'}} 
						className="col-sm-3 wrapper">
						@color-table-alter: #f9fafc;
					</div>
				</div>
				<h2 className="m-l m-r">
					Util CSS
				</h2>
				<div className="m-t clearfix">
					<div className="col-sm-3">
						<table className="table table-border bg-white-only b-a">
							<tbody>
								<tr className="bg-light dker">
									<td colSpan="2"><z>Display</z></td>
								</tr>
								<tr>
									<td>.clearfix</td>
									<td>清除浮动</td>
								</tr>
								<tr>
									<td>.fl</td>
									<td>float: left</td>
								</tr>
								<tr>
									<td>.fr</td>
									<td>float: right</td>
								</tr>
								<tr>
									<td>.hide</td>
									<td>display: none</td>
								</tr>
								<tr>
									<td>.show</td>
									<td>display: block</td>
								</tr>
								<tr>
									<td>.invisible</td>
									<td>visibility: hidden</td>
								</tr>
								<tr>
									<td style={{verticalAlign: 'middle'}}>.center-block</td>
									<td>
										display: block<br/>
										margin-left: auto<br/>
										margin-right: auto
									</td>
								</tr>
								
	        				</tbody>
						</table>
					</div>
					<div className="col-sm-4">
						<table className="table table-border bg-white-only b-a">
							<tbody>
								<tr className="bg-light dker">
									<td colSpan="2"><z>Text</z></td>
								</tr>
								<tr>
									<td>.text-primary</td>
									<td style={{color: '#f55'}}>color: #f55</td>
								</tr>
								<tr>
									<td>.text-secondary</td>
									<td style={{color: '#666'}}>color: #666</td>
								</tr>
								<tr>
									<td>.text-helper</td>
									<td style={{color: '#888'}}>color: #888</td>
								</tr>
								<tr>
									<td>.text-single-line</td>
									<td>
										overflow: hidden<br/>
										text-overflow: ellipsis<br/>
										white-space: nowrap
									</td>
								</tr>
	        				</tbody>
						</table>
					</div>
				</div>
				<div className="clearfix">
					<div className="col-sm-3">
						<table className="table table-border bg-white-only b-a">
							<tbody>
								<tr className="bg-light dker">
									<td colSpan="2"><z>Margin: margin-top</z></td>
								</tr>
								<tr>
									<td>.mt0</td>
									<td>margin-top: 0</td>
								</tr>
								<tr>
									<td>.mt5</td>
									<td>margin-top: 5px</td>
								</tr>
								<tr>
									<td>.mt10</td>
									<td>margin-top: 10px</td>
								</tr>
								<tr>
									<td>.mt15</td>
									<td>margin-top: 15px</td>
								</tr>
								<tr>
									<td>.mt20</td>
									<td>margin-top: 20px</td>
								</tr>
								<tr>
									<td>.mt25</td>
									<td>margin-top: 25px</td>
								</tr>
								<tr>
									<td>.mt30</td>
									<td>margin-top: 30px</td>
								</tr>
								<tr>
									<td>.mt35</td>
									<td>margin-top: 35px</td>
								</tr>
								<tr>
									<td>.mt40</td>
									<td>margin-top: 40px</td>
								</tr>
	        				</tbody>
						</table>
					</div>
					<div className="col-sm-3">
						<table className="table table-border bg-white-only b-a">
							<tbody>
								<tr className="bg-light dker">
									<td colSpan="2"><z>Margin: margin-right</z></td>
								</tr>
								<tr>
									<td>.mr0</td>
									<td>margin-right: 0</td>
								</tr>
								<tr>
									<td>.mr5</td>
									<td>margin-right: 5px</td>
								</tr>
								<tr>
									<td>.mr10</td>
									<td>margin-right: 10px</td>
								</tr>
								<tr>
									<td>.mr15</td>
									<td>margin-right: 15px</td>
								</tr>
								<tr>
									<td>.mr20</td>
									<td>margin-right: 20px</td>
								</tr>
								<tr>
									<td>.mr25</td>
									<td>margin-right: 25px</td>
								</tr>
								<tr>
									<td>.mr30</td>
									<td>margin-right: 30px</td>
								</tr>
								<tr>
									<td>.mr35</td>
									<td>margin-right: 35px</td>
								</tr>
								<tr>
									<td>.mr40</td>
									<td>margin-right: 40px</td>
								</tr>
	        				</tbody>
						</table>
					</div>
					<div className="col-sm-3">
						<table className="table table-border bg-white-only b-a">
							<tbody>
								<tr className="bg-light dker">
									<td colSpan="2"><z>Margin: margin-bottom</z></td>
								</tr>
								<tr>
									<td>.mb0</td>
									<td>margin-bottom: 0</td>
								</tr>
								<tr>
									<td>.mb5</td>
									<td>margin-bottom: 5px</td>
								</tr>
								<tr>
									<td>.mb10</td>
									<td>margin-bottom: 10px</td>
								</tr>
								<tr>
									<td>.mb15</td>
									<td>margin-bottom: 15px</td>
								</tr>
								<tr>
									<td>.mb20</td>
									<td>margin-bottom: 20px</td>
								</tr>
								<tr>
									<td>.mb25</td>
									<td>margin-bottom: 25px</td>
								</tr>
								<tr>
									<td>.mb30</td>
									<td>margin-bottom: 30px</td>
								</tr>
								<tr>
									<td>.mb35</td>
									<td>margin-bottom: 35px</td>
								</tr>
								<tr>
									<td>.mb40</td>
									<td>margin-bottom: 40px</td>
								</tr>
	        				</tbody>
						</table>
					</div>
					<div className="col-sm-3">
						<table className="table table-border bg-white-only b-a">
							<tbody>
								<tr className="bg-light dker">
									<td colSpan="2"><z>Margin: margin-left</z></td>
								</tr>
								<tr>
									<td>.ml0</td>
									<td>margin-left: 0</td>
								</tr>
								<tr>
									<td>.ml5</td>
									<td>margin-left: 5px</td>
								</tr>
								<tr>
									<td>.ml10</td>
									<td>margin-left: 10px</td>
								</tr>
								<tr>
									<td>.ml15</td>
									<td>margin-left: 15px</td>
								</tr>
								<tr>
									<td>.ml20</td>
									<td>margin-left: 20px</td>
								</tr>
								<tr>
									<td>.ml25</td>
									<td>margin-left: 25px</td>
								</tr>
								<tr>
									<td>.ml30</td>
									<td>margin-left: 30px</td>
								</tr>
								<tr>
									<td>.ml35</td>
									<td>margin-left: 35px</td>
								</tr>
								<tr>
									<td>.ml40</td>
									<td>margin-left: 40px</td>
								</tr>
	        				</tbody>
						</table>
					</div>	
				</div>
				<h2 className="m-l m-r">
					Element
				</h2>
				<div className="m-t clearfix">
					<div className="col-sm-12">
						<table className="table table-border bg-white-only b-a v-middle">
							<thead>
								<tr className="bg-light">
									<th colSpan="4"><z>Button & Link</z></th>
								</tr>
								<tr className="bg-light lter">
									<th>Tag</th>
									<th>ClassName</th>
									<th>Code</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>a | button</td>
									<td>xd-btn primary</td>
									<td><code>{'<a className="xd-btn primary">按钮</a>'}</code></td>
									<td><a className="xd-btn primary">按钮</a></td>
								</tr>
								<tr>
									<td>a | button</td>
									<td>xd-btn disabled</td>
									<td><code>{'<a className="xd-btn disabled">按钮</a>'}</code></td>
									<td><a className="xd-btn disabled">按钮</a></td>
								</tr>
								<tr>
									<td>a | button</td>
									<td>xd-btn</td>
									<td><code>{'<a className="xd-btn">按钮</a>'}</code></td>
									<td><a className="xd-btn">按钮</a></td>
								</tr>
								<tr>
									<td>a</td>
									<td>xd-link</td>
									<td><code>{'<a className="xd-link">链接</a>'}</code></td>
									<td><a className="xd-link">链接</a></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-sm-12">
						<table className="table table-border bg-white-only b-a v-middle">
							<thead>
								<tr className="bg-light">
									<th colSpan="4"><z>Form</z></th>
								</tr>
								<tr className="bg-light lter">
									<th>Tag</th>
									<th>ClassName</th>
									<th>Code</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>input</td>
									<td>xd-input</td>
									<td>
										<code>{'<input type="text" className="xd-input" />'}</code>
									</td>
									<td><input type="text" className="xd-input" /></td>
								</tr>
								<tr>
									<td>select</td>
									<td>xd-select</td>
									<td>
										<code>
											{"<select className='xd-select'>"}<br/>
												{"<option>- 请选择 -</option>"}<br/>
											{"</select>"}
										</code>
									</td>
									<td>
										<select className="xd-select">
											<option>- 请选择 -</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>checkbox</td>
									<td>xd-checkbox</td>
									<td>
										<code>
											{'<input className="xd-checkbox" type="checkbox"/>'}<br/>
											{'<span></span>'}
										</code>
									</td>
									<td>
										<input className="xd-checkbox" type="checkbox"/>
										<span></span>
									</td>
								</tr>
								<tr>
									<td>checkbox checked</td>
									<td>xd-checkbox</td>
									<td>
										<code>
											{'<input className="xd-checkbox" type="checkbox" checked/>'}<br/>
											{'<span></span>'}
										</code>
									</td>
									<td>
										<input className="xd-checkbox" type="checkbox" checked onChange={ () => {} }/>
										<span></span>
									</td>
								</tr>
								<tr>
									<td>checkbox disabled</td>
									<td>xd-checkbox</td>
									<td>
										<code>
											{'<input className="xd-checkbox" type="checkbox" disabled/>'}<br/>
											{'<span></span>'}
										</code>
									</td>
									<td>
										<input className="xd-checkbox" type="checkbox" disabled/>
										<span></span>
									</td>
								</tr>
								<tr>
									<td>radio</td>
									<td>xd-radio</td>
									<td>
										<code>
											{'<input className="xd-radio" type="radio"/>'}<br/>
											{'<span></span>'}
										</code>
									</td>
									<td>
										<input className="xd-radio" type="radio"/>
										<span></span>
									</td>
								</tr>
								<tr>
									<td>radio checked</td>
									<td>xd-radio</td>
									<td>
										<code>
											{'<input className="xd-radio" type="radio" checked/>'}<br/>
											{'<span></span>'}
										</code>
									</td>
									<td>
										<input className="xd-radio" type="radio" checked onChange={ () => {} }/>
										<span></span>
									</td>
								</tr>
								<tr>
									<td>radio disabled</td>
									<td>xd-radio</td>
									<td>
										<code>
											{'<input className="xd-radio" type="radio" disabled/>'}<br/>
											{'<span></span>'}
										</code>
									</td>
									<td>
										<input className="xd-radio" type="radio" disabled/>
										<span></span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-sm-12">
						<table className="table table-border bg-white-only b-a v-middle">
							<thead>
								<tr className="bg-light">
									<th colSpan="4"><z>Table</z></th>
								</tr>
								<tr className="bg-light lter">
									<th>Tag</th>
									<th>ClassName</th>
									<th>Code</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>table</td>
									<td>xd-table</td>
									<td>
										<code>{'<table className="xd-table">'}</code><br/>
										<code style={{paddingLeft: '20px'}}>{'<thead>'}</code><br/>
										<code style={{paddingLeft: '40px'}}>{'<tr><th>表头1</th><th>表头2</th><th>表头3</th></tr>'}</code><br/>
										<code style={{paddingLeft: '20px'}}>{'</thead>'}</code><br/>
										<code style={{paddingLeft: '20px'}}>{'</tbody>'}</code><br/>
										<code style={{paddingLeft: '40px'}}>{'<tr><td>行1.1</td><td>行1.2</td><td>行1.3</td></tr>'}</code><br/>
										<code style={{paddingLeft: '40px'}}>{'<tr><td>行2.1</td><td>行2.2</td><td>行2.3</td></tr>'}</code><br/>
										<code style={{paddingLeft: '20px'}}>{'</tbody>'}</code><br/>
										<code>{'</table>'}</code><br/>
									</td>
									<td>
										<table className="xd-table">
											<thead>
												<tr><th>表头1</th><th>表头2</th><th>表头3</th></tr>
											</thead>
											<tbody>
												<tr><td>行1.1</td><td>行1.2</td><td>行1.3</td></tr>
												<tr><td>行2.1</td><td>行2.2</td><td>行2.3</td></tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-sm-12">
						<table className="table table-border bg-white-only b-a v-middle">
							<thead>
								<tr className="bg-light">
									<th colSpan="4"><z>Icon</z></th>
								</tr>
								<tr className="bg-light lter">
									<th>Tag</th>
									<th>ClassName</th>
									<th>Code</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>span</td>
									<td>xd-icon-status warning</td>
									<td>
										<code>{'<span className="xd-icon-status warning"></span>'}</code>
									</td>
									<td>
										<span className="xd-icon-status warning"></span>
									</td>
								</tr>
								<tr>
									<td>span</td>
									<td>xd-icon-status success</td>
									<td>
										<code>{'<span className="xd-icon-status success"></span>'}</code>
									</td>
									<td>
										<span className="xd-icon-status success"></span>
									</td>
								</tr>
								<tr>
									<td>span</td>
									<td>xd-icon-status waiting</td>
									<td>
										<code>{'<span className="xd-icon-status waiting"></span>'}</code>
									</td>
									<td>
										<span className="xd-icon-status waiting"></span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-sm-12">
						<table className="table table-border bg-white-only b-a v-middle">
							<thead>
								<tr className="bg-light">
									<th colSpan="4"><z>Panel</z></th>
								</tr>
								<tr className="bg-light lter">
									<th>Tag</th>
									<th>ClassName</th>
									<th>Code</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>div</td>
									<td>xd-panel</td>
									<td>
										<code>{'<div className="xd-panel">'}</code><br/>
										<code style={{paddingLeft: '20px'}}>{'<div className="xd-panel-header">这是Panel Header</div>'}</code><br/>
										<code style={{paddingLeft: '20px'}}>{'<div className="xd-panel-body">这是Panel Body</div>'}</code><br/>
										<code>{'</div>'}</code><br/>
									</td>
									<td>
										<div className="xd-panel" style={{width: "100%"}}>
											<div className="xd-panel-header">这是Panel Header</div>
											<div className="xd-panel-body" style={{width: "300px"}}>
												<p>这是Panel Body</p>
												<p>这是Panel Body</p>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}