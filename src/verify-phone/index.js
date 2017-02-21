/**
* 申请类目
**/
import React, { Component, PropTypes } from 'react';
import './style/index.less';

import Notification from '../notification';
import AreaCode from '../area-code';
import Field from '../field';
import Util from '../_module/js/util';

export default class VerifyPhone extends Component {
    static propTypes = {
        form: PropTypes.string,
        msgContent: PropTypes.string,
        btnName: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        phoneConfig: PropTypes.object,
        getResult: PropTypes.func,
        submit: PropTypes.func
    };

    // 设置手机验证唯一标示
    static verifyPhones = {};

    static idCounter = 0;

    static uniqueId (prefix) { // 生成唯一ID
        VerifyPhone.idCounter += 1;
        const id = VerifyPhone.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (verify, name) {  // 添加表单数据到forms对象中
        if (VerifyPhone.verifyPhones[name] === undefined) {
            VerifyPhone.verifyPhones[name] = {};
        }

        VerifyPhone.verifyPhones[name][verify.verifyId] = verify;
    }

    static remove (verify, name) {  // 删除某个表单
        delete VerifyPhone.verifyPhones[name][verify.verifyId];
    }

    static getData (form) {
        const formName = (form || VerifyPhone.instance.props.form) || 'verifyPhone';
        if (Field.validate(formName)) {
            return false;
        }
        const data = Field.getData(formName);
        data.zoneCode = VerifyPhone.instance.state.zoneCode;
        return data;
    }

    static clearData (form) {
        const formName = (form || VerifyPhone.instance.props.form) || 'verifyPhone';
        Field.clearData(formName);
        AreaCode.clearData();
        VerifyPhone.instance.setState({
            lastTime: 0,
            orSend: false
        }, () => {
            VerifyPhone.instance.clearInterval();
        });
    }

    constructor (props) {
        super(props);
        this.state = {
            lastTime: 0,
            orSend: false,
            zoneCode: '86'
        };
        VerifyPhone.instance = this;
    }

    componentWillMount () {
        this.fieldId = Field.uniqueId('form_');
        VerifyPhone.add(this, this.props.form || 'verifyPhone');
        this.setIntervalArr = [];
    }

    componentWillUnmount () {
        Field.remove(this, this.props.form || 'verifyPhone');
        this.clearInterval();
    }

    setTime () {
        const lastTime = this.state.lastTime - 1;
        if (lastTime === 0) {
            this.setState({
                orSend: false,
                lastTime
            }, () => {
                this.clearInterval();
            });
        } else {
            this.setState({
                lastTime
            });
        }
    }

    setInterval (...args) {
        this.setIntervalArr.push(setInterval.apply(null, args));
    }

    sendPhoneCode () {
        this.setState({
            orSend: true
        }, () => {
            const formName = this.props.form || 'verifyPhone';
            const data = Field.getData(formName) || {};
            const topUrl = window.location.href.indexOf('meilishuo.com') > -1 ? 'http://cycle.meilishuo.com/' : 'http://cycle.xiaodian.com/';
            Util.fetch({
                url: `${topUrl}jsonp/sendMsgActionlet/v1`,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: {
                    msgContent: this.props.msgContent || '您目前正在进行入驻手机号修改的短信验证，请勿向任何人提供您收到的验证码。',
                    phoneNum: data.phoneNum || '',
                    zoneCode: this.state.zoneCode
                }
            }).then((resData) => {
                if (resData.returnCode === '1001') {
                    this.setState({
                        lastTime: resData.data || 60
                    }, () => {
                        this.setInterval(() => this.setTime(), 1000);
                    });
                } else {
                    this.setState({
                        orSend: false
                    }, () => {
                        Notification.error({
                            message: resData.message || '手机验证码发送失败,请重试!',
                            duration: 2000
                        });
                    });
                }
            });
        });
    }

    clearInterval () {
        this.setIntervalArr.map(clearInterval);
    }

    savePhone () {
        const formName = this.props.form || 'verifyPhone';
        const data = Field.getData(formName);
        data.zoneCode = this.state.zoneCode;

        if (!Field.validate(formName)) {
            return;
        }

        const submitFun = this.props.submit;
        if (typeof submitFun === 'function') {
            this.props.submit(data);
        } else {
            const topUrl = window.location.href.indexOf('meilishuo.com') > -1 ? '//cycle.meilishuo.com/' : '//cycle.xiaodian.com/';
            Util.fetch({
                url: `${topUrl}jsonp/idValidaPost/v1`,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'jsonp',
                data
            }).then((resData) => {
                if (resData.returnCode === '1001') {
                    this.setState({
                        lastTime: 0,
                        orSend: false
                    }, () => {
                        this.clearInterval();
                        const getResult = this.props.getResult;
                        if (typeof getResult === 'function') {
                            this.props.getResult({
                                type: true,
                                data
                            });
                        }
                    });
                } else {
                    Notification.error({
                        message: resData.message || '短信验证不通过，请重新输入！',
                        duration: 2000
                    });
                    const getResult = this.props.getResult;
                    if (typeof getResult === 'function') {
                        this.props.getResult({
                            type: false,
                            data
                        });
                    }
                }
            });
        }
    }

    handlePathChange (zoneCode) {
        this.setState({
            zoneCode
        });
    }

    render () {
        const { lastTime, orSend, zoneCode } = this.state;
        const form = this.props.form || '';
        const phoneConfig = this.props.phoneConfig || {};
        const disabled = this.props.disabled || false;
        const className = this.props.className || '';
        const btnName = this.props.btnName || '';

        return (
            <div className={`${className} module-background verify-phone`}>
                <p className='title-container clearfix'>
                    <span className='title'>
                        {phoneConfig.title || '手机号填写'}
                    </span>
                    <span className='sub-title'>
                        {phoneConfig.subTitle || ''}
                    </span>
                </p>
                <div className='list-container clearfix'>
                    <div className='clearfix verify-phoneNum'>
                        <div>
                            <label htmlFor={phoneConfig.phoneLabel || '手机号码：'} className='cellphone-label fl mt10'>
                                {phoneConfig.phoneLabel || '手机号码：'}
                            </label>
                            <AreaCode
                                className='fl mc-area-select'
                                value={zoneCode || 86}
                                disabled={disabled}
                                onChange={disabled ? () => {} : e => this.handlePathChange(e)}
                            />
                            <Field
                                type='text'
                                name='phoneNum'
                                format={'phone'}
                                required
                                attrs={{ disabled }}
                                errorMsg='请输入手机号码'
                                className='input-cellphone'
                                form={form || 'verifyPhone'}
                            />
                        </div>

                        <button
                            className={orSend || disabled ? 'disabled fl' : 'fl'}
                            onClick={orSend || disabled ? () => {} : () => this.sendPhoneCode()}
                        >
                            {lastTime === 0 ?
                                '发送验证码'
                                :
                                `重新发送（${lastTime}）`
                            }
                        </button>
                    </div>
                    <Field
                        type='text'
                        name='msgCode'
                        form={form || 'verifyPhone'}
                        required
                        className='input-msgcode'
                        attrs={{ disabled }}
                        errorMsg='请输入手机验证码'
                        label='手机验证码：'
                    />
                </div>
                <button className={disabled ? 'disabled ml120' : 'ml120 '} onClick={disabled ? () => {} : () => this.savePhone()}>
                    {btnName || '提交'}
                </button>
            </div>
        );
    }
}
