import React from 'react';
import GregorianCalendar from 'gregorian-calendar';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';
import TimePicker from 'rc-time-picker';
import classNames from 'classnames';
import PickerMixin from './PickerMixin';

export default React.createClass({
	getDefaultProps() {
	    return {
			defaultValue: [],
			format: 'yyyy-MM-dd',
			startPlaceholder: '开始日期',
			endPlaceholder: '结束日期',
			transitionName: 'slide-up',
			popupStyle: {},
			onChange() {},  // onChange 可用于 Validator
			locale: {},
			align: {
			offset: [0, -9],
			},
			open: false,
			timeConfig : {}
	    };
  	},

  	getInitialState() {
	    const {value, defaultValue} = this.props;
	    const start = (value && value[0]) || defaultValue[0];
	    const end = (value && value[1]) || defaultValue[1];
	    return {
	      	value: [
		        this.parseDateFromValue(start),
		        this.parseDateFromValue(end)
	      	]
	    };
  	},

  	mixins: [ PickerMixin ],

  	componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      	const start = this.parseDateFromValue(nextProps.value[0]);
	      	const end = this.parseDateFromValue(nextProps.value[1]);
	      	this.setState({
	        	value: [start, end]
	      	});
	    }
	},

  	handleChange(value) {
    	if (!('value' in this.props)) {
      		this.setState({ value });
    	}
	    const startTime = value[0] ? new Date(value[0].getTime()) : null;
	    const endTime = value[1] ? new Date(value[1].getTime()) : null;
	    this.props.onChange([startTime, endTime]);
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

	    defaultCalendarValue.setTime( this.getFormatTime( defaultValue || value ) );

    	const {disabledDate, showTime, size, startPlaceholder, endPlaceholder,
           	transitionName, disabled, popupStyle, align, style} = this.props;
    	const state = this.state;

    	const timePicker = showTime ? 
    		<TimePicker prefixCls="up-time-picker"
		        placeholder={locale.lang.timePlaceholder}
		        transitionName="slide-up"
		        { ...timeConfig }/>
	      	: null;

    	const calendarClassName = classNames({
      		['up-calendar-time']: this.props.showTime,
    	});

    	const calendar = <RangeCalendar prefixCls="up-calendar"
            className={calendarClassName}
            timePicker={timePicker}
            disabledDate={disabledDate}
            dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
            locale={locale.lang}
            defaultValue={[defaultCalendarValue, defaultCalendarValue]}
            showClear />;

    	const pickerClass = classNames({
	      	'up-calendar-picker': true,
	      	'up-calendar-picker-open': state.open
    	});

    	const pickerInputClass = classNames({
      		'up-calendar-range-picker': true,
      		'up-input': true,
      		'up-input-lg': size === 'large',
      		'up-input-sm': size === 'small',
    	});

    	return (
    		<span className={pickerClass} style={style}>
	      		<DatePicker
			        transitionName={transitionName}
			        disabled={disabled}
			        calendar={calendar}
			        value={state.value}
			        prefixCls="up-calendar-picker-container"
			        style={popupStyle}
			        align={align}
			        onOpen={this.toggleOpen}
			        onClose={this.toggleOpen}
			        onChange={this.handleChange}>
	        		{({value}) => {
			            const start = value[0];
			            const end = value[1];
	            		return (
	              			<span className={pickerInputClass} disabled={disabled}>
		                		<input disabled={disabled}
									onChange={this.handleInputChange}
									value={start && this.getFormatter().format(start)}
									placeholder={startPlaceholder}
									className="up-calendar-range-picker-input" />
		                		<span className="up-calendar-range-picker-separator"> ~ </span>
		                		<input disabled={disabled}
				                  	onChange={this.handleInputChange}
				                  	value={end && this.getFormatter().format(end)}
				                  	placeholder={endPlaceholder}
				                  	className="up-calendar-range-picker-input" />
		                		<span className="up-calendar-picker-icon" />
	              			</span>
	            		);
	          		}}
      			</DatePicker>
    		</span>
    	);
  	}
});