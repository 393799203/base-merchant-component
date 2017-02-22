import React, { Component, PropTypes } from 'react';
import './style/index.less';
import Select from '../select/Select.js';
import Util from '../_module/js/util.js';

const LEVEL_PROVINCE = 1;
const LEVEL_CITY = 2;
const LEVEL_AREA = 3;

const DEFAULT_FORM = 'defaultKey';

export default class Address extends Component {
    // 对外提供的获取数据静态方法
    static forms = {}

    static idCounter = 0  // id计数器，用于uniqueId方法生成表单的addressId标识

    static uniqueId (prefix) { // 生成唯一ID
        Address.idCounter += 1;
        const id = Address.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (address, name) {  // 添加表单数据到forms对象中
        if (Address.forms[name] === undefined) {
            Address.forms[name] = {};
        }

        Address.forms[name][address.addressId] = address;
    }

    static remove (address, name) {  // 删除某个表单
        delete Address.forms[name][address.addressId];
    }

    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = Address.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const address = currentForm[key];
            const value = address.getData();

            Object.assign(data, { [address.props.name]: value });
        });
        return data;
    }

    static clearData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = Address.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const address = currentForm[key];
            address.clearData();
        });
        return data;
    }

    static resetData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = Address.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const address = currentForm[key];
            address.resetData();
        });
        return data;
    }

    static defaultProps = {
        form: DEFAULT_FORM,
        defaultProvince: '-1',
        defaultCity: '-1',
        defaultArea: '-1'
    };

    static propTypes = {
        defaultProvince: PropTypes.string,
        defaultCity: PropTypes.string,
        defaultArea: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        form: PropTypes.string,
        provinceDisabled: PropTypes.bool,
        cityDisabled: PropTypes.bool,
        areaDisabled: PropTypes.bool,
        name: PropTypes.string.isRequired
    };

    constructor (props) {
        super(props);
        Address.instance = this;
        this.state = {
            province: props.defaultProvince || '-1',
            city: props.defaultProvince && props.defaultCity ? props.defaultCity : '-1',
            area: props.defaultProvince && props.defaultCity && props.defaultArea ? props.defaultArea : '-1',
            onChange: this.props.onChange || null,
            style: this.props.style || {},
            className: this.props.className || '',
            form: this.props.form,
            provinceOptions: [],
            cityOptions: [],
            areaOptions: [],
            orInit: false,
            provinceList: {},
            cityList: {},
            areaList: {}
        };
    }

    componentWillMount () {
        const props = this.props;
        this.addressId = Address.uniqueId('form_');
        Address.add(this, props.form);
    }

    componentDidMount () {
        // 初始化地址信息
        this.renderProvice();
    }

    componentWillUnmount () {
        Address.remove(this, this.props.form);
    }

    getData () {
        const state = this.state;
        return {
            province: {
                id: state.provinceList.key,
                name: state.provinceList.value
            },
            city: {
                id: state.cityList.key,
                name: state.cityList.value
            },
            area: {
                id: state.areaList.key,
                name: state.areaList.value
            }
        };
    }

    clearData () {
        this.setState({
            province: '-1',
            city: '-1',
            area: '-1'
        }, () => {
            this.renderProvice();
        });
    }

    resetData () {
        const props = this.props;
        this.setState({
            province: props.defaultProvince || '-1',
            city: props.defaultProvince && props.defaultCity ? props.defaultCity : '-1',
            area: props.defaultProvince && props.defaultCity && props.defaultArea ? props.defaultArea : '-1'
        }, () => {
            this.renderProvice();
        });
    }

    handleChange (e, level) {
        if (e) {
            if (level === LEVEL_PROVINCE) {
                this.renderCity(e);
            } else if (level === LEVEL_CITY) {
                this.renderArea(e);
            } else {
                this.setState({
                    area: e.value,
                    areaList: e
                }, () => {
                    const result = {
                        province: { id: this.state.provinceList.key, name: this.state.provinceList.value },
                        city: { id: this.state.cityList.key, name: this.state.cityList.value },
                        area: { id: this.state.areaList.key, name: this.state.areaList.value }
                    };
                    if (this.state.onChange) {
                        this.state.onChange(result);
                    }
                });
            }
        }
    }

    // 渲染province
    renderProvice () {
        Util.fetch({
            url: 'http://logistics.mogujie.com/jsonp/getAddressMapActionlet/1',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'jsonp',
            data: { level: 1, parentId: 0 }
        }).then((resData) => {
            if (resData.returnCode === 'success') {
                const provinces = resData.data || [];
                const provinceOptions = this.state.provinceOptions;
                const province = this.state.province || '';
                provinceOptions[0] = { text: '省', value: '-1' };
                for (let i = 0; i < provinces.length; i++) {
                    const j = i + 1;
                    provinceOptions[j] = {
                        text: provinces[i].placeZh,
                        value: provinces[i].placeZh,
                        key: provinces[i].id
                    };

                    // 判断默认的省级的id
                    if (province === provinces[i].placeZh) {
                        const provinceList = {
                            text: provinces[i].placeZh,
                            value: provinces[i].placeZh,
                            key: provinces[i].id
                        };

                        this.setState({
                            provinceList
                        }, () => {
                            this.renderCity(provinceList, 'init');
                        });
                    }
                }

                this.setState({
                    provinceOptions,
                    cityOptions: [{ text: '市', value: '-1' }],
                    areaOptions: [{ text: '区', value: '-1' }],
                    orInit: true
                });
            }
        });
    }

    // 渲染city
    renderCity (province, type) {
        Util.fetch({
            url: 'http://logistics.mogujie.com/jsonp/getAddressMapActionlet/1',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'jsonp',
            data: { level: 1, parentId: province.key }
        }).then((resData) => {
            if (resData.returnCode === 'success') {
                let cityOptions = resData.data || [];
                const city = this.state.city;
                cityOptions = cityOptions.map((options) => {
                    // 如果是初始化，将传入的defultvalue的名称转换成对象
                    if (city === options.placeZh && type === 'init') {
                        const cityList = {
                            text: options.placeZh,
                            value: options.placeZh,
                            key: options.id
                        };
                        this.setState({
                            cityList
                        }, () => {
                            this.renderArea(cityList, 'init');
                        });
                    }
                    return {
                        text: options.placeZh,
                        value: options.placeZh,
                        key: options.id
                    };
                });

                cityOptions.unshift({ text: '市', value: '-1' });

                if (type === 'init') {
                    this.setState({
                        cityOptions
                    });
                } else {
                    this.setState({
                        cityOptions,
                        areaOptions: [{ text: '区', value: '-1' }],
                        province: province.value,
                        city: '-1',
                        area: '-1',
                        provinceList: province,
                        cityList: {},
                        areaList: {}
                    }, () => {
                        const result = {
                            province: {
                                id: this.state.provinceList.key,
                                name: this.state.provinceList.value
                            },
                            city: {},
                            area: {}
                        };
                        if (this.state.onChange) {
                            this.state.onChange(result);
                        }
                    });
                }
            }
        });
    }

    // 渲染area
    renderArea (city, type) {
        Util.fetch({
            url: 'http://logistics.mogujie.com/jsonp/getAddressMapActionlet/1',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'jsonp',
            data: { level: 1, parentId: city.key }
        }).then((resData) => {
            if (resData.returnCode === 'success') {
                let areaOptions = resData.data || [];
                const area = this.state.area;
                areaOptions = areaOptions.map((options) => {
                    // 如果是初始化，将传入的defultvalue的名称转换成对象
                    if (area === options.placeZh && type === 'init') {
                        const areaList = {
                            text: options.placeZh,
                            value: options.placeZh,
                            key: options.id
                        };
                        this.setState({
                            areaList
                        });
                    }
                    return {
                        text: options.placeZh,
                        value: options.placeZh,
                        key: options.id
                    };
                });

                areaOptions.unshift({ text: '区', value: '-1' });

                if (type === 'init') {
                    this.setState({
                        areaOptions
                    });
                } else {
                    this.setState({
                        areaOptions,
                        city: city.value,
                        area: '-1',
                        cityList: city,
                        areaList: {}
                    }, () => {
                        const result = {
                            province: { id: this.state.provinceList.key, name: this.state.provinceList.value },
                            city: { id: this.state.cityList.key, name: this.state.cityList.value },
                            area: {}
                        };
                        if (this.state.onChange) {
                            this.state.onChange(result);
                        }
                    });
                }
            }
        });
    }

    render () {
        return (
            <div className='address-select'>
                {this.state.orInit ?
                    <div className='clearfix' >
                        <div className='address-province float-left'>
                            <Select
                                disabled={this.props.provinceDisabled}
                                name='province'
                                style={this.state.style ? this.state.style : { width: '200px' }}
                                className={this.state.className}
                                value={this.state.province}
                                options={this.state.provinceOptions}
                                onChange={e => this.handleChange(e, LEVEL_PROVINCE)}
                            />
                        </div>

                        <div className='address-city float-left mgL15'>
                            <Select
                                disabled={this.props.cityDisabled}
                                name='city'
                                style={this.state.style ? this.state.style : { width: '200px' }}
                                className={this.state.className}
                                value={this.state.city}
                                options={this.state.cityOptions}
                                onChange={e => this.handleChange(e, LEVEL_CITY)}
                            />
                        </div>

                        <div className='address-area float-left mgL15'>
                            <Select
                                disabled={this.props.areaDisabled}
                                name='area'
                                style={this.state.style ? this.state.style : { width: '200px' }}
                                className={this.state.className}
                                value={this.state.area}
                                options={this.state.areaOptions}
                                onChange={e => this.handleChange(e, LEVEL_AREA)}
                            />
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}
