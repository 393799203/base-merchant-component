import React, { Component, PropTypes } from 'react';
import './style/index.less';
import Field from '../field';
import Address from '../address';

export default class FullAddress extends Component {
    static propTypes = {
        defaultProvince: PropTypes.string,
        defaultCity: PropTypes.string,
        defaultArea: PropTypes.string,
        defaultStreet: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string
    };

    // 对外提供的获取数据静态方法
    static getData (name) {
        const street = Field.getData(name || 'fullAddress') || {};
        const address = Address.getData(name || 'fullAddress') || {};

        return Object.assign(street, address);
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
            name: props.name || 'fullAddress',
            placeholder: props.placeholder || '请填写详细地址'
        };
    }

    changeAddress (e) {
        const name = this.props.name || 'fullAddress';
        const street = Field.getData(name) || {};
        Object.assign(street, e);

        const onChange = this.props.onChange;
        if (typeof onChange === 'function') {
            this.props.onChange(street);
        }
    }

    changeStreet (e) {
        const name = this.props.name || 'fullAddress';

        const address = Address.getData(name) || {};
        Object.assign(address, { street: e });

        const onChange = this.props.onChange;
        if (typeof onChange === 'function') {
            this.props.onChange(address);
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
            name,
            placeholder
        } = this.state;

        return (
            <div className='full-address-select clearfix'>
                <Address
                    style={style}
                    className={`${className} float-left`}
                    onChange={e => this.changeAddress(e)}
                    defaultProvince={defaultProvince}
                    defaultCity={defaultCity}
                    name={name}
                    defaultArea={defaultArea}
                />

                <div className='address-location mgL15'>
                    <Field
                        type='text'
                        name='street'
                        className='input-location'
                        defaultValue={defaultStreet}
                        onChange={e => this.changeStreet(e)}
                        placeholder={placeholder}
                        form={name}
                    />
                </div>
            </div>
        );
    }
}
