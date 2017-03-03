import React, { Component, PropTypes } from 'react';
import UploadImgList from './upload/uploadImgList.js';
import Field from '../../../field';

export default class UploadList extends Component {
    static propTypes = {
        defaultValue: PropTypes.arrayOf(PropTypes.object),
        disabled: PropTypes.bool,
        style: PropTypes.object,
        attrs: PropTypes.object,
        form: PropTypes.string,
        name: PropTypes.string,
        label: PropTypes.string,
        text: PropTypes.string,
        subInfo: PropTypes.string,
        errorMsg: PropTypes.string,
        required: PropTypes.bool
    };

    constructor (props) {
        super(props);
        this.state = {
            value: props.defaultValue,
            error: false
        };

        UploadList.instance = this;
    }

    onData () {
        return this.state.value;
    }

    onValidate () {
        const value = this.state.value;
        const required = this.props.required;
        if (!(value && value.length && value[0].img) && required) {
            this.setState({
                error: true
            });
        } else {
            this.setState({
                error: false
            });
        }
    }

    onReset () {
        this.setState({
            value: this.props.defaultValue
        });
    }

    onClear () {
        this.setState({
            value: [{}]
        });
    }

    picChange (e) {
        this.setState({
            value: e
        }, () => {
            this.onValidate();
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
            error
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
                error={error}
                required={required}
            >
                <UploadImgList
                    imgList={value}
                    {...attrs}
                    disabled={disabled}
                    style={style}
                    onChange={e => this.picChange(e)}
                />
            </Field>
        );
    }
}
