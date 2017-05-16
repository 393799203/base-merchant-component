import React, { Component } from 'react'
import Form from 'source_path/form';
import './index.less';

//详细配置信息见test.js
import testData from './config.js'

export default class LoginView extends Component {
    constructor () {
        super();
    }
    
    //获取表单数据
    getData(){
        var data = Form.getData("login");
        console.info(JSON.stringify(data));
    }

    //初始化表单数据
    resetData(){
        Form.resetData("login");
    }

    //清除表单数据
    clearData(){
        Form.clearData("login");
    }

    validate(){
        console.info(Form.validate("login"));
    }

    //查询表单改变
    onQueryChange(data){
        console.info(data);
    }

    render () {
        return (
            <div className="m-b m-t">
                <button
                    className="btn btn-success-custom w-sm m-r" 
                    onClick={ (e) => { this.getData() }}>
                    获取数据
                </button>
                <button
                    className="btn btn-info-custom w-sm m-r" 
                    onClick={ (e) => { this.resetData() }}>
                    初始化数据
                </button>
                <button
                    className="btn btn-warning-custom w-sm m-r" 
                    onClick={ (e) => { this.clearData() }}>
                    清除数据
                </button>
                <button
                    className="btn btn-danger-custom w-sm m-r" 
                    onClick={ (e) => { this.validate() }}>
                    校验数据
                </button>
                <Form 
                    data = {testData.options.concat()} 
                    prefixcls="login-form"
                    form='login'/>
            </div>
        )
    }
}