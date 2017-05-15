/* eslint-disable */
import React, { Component } from 'react';
import Popover from 'source_path/popover';
import readme from './README.md';

export default class PopoverView extends Component {
    render () {
        return <div className='m-b-lg m-l m-r'>
        	<h2 className='p-b-5 b-b dashed'>
                浮块提示 － Popover
                <a href="mactt://message/user/qianqiao" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                    <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                </a>
            </h2>
            <h3>
                1、示例
            </h3>
            <div>
                <Popover
                    position='top'
                    content={
                        <div>
                            <p className='b-b dashed p-b-sm m-b text-bold'>标题</p>
                            <p>我是 top 提示</p>
                        </div>
                    }
                >
                    <a className='btn btn-danger-border'>top 提示</a>
                </Popover>
                <Popover
                    position='left'
                    className='m-l'
                    content={
                        <div>
                            <p className='b-b dashed p-b-sm m-b text-bold'>标题</p>
                            <p>我是 left 提示</p>
                        </div>
                    }
                >
                    <a className='btn btn-success-border'>left 提示</a>
                </Popover>
                <Popover
                    position='right'
                    className='m-l'
                    content={
                        <div>
                            <p className='b-b dashed p-b-sm m-b text-bold'>标题</p>
                            <p>我是 right 提示</p>
                        </div>
                    }
                >
                    <a className='btn btn-info-border'>right 提示</a>
                </Popover>
                <Popover
                    position='bottom'
                    className='m-l'
                    content={
                        <div>
                            <p className='b-b dashed p-b-sm m-b text-bold'>标题</p>
                            <p>我是 bottom 提示</p>
                        </div>
                    }
                >
                    <a className='btn btn-warning-border'>bottom 提示</a>
                </Popover>
            </div>

            <div dangerouslySetInnerHTML={{ __html: readme }}>
            </div>
	    </div>
    }
}
/* eslint-enable */
