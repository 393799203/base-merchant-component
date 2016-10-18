import React, { Component } from 'react'
import {Field} from 'source_path/field';
import Readme from './README.md';
var radioOptions = [
	{
		label:'单选1',    //选项文案
		value: 0         //选项的值
	},
	{
		label: '单选2',    
		value: 1,
	},{
		label: '单选3',
		value: 2
	}
]

export default class RadioComponentView extends Component {
	constructor () {
		super();
	}

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h4>
				1.4. radio实例
			</h4>
			<div className="m-b m-t">
			    <Field type="radio"
			        name="radio2"
			        form="FieldName"
			        options={radioOptions}
			        label="radio:">
			    </Field>
			</div>
			<div dangerouslySetInnerHTML={{ __html: Readme }}>
				
			</div>
		</div>
	}
}