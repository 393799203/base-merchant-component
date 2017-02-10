import React, { Component, PropTypes } from 'react';
import 'js-object-clone';

export default class Raw extends Component {
    static defaultProps = {
    };

    static propTypes = {
        fieldId: PropTypes.string,
        children: PropTypes.object,
        onValidate: PropTypes.func,
        onClear: PropTypes.func,
        onReset: PropTypes.func,
        onData: PropTypes.func
    };

    static add (field) {  // 添加表单数据到forms对象中
        Raw[field.fieldId] = field;
    }

    static remove (fieldId) {  // 删除某个表单
        delete Raw[fieldId];
    }

    static getData (fieldId) {
        const currentField = Raw[fieldId];
        return currentField.getData();
    }

    static resetData (fieldId) {
        const currentField = Raw[fieldId];
        currentField.resetData();
    }

    static clearData (fieldId) {
        const currentField = Raw[fieldId];
        currentField.clearData();
    }

    static validate (fieldId) {
        const currentField = Raw[fieldId];
        return currentField.validate();
    }

    constructor (props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount () {
        this.fieldId = this.props.fieldId;
        Raw.add(this);
    }

    componentWillUnmount () {
        Raw.remove(this.props.fieldId);
    }

    getData () {
        return typeof this.props.onData === 'function' && this.props.onData();
    }

    resetData () {
        typeof this.props.onReset === 'function' && this.props.onReset();
    }

    clearData () {
        typeof this.props.onClear === 'function' && this.props.onClear();
    }

    validate () {
        let isValid = true;
        if (typeof this.props.onValidate === 'function') {
            isValid = this.props.onValidate();
        }
        return isValid;
    }

    render () {
        return (
            <div className='mc-field-raw'>
                {
                    this.props.children
                }
            </div>
        );
    }
}
