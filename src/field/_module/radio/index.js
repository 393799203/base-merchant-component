import React, { Component, PropTypes } from 'react';

import './index.less';

export default class Radio extends Component {
    static defaultProps = {
        attrs: {},
        events: {},
        onValidate: () => {
            return true;
        },
        name: '',
        id: '',
        options: []
    };

    static propTypes = {
        attrs: PropTypes.object,
        events: PropTypes.object,
        onValidate: PropTypes.func,
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        id: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        options: PropTypes.array,
        fieldId: PropTypes.string,
        disabled: PropTypes.bool,
        required: PropTypes.bool
    };

    static add (field) {  // 添加表单数据到forms对象中
        Radio[field.fieldId] = field;
    }

    static remove (fieldId) {  // 删除某个表单
        delete Radio[fieldId];
    }

    static getData (fieldId) {
        const currentField = Radio[fieldId];
        return currentField.state.value;
    }

    static resetData (fieldId) {
        const currentField = Radio[fieldId];
        currentField.resetData();
    }

    static clearData (fieldId) {
        const currentField = Radio[fieldId];
        currentField.clearData();
    }

    static validate (fieldId) {
        const currentField = Radio[fieldId];
        return currentField.validate();
    }

    constructor (props) {
        super(props);
        const inputValue = this.initValue();
        this.state = inputValue;
        Radio.instance = this;
    }

    componentWillMount () {
        this.fieldId = this.props.fieldId;
        Radio.add(this);
    }

    componentWillReceiveProps (nextProps) {
        this.updateValue(nextProps);
    }

    componentWillUnmount () {
        Radio.remove(this.props.fieldId);
    }

    initValue () {
        const props = this.props;

        if (typeof props.value !== 'undefined') {
            return {
                value: props.value
            };
        } else if (typeof props.defaultValue !== 'undefined') {
            return {
                value: props.defaultValue
            };
        }
        const obj = {};
        const options = props.options;
        options.map((option) => {
            if (option.defaultChecked) {
                obj.value = option.value;
            }
        });
        if (typeof obj.value === 'undefined' && options.length > 0) {
            obj.value = options[0].value; // 如果没有默认checked的值，则用第一个作为默认值
        }
        return obj;
    }

    updateValue (nextProps) {
        const newValue = nextProps.value;
        if (newValue === this.props.value || newValue === this.state.value) {
            return;
        }
        this.setState({
            value: newValue
        });
    }

    resetData () {
        const props = this.props;
        let value = '';
        if (typeof props.value !== 'undefined') {
            value = props.value;
        } else if (typeof props.defaultValue !== 'undefined') {
            value = props.defaultValue;
        } else if (props.options.length) {  // 遍历options，取出默认checked的值
            const options = props.options;
            options.map((option) => {
                if (option.defaultChecked) {
                    value = option.value;
                }
            });

            if (typeof value === 'undefined' && options.length > 0) {
                value = options[0].value; // 如果没有默认checked的值，则用第一个作为默认值
            }
        }

        this.setState({ value });
    }

    clearData () {
        const props = this.props;
        if (props.disabled || props.attrs.readOnly) {
            return;
        }

        const selected = this.props.options[0];
        if (typeof selected !== 'undefined') {
            this.setState({
                value: selected.value
            });
        }
    }

    validate () {
        let isValid = true;
        let value = this.state.value;
        value = value ? (value.toString()).trim() : '';

        if (value === '' && this.props.required) {
            isValid = false;
        }

        isValid = isValid && (!this.props.required || this.props.onValidate(value));

        return isValid;
    }

    handleChange (value) {  // 用户输入改变，触发onChange的函数
        this.setState({
            value
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(value);
            }
        });
    }

    render () {
        const {
            attrs,
            events,
            options,
            disabled,
            fieldId
        } = this.props;

        return (
            <div className='mc-field-radio'>
                {
                    options.map((option) => {
                        const optionValue = typeof option.value !== 'undefined' ? String(option.value) : '';
                        return (
                            <div
                                className={`mc-radio-nice ${option.className || ''}`}
                                key={optionValue}
                                {...events}
                                onClick={disabled ? () => {} : () => this.handleChange(optionValue)}
                            >
                                <input
                                    type='radio'
                                    className='mc-radio-error mc-radio-input'
                                    checked={this.state.value.toString() === optionValue}
                                    {...attrs}
                                    disabled={disabled}
                                    id={option.id}
                                    value={optionValue}
                                    onChange={() => this.handleChange(optionValue)}
                                />
                                <label className='yy-iconfont' htmlFor={option.id || fieldId}>{option.label || option.text}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
