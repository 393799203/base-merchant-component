import React, { Component, PropTypes } from 'react';

import './index.less';

export default class Select extends Component {
    static defaultProps = {
        attrs: {},
        events: {},
        onValidate: () => {
            return true;
        },
        defaultValue: '',
        placeholder: '',
        name: '',
        id: '',
        options: [],
        disabled: false,
        required: false
    };

    static propTypes = {
        attrs: PropTypes.object,
        events: PropTypes.object,
        onValidate: PropTypes.func,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.string,
        options: PropTypes.array,
        fieldId: PropTypes.string,
        disabled: PropTypes.bool,
        required: PropTypes.bool
    };

    static add (field) {  // 添加表单数据到forms对象中
        Select[field.fieldId] = field;
    }

    static remove (fieldId) {  // 删除某个表单
        delete Select[fieldId];
    }

    static getData (fieldId) {
        const currentField = Select[fieldId];
        return currentField.state.value;
    }

    static resetData (fieldId) {
        const currentField = Select[fieldId];
        currentField.resetData();
    }

    static clearData (fieldId) {
        const currentField = Select[fieldId];
        currentField.clearData();
    }

    static validate (fieldId) {
        const currentField = Select[fieldId];
        return currentField.validate();
    }

    constructor (props) {
        super(props);
        const inputValue = this.initValue();
        this.state = Object.assign({
            error: false,
            errorMsg: ''
        }, inputValue);
    }

    componentWillMount () {
        this.fieldId = this.props.fieldId;
        Select.add(this);
    }

    componentWillReceiveProps (nextProps) {
        this.updateValue(nextProps);
    }

    componentWillUnmount () {
        Select.remove(this.props.fieldId);
    }

    initValue () {
        if (typeof this.props.value !== 'undefined') {
            return { value: this.props.value };
        } else if (typeof this.props.defaultValue !== 'undefined') {
            return { value: this.props.defaultValue };
        } else if (Array.isArray(this.props.options)) { // props中没有再取options
            let defaultValue;
            const options = this.props.options;

            options.forEach((option) => {
                if (option.defaultValue) {
                    defaultValue = option.value;
                }
            });

            if (options.length >= 1) {
                defaultValue = this.props.options[0].value;
            }
            return { value: defaultValue };
        }
        return null;
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
        let value = '';
        if (this.props.defaultValue) {
            value = this.props.defaultValue;
        } else if (this.props.options.length) {
            const selected = this.props.options.find(item => item.defaultValue);
            if (selected && selected.value) {
                value = selected.value;
            } else {
                value = this.props.options[0].value;
            }
        }

        this.setState({
            value
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(value);
            }
        });
    }

    clearData () {
        const props = this.props;
        if (props.disabled || props.attrs.readOnly) {
            return;
        }

        let value = '';
        if (props.options.length) {
            value = props.options[0].value;
        }

        this.setState({ value }, () => {
            if (typeof props.onChange === 'function') {
                props.onChange('');
            }
        });
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

    handleChange (e) {  // 用户输入改变，触发onChange的函数
        const value = e.target.value;
        this.setState({
            value
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(value);
            }
        });
    }

    render () {
        const { options, id, name, placeholder, attrs, events, disabled, fieldId } = this.props;

        return (
            <div className='mc-field-select' >
                <select
                    {...attrs}
                    {...events}
                    className='mc-field-error mc-select-input'
                    name={name}
                    ref={name}
                    placeholder={placeholder}
                    id={id || fieldId}
                    disabled={disabled}
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                >
                    {options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>{option.text || option.label}</option>
                        );
                    })}
                </select>
            </div>
        );
    }
}
