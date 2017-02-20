import React, { Component, PropTypes } from 'react';
import Option from './options';
import './style/index.less';

export default class Selector extends Component {
    static defaultProps = {
        defaultValue: '',
        options: [],
        className: '',
        onChange: null,
        disabled: false,
        id: ''
    };

    static propTypes = {
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        options: PropTypes.array.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        id: PropTypes.string
    };

    static idCounter = 0;

    static uniqueId () { // 生成唯一ID
        Selector.idCounter += 1;
        const id = Selector.idCounter.toString();
        return id;
    }

    constructor (props) {
        super(props);
        const { options, defaultValue } = props;
        const data = this.formData(options, defaultValue);

        this.state = {
            inputFocus: false, // input是否获取焦点
            ulFocus: false,
            seletedIndex: -1,
            text: data.text,
            selectData: data.selectData,
            defaultData: data.selectData,
            value: data.value,
            inputText: data.text
        };
    }

    componentWillMount () {
        this.selectorId = Selector.uniqueId();
    }

    // 更新属性
    componentWillReceiveProps (nextProps) {
        const state = this.state;
        if ('options' in nextProps || 'defaultValue' in nextProps) {
            const data = this.formData(nextProps.options || state.selectData, nextProps.defaultValue || state.defaultValue);
            this.setState({
                text: data.text,
                inputText: data.text,
                value: data.value,
                selectData: data.selectData,
                defaultData: data.selectData
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
            };
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

    toggleValue (event) {
        event.nativeEvent.stopImmediatePropagation();
        // 如果是禁止状态，则点击无效
        if (this.props.disabled) {
            return;
        }
        this.setState({
            inputFocus: true
        });
    }

    // 点击下拉菜单中的选项
    handleChange (newValue) {
        const state = this.state;
        state.text = newValue.text || '';
        state.inputText = newValue.text || '';
        state.ulFocus = false;
        state.inputFocus = false;
        state.value = newValue.value;
        this.setState(state, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(newValue);
            }
        });
    }

    changeInput (e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            inputText: e.target.value
        }, () => {
            const filterData = this.filterData();
            this.setState({
                selectData: filterData
            });
        });
    }

    filterData () {
        const { inputText, defaultData } = this.state;
        if (!inputText) {
            return defaultData;
        }

        const result = [];
        const selectData = defaultData.concat();

        for (let i = 0; i < selectData.length; i++) {
            const data = selectData[i];
            const filteredData = data.filter((element) => {
                let filter = false;
                if (element.text.indexOf(inputText) > -1 || element.value.indexOf(inputText) > -1) {
                    filter = true;
                }
                if (element.options && element.options.length) {
                    const subOptions = element.options;
                    for (let j = 0; j < subOptions.length; j++) {
                        const subData = subOptions[j];
                        if (subData.text.indexOf(inputText) > -1 || subData.value.indexOf(inputText) > -1) {
                            filter = true;
                        }
                    }
                }
                return filter;
            });

            result.push(filteredData);
        }

        return result;
    }

    inputBulr () {
        setTimeout(() => {
            this.setState({
                inputFocus: false
            });
        }, 100);
    }

    ulFocus () {
        this.setState({
            ulFocus: true
        });
    }

    ulBlur () {
        this.setState({
            ulFocus: false
        });
    }

    enterkeydown (e) {
        const oInput = document.getElementById(`inputText${this.selectorId}`);
        oInput.options = document.getElementsByName(`liname${this.selectorId}`);
        oInput.focus();

        let seletedIndex = parseInt(this.state.seletedIndex, 10);
        switch (e.keyCode) {
        case 13:
            if (seletedIndex !== -1) {
                oInput.options[seletedIndex].click();
            }
            break;
        case 38:
            oInput.focus();
            if (seletedIndex > -1) {
                oInput.options[seletedIndex].style.background = '';
            }
            seletedIndex -= 1;

            if (seletedIndex < 0) {
                oInput.options[oInput.options.length - 1].style.background = '#F4F5FA';
                this.setState({
                    seletedIndex: oInput.options.length - 1
                });
            } else {
                oInput.options[seletedIndex].style.background = '#F4F5FA';
                this.setState({
                    seletedIndex
                });
            }
            document.getElementById(`inputText${this.selectorId}`).value = oInput.options[seletedIndex].text;
            break;
        case 40:
            oInput.focus();
            if (seletedIndex > -1) {
                oInput.options[seletedIndex].style.background = '';
            }
            seletedIndex += 1;

            if (seletedIndex >= oInput.options.length) {
                oInput.options[0].style.background = '#F4F5FA';
                this.setState({
                    seletedIndex: 0
                });
            } else {
                oInput.options[seletedIndex].style.background = '#F4F5FA';
                this.setState({
                    seletedIndex
                });
            }
            document.getElementById(`inputText${this.selectorId}`).value = oInput.options[seletedIndex].text;
            break;
        default :
            break;
        }
    }

    render () {
        const { className, disabled, id, ...others } = this.props;
        const { inputFocus, ulFocus, selectData, inputText } = this.state;
        // 计算下拉框的样式
        const selectClass = ['mc-selector-input'];
        inputFocus || ulFocus ? selectClass.push('mc-selector-dropUp') : selectClass.push('mc-selector-dropDown');
        if (disabled) {
            selectClass.push('mc-selector-disabled');
        }
        return (
            <div
                className={`${className} mc-selector-box`}
                id={id}
                {...others}
            >
                <div className={selectClass.join(' ')} onClick={e => this.toggleValue(e)} onBlur={() => this.inputBulr()}>
                    <input
                        type='text'
                        disabled={disabled}
                        value={inputText}
                        id={`inputText${this.selectorId}`}
                        onChange={e => this.changeInput(e)}
                        onKeyUp={e => this.enterkeydown(e)}
                    />
                    <span className='selector-arrow' />
                </div>
                <div
                    className={inputFocus || ulFocus ? 'drop-box mc-selector-option' : 'hide mc-selector-option'}
                    tabIndex='-1'
                    onFocus={() => this.ulFocus()}
                    onBlur={() => this.ulBlur()}
                >
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
                                                    selectorId={this.selectorId}
                                                    key={index}
                                                    optionData={item}
                                                    index={index}
                                                    handleChange={data => this.handleChange(data)}
                                                />
                                            );
                                        })
                                        :
                                        <li className='mc-not-fount'>暂无数据</li>
                                    }
                                </ul>);
                        })
                        :
                        <ul><li className='mc-not-fount'>暂无数据</li></ul>
                    }
                </div>
            </div>
        );
    }
}
