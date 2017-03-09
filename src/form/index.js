/**
 * Author : youyou
 * Description : 表单组件
 */
import React, { Component, PropTypes } from 'react';

import Field from '../field';
import Address from './_module/address/address';
import Datepicker from './_module/datepicker/datepicker';
import Deadline from './_module/deadline/deadline';
import UploadBox from './_module/upload-box/upload-box';
import UploadList from './_module/upload-list/upload-list';

import './style/index.less';
import './style/grid.less';

const modules = {
    fullAddress: Address,
    address: Address,
    datepicker: Datepicker,
    deadline: Deadline,
    uploadBox: UploadBox,
    uploadList: UploadList
};

export default class Form extends Component {
    static propTypes = {
        data: PropTypes.array,
        form: PropTypes.string.isRequired,
        prefixcls: PropTypes.string
    };

    // 设置表单唯一标示
    static forms = {};

    // 添加表单数据到forms对象中
    static add (form, key) {
        Form.forms[key] = form;
    }

    // 删除某个表单
    static remove (key) {
        delete Form.forms[key];
    }

    // 对外提供的获取数据静态方法
    static getData (form) {
        return Form.forms[form].getData();
    }

    // 对外提供的初始化数据静态方法
    static resetData (form) {
        Form.forms[form].resetData();
    }

    // 对外提供的清除数据静态方法
    static clearData (form) {
        Form.forms[form].clearData();
    }

    static validate (form) {
        return Form.forms[form].validate();
    }

    constructor (props) {
        super(props);
        Form.instance = this;
        this.state = {
            options: props.data || [],
            form: props.form || '',
            prefixcls: props.prefixcls || ''
        };
    }

    componentWillMount () {
        Form.add(this, this.props.form);
    }

    componentWillReceiveProps (nextProps) {
        if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
            this.state.options = nextProps.data || [];
        }
    }


    componentWillUnmount () {
        Form.remove(this.props.form);
    }

    getData () {
        return Field.getData(this.props.form);
    }

    resetData () {
        Field.resetData(this.props.form);
    }

    clearData () {
        Field.clearData(this.props.form);
    }

    validate () {
        return Field.validate(this.props.form);
    }

    render () {
        const state = this.state;
        const options = state.options;
        return (
            <div className={`${state.prefixcls} mc-form mc-form-row`}>
                {options.length > 0 ?
                    options.map((item, index) => {
                        const FormCom = modules[item.type] || null;
                        return (
                            <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                {FormCom ?
                                    <FormCom
                                        {...item}
                                        form={state.form}
                                    />
                                    :
                                    <Field
                                        {...item}
                                        form={state.form}
                                    />
                                }
                            </div>
                        );
                    })
                    :
                    null
                }
            </div>
        );
    }
}
