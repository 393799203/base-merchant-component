import React, { Component } from 'react';
import UploadImg from 'source_path/uploadImg';
import Readme from './README.md';

export default class UploadImgView extends Component {
	constructor () {
		super();
		this.state = {
			isMultiple: false
		};
	}
	componentDidMount () {
		
	}
	handleUploadStart () {
		console.log('start');
	}
	handleUploadFinish (resData) {
		console.log(resData);
	}
	handleUploadFailed (msg, resData) {
		console.log(msg, resData);
	}
	render () {
		return (
			<div className="m-b-lg m-l m-r">
				<h1>
					上传图片 - UploadImg
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t m-b">
					<blockquote>
						<p>使用示例之前请确认小店 <strong><i>www.xiaodian.com</i></strong> 已经登录</p>
						<p>因为上传接口为 <strong><i>media.xiaodian.com/image/put</i></strong> 需要登录</p>
						<p>上传接口使用的是 <strong><i>xiaodian.com</i></strong> 域名下的名为 <strong><i>mogujie</i></strong> 的 <strong><i>cookie</i></strong> 校验登录信息。</p>
					</blockquote>
				 	<UploadImg 
				 		isMultiple={ this.state.isMultiple }
				 		onStart={ this.handleUploadStart.bind(this) }
				 		onFinish={ this.handleUploadFinish.bind(this) }
				 		onFailed={ this.handleUploadFailed.bind(this) }/>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>
				</div>
			</div>
		)
	}
}