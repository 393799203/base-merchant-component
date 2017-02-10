/**
* 时间区间组件
**/
import React, { Component, PropTypes } from 'react';
import GregorianCalendar from 'gregorian-calendar';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';
import TimePicker from 'rc-time-picker';
import classNames from 'classnames';

import DatepickerMinix from '../_module/js/datepicker';
import '../_module/less/datepicker.less';
import '../_module/less/rangepicker.less';
import '../_module/less/timepicker.less';

export default class MonthPicker extends Component {
    static defaultProps = {
        defaultValue: [],
        format: '',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        transitionName: 'slide-up',
        popupStyle: {},
        onChange () {},  // onChange 可用于 Validator
        locale: {},
        align: { offset: [0, -9] },
        open: false,
        timeConfig: {},
        showTime: false,
        style: {},
        disabled: false,
        size: '',
        disabledDate () {}
    };

    static propTypes = {
        defaultValue: PropTypes.array,
        value: PropTypes.array,
        format: PropTypes.string,
        startPlaceholder: PropTypes.string,
        endPlaceholder: PropTypes.string,
        transitionName: PropTypes.string,
        popupStyle: PropTypes.object,
        onChange: PropTypes.func,  // onChange 可用于 Validator
        locale: PropTypes.object,
        align: PropTypes.object,
        open: PropTypes.bool,
        timeConfig: PropTypes.object,
        showTime: PropTypes.bool,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        size: PropTypes.string,
        disabledDate: PropTypes.func
    };

    constructor (props) {
        super(props);
        const { value, defaultValue } = props;
        const start = (value && value[0]) || defaultValue[0];
        const end = (value && value[1]) || defaultValue[1];
        this.state = {
            value: [
                DatepickerMinix.parseDateFromValue(props, start),
                DatepickerMinix.parseDateFromValue(props, end)
            ],
            open: false
        };
    }

    componentWillReceiveProps (nextProps) {
        if ('value' in nextProps) {
            const start = DatepickerMinix.parseDateFromValue(nextProps, nextProps.value[0]);
            const end = DatepickerMinix.parseDateFromValue(nextProps, nextProps.value[1]);
            this.setState({
                value: [start, end]
            });
        }
    }

    handleChange (value) {
        if (!('value' in this.props)) {
            this.setState({ value });
        }
        const startTime = value[0] ? new Date(value[0].getTime()) : null;
        const endTime = value[1] ? new Date(value[1].getTime()) : null;
        if (typeof this.props.onChange === 'function') {
            this.props.onChange([startTime, endTime]);
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

        defaultCalendarValue.setTime(DatepickerMinix.getFormatTime(defaultValue || value));

        const { disabledDate, showTime, size, startPlaceholder, endPlaceholder,
            transitionName, disabled, popupStyle, align, style } = this.props;
        const state = this.state;

        const timePicker = showTime ?
            (<TimePicker
                prefixCls='mc-time-picker'
                placeholder={locale.lang.timePlaceholder}
                transitionName='slide-up'
                {...timeConfig}
            />)
            : null;

        const calendar = (<RangeCalendar
            prefixCls='mc-calendar'
            className={this.props.showTime ? 'mc-calendar-time' : ''}
            timePicker={timePicker}
            disabledDate={disabledDate}
            dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
            locale={locale.lang}
            defaultValue={[defaultCalendarValue, defaultCalendarValue]}
            showClear
        />);

        const pickerClass = classNames({
            'mc-calendar-picker': true,
            'mc-calendar-picker-open': state.open
        });

        const pickerInputClass = classNames({
            'mc-calendar-range-picker': true,
            'mc-input': true,
            'mc-input-lg': size === 'large',
            'mc-input-sm': size === 'small'
        });

        return (
            <span className={pickerClass} style={style}>
                <DatePicker
                    transitionName={transitionName}
                    disabled={disabled}
                    calendar={calendar}
                    value={state.value}
                    prefixCls='mc-calendar-picker-container'
                    style={popupStyle}
                    align={align}
                    onOpen={e => this.toggleOpen(e)}
                    onClose={e => this.toggleOpen(e)}
                    onChange={e => this.handleChange(e)}
                >

                    {() => {
                        const start = this.state.value[0];
                        const end = this.state.value[1];
                        return (
                            <span className={pickerInputClass} disabled={disabled}>
                                <span className='mc-calendar-range-picker-input'>
                                    <input
                                        disabled={disabled}
                                        onChange={() => {}}
                                        value={start && DatepickerMinix.getFormatter(this.props).format(start)}
                                        placeholder={startPlaceholder}
                                        className='mc-calendar-picker-input'
                                    />
                                    <span className='mc-calendar-picker-icon' />
                                </span>
                                <span className='mc-calendar-range-picker-separator'>~</span>
                                <span className='mc-calendar-range-picker-input'>
                                    <input
                                        disabled={disabled}
                                        onChange={() => {}}
                                        value={end && DatepickerMinix.getFormatter(this.props).format(end)}
                                        placeholder={endPlaceholder}
                                        className='mc-calendar-picker-input'
                                    />
                                    <span className='mc-calendar-picker-icon' />
                                </span>
                            </span>
                        );
                    }}
                </DatePicker>
            </span>
        );
    }
}
