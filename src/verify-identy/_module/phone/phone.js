/**
* 申请类目
**/
import React, { Component, PropTypes } from 'react';
import './phone.less';
import Notification from '../../../notification';
import Field from '../../../field';
import Util from '../../../_module/js/util';

export default class Phone extends Component {
    static propTypes = {
        phoneText: PropTypes.string,
        phoneConfig: PropTypes.object,
        form: PropTypes.string,
        disabled: PropTypes.bool,
        userId: PropTypes.string,
        msgContent: PropTypes.string
    };

    static getData (form) {
        const formName = (form || Phone.instance.props.form) || 'phone';
        if (!Field.validate(formName)) {
            return false;
        }
        const phone = Field.getData(formName);
        return phone;
    }

    static clearData (form) {
        const formName = (form || Phone.instance.props.form) || 'phone';
        Field.clearData(formName);
        Phone.instance.setState({
            lastTime: 0,
            orSend: false
        }, () => {
            Phone.instance.clearInterval();
        });
    }

    constructor (props) {
        super(props);
        this.state = {
            lastTime: 0,
            orSend: false,
            userId: props.userId || ''
        };
        Phone.instance = this;
    }

    componentWillMount () {
        this.setIntervalArr = [];
    }

    componentWillUnmount () {
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
            const topUrl = window.location.href.indexOf('meilishuo.com') > -1 ? '//cycle.meilishuo.com/' : '//cycle.xiaodian.com/';
            Util.fetch({
                url: `${topUrl}jsonp/sendMsgActionlet/v1`,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: {
                    msgContent: this.props.msgContent || '您目前正在进行入驻手机号修改的短信验证，请勿向任何人提供您收到的验证码。',
                    id: this.state.userId || ''
                }
            }).then((resData) => {
                if (resData.returnCode === '1001') {
                    this.setState({
                        lastTime: 60
                    }, () => {
                        this.setInterval(() => this.setTime(), 1000);
                    });
                } else {
                    this.setState({
                        orSend: false
                    }, () => {
                        Notification.warn({
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

    render () {
        const { lastTime, orSend } = this.state;
        const { phoneText, phoneConfig, form, disabled } = this.props;

        return (
            <div className='module-background phone'>
                <p className='title-container clearfix'>
                    <span className='title'>
                        {phoneConfig.title || '手机号验证和填写'}
                    </span>
                    <span className='sub-title'>
                        {phoneConfig.subTitle || ''}
                    </span>
                </p>
                <div className='list-container clearfix'>
                    <div className='phone-num'>
                        <label htmlFor={phoneConfig.phoneLabel || '原手机号'} className='title'>{phoneConfig.phoneLabel || '原手机号：'}</label>
                        <label htmlFor={phoneText} className='num'>{phoneText}</label>
                        <button
                            className={orSend || disabled ? 'disabled' : ''}
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
                        form={form || 'phone'}
                        required
                        attrs={{ disabled }}
                        errorMsg='请输入手机验证码'
                        label='手机验证码：'
                    />
                </div>
            </div>
        );
    }
}
