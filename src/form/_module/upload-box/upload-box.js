import React, { Component, PropTypes } from 'react';
import UploadImgBox from './upload/uploadImgBox.js';
import Field from '../../../field';

export default class UploadBox extends Component {
    static propTypes = {
        defaultValue: PropTypes.any,
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
            value: this.changeImgList(props.defaultValue || [{}])
        };

        UploadBox.instance = this;
    }

    onData () {
        return this.state.value;
    }

    onValidate () {
        const value = this.state.value;
        const required = this.props.required;
        if (required && !(value && value.length && value[0].img)) {
            return false;
        }

        return true;
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

    changeImgList (list) {
        let result = [];
        if (list && typeof list === 'string') {
            result[0] = { img: list };
        } else if (list && list.length && typeof list[0] === 'string') {
            for (let i = 0; i < list.length; i++) {
                result[i] = { img: list[i] };
            }
        } else {
            result = list;
        }
        return result;
    }

    picChange (e) {
        this.setState({
            value: e
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
                <UploadImgBox
                    {...attrs}
                    imgList={value}
                    disabled={disabled}
                    style={style}
                    onChange={e => this.picChange(e)}
                />
            </Field>
        );
    }
}
