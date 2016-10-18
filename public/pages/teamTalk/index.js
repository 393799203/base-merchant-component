import React, { Component } from 'react';
import TeamTalk from 'source_path/team-talk';
import Readme from './README.md';

export default class TeamTalkView extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<h1>
					唤醒多多花朵客户端-联系在线客服
				</h1>
				<h2>
					1. 示例
				</h2>
				<div className="m-t m-b">
					<button className="btn btn-success-custom w-sm">
						<TeamTalk onClick={this.contactTT} className="buttonA fr" userId="b14n0c#23" callToBusiness >立即咨询</TeamTalk>
					</button>

				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}>

				</div>
			</div>
		)
	}
}