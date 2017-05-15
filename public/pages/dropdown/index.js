/* eslint-disable */
import React, { Component } from 'react';
import Dropdown from 'source_path/dropdown';
import Notification from 'source_path/notification';
import Readme from './README.md';

export default class DropdownView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            options1: [
                {
                    id: 1,
                    text: '下拉选项1'
                }, {
                    id: 2,
                    text: '下拉选项2'
                }, {
                    id: 3,
                    text: '下拉选项3',
                    link: 'http://xiaodian.com'
                }, {
                    id: 4,
                    text: '下拉选项4'
                }
            ],
            options: [
                {
                    id: 1,
                    text: '下拉选项1'
                }, {
                    id: 2,
                    text: '下拉选项2',
                    options: [
                        {
                            id: 21,
                            text: '下拉选项21'
                        }, {
                            id: 22,
                            text: '下拉选项22'
                        }

                    ]
                }, {
                    id: 3,
                    text: '下拉选项3',
                    link: 'http://xiaodian.com'
                }, {
                    id: 4,
                    text: '下拉选项4',
                    options: [
                        {
                            id: 41,
                            text: '子选项1'
                        },{
                            id: 42,
                            text: '子选项2'
                        },{
                            id: 43,
                            text: '子选项2'
                        }
                    ]
                }
            ]
        };
    }
    handleClick (item, index, subItem, subIndex) {
        const str = JSON.stringify(item);
        Notification.info({message: str});
    }
    render () {
        const { options, options1 } = this.state;

        return (
            <div className='m-b-lg ml m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    下拉 - Dropdown
                    <a href='mactt://message/uname/qianqiao' style={{border: 'none', boxShadow: 'none'}} className='m-l-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className='w inline-block'>
                    <Dropdown options={options1} handleClick={this.handleClick}>
                        <a className='btn btn-danger-custom'>我是下拉</a>
                    </Dropdown>
                </div>
                <div className='w inline-block'>
                    <Dropdown options={options} handleClick={this.handleClick}>
                        <a className='btn btn-danger'>我有子选项</a>
                    </Dropdown>
                </div>
                <div style={{ clear: 'both' }} dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */
