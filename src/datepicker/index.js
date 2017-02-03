import React, { Component, PropTypes } from 'react';
import RCCalendar from 'rc-calendar';
import RCDatePicker from 'rc-calendar/lib/Picker';
import GregorianCalendar from 'gregorian-calendar';
import TimePicker from 'rc-time-picker';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import DateTimeFormat from 'gregorian-calendar-format';
import defaultLocale from './locale/zh_CN';

import './style/index.less';

export default class DatePicker extends Component {
    static defaultProps = {
        format: 'yyyy-MM-dd',
        transitionName: 'slide-mc', //
        popmcStyle: {}, //
        align: { offset: [0, -9] }, //
        style: {},
        disabled: false,
        timeConfig: {}, //
        transitionName: 'slide-mc',
        onChange() {},  // onChange 可用于 Validator
        locale: {}
    };

    static propTypes = {
        format : PropTypes.string, 
        transitionName: PropTypes.string, //
        popmcStyle: PropTypes.object, //
        align: PropTypes.object, //
        style: PropTypes.object, //
        disabled: PropTypes.bool,
        timeConfig: PropTypes.object, //
        transitionName: PropTypes.string,
        locale: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            value: this.parseDateFromValue(props.value || props.defaultValue),
            open: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: this.parseDateFromValue(nextProps.value)
            });
        }
    }

    handleChange(value) {
        if (!('value' in this.props)) {
            this.setState({ value });
        }
        const timeValue = value ? new Date(value.getTime()) : null;
        this.props.onChange(timeValue);
    }

    getFormatTime( value ){
        let defaultDate = new Date();
        let timeReg = /^(\d{2}):(\d{2}):(\d{2})$/;

        if( !value ){
            return defaultDate.getTime();
        }

        if( !timeReg.test(value) ){
            console.error('Time format must be "xx:xx:xx"!');
            return defaultDate.getTime();
        }

        defaultDate.setHours( Number( RegExp.$1) );
        defaultDate.setMinutes( Number( RegExp.$2) );
        defaultDate.setSeconds( Number( RegExp.$3) );

        return defaultDate.getTime();
    }

    getLocale () {
        // 统一合并为完整的 Locale
        const locale = objectAssign({}, defaultLocale, this.props.locale);
        locale.lang = objectAssign({}, defaultLocale.lang, this.props.locale.lang);
        return locale;
    }

    getFormatter () {
        const formats = this.formats = this.formats || {};
        const format = this.props.format;
        if (formats[format]) {
            return formats[format];
        }
        formats[format] = new DateTimeFormat(format, this.getLocale().lang.format);
        console.info(format);
        return formats[format];
    }

    parseDateFromValue (value) {
        if (value) {
            if (typeof value === 'string') {
                return this.getFormatter().parse(value, { locale: this.getLocale() });
            } else if (value instanceof Date) {
                const date = new GregorianCalendar(this.getLocale());
                date.setTime(+value);
                return date;
            }
        } else if (value === null) {
            return value;
        }
        return undefined;
    }

    // remove input readonly warning
    handleInputChange () {}

    toggleOpen (e) {
        this.setState({
            open: e.open
        });
    }

    render () {
        const locale = this.getLocale();
        // 以下两行代码
        // 给没有初始值的日期选择框提供本地化信息
        // 否则会以周日开始排
        let defaultCalendarValue = new GregorianCalendar(locale);
        let timeFullConfig = this.props.timeConfig;
       	let { defaultValue , value , ...timeConfig } = timeFullConfig;

        const placeholder = ('placeholder' in this.props) ? this.props.placeholder : locale.lang.placeholder;

        defaultCalendarValue.setTime( this.getFormatTime( defaultValue || value ) );

        const timePicker = this.props.showTime
            ? <TimePicker prefixCls="mc-time-picker"
                placeholder={locale.lang.timePlaceholder}
                transitionName="slide-mc"
                { ...timeConfig }/>
            : null;

        const calendarClassName = classNames({
            ['mc-calendar-time']: this.props.showTime
        });

        const calendar = (
            <RCCalendar
                disabledDate={this.props.disabledDate}
                locale={locale.lang}
                timePicker={timePicker}
                defaultValue={defaultCalendarValue}
                dateInputPlaceholder={placeholder}
                prefixCls="mc-calendar"
                className={calendarClassName}
                showOk={this.props.showTime}
                showClear />
        );

        let sizeClass = '';
        if (this.props.size === 'large') {
            sizeClass = ' mc-input-lg';
        } else if (this.props.size === 'small') {
            sizeClass = ' mc-input-sm';
        }

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
                    onOpen={(e) => this.toggleOpen(e)}
                    onClose={(e) => this.toggleOpen(e)}
                    onChange={(value) => this.handleChange(value)}>

                    {({value }) => {
                        return (
                            <span>
                                <input
                                  disabled={this.props.disabled}
                                  onChange={this.handleInputChange}
                                  value={value && this.getFormatter().format(value)}
                                  placeholder={placeholder}
                                  style={this.props.style}
                                  className={`mc-calendar-picker-input ${sizeClass}`}
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
