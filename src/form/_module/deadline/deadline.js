import React, { Component, PropTypes } from 'react';
import DatepickerCom from '../../../datepicker';
import '../../../_module/less/icon-font/iconfont.less';
import './deadline.less';
import Field from '../../../field';

export default class Deadline extends Component {
    static propTypes = {
        label: PropTypes.string,
        text: PropTypes.string,
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.Date]),
        className: PropTypes.string,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        name: PropTypes.string.isRequired,
        error: PropTypes.bool,
        errorMsg: PropTypes.string,
        required: PropTypes.bool,
        subInfo: PropTypes.string,
        form: PropTypes.string,
        attrs: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            value: props.defaultValue === '-1' ? '' : props.defaultValue,
            deadlineType: Boolean(props.defaultValue === '-1')
        };

        Deadline.instance = this;
    }

    onData () {
        const deadlineType = this.state.deadlineType;
        if (deadlineType) {
            return '-1';
        }
        return this.state.value;
    }

    onValidate () {
        const deadlineType = this.state.deadlineType;
        if (!deadlineType && !this.state.value) {
            return false;
        }
        return true;
    }

    onReset () {
        const defaultValue = this.props.defaultValue;
        if (defaultValue === '-1') {
            this.setState({
                value: '',
                deadlineType: true
            });
        } else {
            this.setState({
                value: defaultValue,
                deadlineType: false
            });
        }
    }

    onClear () {
        this.setState({
            value: '',
            deadlineType: false
        });
    }

    changeDate (e) {
        this.setState({
            value: e,
            deadlineType: false
        }, () => {
            Field.validate(this.props.form);
        });
    }

    handleDateChange () {
        this.setState({
            deadlineType: !this.state.deadlineType
        }, () => {
            Field.validate(this.props.form);
        });
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
            errorMsg,
            required
        } = this.props;

        const {
            value,
            deadlineType
        } = this.state;

        return (
            <Field
                type='raw'
                onData={() => this.onData()}
                onValidate={() => this.onValidate()}
                onReset={() => this.onReset()}
                onClear={() => this.onClear()}
                label={label || text}
                name={name}
                form={form}
                subInfo={subInfo}
                errorMsg={errorMsg}
                required={required}
            >
                <div className='mc-deadline'>
                    <div className='f-l'>
                        <DatepickerCom
                            {...attrs}
                            disabled={disabled || deadlineType}
                            style={style}
                            value={value}
                            onChange={e => this.changeDate(e)}
                        />
                    </div>

                    <div className='mc-field-deadline' onClick={disabled ? () => {} : () => this.handleDateChange()}>
                        <input
                            type='checkbox'
                            className='mc-checkbox-error mc-checkbox-input'
                            checked={deadlineType}
                        />
                        <label htmlFor={'长期'} className='yy-iconfont'>长期</label>
                    </div>
                </div>
            </Field>
        );
    }
}
