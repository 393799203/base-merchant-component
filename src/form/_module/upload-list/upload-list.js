import React, { Component, PropTypes } from 'react';
import UploadImgList from './upload/uploadImgList.js';
import Util from '../../../_module/js/util.js';

export default class UploadList extends Component {
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
        form: '',
        mostImg: ''
    };

    static propTypes = {
        label: PropTypes.string,
        defaultValue: PropTypes.any,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        name: PropTypes.string.isRequired,
        error: PropTypes.bool,
        errorMsg: PropTypes.string,
        required: PropTypes.bool,
        subInfo: PropTypes.string,
        form: PropTypes.string,
        mostImg: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    
    // 设置表单唯一标示
    static boxs = {};

    static idCounter = 0;

    static uniqueId (prefix) { // 生成唯一ID
        UploadList.idCounter += 1;
        const id = UploadList.idCounter.toString();
        return prefix ? prefix + id : id;
    }

    static add (uploadList, name) {  // 添加到forms对象中
        if (UploadList.boxs[name] === undefined) {
            UploadList.boxs[name] = {};
        }

        UploadList.boxs[name][uploadList.boxId] = uploadList;
    }

    static remove (uploadList, name) {  // 删除某个表单
        delete UploadList.boxs[name][uploadList.boxId];
    }

    // 对外暴露获取表单数据的方法
    static getData (form) {
        const formName = form || DEFAULT_FORM;
        const data = {};
        const currentForm = UploadList.boxs[formName] || {};

        Object.keys(currentForm).map((key) => {
            const UploadList = currentForm[key];
            const value = UploadList.getData();
            Object.assign(data, Util.deepClone({ [UploadList.props.name]: value }));
        });

        return data;
    }

    constructor (props) {
        super(props);
        this.state = {
            error: props.error,
            errorMsg: props.errorMsg,
            value: props.defaultValue
        };

        UploadList.instance = this;
    }

    componentWillMount () {
        this.boxId = UploadList.uniqueId('uploadList_');
        UploadList.add(this, this.props.form);
    }

    componentWillUnmount () {
        UploadList.remove(this, this.props.form);
    }

    getData () {
        return this.state.value;
    }

    picChange (e) {
        this.setState({
            value: e
        })
    }

    render () {
        const {
            label,
            text,
            defaultValue,
            className,
            disabled,
            style,
            name,
            required ,
            subInfo,
            form,
            mostImg
        } = this.props;

        const {
            error,
            errorMsg
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
                        <UploadImgList 
                            imgList={defaultValue} 
                            mostImg = {mostImg}
                            onChange={(e) => this.picChange(e)}/>

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
