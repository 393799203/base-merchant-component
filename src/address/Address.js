import React, { Component } from 'react';
import './style/index.less';
import citys from './citys';
import districts from './districts';
import provinces from './provinces';
import Select from '../select/Select';

var LEVEL_PROVINCE = 1,
    LEVEL_CITY = 2,
    LEVEL_AREA = 3;

export default class Address extends Component {
    constructor(props){
        super(props);
        Address.instance = this;
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
            orInit:false,

            provinceList:{},
            cityList:{},
            areaList:{}
        }
    }

    componentDidMount() {
        let state = this.state;

        //初始化地址信息
        this.renderProvice();
    }

    //对外提供的获取数据静态方法
    static getData(){
        return {
            province:{
                id:Address.instance.state.provinceList.key,
                name:Address.instance.state.provinceList.value
            },
            city:{
                id:Address.instance.state.cityList.key,
                name:Address.instance.state.cityList.value
            },
            area:{
                id:Address.instance.state.areaList.key,
                name:Address.instance.state.areaList.value
            }
        }  
    }

    handleChange(e , level) {
        if(e){
            if(level == LEVEL_PROVINCE){
                this.renderCity(e);
            }
            else if(level == LEVEL_CITY){
                this.renderArea(e);
            }
            else{
                this.setState({
                    area:e.value,
                    areaList:e
                },function(){
                    var result = {  
                        province:{id:this.state.provinceList.key,name:this.state.provinceList.value},
                        city:{id:this.state.cityList.key,name:this.state.cityList.value},
                        area:{id:this.state.areaList.key,name:this.state.areaList.value}
                    }
                    if(this.state.onChange){
                        this.state.onChange(result);
                    }
                })
            }
        }
    }

    //渲染province
    renderProvice(){
        var provinceOptions = this.state.provinceOptions;
        provinceOptions[0] = {text:"省",value:"-1"};

        var province = this.state.province;
        for(var i = 0;i<provinces.length ; i++){
            var j = i+1;
            provinceOptions[j] = {
                text:provinces[i].name,
                value:provinces[i].name,
                key:provinces[i].id
            };

            //判断默认的省级的id
            if(province == provinces[i].name){
                var provinceList = {
                    text:provinces[i].name,
                    value:provinces[i].name,
                    key:provinces[i].id
                }

                this.setState({
                    provinceList : provinceList
                },() => {
                    this.renderCity(provinceList , "init");
                })
            }
        }

        this.setState({
            provinceOptions:provinceOptions,
            cityOptions : [{text:"市",value:"-1"}],
            areaOptions : [{text:"区",value:"-1"}],
            orInit:true
        })
    }

    //渲染city
    renderCity(province,type){
        var cityOptions = citys.filter(function (element) {
            if(element.provinceid == province.key){
                return element
            }
        });

        var city = this.state.city;
        cityOptions = cityOptions.map((options) => {
            //如果是初始化，将传入的defultvalue的名称转换成对象
            if(city == options.name && type == "init"){
                var cityList = {text:options.name,value:options.name,key:options.id}
                this.setState({
                    cityList : cityList
                },() => {
                    this.renderArea(cityList , "init");
                })
            }
            return {
                text:options.name,
                value:options.name,
                key:options.id
            }
        })

        cityOptions.unshift({text:"市",value:"-1"})

        if(type == "init"){
            this.setState({
                cityOptions:cityOptions,
            })
        }
        else{
            this.setState({
                cityOptions:cityOptions,
                areaOptions:[{text:"区",value:"-1"}],
                province:province.value,
                city: "-1",
                area:"-1",
                provinceList:province,
                cityList:{},
                areaList:{}
            },function(){
                var result = {  
                    province:{id:this.state.provinceList.key,name:this.state.provinceList.value},
                    city:{},
                    area:{}
                }
                if(this.state.onChange){
                    this.state.onChange(result);
                }
            })
        }
    }

    //渲染area
    renderArea(city,type){
        var areaOptions = districts.filter(function (element) {
            if(element.cityid == city.key){
                return element
            }
        });

        var area = this.state.area;
        areaOptions = areaOptions.map((options) => {
            //如果是初始化，将传入的defultvalue的名称转换成对象
            if(area == options.name && type == "init"){
                var areaList = {
                    text:options.name,
                    value:options.name,
                    key:options.id
                }
                this.setState({
                    areaList : areaList
                })
            }
            return {
                text:options.name,
                value:options.name,
                key:options.id
            };
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
                city:city.value,
                area:"-1",
                cityList : city,
                areaList:{}
            },function(){
                var result = {  
                    province:{id:this.state.provinceList.key,name:this.state.provinceList.value},
                    city:{id:this.state.cityList.key,name:this.state.cityList.value},
                    area:{}
                }
                if(this.state.onChange){
                    this.state.onChange(result);
                }
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