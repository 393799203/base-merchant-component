import React, { Component, PropTypes } from 'react';
import './style/index.less';
import Field from '../field';
import Address from '../address';

const DEFAULT_FORM = 'defaultKey';

export default class FullAddress extends Component {
    static defaultProps = {
        form: DEFAULT_FORM,
        defaultProvince: '-1',
        defaultCity: '-1',
        defaultArea: '-1',
        defaultStreet: ''
    };

    static propTypes = {
        defaultProvince: PropTypes.string,
        defaultCity: PropTypes.string,
        defaultArea: PropTypes.string,
        defaultStreet: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        form: PropTypes.string,
        provinceDisabled: PropTypes.bool,
        cityDisabled: PropTypes.bool,
        areaDisabled: PropTypes.bool,
        streetDisabled: PropTypes.bool
    };

    // 对外提供的获取数据静态方法
    static forms = {}

    static idCounter = 0  // id计数器，用于uniqueId方法生成表单的addressId标识

    static uniqueId (prefix) { // 生成唯一ID
        FullAddress.idCounter += 1;
        const id = FullAddress.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (fullAddress, name) {  // 添加表单数据到forms对象中
        if (FullAddress.forms[name] === undefined) {
            FullAddress.forms[name] = {};
        }

        FullAddress.forms[name][fullAddress.fullAddressId] = fullAddress;
    }

    static remove (fullAddress, name) {  // 删除某个表单
        delete FullAddress.forms[name][fullAddress.fullAddressId];
    }

    // 对外提供的获取数据静态方法
    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = FullAddress.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const fullAddress = currentForm[key];
            const value = fullAddress.getData();

            Object.assign(data, { [fullAddress.props.name]: value });
        });
        return data;
    }

    static clearData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = FullAddress.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const fullAddress = currentForm[key];
            fullAddress.clearData();
        });
        return data;
    }

    static resetData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = FullAddress.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const fullAddress = currentForm[key];
            fullAddress.resetData();
        });
        return data;
    }

    constructor (props) {
        super(props);
        FullAddress.instance = this;
        this.state = {
            style: props.style || {},
            className: props.className || '',
            defaultProvince: props.defaultProvince || '',
            defaultCity: props.defaultCity || '',
            defaultArea: props.defaultArea || '',
            defaultStreet: props.defaultStreet || '',
            name: props.name,
            placeholder: props.placeholder || '请填写详细地址'
        };
    }

    componentWillMount () {
        const props = this.props;
        this.fullAddressId = FullAddress.uniqueId('fullAddress_');
        FullAddress.add(this, props.form);
    }

    componentWillUnmount () {
        FullAddress.remove(this, this.props.form);
    }

    getData () {
        const form = this.props.form;
        const name = this.props.name;

        const address = Address.getData(form) || {};
        const fullAddress = address[name] || {};

        const street = Field.getData(form) || {};

        Object.assign(fullAddress, street);

        return fullAddress;
    }

    clearData () {
        const form = this.props.form;
        Address.clearData(form);
        Field.clearData(form);
    }

    resetData () {
        const form = this.props.form;
        Address.resetData(form);
        Field.resetData(form);
    }

    changeAddress (e) {
        console.info(e);
        const form = this.props.form;
        const street = Field.getData(form) || {};
        Object.assign(street, e);

        const onChange = this.props.onChange;
        if (typeof onChange === 'function') {
            this.props.onChange(street);
        }
    }

    changeStreet (e) {
        debugger
        const form = this.props.form;
        const name = this.props.name;

        const address = Address.getData(form) || {};
        const fullAddress = address[name] || {};

        Object.assign(fullAddress, { street: e });

        const onChange = this.props.onChange;
        if (typeof onChange === 'function') {
            this.props.onChange(fullAddress);
        }
    }

    render () {
        const {
            style,
            className,
            defaultProvince,
            defaultCity,
            defaultArea,
            defaultStreet,
            form,
            name,
            placeholder
        } = this.state;

        const {
            provinceDisabled,
            cityDisabled,
            areaDisabled,
            streetDisabled
        } = this.props;

        return (
            <div className={`${className} full-address-select clearfix`} style={style}>
                <Address
                    onChange={e => this.changeAddress(e)}
                    defaultProvince={defaultProvince}
                    defaultCity={defaultCity}
                    defaultArea={defaultArea}
                    form={form}
                    provinceDisabled={provinceDisabled}
                    cityDisabled={cityDisabled}
                    areaDisabled={areaDisabled}
                    name={name}
                />

                <div className='address-location mgL15'>
                    <Field
                        type='text'
                        name='street'
                        className='input-location'
                        defaultValue={defaultStreet}
                        onChange={e => this.changeStreet(e)}
                        placeholder={placeholder}
                        disabled={streetDisabled}
                        form={form}
                    />
                </div>
            </div>
        );
    }
}
