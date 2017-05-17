/* eslint-disable */
import React, { Component } from 'react';
import {Select} from 'source_path/select';
import Readme from './README.md';
import Notification from 'source_path/notification';
import config from './config.js'
import './index.less';

export default class SelectView extends Component {
    constructor () {
        super();
        this.state = {
            selectData1: config.selectData1,
            selectData2: config.selectData2,
            selectData3: config.selectData3,
            selectValue: "0",
            selectDefaultValue: "1"
        };
    }

    getResult (item) {
        this.setState({
            selectValue: item.value
        })
    }

    getData(){
        var data = Select.getData("selectform");
        Notification.info({
            message: '获取文本框的信息为：'+JSON.stringify(data),
            duration: 2000 // 单位毫秒
        });
    }

    clearData(){
        Select.clearData('selectform');
    }

    resetData(){
        Select.resetData('selectform');
    }

    render () {
        let {selectData1, selectData2, selectData3, selectValue, selectDefaultValue} = this.state;
        return (
            <div className='m-b-lg m-l m-r mc-field mc-select-demo'>
                <h2 className='p-b-5 b-b dashed'>
                    下拉菜单 - Select
                    <a href="mactt://message/uname/ziqiu" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className='demo clearfix'>
                    <div className='f-l field-demo'>
                        <h4>必填属性：name、options</h4>
                        <Select
                            className="select-demo"
                            name="select1"
                            options={selectData1}
                            placeholder={"请选择"}
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h4>其他基础配置属性：禁用（disabled）、样式（className）、水印（placeholder）</h4>
                        <Select
                            options={selectData2}
                            disabled={true}
                            name="select2"
                            placeholder={"请选择"}
                            className="select-demo"
                        />
                    </div>
                    <div className="f-l field-demo">
                        <h4>赋值属性：value,一般要与onChange事件搭配使用，组件以传递的value值为主，进行赋值，如果传入的value不再options中，则展示数据为空</h4>
                        <Select
                            className="select-demo"
                            name="select3"
                            value = {selectValue}
                            options={selectData3}
                            onChange={this.getResult.bind(this)}
                        />
                    </div>

                    <div className="f-l field-demo">
                        <h4>赋值属性：defaultValue</h4>
                        <Select
                            className="select-demo"
                            name="select4"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                        />
                    </div>

                    <div className="f-l field-demo">
                         <div className="title">
                            <button className="m-b btn btn-success-border m-r" onClick={() => this.getData()}>获取文本框信息</button>
                            <button className="m-b btn btn-warning-border m-r" onClick={() => this.clearData()}>清空文文本框信息</button>
                            <button className="m-b btn btn-info-border m-r" onClick={() => this.resetData()}>重置文本框信息</button>
                        </div>
                        <h4>表单属性：form（多个select同时使用时，通过form进行划分，可用于获取数据、清空、重置中,如果没有设置form，则默认为defaultForm，在数据、清空、重置方法中不传入form则是处理整个defaultForm）</h4>
                        <Select
                            className="select-demo m-t-15"
                            name="select5"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                            form="selectform"
                        />

                        <Select
                            className="select-demo m-t-15"
                            name="select6"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                            form="selectform"
                        />

                        <Select
                            className="select-demo m-t-15"
                            name="select7"
                            defaultValue = {selectDefaultValue}
                            options={selectData3}
                            form="selectform"
                        />
                         <Select
                            className="select-demo m-t-15"
                            name="select8"
                            defaultValue = {["0","1"]}
                            model="multiple"
                            options={selectData3}
                            form="selectform"
                        />
                    </div>
                    <div className="f-l field-demo">
                         <h4>表单属性：多选模式</h4>
                         <Select
                            className="select-demo"
                            name="select6"
                            defaultValue = {["0","1"]}
                            options={selectData1}
                            placeholder={"请选择"}
                            model="multiple"
                        /><br/>
                        <Select 
                            className="select-demo"
                            name="select6"
                            defaultValue = {["0","1"]}
                            options={selectData1}
                            placeholder={"请选择"}
                            model="multiple"
                            disabled = {true}
                        />
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */
