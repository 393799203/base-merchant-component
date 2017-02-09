import React, { Component } from 'react';
import Tag from 'source_path/tag';
import Readme from './README.md';

export default class TagView extends Component {
	afterClose(){
		alert('afterClose');
	}

    render () {
        return <div className='m-b-lg m-l m-r'>
        	<h1>
                标签 - Tag
            </h1>
            <h2>
                1. 示例
            </h2>
        	<div style={{'margin':'10px'}}>
	            <Tag color={'red'}>文字部分</Tag>
	            <Tag color={'red'} circle={true}>文字部分</Tag>
	            <Tag color={'red'} circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>
	        </div>
	        <div style={{'margin':'10px'}}>
	            <Tag color={'blue'}>文字部分</Tag>
	            <Tag color={'blue'} circle={true}>文字部分</Tag>
	            <Tag color={'blue'} circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>
	        </div>
	        <div style={{'margin':'10px'}}>
	            <Tag color={'green'}>文字部分</Tag>
	            <Tag color={'green'} circle={true}>文字部分</Tag>
	            <Tag color={'green'} circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>
	        </div>
	        <div style={{'margin':'10px'}}>
	            <Tag>文字部分</Tag>
	            <Tag circle={true} >文字部分</Tag>
	            <Tag circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>
	        </div>

	        <div dangerouslySetInnerHTML={{ __html: Readme }}>
			</div>
	    </div>
    }
}