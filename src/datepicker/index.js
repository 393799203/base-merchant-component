import React from 'react';
import RCCalendar from 'rc-calendar';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RCDatePicker from 'rc-calendar/lib/Picker';
import GregorianCalendar from 'gregorian-calendar';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';
import RangePicker from './RangePicker';
import PickerMixin from './PickerMixin';
import TimePicker from 'rc-time-picker';
import classNames from 'classnames';
import './style/index.less';

function createPicker(TheCalendar, defaultFormat) {
	return React.createClass({
	    getDefaultProps() {
	      	return {
		        format: defaultFormat || 'yyyy-MM-dd',
		        transitionName: 'slide-mc',
		        popmcStyle: {},
		        onChange() {},  // onChange 可用于 Validator
		        locale: {},
		        align: {
		          	offset: [0, -9]
		        },
		        open: false,
		        timeConfig : {}
	      	};
	    },

	    getInitialState() {
	      	return {
	        	value: this.parseDateFromValue(this.props.value || this.props.defaultValue)
	      	};
	    },

	    mixins: [ PickerMixin ],

	    componentWillReceiveProps(nextProps) {
	      	if ('value' in nextProps) {
		        this.setState({
		          	value: this.parseDateFromValue(nextProps.value)
		        });
	      	}
	    },

	    handleChange(value) {
	      	if (!('value' in this.props)) {
	        	this.setState({ value });
	      	}
	      	const timeValue = value ? new Date(value.getTime()) : null;
	      	this.props.onChange(timeValue);
	    },

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
	    },

	    render() {
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
		        ['mc-calendar-time']: this.props.showTime,
		        ['mc-calendar-month']: MonthCalendar === TheCalendar
	      	});

	      	const calendar = (
	        	<TheCalendar
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

	      	return <span className={pickerClass}>
	        	<RCDatePicker
					transitionName={this.props.transitionName}
					disabled={this.props.disabled}
					calendar={calendar}
					value={this.state.value}
					prefixCls="mc-calendar-picker-container"
					style={this.props.popmcStyle}
					align={this.props.align}
					onOpen={this.toggleOpen}
					onClose={this.toggleOpen}
	          		onChange={this.handleChange}>
	          		{({value}) => {
	              		return (
	                		<span>
	                  			<input disabled={this.props.disabled}
									onChange={this.handleInputChange}
									value={value && this.getFormatter().format(value)}
									placeholder={placeholder}
									style={this.props.style}
									className={'mc-calendar-picker-input' + sizeClass}/>
	                  			<span className="mc-calendar-picker-icon"/>
	                		</span>
	              		);
	            	}}
	        	</RCDatePicker>
	      	</span>;
	    }
  	});
}

const DatePicker = createPicker(RCCalendar);
const MonthPicker = createPicker(MonthCalendar, 'yyyy-MM');

const Calendar = React.createClass({
  	getDefaultProps() {
    	return {
      		locale: CalendarLocale,
      		prefixCls: 'mc-calendar'
    	};
  	},

  	render() {
    	return <RCCalendar {...this.props} />;
  	}
});

DatePicker.Calendar = Calendar;
DatePicker.RangePicker = RangePicker;
DatePicker.MonthPicker = MonthPicker;

module.exports = DatePicker;