/**
* 月份选择器
**/
import React, { Component, PropTypes } from 'react';
import RCDatePicker from 'rc-calendar/lib/Picker';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import GregorianCalendar from 'gregorian-calendar';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import DateTimeFormat from 'gregorian-calendar-format';
import defaultLocale from './locale/zh_CN';

import './style/index.less';

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
        defaultValue: '',
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
            value: this.parseDateFromValue(props.value || props.defaultValue),
            open: false
        };
    }

    componentWillReceiveProps (nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: this.parseDateFromValue(nextProps.value)
            });
        }
    }

    getFormatTime (value) {
        const defaultDate = new Date();
        const timeReg = /^(\d{2}):(\d{2}):(\d{2})$/;

        if (!value) {
            return defaultDate.getTime();
        }

        if (!timeReg.test(value)) {
            return defaultDate.getTime();
        }

        defaultDate.setHours(Number(RegExp.$1));
        defaultDate.setMinutes(Number(RegExp.$2));
        defaultDate.setSeconds(Number(RegExp.$3));

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
        return formats[format];
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

    parseDateFromValue (value) {
        if (value) {
            if (typeof value === 'string') {
                return this.getFormatter().parse(value, { locale: this.getLocale() });
            } else if (value instanceof Date) {
                const date = new GregorianCalendar(this.getLocale());
                date.setTime(+value);
                return date;
            } else if (typeof value === 'number') {
                const valueDate = new Date(value);
                const date = new GregorianCalendar(this.getLocale());
                date.setTime(+valueDate);
                return date;
            }
        } else if (value === null) {
            return value;
        } 
        return undefined;
    }

    toggleOpen (e) {
        this.setState({
            open: e.open
        });
    }

    handleInputChange () {}

    render () {
        const locale = this.getLocale();
        // 以下两行代码
        // 给没有初始值的日期选择框提供本地化信息
        // 否则会以周日开始排
        const placeholder = ('placeholder' in this.props) ? this.props.placeholder : locale.lang.placeholder;

        const calendarClassName = classNames({
            'mc-calendar-month': true
        });

        const calendar = (
            <MonthCalendar
              disabledDate={this.props.disabledDate}
              locale={locale.lang}
              dateInputPlaceholder={placeholder}
              prefixCls='mc-calendar'
              className={calendarClassName}
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
                                  value={value && this.getFormatter().format(value)}
                                  placeholder={placeholder}
                                  onChange={e => this.handleInputChange(e)}
                                  style={this.props.style}
                                  className={`mc-calendar-picker-input`}
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
