import React, { Component, PropTypes } from 'react';
import DateTimeFormat from 'gregorian-calendar-format';
import RCTimePicker from 'rc-time-picker/lib/TimePicker';
import objectAssign from 'object-assign';
import classNames from 'classnames';
import defaultLocale from './locale/zh_CN';

export default class TimePicker extends Component {
    static defaultProps = {
        format: 'HH:mm:ss',
        prefixCls: 'mc-time-picker',
        locale: {},
        align: { offset: [0, -2] },
        disabled: false,
        disabledHours: undefined,
        disabledMinutes: undefined,
        disabledSeconds: undefined,
        hideDisabledOptions: false,
        size: 'default',
        placement: 'bottomLeft',
        transitionName: 'slide-up'
    };

    static propTypes = {
        format: PropTypes.string,
        prefixCls: PropTypes.string,
        locale: PropTypes.object,
        align: PropTypes.object,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        disabledHours: PropTypes.func,
        disabledMinutes: PropTypes.func,
        disabledSeconds: PropTypes.func,
        hideDisabledOptions: PropTypes.bool,
        size: PropTypes.string,
        placement: PropTypes.string,
        transitionName: PropTypes.string,
        onChange: PropTypes.func,
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    };

    getFormatter () {
        return new DateTimeFormat(this.props.format);
    }

    /**
    * 获得输入框的 className
    */
    getSizeClass () {
        let sizeClass = '';
        if (this.props.size === 'large') {
            sizeClass = ' mc-input-lg';
        } else if (this.props.size === 'small') {
            sizeClass = ' mc-input-sm';
        }
        return sizeClass;
    }

    getLocale () {
        // 统一合并为完整的 Locale
        const locale = objectAssign({}, defaultLocale, this.props.locale);
        locale.lang = objectAssign({}, defaultLocale.lang, this.props.locale.lang);
        return locale;
    }

    handleChange (value) {
        this.props.onChange(value ? new Date(value.getTime()) : null);
    }

    /**
    * 获得输入框的默认值
    */
    parseTimeFromValue (value) {
        if (value) {
            return this.getFormatter().parse(value, {
                locale: this.getLocale(),
                obeyCount: true
            });
        }
        return undefined;
    }

    render () {
        const props = objectAssign({}, this.props);
        props.placeholder = ('placeholder' in this.props)
          ? props.placeholder : this.getLocale().lang.placeholder;
        if (props.defaultValue) {
            props.defaultValue = this.parseTimeFromValue(props.defaultValue);
        } else {
            delete props.defaultValue;
        }

        if (props.value) {
            props.value = this.parseTimeFromValue(props.value);
        } else {
            delete props.value;
        }

        const className = classNames({
            [props.className]: !!props.className,
            [`${props.prefixCls} - ${props.size}`]: true
        });

        if (props.format.indexOf('ss') < 0) {
            props.showSecond = false;
        }
        if (props.format.indexOf('HH') < 0) {
            props.showHour = false;
        }

        return (
            <RCTimePicker
              {...props}
              className={className}
              gregorianCalendarLocale={this.getLocale()}
              formatter={this.getFormatter()}
              onChange={(value) => this.handleChange(value)}
            />
        );
    }
}
