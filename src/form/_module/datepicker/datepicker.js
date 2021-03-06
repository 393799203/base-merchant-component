import React, { Component, PropTypes } from 'react';
import DatepickerCom from '../../../datepicker';
import Field from '../../../field';

export default class Datepicker extends Component {
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
            value: props.defaultValue || ''
        };

        Datepicker.instance = this;
    }

    onData () {
        return this.state.value;
    }

    onValidate () {
        return true;
    }

    onReset () {
        this.setState({
            value: this.props.defaultValue
        });
    }

    onClear () {
        this.setState({
            value: ''
        });
    }

    changeDate (e) {
        let time = e;
        if (time) {
            time = new Date(time);
            time = parseInt(time.getTime().toString(), 10);
            time = parseInt(time / 1000, 10);
        }
        this.setState({
            value: time
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
            value
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
                <DatepickerCom
                    {...attrs}
                    disabled={disabled}
                    style={style}
                    value={value * 1000}
                    onChange={e => this.changeDate(e)}
                />
            </Field>
        );
    }
}
