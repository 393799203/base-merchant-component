import React, { Component, PropTypes } from 'react';
import Option from './Option';

export default class Select extends Component {
    static defaultProps = {
        defaultValue: '请选择',
        selectData: [],
        className: '',
        onChange: null,
        disabled: false
    };
    static propTypes = {
        defaultValue: PropTypes.string,
        selectData: PropTypes.array.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool
    };
    constructor (props) {
        super(props);
        this.state = {
            isDropDown: false,
            currentValue: {},
            timer: null
        };
    }
    toggleValue (value, bool, event) {
        // 如果是禁止状态，则点击无效
        if (value === 'isDropDown' && this.props.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        const state = this.state;
        state[value] = bool;
        this.setState(state);
    }
    // 点击下拉菜单中的选项
    handleChange (newValue) {
        const state = this.state;
        state.currentValue = newValue;
        state.isDropDown = false;
        this.setState(state, () => {
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(newValue);
            }
        });
    }
    render () {
        const { defaultValue, className, disabled } = this.props;
        let { selectData } = this.props;
        const { isDropDown, currentValue } = this.state;
        // 封装下拉框的数据
        if (selectData && selectData.length && !(selectData[0] instanceof Array)) {
            selectData = [selectData];
        }
        // 计算下拉框的样式
        const selectClass = ['mc-select-box'];
        isDropDown ? selectClass.push('mc-select-dropUp') : selectClass.push('mc-select-dropDown');
        if (disabled) {
            selectClass.push('select-disabled');
        }
        return (
            <div className={className}>
                <div className={selectClass.join(' ')} onMouseOver={e => this.toggleValue('isDropDown', true, e)} onMouseOut={e => this.toggleValue('isDropDown', false, e)}>
                    {currentValue.text || defaultValue || ''}
                    <span className='select-arrow' />
                    <div className={isDropDown ? 'drop-box' : 'hide'}>
                        {
                            selectData.length
                            ? selectData.map((select, i) => {
                                return (<ul key={i}>
                                    {select.length ? select.map((item, index) => {
                                        return (<Option key={index} optionData={item} handleChange={data => this.handleChange(data)} />);
                                    }) : null }
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
