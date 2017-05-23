/**
* 表单
**/
import React, { Component, PropTypes } from 'react';

import Checkbox from './_module/checkbox';
import Radio from './_module/radio';
import Raw from './_module/raw';
import Select from './_module/select';
import Text from './_module/text';
import './style/index.less';
import '../_module/less/icon-font/iconfont.less';
import Util from '../_module/js/util.js';

const DEFAULT_FORM = 'defaultKey';

const TYPE = {
    password: Text,
    text: Text,
    textarea: Text,
    radio: Radio,
    raw: Raw,
    select: Select,
    checkbox: Checkbox
};

export default class Field extends Component {
    static defaultProps = {
        form: DEFAULT_FORM,
        type: '',
        label: '',
        subInfo: '',
        errorMsg: '',
        className: '',
        required: false
    };

    static propTypes = {
        form: PropTypes.string,
        type: PropTypes.string,
        label: PropTypes.string,
        subInfo: PropTypes.string,
        errorMsg: PropTypes.string,
        className: PropTypes.string,
        required: PropTypes.bool,
        labelStyle: PropTypes.object,
        error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    };

    // 设置表单唯一标示
    static forms = {};

    static idCounter = 0;

    static uniqueId (prefix) { // 生成唯一ID
        Field.idCounter += 1;
        const id = Field.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (field, name) {  // 添加表单数据到forms对象中
        if (Field.forms[name] === undefined) {
            Field.forms[name] = {};
        }

        Field.forms[name][field.fieldId] = field;
    }

    static remove (field, name) {  // 删除某个表单
        delete Field.forms[name][field.fieldId];
    }

    // 对外暴露获取表单数据的方法
    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = Field.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const field = currentForm[key];
            const value = field.getData();
            Object.assign(data, Util.deepClone({ [field.props.name]: value }));
        });

        return data;
    }

    // 对外暴露重置表单的方法
    static resetData (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Field.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const field = currentForm[key];
            field.resetData();
        });
    }

    // 对外暴露清空表单的方法
    static clearData (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Field.forms[formName] || {};

        Object.keys(currentForm).map((key) => {
            const field = currentForm[key];
            field.clearData();
        });
    }

    // 对外暴露校验的方法
    static validate (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Field.forms[formName];

        let flag = true;
        Object.keys(currentForm).map((key) => {
            const field = currentForm[key];
            flag = field.validate() && flag;
        });
        return flag;
    }

    constructor (props) {
        super(props);
        this.state = {
            error: props.error || false,
            value: ''
        };
    }

    componentWillMount () {
        this.fieldId = Field.uniqueId('field_');
        Field.add(this, this.props.form);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.error !== this.props.error) {
            this.setState({
                error: nextProps.error
            }, () => {
                this.props = nextProps;
            });
        } else {
            this.props = nextProps;
        }
    }

    componentWillUnmount () {
        Field.remove(this, this.props.form);
    }

    // 失去焦点对表单进行校验，但是checkbox无法出发onBlur事件，raw无法确定他的结构所以这两种类型浮掠
    onBlurField () {
        const type = this.props.type;

        if (type === 'raw' || type === 'checkbox') {
            return;
        }

        this.validate();
    }

    // 获取表单数据
    getData () {
        const type = this.props.type;
        const data = TYPE[type] && TYPE[type].getData ? TYPE[type].getData(this.fieldId) : {};
        return data;
    }

    // 点击表单则删除校验失败的提示，对于checkbox则点击出发校验
    clearError () {
        const type = this.props.type;

        // 复选框变更校验
        if (type === 'checkbox') {
            this.validate();
            return;
        }

        this.setState({
            error: false
        });
    }

    // 重置表单数据
    resetData () {
        const type = this.props.type;
        if (TYPE[type] && TYPE[type].resetData) {
            TYPE[type].resetData(this.fieldId);
            this.setState({
                error: false
            });
        }
    }

    // 清空表单数据
    clearData () {
        const type = this.props.type;
        if (TYPE[type] && TYPE[type].clearData) {
            TYPE[type].clearData(this.fieldId);
            this.setState({
                error: false
            });
        }
    }

    // 表单校验
    validate () {
        const type = this.props.type;
        const isValid = TYPE[type] && TYPE[type].validate ? TYPE[type].validate(this.fieldId) : true;
        this.setState({
            error: !isValid
        });
        return isValid;
    }

    // 渲染表单
    renderEntry () {
        const type = this.props.type;
        switch (type) {
        case 'text' :
        case 'password' :
        case 'textarea':
            return <Text {...this.props} fieldId={this.fieldId} />;
        case 'radio':
            return <Radio {...this.props} fieldId={this.fieldId} />;
        case 'checkbox':
            return <Checkbox {...this.props} fieldId={this.fieldId} />;
        case 'select':
            return <Select {...this.props} fieldId={this.fieldId} />;
        default:
            return null;
        }
    }

    render () {
        const {
            className,
            required,
            label,
            subInfo,
            errorMsg,
            type,
            labelStyle
        } = this.props;

        const error = this.state.error;

        return (
            <div
                className='mc-module-field'
                id={this.fieldId}
            >
                <div className={`mc-field-group clearfix ${className || ''} ${error ? 'mc-field-invaild' : ''}`} dataId={this.fieldId}>
                    {/* 标题 */}
                    { label ?
                        <div className='mc-field-label' style={labelStyle}>
                            <label htmlFor={this.fieldId}>
                                { required ? <span className='require'>*</span> : ''}
                                {label}
                            </label>
                        </div>
                        : null
                    }

                    {/* 表单 */}
                    <div className='mc-field-body'>
                        {type === 'raw' ?
                            <Raw {...this.props} fieldId={this.fieldId} />
                            :
                            <div
                                onBlur={() => this.onBlurField()}
                                onClick={() => this.clearError()}
                            >
                                {this.renderEntry()}
                            </div>
                        }

                        {/* 校验错误提示 */}
                        {errorMsg ?
                            <div className='mc-field-errorMsg'>
                                <div className='mc-field-error-arrow'>
                                    <span className='mc-field-arrow-color' />
                                    <span className='mc-field-arrow-border' />
                                    <span className='mc-field-arrow' />
                                </div>
                                <p className='mc-field-errormsg-content'>{errorMsg}</p>
                            </div>
                            : null
                        }
                    </div>

                    {/* 子标题 */}
                    {subInfo ?
                        <div className='mc-field-subInfo'>
                            <label htmlFor={this.fieldId}> {subInfo} </label>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}
