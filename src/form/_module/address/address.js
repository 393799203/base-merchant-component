import React, { Component, PropTypes } from 'react';
import AddressCom from '../../../address';
import FullAddressCom from '../../../full-address';
import Field from '../../../field';

export default class Address extends Component {
    static defaultProps = {
        defaultValue: {},
        disabled: {}
    };

    static propTypes = {
        label: PropTypes.string,
        text: PropTypes.string,
        defaultValue: PropTypes.object,
        className: PropTypes.string,
        style: PropTypes.object,
        name: PropTypes.string.isRequired,
        error: PropTypes.bool,
        errorMsg: PropTypes.string,
        required: PropTypes.bool,
        subInfo: PropTypes.string,
        form: PropTypes.string,
        attrs: PropTypes.object,
        type: PropTypes.string,
        disabled: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            error: props.error,
            errorMsg: props.errorMsg,
            value: this.initData(props.defaultValue),
            isInit: true
        };

        Address.instance = this;
    }

    onData () {
        return this.state.value;
    }

    onReset () {
        this.setState({
            value: this.initData(this.props.defaultValue)
        }, () => {
            if (this.props.type === 'fullAddress') {
                FullAddressCom.resetData(this.props.form);
            } else {
                AddressCom.resetData(this.props.form);
            }
        });
    }

    onClear () {
        this.setState({
            value: {}
        }, () => {
            if (this.props.type === 'fullAddress') {
                FullAddressCom.clearData(this.props.form);
            } else {
                AddressCom.clearData(this.props.form);
            }
        });
    }

    initData (defaultValue) {
        return {
            province: {
                name: defaultValue.province
            },
            area: {
                name: defaultValue.area
            },
            city: {
                name: defaultValue.city
            },
            street: defaultValue.street
        };
    }

    addressChange (e) {
        if (!this.state.isInit) {
            this.setState({
                value: e
            }, () => {
                this.validateFiled();
            });
        } else {
            this.setState({
                isInit: false
            });
        }
    }

    validateFiled () {
        const e = this.state.value;
        const province = e.province || {};
        const city = e.city || {};
        const area = e.area || {};
        const street = e.street;
        const { required, type } = this.props;
        if (!province.name && required) {
            this.setState({
                error: true,
                errorMsg: '省不可为空'
            });
            return false;
        }

        if (!city.name && required) {
            this.setState({
                error: true,
                errorMsg: '市不可为空'
            });
            return false;
        }

        if (!area.name && required) {
            this.setState({
                error: true,
                errorMsg: '区不可为空'
            });
            return false;
        }

        if (!street && required && type === 'fullAddress') {
            this.setState({
                error: true,
                errorMsg: '详细地址不可为空'
            });
            return false;
        }

        this.setState({
            error: false
        });
        return true;
    }

    render () {
        const {
            disabled,
            style,
            attrs,
            label,
            text,
            name,
            form,
            subInfo,
            required,
            defaultValue,
            type
        } = this.props;

        const {
            errorMsg,
            error
        } = this.state;

        return (
            <Field
                type='raw'
                onData={() => this.onData()}
                onValidate={() => this.validateFiled()}
                onReset={() => this.onReset()}
                onClear={() => this.onClear()}
                label={label || text}
                name={name}
                form={form}
                subInfo={subInfo}
                error={error}
                errorMsg={errorMsg}
                required={required}
            >
                {type === 'address' ?
                    <AddressCom
                        {...attrs}
                        defaultProvince={defaultValue.province}
                        defaultCity={defaultValue.city}
                        defaultArea={defaultValue.area}
                        onChange={e => this.addressChange(e)}
                        style={style}
                        form={form}
                        provinceDisabled={disabled.provice}
                        cityDisabled={disabled.city}
                        areaDisabled={disabled.area}
                        name={name}
                    />
                    :
                    <FullAddressCom
                        {...attrs}
                        defaultStreet={defaultValue.street}
                        defaultProvince={defaultValue.province}
                        defaultCity={defaultValue.city}
                        defaultArea={defaultValue.area}
                        onChange={e => this.addressChange(e)}
                        style={style}
                        form={form}
                        provinceDisabled={disabled.provice}
                        cityDisabled={disabled.city}
                        areaDisabled={disabled.area}
                        streetDisabled={disabled.street}
                        name={name}
                    />
                }
            </Field>
        );
    }
}
