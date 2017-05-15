/* eslint-disable */
import React, { Component } from 'react';
import { Tag, TagGroup } from 'source_path/tag';
import TagReadme from './tag.md';
import TagGroupReadme from './tagGroup.md';

export default class TagView extends Component {
    getTag () {
        const data1 = TagGroup.getData('tagGroup1');
        console.log('name1\'s options is', data1);
    }
    render () {
        return <div className='m-b-lg m-l m-r'>
        	<h2 className='p-b-5 b-b dashed'>
                标签 -  Tag 、TagGroup
                <a href="mactt://message/user/qianqiao" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                    <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                </a>
            </h2>
            <h3>
                1、Tag 标签组件
            </h3>
            <h3>
                1.1、Tag 示例
            </h3>
            <div>
            	<Tag className='m-r-xs'>
            		一般
            	</Tag>
                <Tag className='m-r-xs' theme='dark'>
                    黑色
                </Tag>
                <Tag className='m-r-xs' theme='info'>
                    信息
                </Tag>
                <Tag className='m-r-xs' theme='success'>
                    完成
                </Tag>
                <Tag className='m-r-xs' theme='danger'>
                    错误
                </Tag>

                <Tag className='m-r-xs' theme='warning'>
                    警告
                </Tag>
                <Tag className='m-r-xs' theme='warning' disabled={true}>
                    警告
                </Tag>
                <Tag className='m-r-xs' theme='info'>
                    <i className='iconfont icon-message'/> 信息
                </Tag>
                <Tag className='m-r-xs' theme='success'>
                    <i className='iconfont icon-roundcheck'/> 完成
                </Tag>
                <Tag className='m-r-xs' theme='danger'>
                    <i className='iconfont icon-roundclose'/> 错误
                </Tag>
                <Tag className='m-r-xs' theme='warning'>
                    <i className='iconfont icon-warn'/> 警告
                </Tag>
                <Tag className='m-r-xs' theme='danger'>
                    <i className='iconfont icon-likefill'/>
                </Tag>
                <Tag className='m-r-xs'>
                    <i className='iconfont icon-appreciatefill'/>
                </Tag>
                <Tag className='m-r-xs' theme='danger'>
                    <i className='iconfont icon-appreciatefill'/>
                </Tag>
                <Tag className='m-r-xs' theme='warning'>
                    <i className='iconfont icon-favorfill'/>
                </Tag>
            </div>
            <div className='m-t'>
                <Tag className='m-r-xs' shape='round'>
                    一般
                </Tag>
                <Tag className='m-r-xs' theme='dark' shape='round'>
                    黑色
                </Tag>
                <Tag className='m-r-xs' theme='info' shape='round'>
                    信息
                </Tag>
                <Tag className='m-r-xs' theme='success' shape='round'>
                    完成
                </Tag>
                <Tag className='m-r-xs' theme='danger' shape='round'>
                    错误
                </Tag>

                <Tag className='m-r-xs' theme='warning' shape='round'>
                    警告
                </Tag>
                <Tag className='m-r-xs' theme='warning' shape='round' disabled={true}>
                    警告
                </Tag>
                <Tag className='m-r-xs' theme='info' shape='round'>
                    <i className='iconfont icon-message'/> 信息
                </Tag>
                <Tag className='m-r-xs' theme='success' shape='round'>
                    <i className='iconfont icon-roundcheck'/> 完成
                </Tag>
                <Tag className='m-r-xs' theme='danger' shape='round'>
                    <i className='iconfont icon-roundclose'/> 错误
                </Tag>
                <Tag className='m-r-xs' theme='warning' shape='round'>
                    <i className='iconfont icon-warn'/> 警告
                </Tag>
                <Tag className='m-r-xs' theme='danger' shape='round'>
                    <i className='iconfont icon-likefill'/>
                </Tag>
                <Tag className='m-r-xs' shape='round'>
                    <i className='iconfont icon-appreciatefill'/>
                </Tag>
                <Tag className='m-r-xs' theme='danger' shape='round'>
                    <i className='iconfont icon-appreciatefill'/>
                </Tag>
                <Tag className='m-r-xs' theme='warning' shape='round'>
                    <i className='iconfont icon-favorfill'/>
                </Tag>
            </div>
            <div className='m-t'>
                <Tag className='m-r-xs'>
                    一般
                </Tag>
                <Tag className='m-r-xs' theme='dark' type='border'>
                    黑色
                </Tag>
                <Tag className='m-r-xs' theme='info' type='border'>
                    信息
                </Tag>
                <Tag className='m-r-xs' theme='success' type='border'>
                    完成
                </Tag>
                <Tag className='m-r-xs' theme='danger' type='border'>
                    错误
                </Tag>
                <Tag className='m-r-xs' theme='warning' type='border'>
                    警告
                </Tag>
                <Tag className='m-r-xs' theme='warning' type='border' disabled={true}>
                    警告
                </Tag>
                <Tag className='m-r-xs' theme='info' type='border'>
                    <i className='iconfont icon-message'/> 信息
                </Tag>
                <Tag className='m-r-xs' theme='success' type='border'>
                    <i className='iconfont icon-roundcheck'/> 完成
                </Tag>
                <Tag className='m-r-xs' theme='danger' type='border'>
                    <i className='iconfont icon-roundclose'/> 错误
                </Tag>
                <Tag className='m-r-xs' theme='warning' type='border'>
                    <i className='iconfont icon-warn'/> 警告
                </Tag>
                <Tag className='m-r-xs' theme='danger' type='border'>
                    <i className='iconfont icon-likefill'/>
                </Tag>
                <Tag className='m-r-xs' type='border'>
                    <i className='iconfont icon-appreciatefill'/>
                </Tag>
                <Tag className='m-r-xs' theme='danger' type='border'>
                    <i className='iconfont icon-appreciatefill'/>
                </Tag>
                <Tag className='m-r-xs' theme='warning' type='border'>
                    <i className='iconfont icon-favorfill'/>
                </Tag>
            </div>
	        <div dangerouslySetInnerHTML={{ __html: TagReadme }}>
			</div>
            <h3>
                2、TagGroup 标签组组件
            </h3>
            <h3>
                2.1、TagGroup 示例
            </h3>
            <div className='m-t'>
                <TagGroup
                    name='tagGroup1'
                    type='border'
                    shape='normal'
                    options={[{
                        text: '选项1',
                        checked: true
                    },{
                        text: '选项2'
                    },{
                        text: '选项2'
                    }]}
                    onChange={() => {this.getTag()}}
                />
                <TagGroup
                    className='m-t'
                    name='tagGroup5'
                    theme='warning'
                    type='fill'
                    shape='normal'
                    options={[{
                        text: '选项1'
                    },{
                        text: '选项2',
                        checked: true
                    },{
                        text: '选项2',
                        disabled: true
                    }]}
                    onChange={() => {this.getTag()}}
                />
                <TagGroup
                    className='m-t'
                    name='tagGroup2'
                    theme='info'
                    type='fill'
                    shape='round'
                    isAddon={true}
                    icon={{
                        checked: 'check',
                        default: 'add'
                    }}
                    options={[{
                        text: '选项11',
                        checked: true
                    },{
                        text: '选项21',
                        disabled: true
                    },{
                        text: '选项31'
                    }]}
                    onChange={() => {this.getTag()}}
                />
                <TagGroup
                    className='m-t'
                    name='tagGroup3'
                    theme='danger'
                    shape='normal'
                    isAddon={true}
                    icon={{
                        checked: 'check',
                        default: 'add'
                    }}
                    options={[{
                        text: '选项11'
                    },{
                        text: '选项21'
                    },{
                        text: '选项31',
                        checked: true
                    }]}
                    onChange={() => {this.getTag()}}
                />
                <TagGroup
                    className='m-t'
                    name='tagGroup4'
                    theme='success'
                    shape='normal'
                    isAddon={true}
                    icon={{
                        checked: 'check',
                        default: 'add'
                    }}
                    options={[{
                        text: '选项11',
                        checked: true
                    },{
                        text: '选项21',
                        checked: true,
                        disabled: true
                    },{
                        text: '选项31'
                    }]}
                    onChange={() => {this.getTag()}}
                />
                <TagGroup
                    className='m-t'
                    name='tagGroup7'
                    theme='dark'
                    shape='normal'
                    isAddon={true}
                    icon={{
                        checked: 'check',
                        default: 'add'
                    }}
                    options={[{
                        text: '选项11'
                    },{
                        text: '选项21',
                        checked: true
                    },{
                        text: '选项31'
                    }]}
                    onChange={() => {this.getTag()}}
                />
            </div>
            <div dangerouslySetInnerHTML={{ __html: TagGroupReadme }}>
            </div>
	    </div>
    }
}
/* eslint-enable */
