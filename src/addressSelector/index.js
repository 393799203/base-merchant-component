import React, { Component } from 'react';
import './style/index.less';
import citys from './citys';
import districts from './districts';
import provinces from './provinces';
import Select from '../select/McSelect';

var LEVEL_PROVINCE = 1,
    LEVEL_CITY = 2,
    LEVEL_AREA = 3;

export default class AddressSelector extends Component {
    constructor(props){
        super(props);
        AddressSelector.instance = this;
        this.state = {
            provinceOptions: [],
            province:props.defaultProvince || "-1",
            cityOptions: [],
            city:props.defaultProvince && props.defaultCity ? props.defaultCity : "-1",
            areaOptions: [],
            area:props.defaultProvince && props.defaultCity && props.defaultArea ? props.defaultArea : "-1",
            onChange:this.props.onChange || null,
            style:this.props.style || {},
            className : this.props.className || "",
            orInit:false
        }
    }

    componentDidMount() {
        let state = this.state;

        //初始化地址信息
        this.renderProvice();
        if(this.state.province != "-1"){
            this.renderCity(this.state.province , "init");
        }else{
            return;
        }

        if(this.state.city != "-1"){
            this.renderArea(this.state.city , "init");
        }else{
            return;
        }
    }

    //对外提供的获取数据静态方法
    static getData(){
        return {province:AddressSelector.instance.state.province , 
                city:AddressSelector.instance.state.city,
                area:AddressSelector.instance.state.area}
    }

    handleChange(e , level) {
        if(level == LEVEL_PROVINCE){
            this.renderCity(e);
        }
        else if(level == LEVEL_CITY){
            this.renderArea(e);
        }
        else{
            this.setState({
                area:e
            },function(){
                var result = {  
                    province:this.state.province,
                    city:this.state.city,
                    area:this.state.area
                }

                this.state.onChange(result);
            })
        }
    }

    //渲染province
    renderProvice(){
        var provinceOptions = this.state.provinceOptions;
        provinceOptions[0] = {text:"省",value:"-1"};
        for(var i = 0;i<provinces.length ; i++){
            var j = i+1;
            provinceOptions[j] = {text:provinces[i].name,value:provinces[i].id};
        }

        this.setState({
            provinceOptions:provinceOptions,
            cityOptions : [{text:"市",value:"-1"}],
            areaOptions : [{text:"区",value:"-1"}],
            orInit:true
        })
    }

    //渲染city
    renderCity(provinceid,type){
        var cityOptions = citys.filter(function (element) {
            if(element.provinceid == provinceid){
                return element
            }
        });

        cityOptions = cityOptions.map(function(options){
            return {text:options.name,value:options.id}
        })

        cityOptions.unshift({text:"市",value:"-1"})

        if(type == "init"){
            this.setState({
                cityOptions:cityOptions
            })
        }
        else{
            this.setState({
                cityOptions:cityOptions,
                areaOptions:[{text:"区",value:"-1"}],
                province:provinceid,
                city: "-1",
                area:"-1"
            },function(){
                var result = {  
                    province:this.state.province,
                    city:this.state.city,
                    area:this.state.area
                }

                this.state.onChange(result);
            })
        }
    }

    //渲染area
    renderArea(cityid,type){
        var areaOptions = districts.filter(function (element) {
            if(element.cityid == cityid){
                return element
            }
        });

        areaOptions = areaOptions.map(function(options){
            return {text:options.name,value:options.id}
        })

        areaOptions.unshift({text:"区",value:"-1"})

        if(type == "init"){
            this.setState({
                areaOptions:areaOptions
            })
        }
        else{
            this.setState({
                areaOptions:areaOptions,
                city:cityid,
                area:"-1"
            },function(){
                var result = {  
                    province:this.state.province,
                    city:this.state.city,
                    area:this.state.area
                }

                this.state.onChange(result);
            })
        }
    }

    render() {
        return (
            <div className="address-select">
                {this.state.orInit ? 
                    <div className = "clearfix" >
                        <div className="address-province float-left">
                            <Select style={this.state.style ? this.state.style : {width:"200px"}} 
                                className = {this.state.className}
                                value={this.state.province}
                                selectOptions = {this.state.provinceOptions}
                                onChange={(e) => this.handleChange(e , LEVEL_PROVINCE)}/>
                        </div>

                        <div className="address-city float-left mgL15">
                            <Select style={this.state.style ? this.state.style : {width:"200px"}} 
                                className = {this.state.className}
                                value = {this.state.city} 
                                selectOptions = {this.state.cityOptions}
                                onChange={(e) => this.handleChange(e , LEVEL_CITY)}/>
                        </div>

                        <div className="address-area float-left mgL15">
                            <Select style={this.state.style ? this.state.style : {width:"200px"}} 
                                className = {this.state.className}
                                value={this.state.area}
                                selectOptions = {this.state.areaOptions}
                                onChange={(e) => this.handleChange(e , LEVEL_AREA)}/>
                        </div>
                    </div>:
                    null
                }
                
            </div>
        );
    }
};