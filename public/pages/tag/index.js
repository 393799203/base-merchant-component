/* eslint-disable */
import React, { Component } from 'react';
import Tag from 'source_path/tag';
import Readme from './README.md';

export default class TagView extends Component {
	afterClose(){
		alert('afterClose');
	}

    render () {
        return <div className='mb-lg ml mr'>
        	<h2 className='pb-5 b-b dashed'>
                标签 - Tag
                <a href="mactt://message/user/01385" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                    <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
                </a>
            </h2>
            <h3>
                1. 示例
            </h3>
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
/* eslint-enable */
