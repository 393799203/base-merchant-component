/**
 * Author : youyou
 * Description : 表单组件
 */
import React, { Component } from 'react';
import Field from '../field/Field';
import DatePicker from '@mogu/up-components/lib/DatePicker';
import Notification from '@mogu/up-components/lib/Notification'

export default class Form extends Component {
    
    constructor(props){
        super(props);
        Form.instance = this;
        this.state = {
            options: props.data && props.data.options ? props.data.options : [],
            btns: props.data && props.data.btns ? props.data.btns : [],
            form: props.form || '',
            prefixcls:props.prefixcls || ""
        }
    }
    
    
    componentDidMount() {
         let state = this.state;
         //

         if(state.options.length){
         state.options.map((item,index)=>{
            if(item.type == "select"){
                for(var i = 0;i<item.content.length ; i++){
                    item.content[i].text= item.content[i].label;
                }
            }
         })}
         this.setState(state);
    }
    
    //对外提供的获取数据静态方法
    static getData(){
        if(Field.validate(Form.instance.state.form)){
            return Field.getData(Form.instance.state.form);
        }else{
            Notification.open({
                message: '信息填写不完整！',
                duration: 2 
            });
            return false;
        }
    }

    //对外提供的初始化数据静态方法
    static resetData(){
        return Field.resetData(Form.instance.state.form);
    }

    //对外提供的清除数据静态方法
    static clearData(){
        return Field.clearData(Form.instance.state.form);
    }

    //自定义Field组件向Field传值
    getFieldData(name){
        return this.state[name];
    }

    //自定义Field组件校验字段是否为空
    validateTime(name){
       if(this.state[name]){
            return true;
        }else{
            return false;
        }
    }

    //点击查询提交数据
    submitData(type){
        let form = this.state.form || ''
        if(Field.validate(form)){
            let data  = Field.getData(form);
            if(data){
                this.props.onQuery(data);
            }
        }else{
            Notification.open({
                message: '信息填写不完整！',
                duration: 2 
            });
            return false;
        }
    }
    
    render(){
        let state = this.state;
        let options = state.options;

        return (
            <div>
               <form className={"queryForm clearfix "+state.prefixcls}>
                    {
                        options.length > 0 ? options.map((item,index)=>{
                            //基本类型的form表单
                            return (
                                <div key={index} className = {"field-"+item.key}>
                                    <Field 
                                        type = {item.type}  
                                        className = {item.className ? item.className : ""}
                                        defaultValue = {item.defaultValue ? (item.type == 'checkbox'?item.defaultValue:item.defaultValue[0]):(item.content && item.content.length ? item.content[0].value : '')}
                                        options = {item.content} 
                                        required={item.required?true:false} 
                                        label = {item.text+':'}
                                        form = {state.form}  
                                        name = {item.key}
                                        labelCols = {2}
                                        placeholder = {item.placeholder || ''} />
                                </div>
                            );
                        }) : null
                    }

                    {/* 按钮部分 */}
                   {state.btns.length>0?state.btns.map((item,index)=>{
                        if(item.type == 'submit'){
                            return (
                                <a href="javascript:;" key={index}
                                    className={item.className ? item.className + ' form-btn btn primary w-xs m-r':'form-btn btn primary w-xs m-r'} 
                                    onClick={this.submitData.bind(this)}>
                                    {item.text}
                                </a>
                            )
                        }
                    }):null}
               </form>
            </div>
        )
    }
}