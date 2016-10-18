import React, { Component } from 'react'
import {Field} from 'source_path/field';
import Readme from './README.md';

var checkboxOptions = [
   	{
		label: '多选1',
		value: 0
   	},
   	{
		label: '多选2',
		value: 1
   	},
   	{
		label: '多选3',
		value: 2,
		defaultChecked:true
   	}
]


export default class CheckboxComponentView extends Component {
	constructor () {
		super();
	}
	
	render () {
		return <div className="m-l m-r m-b-xxl">
			<h4>
				1.6. checkbox实例
			</h4>
			<div className="m-b m-t">
			    <Field type="checkbox"
			        name="checkbox2"
			        form="FieldName"
			        defaultValue={['1','2']}
			        options={checkboxOptions}
			        label="checkbox:">
			    </Field>
			</div>
			<div dangerouslySetInnerHTML={{ __html: Readme }}>
				
			</div>
		</div>
	}
}