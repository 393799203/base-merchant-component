import React, { Component, PropTypes } from 'react';
import Combobox from './Combobox';
import Multiple from './Multiple';
import './style/index.less';

const DEFAULT_FORM = 'defaultForm';
export default class Select extends Component {
    static forms = {};
    static idCounter = 0;
    static propTypes = {
        model: PropTypes.oneOf(['combobox', 'single', 'multiple'])
    }
    static defaultProps = {
        model: 'combobox'
    }

    static uniqueId () { // 生成唯一ID
        Select.idCounter += 1;
        const id = Select.idCounter.toString();
        return id;
    }

    static add (name, select) {  // 添加表单数据到forms对象中
        if (Select.forms[name] === undefined) {
            Select.forms[name] = {};
        }

        Select.forms[name][select.selectId] = select;
    }

    static remove (name, select) {  // 删除某个表单
        delete Select.forms[name][select.selectId];
    }

    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const resultValue = {};
        const currentSelect = Select.forms[formName] || {};

        Object.keys(currentSelect).map((key) => {
            const select = currentSelect[key];
            const value = select.getData();
            Object.assign(resultValue, { [select.state.name]: value });
        });
        return resultValue;
    }

    static clearData (form) {
        const formName = form || DEFAULT_FORM;
        const currentSelect = Select.forms[formName] || {};

        Object.keys(currentSelect).map((key) => {
            const select = currentSelect[key];
            select.clearData();
        });
    }

    static resetData (form) {
        const formName = form || DEFAULT_FORM;
        const currentSelect = Select.forms[formName] || {};

        Object.keys(currentSelect).map((key) => {
            const select = currentSelect[key];
            select.resetData();
        });
    }
    render () {
        const { model, ...others } = this.props;
        if (model === 'multiple') {
            return (<Multiple {...others} Select={Select} />);
        }
        return (<Combobox {...others} Select={Select} />);
    }
}
