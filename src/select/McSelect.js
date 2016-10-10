import React, { Component } from 'react'
import './style/index.less';

import Select from '@mogu/up-components/lib/Select/Select';
const Option = Select.Option;

export default class McSelect extends Component {
    constructor(props){
        super(props);
        McSelect.instance = this;
        this.state = {
            defaultValue: props.defaultValue || "",
            value:props.value || "",
            selectOptions:props.selectOptions || [],
            selectValue : {},
            orInit:false,
            onChange:props.onChange || null,
            style:props.style || {},
            className:props.className || ""
        }
    }

    //数据改变后更新state
    componentWillReceiveProps(nextProps){
        this.setState ({
            defaultValue: nextProps.defaultValue || "",
            value:nextProps.value || "",
            selectOptions:nextProps.selectOptions || [],
            orInit:false,
            onChange:nextProps.onChange || null,
            style:nextProps.style || {},
            className:nextProps.className || {}
        },function(){
            this.initData();
        })
    }

    componentDidMount() {
        //初始化defaultValue
        this.initData();
    }

    initData(){
        var value = this.state.value;
        var orexit = false;
        if(value && this.state.selectOptions){
            var options = this.state.selectOptions;
            for(var i = 0 ; i<options.length;i++){
                if(options[i].value == value){
                    if(options[i].key){
                        value = options[i].value+";"+options[i].text+";"+options[i].key;
                    }
                    else{
                        value = options[i].value+";"+options[i].text;
                    }
                    orexit = true
                    break;
                }
            }
            if(!orexit){//如果下拉框中不存在value，则将value设置为默认值
                if(options[0].key){
                    value = options[0].value+";"+options[0].text+";"+options[0].key;
                }
                else{
                    value = options[0].value+";"+options[0].text;
                }
            }
        }

        this.setState({
            value:value,
            orInit:true
        })
    }

    //对外提供的获取数据静态方法
    static getData(){
        return McSelect.instance.state.selectValue;
    }

    handleChange(e){
        if(e){
            var selectlist = e.split(";");
            
            var selectValue = {};
            switch(selectlist.length){
                case 2 : 
                    selectValue = {
                        value:selectlist[0],
                        text:selectlist[1]
                    }; 
                    break;
                case 3 : 
                    selectValue = {
                        value:selectlist[0],
                        text:selectlist[1],
                        key:selectlist[2]
                    };
                    break;
                default : 
                    selectValue = {};
            }
                
            this.setState({
                selectValue : selectValue,
                value:e
            })
            if(this.state.onChange){
                this.state.onChange(selectValue);
            }
        }
        else{
            if(this.state.onChange){
                this.state.onChange();
            }
        }
    }

    renderOptions(options){
        return options.map(function (option) {
            var value = "";
            if(option.key){
                value = option.value+";"+option.text+";"+option.key;
            }
            else{
                value = option.value+";"+option.text;
            }
            var key = option.key || option.value;
            return (
                <Option value={value} key={key}>{option.text}</Option>
            );
        }.bind(this));
    }

    render() {
        return (
            <div>
                {this.state.orInit ? 
                    <Select prefixCls = {"mc-select"} style = {this.state.style}
                        value={this.state.value}
                        className={this.state.className}
                        onChange={(e) => this.handleChange(e)} 
                        defaultValue={this.state.defaultValue}
                        showSearch={true}>
                        {this.renderOptions(this.state.selectOptions)}
                    </Select>:
                    null
                }
            </div>
        );
    }
};