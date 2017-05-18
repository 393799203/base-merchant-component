import React, { Component, PropTypes } from 'react';
import Icon from 'source_path/icon';
import Option from './Option';
import './style/index.less';

const DEFAULT_FORM = 'defaultForm';
export default class Multiple extends Component {
    static defaultProps = {
        defaultValue: '',
        options: [],
        className: '',
        onChange: null,
        disabled: false,
        form: DEFAULT_FORM,
        id: ''
    };

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
        options: PropTypes.array.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        id: PropTypes.string,
        form: PropTypes.string,
        name: PropTypes.string.isRequired,
        Select: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
        const { options, defaultValue, value, name } = props;
        const data = this.initData(options, value, defaultValue);
        this.state = {
            inputFocus: false, // input是否获取焦点
            ulFocus: false, // ul是否获取焦点
            seletedIndex: -1, // 键盘上下按键选中的li的下标
            name,
            selectData: data.selectData, // 下拉框中的展示数据
            defaultData: data.selectData, // 下拉框中的厨师数据
            inputText: '',  // 选中的文案
            selectItem: data.selectItem
        };
    }

    componentWillMount () {
        const { Select } = this.props;
        this.selectId = Select.uniqueId('select_');
        Select.add(this.props.form, this);
    }

    // 更新属性
    componentWillReceiveProps (nextProps) {
        if ('value' in nextProps || 'options' in nextProps) {
            this.updateData(nextProps.options, nextProps.value);
        }
    }
    componentDidUpdate () {
        const height = this.EL_CONTAINER.clientHeight;
        this.dropMenu.style.top = height;
    }
    componentWillUnmount () {
        const { Select } = this.props;
        Select.remove(this.props.form, this);
    }
    getData () {
        const { selectItem } = this.state;
        const arr = [];
        selectItem.map((item) => {
            arr.push(item.value);
        });
        return arr.join(';');
    }
    initData (options, value, defaultValue) {
        let selectData = options;
        // 如果不是分组下拉框，则将数据拼装成分组下拉的数据结构
        if (options && options.length && !(options[0] instanceof Array)) {
            selectData = [options];
        }
        // 如果没有默认值则返回
        if (!defaultValue && !value) {
            return {
                selectData,
                inputText: '',
                value: [],
                selectItem: []
            };
        }

        // 取默认值
        const arr = value || defaultValue;
        const item = this.formData(selectData, arr);
        return {
            selectData,
            inputText: '',
            value: item.inputText,
            selectItem: item.selectItem
        };
    }
    updateData (options, value) {
        let selectData = options;
        const state = this.state;
        // 如果不是分组下拉框，则将数据拼装成分组下拉的数据结构
        if (options && options.length && !(options[0] instanceof Array)) {
            selectData = [options];
        }
        const hasValue = state.selectItem.findIndex((item) => {
            return item.value === value;
        });
        if (JSON.stringify(selectData) === JSON.stringify(this.state.defaultData) && (!value || hasValue !== -1)) {
            return;
        }

        if (JSON.stringify(selectData) !== JSON.stringify(this.state.defaultData) && !value) {
            this.setState({
                selectData,
                defaultData: selectData,
                inputText: '',
                selectItem: []
            });
            return;
        }

        const { selectItem } = this.formData(selectData, value);
        this.setState({
            selectData,
            defaultData: selectData,
            inputText: '',
            selectItem
        });
    }

    clearData () {
        this.setState({
            inputText: '',
            selectItem: []
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange([]);
            }
        });
    }

    resetData () {
        const defaultValue = this.props.defaultValue;
        const options = this.state.defaultData;
        const data = this.formData(options, defaultValue);

        this.setState({
            inputText: '',
            selectItem: data.selectItem || []
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(data);
            }
        });
    }

    // 初始化数据
    formData (options, v) {
        const arr = typeof v === 'string' || typeof v === 'number' ? [v] : v;
        const selectItem = [];
        arr.map((d) => {
            let orFinish = false;
            options.map((item) => {
                for (let i = 0, l = item.length; i < l; i++) {
                    if (item[i].value === d) {
                        // 取一级选项的默认值
                        selectItem.push(Object.assign({}, item[i]));
                        orFinish = true;
                        break;
                    }

                    // 取二级选项的默认值
                    const optionsValue = item[i].options;
                    if (optionsValue && optionsValue.length) {
                        for (let index = 0; index < optionsValue.length; index++) {
                            if (optionsValue[index].value === d) {
                                selectItem.push(Object.assign({}, optionsValue[index]));
                                orFinish = true;
                                break;
                            }
                        }
                    }

                    if (orFinish) {
                        break;
                    }
                }
            });
        });
        return {
            selectItem
        };
    }

    // 点击文本框，展开下拉列表
    toggleValue (event) {
        const state = this.state;
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
        // 如果是禁止状态，则点击无效
        if (this.props.disabled) {
            return;
        }
        state.inputFocus = !state.inputFocus;
        this.setState({
            inputFocus: state.inputFocus
        }, () => {
            if (state.inputFocus) {
                this.EL_INPUT.focus();
            } else {
                this.EL_INPUT.blur();
            }
        });
    }
    // 点击下拉菜单中的选项
    handleChange (newValue) {
        const state = this.state;
        state.inputText = '';
        let index = -1;
        state.selectItem.findIndex((item, key) => {
            if (item.value === newValue.value) {
                index = key;
                return true;
            }
            return false;
        });
        if (index === -1) {
            state.selectItem.push(newValue);
            this.setState(state, () => {
                if (typeof this.props.onChange === 'function') {
                    this.props.onChange(state.selectItem.concat());
                }
            });
        }
        const filterData = this.filterData();
        this.setState({
            selectData: filterData
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
    inputFocus () {
        this.EL_INPUT.focus();
        this.setState({
            inputFocus: true
        });
    }
    // 文本框失去焦点
    inputBlur () {
        this.setState({
            inputFocus: false,
            ulFocus: false,
            inputText: ''
        }, () => {
            const filterData = this.filterData();
            this.setState({
                selectData: filterData
            });
        });
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
                seletedIndex = 0;
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

    removeSelectItem (index, e) {
        e.preventDefault();
        e.stopPropagation();
        const { selectItem } = this.state;
        selectItem.splice(index, 1);
        this.setState({
            selectItem
        }, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(selectItem);
            }
        });
    }
    render () {
        const { className, disabled, id, ...others } = this.props;
        const { inputFocus, ulFocus, selectData, inputText, selectItem } = this.state;
        // 计算下拉框的样式
        const selectClass = ['mc-select-multiple clearfix'];
        inputFocus || ulFocus ? selectClass.push('mc-select-dropUp') : selectClass.push('mc-select-dropDown');
        if (disabled) {
            selectClass.push('mc-select-disabled');
        }
        return (
            <div
                className={`${className} mc-select-box`}
                id={id}
                ref={(ref) => { this.EL_CONTAINER = ref; }}
                {...others}
            >
                <div
                    className={selectClass.join(' ')}
                    onClick={e => this.toggleValue(e)}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    {selectItem.map((item, key) => {
                        return (<span className='mc-select-item' key={key}>
                            {item.text}
                            {!disabled ? <Icon type='close' className='mc-select-item-close' onClick={(e) => { this.removeSelectItem(key, e); }} /> : null}
                        </span>);
                    })}
                    <input
                        type='text'
                        disabled={disabled}
                        value={inputText}
                        style={{ width: `${(inputText.length * 10) + 10}px` }}
                        id={`inputText${this.selectId}`}
                        onBlur={e => this.inputBlur(e)}
                        onClick={(e) => { e.stopPropagation(); }}
                        onChange={e => this.changeInput(e)}
                        onKeyUp={e => this.enterkeydown(e)}
                        ref={(ref) => { this.EL_INPUT = ref; }}
                    />
                    <span className='select-arrow' />
                </div>
                <div
                    className={inputFocus || ulFocus ? 'drop-box mc-select-option' : 'hide mc-select-option'}
                    tabIndex='-1'
                    onFocus={() => this.ulFocus()}
                    ref={(ref) => { this.dropMenu = ref; }}
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
                                        <li className='mc-not-fount' onMouseDown={e => e.preventDefault()}>暂无数据</li>
                                    }
                                </ul>);
                        })
                        :
                        <ul><li className='mc-not-fount' onMouseDown={e => e.preventDefault()}>暂无数据</li></ul>
                    }
                </div>
            </div>
        );
    }
}
