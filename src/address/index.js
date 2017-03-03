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
        defaultArea: '-1',
        onChange: () => {}
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
            onChange: this.props.onChange,
            style: this.props.style || {},
            className: this.props.className || '',
            form: this.props.form,

            province: props.defaultProvince || '-1',
            city: props.defaultCity || '-1',
            area: props.defaultArea || '-1',
            provinceOptions: [],
            cityOptions: [],
            areaOptions: [],
            provinceList: {}, // 选中的地址详细信息
            cityList: {},
            areaList: {}
        };
    }

    componentWillMount () {
        const props = this.props;
        this.addressId = Address.uniqueId('address_');
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

    getAddressData (parentId) {
        return Util.fetch({
            url: 'http://logistics.mogujie.com/jsonp/getAddressMapActionlet/1',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'jsonp',
            data: { level: 1, parentId }
        }).then((resData) => {
            if (resData.returnCode === 'success') {
                return resData.data;
            }
            return [];
        });
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
            city: props.defaultCity || '-1',
            area: props.defaultArea || '-1'
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
                    this.props.onChange(result);
                });
            }
        }
    }

    // 渲染province
    renderProvice () {
        this.getAddressData(0).then((resData) => {
            const provinceDatas = resData || [];
            let provinceOptions = [];
            const province = this.state.province;
            let provinceList = {};
            let defaultProvince = '-1';

            // 组装provinceOptions，获取默认选中的数据
            provinceOptions = provinceDatas.map((datas) => {
                if (province === datas.placeZh) {
                    defaultProvince = province;
                    provinceList = {
                        text: datas.placeZh,
                        value: datas.placeZh,
                        key: datas.id
                    };
                }
                return {
                    text: datas.placeZh,
                    value: datas.placeZh,
                    key: datas.id
                };
            });
            provinceOptions.unshift({ text: '省', value: '-1' });

            // 如果传入的province不再下拉列表中，则默认为空
            if (provinceList && provinceList.text) {
                this.setState({
                    province: defaultProvince,
                    provinceList,
                    provinceOptions
                }, () => {
                    this.renderCity(provinceList, true);// 初始化时不触发onchange
                });
            } else {
                this.setState({
                    province: defaultProvince,
                    provinceList,
                    provinceOptions,

                    city: '-1',
                    cityOptions: [{ text: '市', value: '-1' }],
                    cityList: {},

                    area: '-1',
                    areaList: {},
                    areaOptions: [{ text: '区', value: '-1' }]
                }, () => {
                    const result = {
                        province: { id: this.state.provinceList.key, name: this.state.provinceList.value },
                        city: { id: this.state.cityList.key, name: this.state.cityList.value },
                        area: { id: this.state.areaList.key, name: this.state.areaList.value }
                    };
                    this.props.onChange(result);
                });
            }
        });
    }

    // 渲染city
    renderCity (province) {
        this.getAddressData(province.key).then((resData) => {
            const cityDatas = resData || [];
            let cityOptions = [];
            const city = this.state.city;
            let cityList = {};
            let defaultcity = '-1';

            // 组装provinceOptions，获取默认选中的数据
            cityOptions = cityDatas.map((datas) => {
                if (city === datas.placeZh) {
                    defaultcity = city;
                    cityList = {
                        text: datas.placeZh,
                        value: datas.placeZh,
                        key: datas.id
                    };
                }
                return {
                    text: datas.placeZh,
                    value: datas.placeZh,
                    key: datas.id
                };
            });
            cityOptions.unshift({ text: '市', value: '-1' });

            // 如果传入的province不再下拉列表中，则默认为空
            if (cityList && cityList.text) {
                this.setState({
                    province: province.text,
                    provinceList: province,

                    city: defaultcity,
                    cityOptions,
                    cityList
                }, () => {
                    this.renderArea(cityList);
                });
            } else {
                this.setState({
                    province: province.text,
                    provinceList: province,

                    city: defaultcity,
                    cityOptions,
                    cityList,

                    area: '-1',
                    areaList: {},
                    areaOptions: [{ text: '区', value: '-1' }]
                }, () => {
                    const result = {
                        province: { id: this.state.provinceList.key, name: this.state.provinceList.value },
                        city: { id: this.state.cityList.key, name: this.state.cityList.value },
                        area: { id: this.state.areaList.key, name: this.state.areaList.value }
                    };
                    this.props.onChange(result);
                });
            }
        });
    }

    // 渲染area
    renderArea (city) {
        this.getAddressData(city.key).then((resData) => {
            const areaDatas = resData || [];
            let areaOptions = [];
            const area = this.state.area;
            let areaList = {};
            let defaultarea = '-1';

            // 组装provinceOptions，获取默认选中的数据
            areaOptions = areaDatas.map((datas) => {
                if (area === datas.placeZh) {
                    defaultarea = area;
                    areaList = {
                        text: datas.placeZh,
                        value: datas.placeZh,
                        key: datas.id
                    };
                }
                return {
                    text: datas.placeZh,
                    value: datas.placeZh,
                    key: datas.id
                };
            });
            areaOptions.unshift({ text: '区', value: '-1' });

            // 如果传入的province不再下拉列表中，则默认为空
            this.setState({
                city: city.text,
                cityList: city,

                area: defaultarea,
                areaList,
                areaOptions
            }, () => {
                const result = {
                    province: { id: this.state.provinceList.key, name: this.state.provinceList.value },
                    city: { id: this.state.cityList.key, name: this.state.cityList.value },
                    area: { id: this.state.areaList.key, name: this.state.areaList.value }
                };
                this.props.onChange(result);
            });
        });
    }

    render () {
        return (
            <div className='address-select'>
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
            </div>
        );
    }
}
