/**
 * Author : youyou
 * Description : 表单组件
 */
import React, { Component, PropTypes } from 'react';
import Field from '../field';
import './style/index.less';
import './style/grid.less';

export default class Form extends Component {
    static propTypes = {
        data: PropTypes.array,
        form: PropTypes.string,
        prefixcls: PropTypes.string
    };

    // 对外提供的获取数据静态方法
    static getData (form) {
        const formName = form || Form.instance.state.form;
        return Field.getData(formName);
    }

    // 对外提供的初始化数据静态方法
    static resetData (form) {
        const formName = form || Form.instance.state.form;
        return Field.resetData(formName);
    }

    // 对外提供的清除数据静态方法
    static clearData (form) {
        const formName = form || Form.instance.state.form;
        return Field.clearData(formName);
    }

    static validate (form) {
        const formName = form || Form.instance.state.form;
        return Field.validate(formName);
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

    render () {
        const state = this.state;
        const options = state.options;

        return (
            <div className={`${state.prefixcls} mc-form mc-form-row`}>
                {options.length > 0 ?
                    options.map((item, index) => {
                        return (
                            <div key={index} className={`mc-form-${item.key} mc-form-col-lg-${item.grid || 12} mc-form-field`}>
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
                    })
                    :
                    null
                }
            </div>
        );
    }
}
