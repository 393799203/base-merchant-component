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
            <div className='m-b-lg m-l m-r'>
                <h1>
                    下拉 - Dropdown
                    <a href='mactt://message/user/00639' style={{border: 'none'}} className='m-l-lg btn-info-custom btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className='w-sm inline'>
                    <Dropdown options={options1} handleClick={this.handleClick}>
                        <a className='btn btn-danger-custom'>我是下拉</a>
                    </Dropdown>
                </div>
                <div className='w-sm inline'>
                    <Dropdown options={options} handleClick={this.handleClick}>
                        <a className='btn btn-danger'>我有子选项</a>
                    </Dropdown>
                </div>
                <div style={{ clear: 'both' }} dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
