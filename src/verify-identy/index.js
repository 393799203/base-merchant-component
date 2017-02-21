/**
* 身份认证
**/
import React, { Component, PropTypes } from 'react';
import './style/index.less';
import Util from '../_module/js/util';
import Identy from './_module/identy/identy';
import Phone from './_module/phone/phone';
import Notification from '../notification';

export default class VerifyIdenty extends Component {
    static propTypes = {
        hideModule: PropTypes.object,
        identyConfig: PropTypes.object,
        phoneConfig: PropTypes.object,
        msgContent: PropTypes.string,
        className: PropTypes.string,
        form: PropTypes.string,
        btnName: PropTypes.string,
        userId: PropTypes.string,
        submit: PropTypes.func,
        getResult: PropTypes.func,
        disabled: PropTypes.bool
    };

    // 对外提供的获取数据静态方法,返回三个数据
    static getData (form) {
        const postData = {};
        let identy = {};
        let phone = {};
        const hideModule = VerifyIdenty.instance.state.hideModule;

        if (!hideModule.identy) {
            identy = Identy.getData(form);
            if (!identy) {
                return false;
            }
        }

        if (!hideModule.phone) {
            phone = Phone.getData(form);
            if (!phone) {
                return false;
            }
        }

        Object.assign(postData, identy, phone);
        return postData;
    }

    // 清空数据
    static clearData (form) {
        const hideModule = VerifyIdenty.instance.state.hideModule;
        if (!hideModule.identy) {
            Identy.clearData(form);
        }

        if (!hideModule.phone) {
            Phone.clearData(form);
        }
    }

    constructor (props) {
        super(props);
        VerifyIdenty.instance = this;
        this.state = {
            hideModule: props.hideModule || {},
            identyConfig: props.identyConfig || {},
            phoneConfig: props.phoneConfig || {},
            msgContent: props.msgContent || '',
            className: props.className || '',
            form: props.form || '',
            btnName: props.btnName || '',
            userId: props.userId || '',
            phoneText: '',
            idName: '',
            enterType: ''
        };
    }

    componentDidMount () {
        const userId = this.state.userId;
        const topUrl = window.location.href.indexOf('meilishuo.com') > -1 ? 'http://cycle.meilishuo.com/' : 'http://cycle.xiaodian.com/';
        Util.fetch({
            url: `${topUrl}jsonp/idValidaRender/v1`,
            type: 'GET',
            contentType: 'application/json',
            dataType: 'jsonp',
            data: { id: userId }
        }).then((resData) => {
            if (resData.returnCode === '1001') {
                const data = resData.data || {};
                this.setState({
                    phoneText: data.phoneText,
                    idName: data.idName,
                    enterType: data.enterType
                });
            }
        });
    }

    submit () {
        const postData = {};
        let identy = {};
        let phone = {};
        const hideModule = this.state.hideModule;

        if (!hideModule.identy) {
            identy = Identy.getData();
            if (!identy) {
                return;
            }
        }

        if (!hideModule.phone) {
            phone = Phone.getData();
            if (!phone) {
                return;
            }
        }

        Object.assign(postData, identy, phone);

        const submitFun = this.props.submit;
        if (typeof submitFun === 'function') {
            this.props.submit(postData);
        } else {
            Object.assign(postData, hideModule);
            postData.id = this.state.userId || '';
            const topUrl = window.location.href.indexOf('meilishuo.com') > -1 ? 'http://cycle.meilishuo.com/' : 'http://cycle.xiaodian.com/';
            Util.fetch({
                url: `${topUrl}jsonp/idValidaPost/v1`,
                type: 'GET',
                contentType: 'application/json',
                dataType: 'jsonp',
                data: postData
            }).then((resData) => {
                if (resData.returnCode === '1001') {
                    const getResult = this.props.getResult;
                    if (typeof getResult === 'function') {
                        this.props.getResult({
                            type: true,
                            data: postData
                        });
                    }
                } else {
                    Notification.error({
                        message: resData.message || '认证失败',
                        duration: 2000
                    });

                    const getResult = this.props.getResult;
                    if (typeof getResult === 'function') {
                        this.props.getResult({
                            type: false,
                            data: postData
                        });
                    }
                }
            });
        }
    }

    render () {
        const {
            idName,
            enterType,
            userId,
            identyConfig,
            className,
            btnName,
            form,
            phoneText,
            phoneConfig,
            msgContent,
            hideModule
        } = this.state;

        const disabled = this.props.disabled || false;

        return (
            <div className={`${className} verify-identy`}>
                { /* 模块列表 */ }
                {hideModule.identy ?
                    null
                    :
                    <Identy
                        enterType={enterType}
                        disabled={disabled}
                        idName={idName}
                        identyConfig={identyConfig}
                        form={form}
                    />
                }

                {hideModule.phone ?
                    null
                    :
                    <Phone
                        phoneText={phoneText}
                        userId={userId}
                        disabled={disabled}
                        phoneConfig={phoneConfig}
                        form={form}
                        msgContent={msgContent}
                    />
                }

                <button
                    onClick={disabled ? () => {} : e => this.submit(e)}
                    className={disabled ? 'disabled' : ''}
                >
                    {btnName || '提交'}
                </button>
            </div>
        );
    }
}
