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

export default class Form extends Component {
    static propTypes = {
        data: PropTypes.array,
        form: PropTypes.string.isRequired,
        prefixcls: PropTypes.string
    };

    // 设置表单唯一标示
    static forms = {};

    static add (form, key) {  // 添加表单数据到forms对象中
        Form.forms[key] = form;
    }

    static remove (key) {  // 删除某个表单
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

    componentWillUnmount () {
        Form.remove(this.props.form);
    }

    getData () {
        const filed = Field.getData(this.props.form);
        const address = Address.getData(this.props.form);
        const datepicker = Datepicker.getData(this.props.form);
        const deadline = Deadline.getData(this.props.form);
        return Object.assign(filed, address, datepicker, deadline);
    }

    resetData () {
        Field.resetData(this.props.form);
        Address.resetData(this.props.form);
        Datepicker.resetData(this.props.form);
        Deadline.resetData(this.props.form);
    }

    clearData () {
        Field.clearData(this.props.form);
        Address.clearData(this.props.form);
        Datepicker.clearData(this.props.form);
        Deadline.clearData(this.props.form);
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
                        if (item.type === 'address' || item.type === 'fullAddress') {
                            return (
                                <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                    {/* 地址 */}
                                    <Address
                                        label={item.label || item.text}
                                        defaultValue={item.defaultValue}
                                        className={item.className}
                                        disabled={item.disabled}
                                        style={item.style}
                                        required={item.required}
                                        subInfo={item.subInfo}
                                        type={item.type}
                                        name={item.key}
                                        form={state.form}
                                    />
                                </div>
                            );
                        } else if (item.type === 'datepicker') {
                            return (
                                <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                    {/* 时间 */}
                                    <Datepicker
                                        label={item.label || item.text}
                                        defaultValue={item.defaultValue}
                                        className={item.className}
                                        disabled={item.disabled}
                                        style={item.style}
                                        required={item.required}
                                        subInfo={item.subInfo}
                                        type={item.type}
                                        name={item.key}
                                        form={state.form}
                                        placeholder={item.placeholder}
                                        timeConfig={item.timeConfig}
                                    />
                                </div>
                            );
                        } else if (item.type === 'deadline') {
                            return (
                                <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                    {/* 截止时间 */}
                                    <Deadline
                                        label={item.label || item.text}
                                        defaultValue={item.defaultValue}
                                        className={item.className}
                                        disabled={item.disabled}
                                        style={item.style}
                                        required={item.required}
                                        subInfo={item.subInfo}
                                        type={item.type}
                                        name={item.key}
                                        form={state.form}
                                        placeholder={item.placeholder}
                                        timeConfig={item.timeConfig}
                                    />
                                </div>
                            );
                        } else if (item.type === 'uploadBox') {
                            return (
                                <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                    {/* 单个上传 */}
                                    <UploadBox
                                        label={item.label || item.text}
                                        defaultValue={item.defaultValue}
                                        className={item.className}
                                        disabled={item.disabled}
                                        style={item.style}
                                        required={item.required}
                                        subInfo={item.subInfo}
                                        type={item.type}
                                        name={item.key}
                                        form={state.form}
                                        placeholder={item.placeholder}
                                        timeConfig={item.timeConfig}
                                    />
                                </div>
                            );
                        } else if (item.type === 'uploadList') {
                            return (
                                <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                    {/* 上传列表 */}
                                    <UploadList
                                        label={item.label || item.text}
                                        defaultValue={item.defaultValue}
                                        className={item.className}
                                        disabled={item.disabled}
                                        style={item.style}
                                        required={item.required}
                                        subInfo={item.subInfo}
                                        type={item.type}
                                        name={item.key}
                                        form={state.form}
                                        placeholder={item.placeholder}
                                        timeConfig={item.timeConfig}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
                                    {/* 基础表单 */}
                                    <Field
                                        form={state.form}
                                        type={item.type}
                                        label={item.text || item.label}
                                        subInfo={item.subInfo}
                                        attrs={{ style: { width: item.width, height: item.height } }}
                                        errorMsg={item.errorMsg}
                                        error={item.error}
                                        required={item.required}
                                        className={item.className}
                                        defaultValue={item.defaultValue}
                                        disabled={item.disabled}
                                        options={item.options}
                                        name={item.key}
                                        placeholder={item.placeholder}
                                    /> 
                                </div>
                            );
                        }
                    })
                    :
                    null
                }
            </div>
        );
    }
}
