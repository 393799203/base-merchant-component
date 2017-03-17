/* eslint-disable */
import React, { Component } from 'react';
import Readme from './README.md';
import './style/index.less';
import { TabWrapper, Tab } from 'source_path/tab';

import CheckboxView from './_module/checkbox';
import PasswordView from './_module/password';
import RadioView from './_module/radio';
import RawView from './_module/raw';
import SelectView from './_module/select';
import TextView from './_module/text';
import TextareaView from './_module/textarea';

const nav = [
	{
	    title: 'Text'
	}, {
	    title: 'Password'
	}, {
	    title: 'Textarea'
	}, {
	    title: 'Checkbox'
	}, {
	    title: 'Radio'
	}, {
	    title: 'Select'
	}, {
	    title: 'Raw'
	}
];

const tabArr = [
    <Tab key='0'><TextView /></Tab>,
    <Tab key='1'><PasswordView /></Tab>,
    <Tab key='2'><TextareaView /></Tab>,
    <Tab key='3'><CheckboxView /></Tab>,
    <Tab key='4'><RadioView /></Tab>,
    <Tab key='6'><SelectView /></Tab>,
    <Tab key='5'><RawView /></Tab>
];

export default class FieldView extends Component {
	constructor () {
		super();
		this.state = {
		};
	}

	render () {
		return (
			<div className="m-l m-r m-b-xxl mc-field">
				<h2 className='p-b-5 b-b dashed m-b'>
					表单 - Field
					<a href="mactt://message/user/01825" style={{border: 'none', boxShadow: 'none'}} className='m-l-lg btn-info-border btn'>
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
				</h2>
				<div className="mt-30 mc-field-demo-body">
					<TabWrapper navs={nav}>
                        {tabArr}
                    </TabWrapper>
				</div>
				<div dangerouslySetInnerHTML={{ __html: Readme }}></div>
			</div>
		)
	}
}
/* eslint-enable */
