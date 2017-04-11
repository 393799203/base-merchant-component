/**
* 月份选择器
**/
import React, { Component, PropTypes } from 'react';
import RCDatePicker from 'rc-calendar/lib/Picker';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import DatepickerMinix from '../_module/js/datepicker';

import '../_module/less/datepicker.less';
import '../_module/less/monthpicker.less';
import '../_module/less/yearpicker.less';
import '../_module/less/decadepicker.less';

export default class MonthPicker extends Component {
    static defaultProps = {
        format: 'yyyy-MM',
        popmcStyle: {},
        align: { offset: [0, -9] },
        style: {},
        disabled: false,
        transitionName: 'slide-mc',
        locale: {},
        placeholder: '',
        defaultValue: ''
    };

    static propTypes = {
        format: PropTypes.string,
        transitionName: PropTypes.string,
        popmcStyle: PropTypes.object,
        align: PropTypes.object,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        locale: PropTypes.object,
        disabledDate: PropTypes.func,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number])
    };

    constructor (props) {
        super(props);
        this.state = {
            value: DatepickerMinix.parseDateFromValue(props, props.value || props.defaultValue),
            open: false
        };
    }

    componentWillReceiveProps (nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: DatepickerMinix.parseDateFromValue(nextProps, nextProps.value)
            });
        }
    }

    handleChange (value) {
        if (!('value' in this.props)) {
            this.setState({ value });
        }
        const timeValue = value ? new Date(value.getTime()) : null;
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(timeValue);
        }
    }

    toggleOpen (e) {
        this.setState({
            open: e.open
        });
    }

    render () {
        const locale = DatepickerMinix.getLocale(this.props.locale);
        // 以下两行代码
        // 给没有初始值的日期选择框提供本地化信息
        // 否则会以周日开始排
        const placeholder = ('placeholder' in this.props) ? this.props.placeholder : locale.lang.placeholder;

        const calendar = (
            <MonthCalendar
                disabledDate={this.props.disabledDate}
                locale={locale.lang}
                dateInputPlaceholder={placeholder}
                prefixCls='mc-calendar'
                className='mc-calendar-month'
                showClear
            />
        );

        let pickerClass = 'mc-calendar-picker';
        if (this.state.open) {
            pickerClass += ' mc-calendar-picker-open';
        }
        return (
            <span className={pickerClass}>
                <RCDatePicker
                    transitionName={this.props.transitionName}
                    disabled={this.props.disabled}
                    calendar={calendar}
                    value={this.state.value}
                    prefixCls='mc-calendar-picker-container'
                    style={this.props.popmcStyle}
                    align={this.props.align}
                    onOpen={e => this.toggleOpen(e)}
                    onClose={e => this.toggleOpen(e)}
                    onChange={e => this.handleChange(e)}
                >

                    {({ value }) => {
                        return (
                            <span>
                                <input
                                    disabled={this.props.disabled}
                                    value={value && DatepickerMinix.getFormatter(this.props).format(value)}
                                    placeholder={placeholder}
                                    onChange={() => {}}
                                    style={this.props.style}
                                    className={'mc-calendar-picker-input'}
                                />
                                <span className='mc-calendar-picker-icon' />
                            </span>
                        );
                    }}
                </RCDatePicker>
            </span>
        );
    }
}
