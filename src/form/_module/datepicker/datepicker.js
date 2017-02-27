import React, { Component, PropTypes } from 'react';
import DatepickerCom from '../../../datepicker';
import Util from '../../../_module/js/util.js';

const DEFAULT_FORM = 'defaultkey';

export default class Datepicker extends Component {
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
        Datepicker.idCounter += 1;
        const id = Datepicker.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (datepicker, name) {  // 添加到forms对象中
        if (Datepicker.pickers[name] === undefined) {
            Datepicker.pickers[name] = {};
        }

        Datepicker.pickers[name][datepicker.pickerId] = datepicker;
    }

    static remove (datepicker, name) {  // 删除某个表单
        delete Datepicker.pickers[name][datepicker.pickerId];
    }

    // 对外暴露获取表单数据的方法
    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = Datepicker.pickers[formName] || {};

        Object.keys(currentForm).map((key) => {
            const datepicker = currentForm[key];
            const value = datepicker.getData();
            Object.assign(data, Util.deepClone({ [datepicker.props.name]: value }));
        });

        return data;
    }

    // 对外暴露重置表单的方法
    static resetData (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Datepicker.pickers[formName] || {};

        Object.keys(currentForm).map((key) => {
            const datepicker = currentForm[key];
            datepicker.resetData();
        });
    }

    // 对外暴露清空表单的方法
    static clearData (form) {
        const formName = form || DEFAULT_FORM;
        const currentForm = Datepicker.pickers[formName] || {};

        Object.keys(currentForm).map((key) => {
            const datepicker = currentForm[key];
            datepicker.clearData();
        });
    }

    constructor (props) {
        super(props);
        this.state = {
            error: props.error,
            errorMsg: props.errorMsg,
            value: props.defaultValue
        };

        Datepicker.instance = this;
    }

    componentWillMount () {
        this.pickerId = Datepicker.uniqueId('picker_');
        Datepicker.add(this, this.props.form);
    }

    componentWillUnmount () {
        Datepicker.remove(this, this.props.form);
    }

    getData () {
        return this.state.value;
    }

    resetData () {
        this.setState({
            value: this.props.defaultValue
        });
    }

    clearData () {
        this.setState({
            value: ''
        });
    }

    changeDate (e) {
        this.setState({
            value: e
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
            value
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
                            disabled={disabled}
                            style={style}
                            timeConfig={timeConfig}
                            value={value}
                            onChange={(e) => this.changeDate(e)}
                            placeholder={placeholder} />

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
