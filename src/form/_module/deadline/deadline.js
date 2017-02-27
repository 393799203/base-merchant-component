import React, { Component, PropTypes } from 'react';
import DatepickerCom from '../../../datepicker';
import Util from '../../../_module/js/util.js';
import '../../../_module/less/icon-font/iconfont.less';
import './deadline.less';


const DEFAULT_FORM = 'defaultkey';

export default class Deadline extends Component {
    static defaultProps = {
        label: '',
        defaultValue: '',
        className: '',
        disabled: false,
        style: {},
        error: false,
        errorMsg: '',
        required: false,
        subInfo: '',
        form: DEFAULT_FORM,
        placeholder: '请设置时间',
        showTime: false
    };

    static propTypes = {
        label: PropTypes.string,
        defaultValue: PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.Date]),
        className: PropTypes.string,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        name: PropTypes.string.isRequired,
        error: PropTypes.bool,
        errorMsg: PropTypes.string,
        required: PropTypes.bool,
        subInfo: PropTypes.string,
        form: PropTypes.string,
        placeholder: PropTypes.string,
        showTime: PropTypes.bool
    };

    // 设置表单唯一标示
    static pickers = {};

    static idCounter = 0;

    static uniqueId (prefix) { // 生成唯一ID
        Deadline.idCounter += 1;
        const id = Deadline.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (deadline, name) {  // 添加到forms对象中
        if (Deadline.pickers[name] === undefined) {
            Deadline.pickers[name] = {};
        }

        Deadline.pickers[name][deadline.pickerId] = deadline;
    }

    static remove (deadline, name) {  // 删除某个表单
        delete Deadline.pickers[name][deadline.pickerId];
    }

    // 对外暴露获取表单数据的方法
    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = Deadline.pickers[formName] || {};

        Object.keys(currentForm).map((key) => {
            const Deadline = currentForm[key];
            const value = Deadline.getData();
            Object.assign(data, Util.deepClone({ [Deadline.props.name]: value }));
        });

        return data;
    }

    // 对外暴露重置表单的方法
    static resetData (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Deadline.pickers[formName] || {};

        Object.keys(currentForm).map((key) => {
            const Deadline = currentForm[key];
            Deadline.resetData();
        });
    }

    // 对外暴露清空表单的方法
    static clearData (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Deadline.pickers[formName] || {};

        Object.keys(currentForm).map((key) => {
            const Deadline = currentForm[key];
            Deadline.clearData();
        });
    }

    constructor (props) {
        super(props);
        this.state = {
            error: props.error,
            errorMsg: props.errorMsg,
            value: props.defaultValue === '-1' ? '' : props.defaultValue,
            deadlineType: props.defaultValue === '-1' ? true : false
        };

        Deadline.instance = this;
    }

    componentWillMount () {
        this.pickerId = Deadline.uniqueId('deadline_');
        Deadline.add(this, this.props.form);
    }

    componentWillUnmount () {
        Deadline.remove(this, this.props.form);
    }

    getData () {
        let deadlineType = this.state.deadlineType;
        if(deadlineType){
            return "-1"
        } else {
            return this.state.value;
        }
    }

    resetData () {
        let defaultValue = this.props.defaultValue;
        if(defaultValue === '-1'){
            this.setState({
                value: '',
                deadlineType: true
            })
        } else {
            this.setState({
                value: defaultValue,
                deadlineType: false
            });
        }
    }

    clearData () {
        this.setState({
            value: '',
            deadlineType: false
        });
    }

    changeDate (e) {
        this.setState({
            value: e,
            deadlineType: false
        })
    }

    handleDateChange () {
        this.setState({
            deadlineType: !this.state.deadlineType
        })
    }

    render () {
        const {
            label,
            text,
            className,
            disabled,
            style,
            required ,
            subInfo,
            timeConfig,
            placeholder,
            showTime
        } = this.props;

        const {
            error,
            errorMsg,
            value,
            deadlineType
        } = this.state;

        return (
            <div className='mc-module-field'>
                <div className={`mc-field-group clearfix ${className || ''} ${error ? 'mc-field-invaild' : ''}`}>
                    {/* 标题 */}
                    {label || text ?
                        <div className='mc-field-label'>
                            <label htmlFor={name}>
                                { required ? <span className='require'>*</span> : ''}
                                {label || text}
                            </label>
                        </div>
                        : null
                    }

                    {/* 表单 */}
                    <div className='mc-field-body'>
                        <DatepickerCom 
                            showTime={showTime}
                            disabled={disabled || deadlineType}
                            style={style}
                            timeConfig={timeConfig}
                            value={value}
                            onChange={(e) => this.changeDate(e)}
                            placeholder={placeholder} />

                        <div className='mc-field-deadline' onClick={disabled ? () => {} : () => this.handleDateChange()}>
                            <input
                                type='checkbox'
                                className='mc-checkbox-error mc-checkbox-input'
                                checked={deadlineType}
                            />
                            <label className='yy-iconfont'>长期</label>
                        </div>

                        {/* 校验错误提示 */}
                        {errorMsg ?
                            <div className='mc-field-errorMsg'>
                                <div className='mc-field-error-arrow'>
                                    <span className='mc-field-arrow-color' />
                                    <span className='mc-field-arrow-border' />
                                    <span className='mc-field-arrow' />
                                </div>
                                <p className='mc-field-errormsg'>{errorMsg}</p>
                            </div>
                            : null
                        }
                    </div>

                    {/* 子标题 */}
                    <div className='mc-field-subInfo'>
                        <label htmlFor={name}> {subInfo} </label>
                    </div>
                </div>
            </div>
        );
    }
}
