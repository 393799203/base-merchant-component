import React, { Component, PropTypes } from 'react';
import Option from './Option';
import './style/index.less';

export default class Select extends Component {
    static defaultProps = {
        defaultValue: '',
        value: '',
        options: [],
        className: '',
        onChange: null,
        disabled: false,
        id: ''
    };

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        options: PropTypes.array.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        id: PropTypes.string,
        selectId: PropTypes.string,
        name: PropTypes.string.isRequired
    };

    static forms = {};

    static idCounter = 0;

    static uniqueId () { // 生成唯一ID
        Select.idCounter += 1;
        const id = Select.idCounter.toString();
        return id;
    }

    static add (select) {  // 添加表单数据到forms对象中
        Select.forms[select.selectId] = select;
    }

    static remove (select) {  // 删除某个表单
        delete Select.forms[select.selectId];
    }

    static getData (selectId) {
        const resultValue = {};
        if (selectId) {
            const currentSelect = Select.forms[selectId];
            Object.assign(resultValue, { [currentSelect.state.name]: currentSelect.state.value });
        } else {
            const currentSelect = Select.forms || {};

            Object.keys(currentSelect).map((key) => {
                const select = currentSelect[key];
                const value = select.state.value;
                Object.assign(resultValue, { [select.state.name]: value });
            });
        }

        return resultValue;
    }

    static clearData (selectId) {
        if (selectId) {
            const currentSelect = Select.forms[selectId];
            currentSelect.clearData();
        } else {
            const currentSelect = Select.forms || {};

            Object.keys(currentSelect).map((key) => {
                const select = currentSelect[key];
                select.clearData();
            });
        }
    }

    static resetData (selectId) {
        if (selectId) {
            const currentSelect = Select.forms[selectId];
            currentSelect.resetData();
        } else {
            const currentSelect = Select.forms || {};

            Object.keys(currentSelect).map((key) => {
                const select = currentSelect[key];
                select.resetData();
            });
        }
    }

    constructor (props) {
        super(props);
        const { options, defaultValue, value, name } = props;
        const data = this.formData(options, defaultValue, value);

        this.state = {
            inputFocus: false, // input是否获取焦点
            ulFocus: false, // ul是否获取焦点
            seletedIndex: -1, // 键盘上下按键选中的li的下标
            name,
            selectData: data.selectData, // 下拉框中的展示数据
            defaultData: data.selectData, // 下拉框中的厨师数据
            inputText: data.inputText,  // 选中的文案
            value: data.value
        };
    }

    componentWillMount () {
        this.selectId = this.props.selectId || Select.uniqueId();
        Select.add(this);
    }

    // 更新属性
    componentWillReceiveProps (nextProps) {
        const state = this.state;
        if ('value' in nextProps || 'options' in nextProps) {
            const data = this.formData(nextProps.options, state.defaultValue, nextProps.value);
            this.setState({
                selectData: data.selectData,
                defaultData: data.selectData,
                inputText: data.inputText,
                value: data.value
            });
        }
    }

    componentWillUnmount () {
        Select.remove(this);
    }

    clearData () {
        this.setState({
            value: '',
            inputText: ''
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange({});
            }
        });
    }

    resetData () {
        const { options, defaultValue } = this.props;
        const data = this.formData(options, defaultValue);
        this.setState({
            inputText: data.inputText,
            value: data.value
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(data.item);
            }
        });
    }

    // 初始化数据
    formData (data, defaultValue, value) {
        let inputText = '';
        let inputValue = '';
        let selectItem = {};
        let selectData = data;

        // 如果不是分组下拉框，则将数据拼装成分组下拉的数据结构
        if (data && data.length && !(data[0] instanceof Array)) {
            selectData = [data];
        }

        // 如果没有默认值则返回
        if (!defaultValue && !value) {
            return {
                selectData,
                inputText: this.state.inputText,
                value: this.state.value,
                selectItem: {}
            };
        }

        const arr = value || defaultValue;

        // 取默认值
        selectData.map((item) => {
            for (let i = 0, l = item.length; i < l; i++) {
                if (item[i].value === arr) {
                    // 取一级选项的默认值
                    inputText = item[i].text;
                    inputValue = item[i].value;
                    selectItem = item[i];
                    break;
                }

                // 取二级选项的默认值
                const optionsValue = item[i].options;
                if (optionsValue && optionsValue.length) {
                    for (let index = 0; index < optionsValue.length; index++) {
                        if (optionsValue[index].value === arr) {
                            inputText = optionsValue[index].text;
                            inputValue = optionsValue[index].value;
                            selectItem = optionsValue[index];
                            break;
                        }
                    }
                }

                // 如果获取了默认值，则退出循环
                if (inputText) {
                    break;
                }
            }
        });

        return {
            selectData,
            inputText,
            value: inputValue,
            item: selectItem
        };
    }

    // 点击文本框，展开下拉列表
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
        state.inputText = newValue.text || '';
        state.value = newValue.value || '';
        state.ulFocus = false;
        state.inputFocus = false;

        this.setState(state, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(newValue);
            }
        });
    }

    // 搜索文本框内内容修改
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

    // 根据文本框中内容搜索下拉列表内容
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

    // 文本框失去焦点
    inputBulr () {
        setTimeout(() => {
            this.setState({
                inputFocus: false
            });
        }, 100);
    }

    // 下拉列表获取焦点
    ulFocus () {
        this.setState({
            ulFocus: true
        });
    }

    // 下拉列表失去焦点
    ulBlur () {
        this.setState({
            ulFocus: false
        });
    }

    // 监听键盘事件
    enterkeydown (e) {
        const oInput = document.getElementById(`inputText${this.selectId}`);
        oInput.options = document.getElementsByName(`liname${this.selectId}`);
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
            document.getElementById(`inputText${this.selectId}`).value = oInput.options[seletedIndex].text;
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
            document.getElementById(`inputText${this.selectId}`).value = oInput.options[seletedIndex].text;
            break;
        default :
            break;
        }
    }

    render () {
        const { className, disabled, id, ...others } = this.props;
        const { inputFocus, ulFocus, selectData, inputText } = this.state;
        // 计算下拉框的样式
        const selectClass = ['mc-select-input'];
        inputFocus || ulFocus ? selectClass.push('mc-select-dropUp') : selectClass.push('mc-select-dropDown');
        if (disabled) {
            selectClass.push('mc-select-disabled');
        }
        return (
            <div
                className={`${className} mc-select-box`}
                id={id}
                {...others}
            >
                <div className={selectClass.join(' ')} onClick={e => this.toggleValue(e)} onBlur={() => this.inputBulr()}>
                    <input
                        type='text'
                        disabled={disabled}
                        value={inputText}
                        id={`inputText${this.selectId}`}
                        onChange={e => this.changeInput(e)}
                        onKeyUp={e => this.enterkeydown(e)}
                    />
                    <span className='select-arrow' />
                </div>
                <div
                    className={inputFocus || ulFocus ? 'drop-box mc-select-option' : 'hide mc-select-option'}
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
                                                    selectId={this.selectId}
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
