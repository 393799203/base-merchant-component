import React, { Component } from 'react'
import {Field} from 'source_path/field/index';
import Readme from './README.md';

var selectOptions = [
	{
		text:'单选1',    //选项文案
		value: 0         //选项的值
	},
	{
		text: '单选2',    
		value: 1
	},{
		text: '单选3',
		value: 2
	}
]

export default class SelectComponentView extends Component {
	constructor () {
		super();
	}

	render () {
		return <div className="m-l m-r m-b-xxl">
			<h4>
				1.3. select实例
			</h4>
			<div className="m-b m-t">
			    <Field type="select"
			        name="select2"
			        form="FieldName"
			        defaultValue='1'
			        options = {selectOptions}
			        label="select:">
			    </Field>
			</div>
			<div dangerouslySetInnerHTML={{ __html: Readme }}>
				
			</div>
		</div>
	}
}