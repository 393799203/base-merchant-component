import React, { Component } from 'react'
import {Field} from 'source_path/field';
import Readme from './README.md';

export default class TextareaComponentView extends Component {
	constructor () {
		super();
	}

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h4>
				1.1. textarea实例
			</h4>
			<div className="m-b m-t">
			    <Field type="textarea"
			        name="textarea2"
			        required={true}
			        placeholder="我是水印"
			        defaultValue="我是默认的textarea文案"
			        form="FieldName"
			        label="textarea:">
			    </Field>
			    <div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		</div>
	}
}