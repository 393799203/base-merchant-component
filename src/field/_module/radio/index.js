import React, { Component, PropTypes } from 'react';

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
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        name: PropTypes.string,
        id: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
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
        const obj = {};
        const options = props.options;

        if (options.length > 0) {
            options.map((option) => {
                if (option.defaultChecked) {
                    obj.value = option.value;
                }
            });

            if (typeof props.value !== 'undefined') {
                options.map((option) => {
                    if (option.value === props.value) {
                        obj.value = option.value;
                    }
                });
            } else if (typeof props.defaultValue !== 'undefined') {
                options.map((option) => {
                    if (option.value === props.defaultValue) {
                        obj.value = option.value;
                    }
                });
            }

            if (typeof obj.value === 'undefined') {
                obj.value = options[0].value; // 如果没有默认checked的值，则用第一个作为默认值
            }
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
        const options = props.options;
        let value = '';
        if (options.length) {  // 遍历options，取出默认checked的值
            options.map((option) => {
                if (option.defaultChecked) {
                    value = option.value;
                }
            });

            if (typeof props.value !== 'undefined') {
                options.map((option) => {
                    if (option.value === props.value) {
                        value = option.value;
                    }
                });
            } else if (typeof props.defaultValue !== 'undefined') {
                options.map((option) => {
                    if (option.value === props.defaultValue) {
                        value = option.value;
                    }
                });
            }

            if (value === '') {
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
            <div className='mc-field-radio m-t-10'>
                {
                    options.map((option, index) => {
                        const optionValue = typeof option.value !== 'undefined' ? String(option.value) : '';
                        return (
                            <label
                                htmlFor={fieldId}
                                className={`form-radio mc-radio-nice m-r-10 ${option.className || ''} ${disabled ? 'disabled' : ''}`}
                                key={index}
                                {...events}
                                disabled={disabled}
                                onClick={disabled ? () => {} : () => this.handleChange(optionValue)}
                            >
                                <input
                                    type='radio'
                                    className='mc-radio-input'
                                    checked={this.state.value.toString() === optionValue}
                                    {...attrs}
                                    id={option.id}
                                    value={optionValue}
                                    onChange={() => {}}
                                />
                                <span className='mc-radio-error' />
                                {option.label || option.text}
                            </label>
                        );
                    })
                }
            </div>
        );
    }
}
