import React, { Component, PropTypes } from 'react';
import Option from './Option';

export default class Select extends Component {
    static defaultProps = {
        defaultValue: '',
        options: [],
        className: '',
        onChange: null,
        disabled: false,
        attrs: {},
        id: ''
    };
    static propTypes = {
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        options: PropTypes.array.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        attrs: PropTypes.object,
        id: PropTypes.string
    };
    constructor (props) {
        super(props);
        const { options, defaultValue } = props;
        const data = this.formData(options, defaultValue);
        this.state = {
            isDropDown: false,
            text: data.text,
            selectData: data.selectData,
            value: data.value
        };
    }
    // 更新属性
    componentWillReceiveProps (nextProps) {
        const state = this.state;
        if ('options' in nextProps || 'defaultValue' in nextProps) {
            const data = this.formData(nextProps.options || state.selectData, nextProps.defaultValue || state.defaultValue);
            this.setState({
                text: data.text,
                value: data.value,
                selectData: data.selectData
            });
        }
    }
    formData (data, defaultValue) {
        let text = '';
        const value = [];
        let selectData = data;
        // 分组下拉菜单
        if (data && data.length && !(data[0] instanceof Array)) {
            selectData = [data];
        }
        if (!defaultValue) {
            return {
                selectData,
                text: '',
                value: ''
            }
        }
        const arr = defaultValue.split(',');
        // 取默认值
        selectData.map((item) => {
            for (let i = 0, l = item.length; i < l; i++) {
                if (item[i].value === arr[0]) {
                    // 取一级选项的默认值
                    text = item[i].text;
                    value.push(item[i].value);
                    if (arr.length > 1 && item[i].options && item[i].options.length) {
                        for (let index = 0, len = item.length; index < len; index++) {
                            if (item[i].options[index].value === arr[1]) {
                                // 取二级选项的默认值
                                text = item[i].options[index].text;
                                value.push(item[i].options[index].value);
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        });
        return {
            selectData,
            text,
            value: value.join(',')
        };
    }
    toggleValue (value, event) {
        // 如果是禁止状态，则点击无效
        if (value === 'isDropDown' && this.props.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        const state = this.state;
        state[value] = !state[value];
        this.setState(state);
    }
    // 点击下拉菜单中的选项
    handleChange (newValue) {
        const state = this.state;
        state.text = newValue.text || '';
        state.isDropDown = false;
        state.value = newValue.value;
        this.setState(state, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(state.value);
            }
        });
    }
    render () {
        const { className, disabled, attrs, id } = this.props;
        const { isDropDown, text, selectData } = this.state;
        // 计算下拉框的样式
        const selectClass = ['mc-select-box'];
        isDropDown ? selectClass.push('mc-select-dropUp') : selectClass.push('mc-select-dropDown');
        if (disabled) {
            selectClass.push('select-disabled');
        }
        return (
            <div className={className} id={id} {...attrs}>
                <div className={selectClass.join(' ')} onClick={e => this.toggleValue('isDropDown', e)}>
                    {text}
                    <span className='select-arrow' />
                    <div className={isDropDown ? 'drop-box' : 'hide'}>
                        {
                            selectData.length
                            ? selectData.map((select, i) => {
                                return (
                                    <ul key={i}>
                                        {
                                            select.length
                                            ? select.map((item, index) => {
                                                return (
                                                    <Option
                                                    key={index}
                                                    optionData={item}
                                                    handleChange={data => this.handleChange(data)}
                                                    />
                                                );
                                            })
                                            : null
                                        }
                                    </ul>);
                            })
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
