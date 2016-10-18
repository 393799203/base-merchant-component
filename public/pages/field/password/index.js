import React, { Component } from 'react'
import {Field} from 'source_path/field';
import Readme from './README.md';

export default class PasswordComponentView extends Component {
	constructor () {
		super();
	}

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h4>
				1.5. password实例
			</h4>
			<div className="m-b m-t">
			    <Field type="password"
			        name="password2"
			        form="FieldName"
			        label="password:">
			    </Field>
			    <div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		</div>
	}
}