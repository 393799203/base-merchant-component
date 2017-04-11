/**
* 时间组件:
* 1、年月日
* 2、年月日 时分秒，默认为当前时间
**/
import React, { Component, PropTypes } from 'react';
import RCCalendar from 'rc-calendar';
import RCDatePicker from 'rc-calendar/lib/Picker';
import GregorianCalendar from 'gregorian-calendar';
import TimePicker from 'rc-time-picker';
import DatepickerMinix from '../_module/js/datepicker';

import '../_module/less/datepicker.less';
import '../_module/less/timepicker.less';
import '../_module/less/yearpicker.less';
import '../_module/less/monthpicker.less';

export default class DatePicker extends Component {
    static defaultProps = {
        format: '',
        popupStyle: {},
        align: { offset: [0, -9] },
        style: {},
        disabled: false,
        timeConfig: {},
        transitionName: 'slide-mc',
        locale: {},
        showTime: false,
        placeholder: '',
        defaultValue: '',
        onChange () {}
    };

    static propTypes = {
        format: PropTypes.string,
        transitionName: PropTypes.string,
        popupStyle: PropTypes.object,
        align: PropTypes.object,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        timeConfig: PropTypes.object,
        locale: PropTypes.object,
        showTime: PropTypes.bool,
        disabledDate: PropTypes.func,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number])
    };

    constructor (props) {
        super(props);
        this.state = {
            value: DatepickerMinix.parseDateFromValue(props, props.value || props.defaultValue), // 将传入的value格式转换成
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
        const defaultCalendarValue = new GregorianCalendar(locale);
        const timeFullConfig = this.props.timeConfig;
        const { defaultValue, value, ...timeConfig } = timeFullConfig;
        const placeholder = ('placeholder' in this.props) ? this.props.placeholder : locale.lang.placeholder;
        defaultCalendarValue.setTime(DatepickerMinix.getFormatTime(defaultValue || value));

        // 判断是否展示时分秒
        const timePicker = this.props.showTime ?
            (<TimePicker
                prefixCls='mc-time-picker'
                placeholder={locale.lang.timePlaceholder}
                transitionName='slide-mc'
                {...timeConfig}
            />)
            : null;

        const calendar = (
            <RCCalendar
                disabledDate={this.props.disabledDate}
                locale={locale.lang}
                timePicker={timePicker}
                defaultValue={defaultCalendarValue}
                dateInputPlaceholder={placeholder}
                prefixCls='mc-calendar'
                className={this.props.showTime ? 'mc-calendar-time' : ''}
                showOk={this.props.showTime}
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
                    style={this.props.popupStyle}
                    align={this.props.align}
                    onOpen={e => this.toggleOpen(e)}
                    onClose={e => this.toggleOpen(e)}
                    onChange={e => this.handleChange(e)}
                >

                    {() => {
                        return (
                            <span>
                                <input
                                    disabled={this.props.disabled}
                                    value={this.state.value && DatepickerMinix.getFormatter(this.props).format(this.state.value)}
                                    placeholder={placeholder}
                                    style={this.props.style}
                                    className={'mc-calendar-picker-input'}
                                    onChange={() => {}}
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
