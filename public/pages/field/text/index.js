import React, { Component } from 'react'
import {Field} from 'source_path/field';
import Readme from './README.md';

export default class TextComponentView extends Component {
	constructor () {
		super();
	}

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h4>
				1.2. text实例
			</h4>
			<div className="m-b m-t">
			    <Field type="text"
			        name="text2"
			        form="FieldName"
			        label="text:">
			    </Field>
			    <div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		</div>
	}
}