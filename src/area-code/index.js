import React, { Component, PropTypes } from 'react';
import { Select } from 'source_path/select';
import config from './config.js';

const noop = function () {};

export default class AreaCode extends Component {
    static defaultProps = {
        defaultValue: '86',
        onChange: noop,
        disabled: false,
        name: 'areaCode'
    };

    static propTypes = {
        className: PropTypes.string,
        defaultValue: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        name: PropTypes.string
    };

    static clearData () {
        AreaCode.instance.clearData();
    }

    constructor (props) {
        super(props);
        this.state = {
            options: config.options,
            value: props.value || props.defaultValue
        };
        AreaCode.instance = this;
    }

    handleChange (e) {
        const value = e.value || '86';
        this.setState({
            value
        }, () => {
            this.props.onChange(String(Math.abs(+value)));
        });
    }

    clearData () {
        this.setState({
            value: '86'
        }, () => {
            this.props.onChange(String(Math.abs(+'86')));
        });
    }

    render () {
        const { options } = this.state;
        const { disabled, className, name } = this.props;
        const value = this.state.value;
        return (
            <Select
                className={className}
                options={options}
                value={value}
                name={name}
                onChange={e => this.handleChange(e)}
                disabled={disabled}
            />
        );
    }
}
