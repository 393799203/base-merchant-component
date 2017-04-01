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
        url: 'http://logistics.mogujie.com/jsonp/getAddressMapActionlet/1',
        onChange: () => {}
    };

    static propTypes = {
        form: PropTypes.string,
        name: PropTypes.string.isRequired,
        defaultProvince: PropTypes.string,
        defaultCity: PropTypes.string,
        defaultArea: PropTypes.string,
        provinceDisabled: PropTypes.bool,
        cityDisabled: PropTypes.bool,
        areaDisabled: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func,
        url: PropTypes.string
    };

    constructor (props) {
        super(props);
        Address.instance = this;
        this.state = {
            province: props.defaultProvince,
            city: props.defaultCity,
            area: props.defaultArea,

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

    // 调用接口获取数据
    getAddressData (parentId) {
        return Util.fetch({
            url: this.props.url,
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

    // 获取下拉列表的数据&选中项
    getOptionsList (datas, select, type) {
        let options = []; // 省级下拉列表数据
        let selectList = {};
        let resultSelect = '-1';
        // 组装provinceOptions，获取默认选中的数据

        options = datas.map((item) => {
            const subSelect = item.placeZh.substring(0, item.placeZh.length - 1);
            const addSelect = item.placeZh + type;

            if (select === item.placeZh
                || select === subSelect
                || select === addSelect) {
                selectList = {
                    text: item.placeZh,
                    value: item.placeZh,
                    key: item.id
                };
                resultSelect = select;
            }
            return {
                text: item.placeZh,
                value: item.placeZh,
                key: item.id
            };
        });
        options.unshift({ text: type, value: '-1' });

        return {
            options,
            selectList,
            select: resultSelect
        };
    }

    getData () {
        const { provinceList, cityList, areaList } = this.state;
        return {
            province: {
                id: provinceList.key,
                name: provinceList.value
            },
            city: {
                id: cityList.key,
                name: cityList.value
            },
            area: {
                id: areaList.key,
                name: areaList.value
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
                    const result = this.getData();
                    this.props.onChange(result);
                });
            }
        }
    }

    // 渲染province
    renderProvice () {
        this.getAddressData(0).then((resData) => {
            const resultData = this.getOptionsList(resData || [], this.state.province, '省');
            const provinceOptions = resultData.options; // 省级下拉列表数据
            const provinceList = resultData.selectList;
            const province = resultData.select;

            // 如果传入的province不再下拉列表中，则默认为空
            if (provinceList && provinceList.text) {
                this.setState({
                    province,
                    provinceList,
                    provinceOptions
                }, () => {
                    this.renderCity(provinceList);// 初始化时不触发onchange
                });
            } else {
                this.setState({
                    province,
                    provinceList,
                    provinceOptions,

                    city: '-1',
                    cityOptions: [{ text: '市', value: '-1' }],
                    cityList: {},

                    area: '-1',
                    areaList: {},
                    areaOptions: [{ text: '区', value: '-1' }]
                }, () => {
                    const result = this.getData();
                    this.props.onChange(result);
                });
            }
        });
    }

    // 渲染city
    renderCity (provinceList) {
        this.getAddressData(provinceList.key).then((resData) => {
            const resultData = this.getOptionsList(resData || [], this.state.city, '市');
            const cityOptions = resultData.options; // 省级下拉列表数据
            const cityList = resultData.selectList;
            const city = resultData.select;

            // 如果传入的province不再下拉列表中，则默认为空
            if (cityList && cityList.text) {
                this.setState({
                    province: provinceList.text,
                    provinceList,
                    city,
                    cityOptions,
                    cityList
                }, () => {
                    this.renderArea(cityList);
                });
            } else {
                this.setState({
                    province: provinceList.text,
                    provinceList,
                    city,
                    cityOptions,
                    cityList,
                    area: '-1',
                    areaList: {},
                    areaOptions: [{ text: '区', value: '-1' }]
                }, () => {
                    const result = this.getData();
                    this.props.onChange(result);
                });
            }
        });
    }

    // 渲染area
    renderArea (cityList) {
        this.getAddressData(cityList.key).then((resData) => {
            const resultData = this.getOptionsList(resData || [], this.state.area, '区');
            const areaOptions = resultData.options; // 省级下拉列表数据
            const areaList = resultData.selectList;
            const area = resultData.select;

            // 如果传入的province不再下拉列表中，则默认为空
            this.setState({
                city: cityList.text,
                cityList,
                area,
                areaList,
                areaOptions
            }, () => {
                const result = this.getData();
                this.props.onChange(result);
            });
        });
    }

    render () {
        const {
            province,
            provinceOptions,
            city,
            cityOptions,
            area,
            areaOptions
        } = this.state;

        const {
            provinceDisabled,
            cityDisabled,
            areaDisabled,
            className,
            style
        } = this.props;
        return (
            <div className={`${className} address-select`}>
                <div className='clearfix' >
                    <div className='address-province float-left'>
                        <Select
                            disabled={provinceDisabled}
                            name='province'
                            style={style}
                            className={className}
                            value={province}
                            options={provinceOptions}
                            onChange={e => this.handleChange(e, LEVEL_PROVINCE)}
                        />
                    </div>

                    <div className='address-city float-left mgL15'>
                        <Select
                            disabled={cityDisabled}
                            name='city'
                            style={style}
                            className={className}
                            value={city}
                            options={cityOptions}
                            onChange={e => this.handleChange(e, LEVEL_CITY)}
                        />
                    </div>

                    <div className='address-area float-left mgL15'>
                        <Select
                            disabled={areaDisabled}
                            name='area'
                            style={style}
                            className={className}
                            value={area}
                            options={areaOptions}
                            onChange={e => this.handleChange(e, LEVEL_AREA)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
