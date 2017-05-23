import React, { Component, PropTypes } from 'react';

export default class Text extends Component {
    static defaultProps = {
        attrs: {},
        events: {},
        onValidate: () => {
            return true;
        },
        placeholder: '',
        name: '',
        id: '',
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
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        fieldId: PropTypes.string,
        required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        type: PropTypes.string
    };

    static add (field) {  // 添加表单数据到forms对象中
        Text[field.fieldId] = field;
    }

    static remove (fieldId) {  // 删除某个表单
        delete Text[fieldId];
    }

    static getData (fieldId) {
        const currentField = Text[fieldId];
        return currentField.state.value;
    }

    static resetData (fieldId) {
        const currentField = Text[fieldId];
        currentField.resetData();
    }

    static clearData (fieldId) {
        const currentField = Text[fieldId];
        currentField.clearData();
    }

    static validate (fieldId) {
        const currentField = Text[fieldId];
        return currentField.validate();
    }

    constructor (props) {
        super(props);
        const inputValue = this.initValue();
        this.state = inputValue;
        Text.instance = this;
    }

    componentWillMount () {
        this.fieldId = this.props.fieldId;
        Text.add(this);
    }

    componentWillReceiveProps (nextProps) {
        this.updateValue(nextProps);
    }

    componentWillUnmount () {
        Text.remove(this.props.fieldId);
    }

    initValue () {
        const props = this.props;

        return { value: props.value || props.defaultValue || '' };
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
        const value = this.props.defaultValue || '';
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

        this.setState({
            value: ''
        }, () => {
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
        const {
            type,
            id,
            placeholder,
            disabled,
            fieldId,
            attrs,
            events
        } = this.props;

        return (
            <div className='mc-field-text'>
                {type === 'textarea' ?
                    <textarea
                        id={id || fieldId}
                        disabled={disabled}
                        {...attrs}
                        {...events}
                        className='mc-field-error form-textarea'
                        value={this.state.value || ''}
                        placeholder={placeholder}
                        onChange={e => this.handleChange(e)}
                    />
                    :
                    <input
                        type={type}
                        id={id || fieldId}
                        disabled={disabled}
                        {...attrs}
                        {...events}
                        className='mc-field-error form-input'
                        value={this.state.value || ''}
                        placeholder={placeholder || ''}
                        onChange={e => this.handleChange(e)}
                    />
                }
            </div>
        );
    }
}
