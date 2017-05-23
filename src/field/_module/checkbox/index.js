import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component {
    static defaultProps = {
        attrs: {},
        events: {},
        onValidate: () => {
            return true;
        },
        placeholder: '',
        name: '',
        id: '',
        options: []
    };

    static propTypes = {
        attrs: PropTypes.object,
        events: PropTypes.object,
        onValidate: PropTypes.func,
        defaultValue: PropTypes.array,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.array,
        options: PropTypes.array,
        disabled: PropTypes.bool,
        fieldId: PropTypes.string,
        required: PropTypes.bool
    };

    static add (field) {  // 添加表单数据到forms对象中
        Checkbox[field.fieldId] = field;
    }

    static remove (fieldId) {  // 删除某个表单
        delete Checkbox[fieldId];
    }

    static getData (fieldId) {
        const currentField = Checkbox[fieldId];
        return currentField.state.value;
    }

    static resetData (fieldId) {
        const currentField = Checkbox[fieldId];
        currentField.resetData();
    }

    static clearData (fieldId) {
        const currentField = Checkbox[fieldId];
        currentField.clearData();
    }

    static validate (fieldId) {
        const currentField = Checkbox[fieldId];
        return currentField.validate();
    }

    constructor (props) {
        super(props);
        const inputValue = this.initValue();
        this.state = inputValue;
        Checkbox.instance = this;
    }

    componentWillMount () {
        this.fieldId = this.props.fieldId;
        Checkbox.add(this);
    }

    componentWillReceiveProps (nextProps) {
        this.updateValue(nextProps);
    }

    componentWillUnmount () {
        Checkbox.remove(this.props.fieldId);
    }

    initValue () {
        const checked = {};
        const values = [];
        const options = this.props.options;
        const props = this.props;

        if (typeof props.value !== 'undefined' && Array.isArray(props.value)) {
            let i = 0;
            let j = 0;
            for (i = 0; i < props.value.length; i++) {
                for (j = 0; j < options.length; j++) {
                    const item = options[j];
                    if (item.value === props.value[i]) {
                        checked[item.value] = true;
                        values.push(item.value);
                    }
                }
            }
        } else if (typeof props.defaultValue !== 'undefined' && Array.isArray(props.defaultValue)) {
            let i = 0;
            let j = 0;
            for (i = 0; i < props.defaultValue.length; i++) {
                for (j = 0; j < options.length; j++) {
                    const item = options[j];
                    if (item.value === props.defaultValue[i]) {
                        checked[item.value] = true;
                        values.push(item.value);
                    }
                }
            }
        } else if (Array.isArray(props.options)) {
            options.map((option) => {
                if (option.defaultChecked) {
                    checked[option.value] = true;
                    values.push(option.value);
                }
            });
        }

        return {
            checked,
            value: values
        };
    }

    updateValue (nextProps) {
        const newValue = nextProps.value;
        if (newValue === this.props.value || newValue === this.state.value) {
            return;
        }
        const checked = {};
        if (Array.isArray(newValue)) {
            newValue.map((item) => {
                return checked[item] === true;
            });
            this.setState({
                value: newValue,
                checked
            });
        }
    }

    resetData () {
        const checked = {};
        const props = this.props;
        const options = props.options;
        const values = [];

        if (typeof props.value !== 'undefined' && Array.isArray(props.value)) {
            let i = 0;
            let j = 0;
            for (i = 0; i < props.value.length; i++) {
                for (j = 0; j < options.length; j++) {
                    const item = options[j];
                    if (item.value === props.value[i]) {
                        checked[item.value] = true;
                        values.push(item.value);
                    }
                }
            }
        } else if (typeof props.defaultValue !== 'undefined' && Array.isArray(props.defaultValue)) {
            let i = 0;
            let j = 0;
            for (i = 0; i < props.defaultValue.length; i++) {
                for (j = 0; j < options.length; j++) {
                    const item = options[j];
                    if (item.value === props.defaultValue[i]) {
                        checked[item.value] = true;
                        values.push(item.value);
                    }
                }
            }
        } else if (Array.isArray(props.options)) {
            options.map((option) => {
                if (option.defaultChecked) {
                    checked[option.value] = true;
                    values.push(option.value);
                }
            });
        }
        this.setState({
            value: values,
            checked
        });
    }

    clearData () {
        const props = this.props;
        if (props.disabled || props.attrs.readOnly) {
            return;
        }

        this.setState({
            value: [],
            checked: {}
        });
    }

    validate () {
        let isValid = true;
        const value = this.state.value || [];
        if (this.props.required && value.length === 0) {
            isValid = false;
        }
        isValid = isValid && (!this.props.required || this.props.onValidate(value));

        return isValid;
    }

    handleChange (key) {  // 用户输入改变，触发onChange的函数
        const { checked, value } = this.state;

        const checkedKey = Boolean(checked[key]); // 原值取反
        checked[key] = !checkedKey;
        if (checked[key]) {
            value.push(key);
        } else {
            value.length = 0;
            for (const check of Object.keys(checked)) {
                if (checked[check]) {
                    value.push(check);
                }
            }
        }
        this.setState({
            value, checked
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(value, checked);
            }
        });
    }

    render () {
        const {
            options,
            attrs,
            events,
            fieldId,
            disabled
        } = this.props;
        return (
            <div className='mc-field-checkbox'>
                {
                    options.map((option, index) => {
                        const optionValue = option.value;
                        return (
                            <label
                                htmlFor={fieldId}
                                className={`form-checkbox mc-checkbox-nice m-r-10 ${option.className || ''} ${disabled ? 'disabled' : ''}`}
                                key={index}
                                {...events}
                                disabled={disabled}
                                onClick={disabled ? () => {} : () => this.handleChange(optionValue)}
                            >
                                <input
                                    type='checkbox'
                                    className='mc-checkbox-input'
                                    checked={Boolean(this.state.checked[String(optionValue)])}
                                    {...attrs}
                                    id={option.id}
                                    value={String(optionValue)}
                                    onChange={() => {}}
                                />
                                <span className='mc-checkbox-error' />
                                {option.label || option.text}
                            </label>
                        );
                    })
                }
            </div>
        );
    }
}
