/**
* 申请类目
**/
import React, { Component, PropTypes } from 'react';
import './identy.less';
import Field from '../../../field';

export default class Identy extends Component {
    static propTypes = {
        identyConfig: PropTypes.object,
        form: PropTypes.string,
        enterType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        idName: PropTypes.string,
        disabled: PropTypes.bool
    };

    static getData (form) {
        const formName = (form || Identy.instance.props.form) || 'identy';
        if (!Field.validate(formName)) {
            return false;
        }
        const identy = Field.getData(formName);
        return identy;
    }

    static clearData (form) {
        const formName = (form || Identy.instance.props.form) || 'identy';
        Field.clearData(formName);
    }

    constructor (props) {
        super(props);
        this.state = {
        };
        Identy.instance = this;
    }

    render () {
        const { identyConfig, form, enterType, idName, disabled } = this.props;
        let title = '';
        let subTitle = '';
        let idLabel = '';

        if (enterType === '2') {
            title = '法人代表身份认证';
            subTitle = '必须保证填写的企业证件与入驻时填写的一致';
            idLabel = '身份证／护照';
        } else {
            title = '身份认证';
            subTitle = '必须保证填写的证件与入驻时填写的一致';
            idLabel = '身份证';
        }

        return (
            <div className={'module-background identy'}>
                <p className='title-container clearfix'>
                    <span className='title'>
                        {identyConfig.title || title}
                    </span>
                    <span className='sub-title'>
                        {identyConfig.subTitle || subTitle}
                    </span>
                </p>
                <div className='list-container clearfix'>
                    <div className='identy-idContent'>
                        <label htmlFor={identyConfig.idNameLabel || '姓名'} className='title'>{identyConfig.idNameLabel || `${idLabel}姓名：`}</label>
                        <label htmlFor={idName} className='num'>{idName}</label>
                    </div>
                    <Field
                        type='text'
                        name='idText'
                        className='identy-idCode'
                        form={form || 'identy'}
                        required
                        attrs={{ disabled }}
                        errorMsg={identyConfig.idCodeLabel ? `请输入${identyConfig.idCodeLabel}` : `请输入${idLabel}号码`}
                        label={identyConfig.idCodeLabel || `${idLabel}号码：`}
                    />
                </div>
            </div>
        );
    }
}
