import React, { Component } from 'react';
import {Select} from 'source_path/select';
import Readme from './README.md';
import Notification from 'source_path/notification';

export default class SelectView extends Component {
    constructor () {
        super();
        this.state = {
            selectData1: [
                {
                    text: '选项1',
                    value: '0',
                },{
                    text: '选项2',
                    value: '1',
                },{
                    text: '选项3',
                    value: '2',
                }
            ],
            selectData2: [
                [{
                    text: '选项1',
                    value: '0'
                }, {
                    text: '选项2',
                    value: '1'
                }, {
                    text: '选项3',
                    value: '2'
                }],
                [{
                    text: '选项4',
                    value: '3'
                }, {
                    text: '选项5',
                    value: '4'
                }]
            ],
            selectData3: [
                {
                    text: '选项1',
                    value: '0'
                },{
                    text: '选项2',
                    value: '1',
                    options: [{
                        text: '子选项1',
                        value: '11'
                    },{
                        text: '子选项2',
                        value: '12'
                    }]
                },{
                    text: '选项3',
                    value: '2',
                    options: [{
                        text: '子选项3',
                        value: '21'
                    },{
                        text: '子选项4',
                        value: '22'
                    }]
                }
            ],
            selectData1Value: "0"
        };
    }
    getResult (value) {
        this.setState({
            selectData1Value: "0"
        })
    }
    getData(){
        var data = Select.getData();
        Notification.info({
            message: '获取文本框的信息为：'+JSON.stringify(data),
            duration: 2000 // 单位毫秒
        });
    }

    clearData(){
        Select.clearData();
    }

    resetData(){
        Select.resetData();
    }

    render () {
        let {selectData1, selectData2, selectData3, selectData1Value} = this.state;
        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    下拉菜单 - Select
                    <a href="mactt://message/user/02635" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <div className="title">
                    <button className="m-b btn btn-success-custom m-r" onClick={() => this.getData()}>获取文本框信息</button>
                    <button className="m-b btn btn-warning-custom m-r" onClick={() => this.clearData()}>清空文文本框信息</button>
                    <button className="m-b btn btn-info-custom m-r" onClick={() => this.resetData()}>重置文本框信息</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2>
                                    1. 普通下拉菜单
                                </h2>
                                <Select 
                                    name="select1"
                                    selectId="select1"
                                    defaultValue = {selectData1Value}
                                    ref="select1"
                                    options={selectData1}
                                    onChange={this.getResult.bind(this)}
                                />
                            </td>
                            <td>
                                <h2>
                                    2. 禁止点击、有默认值的下拉菜单
                                </h2>
                                <Select
                                    options={selectData1}
                                    selectId="select2"
                                    defaultValue="1"
                                    disabled={true}
                                    name="select2"
                                    onChange={this.getResult.bind(this)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h2>
                                    3. 分组的下拉菜单
                                </h2>
                                <Select
                                    options={selectData2}
                                    defaultValue="4"
                                    name="select3"
                                    onChange={this.getResult.bind(this)}/>
                            </td>
                            <td>
                                <h2>
                                    4. 有二级选项的下拉菜单
                                </h2>
                                <div style={{width: '150px'}}>
                                    <Select
                                        options={selectData3}
                                        defaultValue="22"
                                        name="select4"
                                        onChange={this.getResult.bind(this)}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
