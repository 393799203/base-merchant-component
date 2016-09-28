import React, { Component } from 'react';

export default class DocView extends Component {
	constructor () {
		super();
	}
	render () {
		return <div>
			<iframe style={{minHeight:'800px' }} width="100%" frameBorder="0"
				src="http://doc.f2e.meili-inc.com/merchant/merchant.html">
			</iframe>
		</div>
	}
}