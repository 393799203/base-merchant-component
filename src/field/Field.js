/* Field.js 
 * 	NOTICE:
 * 	eventHandlers 写在组件绑定事件的后面,保证自己控件的事件先执行,然后通过回调调用用户绑定的事件
 */

import 'js-object-clone';
import React , { PropTypes, Component } from 'react';
import FieldMixins from './Field.Mixins';
import './style/index.less';

let DEFAULT_FORM = "defaultKey";

if( typeof Array.isArray !== 'function'){
	Array.isArray = function( array ){
		return Object.prototype.toString.call( array ) === "[object Array]";
	}
}

let Field = React.createClass({
	statics: {  //静态方法和变量
	    forms: {},  //所有的表单数据，表单名做key值，value值为对象，该对象为该表单名下所有input name:value的合集)

	    idCounter: 0,  //id计数器，用于uniqueId方法生成表单的_id标识

		uniqueId: function(prefix) { //生成唯一ID
		    var id = ++(Field.idCounter) + '';
		    return prefix ? prefix + id : id;
	  	},

	    add: function(field, name) {  //添加表单数据到forms对象中
	        if (Field.forms[name] === undefined) {
	            Field.forms[name] = {};
	        }

	        Field.forms[name][field._id] = field;
	    },

	    remove: function(field, name) {  //删除某个表单
	        delete Field.forms[name][field._id];
	    },

	    validate: function(form) {  //校验表单数据
	        let formName = form || DEFAULT_FORM;
	        let flag = true;
	        let currentForm = Field.forms[formName];
	        let id = true;
	        Object.keys(currentForm).map(function (key) {
	        	let field = currentForm[key];
	        	flag = flag && field.validate();
	        	if(!flag && id){
	        		id = false;
	        		if(field.props.id){
	        			document.getElementById(field.props.id).scrollIntoView();
	        			document.getElementById(field.props.id).focus();
	        		}
	        	}
	        });

	        return flag;
	    },

	    getData: function(form) {  //获取所有或特定相同name表单的数据
	        let formName = form || DEFAULT_FORM;
	        let data = {};
	        let currentForm = Field.forms[formName];

	        Object.keys(currentForm).map(function (key) {
	        	let field = currentForm[key];
				let value = field.getData();

				if( Object.prototype.toString.call( value ) === "[object Object]"){
					//$.extend(true, data, value);
					Object.assign( data , Object.clone( value , true ) );
				}else{
					//$.extend(true, data, { [ field.props.name ]: value });
					Object.assign( data , Object.clone( { [ field.props.name ]: value }  , true ) );
				}
	        });

	        return data;
	    },

		resetData: function( form ){
			let formName = form || DEFAULT_FORM;
			let currentForm = Field.forms[formName];

			Object.keys(currentForm).map(function (key) {

				let field = currentForm[key];
				let props = field.props;
				let { type , defaultValue } = field.props;
				let value = defaultValue || '';

				if( props.attrs.disabled || props.attrs.readOnly ){
					return;
				}
				if( type === 'radio' && Array.isArray(props.options) && props.options.length ){
					let checked = {};
					if( typeof props.value !== 'undefined' ){
						checked[props.value] = true;
						value = props.value
					}else if( typeof props.defaultValue !== 'undefined' ){
						checked[props.defaultValue] = true;
						value = props.defaultValue
					}else if(Array.isArray(props.options)) {  //遍历options，取出默认checked的值
						let obj = {};
						let options = props.options;

						options.map(function(option) {
							if(option.defaultChecked) {
								obj.value = option.value;
							}
						});

						if( typeof obj.value === 'undefined' && options.length > 0){
							obj.value = options[0].value; //如果没有默认checked的值，则用第一个作为默认值
						}
						checked[obj.value] = true;
						value = obj.value
					}

					field.setState({ value , checked });
				}else if( type === 'checkbox' && Array.isArray(props.options) && props.options.length ){
					let checked = {},
						values = [],
	                    options = props.options;

					if( typeof props.value !== 'undefined' && Array.isArray( props.value ) ){
						props.value.forEach( item => {
							checked[ item ] = true;
							values = item;
						});
					}else if( typeof props.defaultValue !== 'undefined' && Array.isArray( props.defaultValue )){
						props.defaultValue.forEach( item => {
							checked[ item ] = true;
							values = item;
						});
					}else if (Array.isArray(props.options)) {
	                    options.map(function(option) {
	                    	if (option.defaultChecked) {
	                    		checked[option.value] = true;
	                    		values.push(option.value);
	                    	}
	                    });
	                }
					field.setState({ value , checked });
				}else if( type === 'select' && Array.isArray(props.options) && props.options.length ){
					if( props.defaultValue ){
						value = props.defaultValue;
					}else if( selected ){
						let selected = props.options.find( item => item.defaultValue );
						value = selected.value;
					}else{
						value = props.options[0].value;
					}
					field.setState({ value });
				}else if( type === 'raw' ){
					typeof props.onReset === 'function' && props.onReset();
				}else{
					field.setState({ value });
				}
			});
		},

		clearData: function ( form ) {
			let formName = form || DEFAULT_FORM;
			let currentForm = Field.forms[formName];

			Object.keys(currentForm).map(function (key) {
				let field = currentForm[key];
				let props = field.props;
				let { type } = field.props;
				let value = '';

				if( props.attrs.disabled || props.attrs.readOnly ){
					return;
				}

				if( type === 'radio' && Array.isArray(props.options) && props.options.length ){
					let selected = props.options[0];
					let checked = {};
					if( typeof selected !== 'undefined' ){
						checked[selected.value] = true;
						value = selected.value;
					}

					field.setState({ value , checked });
				}else if( type === 'checkbox' ){
					field.setState({ value : '' , checked : {} });
				}else if( type === 'select' && Array.isArray(props.options) && props.options.length  ){
					value = props.options[0].value;
					field.setState({ value });
				}else if( type === 'raw' ){
					typeof props.onClear === 'function' && props.onClear();
				}else{
					field.setState({ value });
				}
			});
		}
	},

	mixins: [FieldMixins],

	getDefaultProps() {
	    return {
	    	form: DEFAULT_FORM,
	        id: '',
			attrs: {},
			onValidate: function() {
				return true;
			}
	    };
	},

	getInitialState() {
		let props = this.props;
		let inputValue = this.initValue(props.type);

	    return Object.assign({
	    	error: false,
	    	errorMsg: ''
	    }, inputValue);
	},

	initValue: function(type) {
		let me = this,
			props = me.props;

		let handler = {  //获取input表单的值
			text: function() {
				return {
					value: props.value || props.defaultValue || ''
				}
			},

			textarea: function() {
				return {
					value: props.value || props.defaultValue || ''
				}
			},

			password: function() {
				return {
					value: props.value || props.defaultValue || ''
				}
			},

			radio: function() {

				if( typeof props.value !== 'undefined' ){
					return {
						value : props.value
					};

				}else if( typeof props.defaultValue !== 'undefined' ){
					return {
						value : props.defaultValue
					};

				}else if(Array.isArray(props.options)) {  //遍历options，取出默认checked的值
					let obj = {};
					let options = props.options;

					options.map(function(option) {
						if(option.defaultChecked) {
							obj.value = option.value;
						}
					});

					if( typeof obj.value === 'undefined' && options.length > 0){
						obj.value = options[0].value; //如果没有默认checked的值，则用第一个作为默认值
					}

					return obj;
				}
			},

			checkbox: function() {
				let checked = {},
					values = [],
                    options = props.options;

				if( typeof props.value !== 'undefined' && Array.isArray( props.value ) ){
					props.value.forEach( item => {
						checked[ item ] = true;
						values = item;
					});

				}else if( typeof props.defaultValue !== 'undefined' && Array.isArray( props.defaultValue )){
					props.defaultValue.forEach( item => {
						checked[ item ] = true;
						values = item;
					});

				}else if (Array.isArray(props.options)) {
                    options.map(function(option) {
                    	if (option.defaultChecked) {
                    		checked[option.value] = true;
                    		values.push(option.value);
                    	}
                    });
                }

				return {
					checked: checked,
					value: values
				};
			},

			select: function() {
				if( typeof props.value !== 'undefined' ){
					return {
						value : props.value
					};

				}else if( typeof props.defaultValue !== 'undefined' ){
					return {
						value : props.defaultValue
					};

				}else if(Array.isArray(props.options)) {//props中没有再取options
					let defaultValue;
					let options = props.options;

					options.forEach(function (option) {
						if ( option.defaultValue ) {
							defaultValue = option.value
						}
					});

					if( options.length >= 1 ){
						defaultValue = props.options[0].value;
					}

					return {
						value: defaultValue
					}
				}
			}
		};

		return handler[type] && handler[type]();
	},

	updateValue( nextProps ){
		let newValue = nextProps.value;
		if( newValue === this.props.value || newValue === this.state.value ){
			return;
		}

		switch (this.props.type) {
			case 'text':
				this.setState({ value : newValue });
				break;

			case 'textarea':
				this.setState({ value : newValue });
				break;

			case 'radio':
				this.setState({ value : newValue });
				break;

			case 'select':
				this.setState({ value : newValue });
				break;

			case 'checkbox':
				let checked = {};
				if (Array.isArray( newValue )) {
					newValue.forEach( item => checked[ item ] = true );
					this.setState({ value : newValue , checked });
				}

				break;

			default :
				this.setState({ value : newValue });
		}
	},

	selectFirstOption( nextProps ){
		if( !Array.isArray( nextProps.options ) || Object.equals( nextProps.options , this.props.options ) ){
			return;
		}

		let type = nextProps.type;
		let options = nextProps.options;

		switch ( type ){
			case 'select' :
				this.setState({ value : options[0].value });
				break;

			case 'radio' :
				this.setState({ value : options[0].value });
				break;

			default:
				return ;
		}
	},

	componentWillMount() {
		let me = this,
			props = me.props;

		me._id = Field.uniqueId('form_');
        Field.add(me, props.form);
	},

	componentDidMount() {

	},

	componentWillReceiveProps(nextProps) {//当Field里有raw类型的组件时这里性能好差
		this.updateValue( nextProps );
		this.selectFirstOption( nextProps );//用于options更新重置
	},

	componentWillUnmount() {
		Field.remove(this, this.props.form);
	},

	getEvents() {  //获取props上绑定的事件
		let props = this.props,
			eventHandlers = {};

		Object.keys( props ).forEach( key => {
			if( key.indexOf('on') === 0 && (key.toLowerCase() in window) ){
				eventHandlers[key] = props[ key ];
			}
		});

		return eventHandlers;
	},

	getData() {  //获取表单的数据
		let me = this,
			props = me.props,
			state = me.state,
			data = {};

        switch (props.type) {
            case 'checkbox':
                var values;

                if (Array.isArray(props.options)) {  //遍历被选中的checkbox获取相关数据，返回数组
                    values = [];
                    var checked = state.checked;
                    Object.keys(checked).map(function(key) {
                    	if (checked[key]) {
                    		values.push(key);
                    	}
                    });
                } else {
                    values = state.value;
                }

                me.setValueAt(values, data, props.name);
                break;

            case 'raw':  //自定义表单通过自定义的onData获取数据
            	if ('function' === typeof(props.onData)) {
            		data = props.onData();
            	}
                break;

            default:  //其他类型表单获取value值
           		me.setValueAt(state.value, data, props.name);
                break;
        }

        return data;
	},

	validate: function () {
		let me = this;
        let isValid = true;
        let props = me.props;
        let state = me.state;
        let type = props.type;
        let value = state.value;

        switch(type) {
        	case 'checkbox':
        		if (props.required) {
        			let checked = state.checked;
                    let isOneChecked = false;  //需要用户至少选中一个

                    Object.keys(checked).map(function(key) {
                    	isOneChecked = isOneChecked || checked[key];
                    });

                    isValid = isOneChecked;
                }
            	break;

            case 'text':
			case 'password':
            case 'textarea':
            case 'select':
            	value = value ? ('' + value).trim() : '';
                if (value === '') {
                    if (props.required) {
                        isValid = false;
                    }
                } else {
                    let format = props.format;
                    isValid = me.checkFormat(value, format);
                }
                break;

            default:
            	break;
        }

        isValid = isValid && (!props.required || props.onValidate());

        me.setState({
            error: !isValid
        });

        return isValid;
    },

	handleChange(e, type) {  //用户输入改变，触发onChange的函数
		let me = this;
		let props = me.props;
		let state = me.state;

		if(type === 'checkbox') {
			let newState = {};

			let checked = state.checked,
					key = e.target.value;

			checked[key] = !Boolean(checked[key]);//原值取反
			newState.checked = checked;

	        me.setState(newState, function() {
	        	let {value, checked} = state;

	            if ('function' === typeof(props.onChange)) {
	                props.onChange(value, checked);
	            }

	            if (state.error) {
	                me.validate();
	            }
	        });
		} else {
			let value = e.target.value;
	        me.setState({
	            value: value
	        }, function() {
	            if ('function' === typeof(props.onChange)) {
	            	props.onChange(value);
	            }

	            if (state.error) {
	                me.validate();
	            }
	        });
		}
	},

	renderRaw() {  //渲染空白表单
		let me = this,
			props = me.props,
			state = me.state;
		let { name, placeholder} = props;

        return (
        	<div className="mc-field-raw col-lg">
	        	{
	        		this.props.children
	        	}
        		<div className="form-warn-tip abs">
					<span className="fa fa-times-circle" />
					{props.errorMsg}
				</div>
        	</div>
        )
	},

	renderText() {  //渲染text类型表单
		let me = this,
			props = me.props,
			state = me.state,
			eventHandlers = me.getEvents();

		let {
            id,
            className,
            label,
            name,
            placeholder,
            defaultValue,
            attrs = {}
        } = props;
		return (
			<div className="mc-field-text">
				<input type="text"
					id={id}
					{...attrs}
					{...eventHandlers}
					className="form-control mc-input"
					name={name || ''}
					ref={name}
                    value={ state.value || ''}
					placeholder={placeholder || ''}
					onChange={(e) => me.handleChange(e)}/>

				<div className="form-warn-tip abs">
					<span className="fa fa-times-circle"></span>
					{props.errorMsg}
				</div>
			</div>
		)
	},

	renderPassword() {  //渲染text类型表单
		let me = this,
				props = me.props,
				state = me.state,
				eventHandlers = me.getEvents();

		let {
				id,
				className,
				label,
				name,
				placeholder,
				defaultValue,
				attrs = {}
				} = props;

		return (
				<div className="mc-field-password">
					<input type="password"
						   id={id}
							{...attrs}
							{...eventHandlers}
						   	className="form-control mc-input"
						   	name={name || ''}
                			ref={name}
						   value={ state.value || ''}
						   placeholder={placeholder || ''}
						   onChange={(e) => me.handleChange(e)} />

					<div className="form-warn-tip abs">
						<span className="fa fa-times-circle"></span>
						{props.errorMsg}
					</div>
				</div>
		)
	},

	renderRadio() { //渲染单选表单组
		let me = this;
		let state = me.state;
		let props = me.props;
		let	eventHandlers = me.getEvents();
		let {className, label, options , name, placeholder , attrs } = props;

		if( !Array.isArray(options) ){
			options = [];
		}

		return (
			<div className="mc-field-radio col-lg">
				{
					options.map(function (option){
						let id = Field.uniqueId();
						return (
							<div className={`radio-nice form-control-inline-block ${option.className || ''}`} key={option.value}>
		                        <input type="radio" 
		                        	className="mc-radio-input" 
									checked={ state.value == option.value }
									{...eventHandlers}
									{...attrs}
		                        	name={name}
                					ref={name}
		                        	id={option.id || id}
		                        	value={ typeof option.value !== 'undefined' ? String(option.value) : ''}
		                        	onChange={(e) => me.handleChange(e)} />

		                        <label htmlFor={option.id || id}>{option.label}</label>
		                    </div>
						)
					})
				}
				<div className="form-warn-tip abs">
					<span className="fa fa-times-circle"></span>
					{props.errorMsg}
				</div>
			</div>
		)
	},

	renderCheckbox() {  //渲染checkbox
		let me = this;
		let state = me.state;
		let props = me.props;
		let eventHandlers = me.getEvents();
		let {className = '', label, options , name, placeholder , attrs} = props;

		if( !Array.isArray(options) ){
			options = [];
		}

		return (
			<div className="mc-field-checkbox col-lg">
				{
					options.map(function(option) {
						let id = Field.uniqueId();
						return (
							<div className={`checkbox-nice form-control-inline-block ${option.className || ''}`} key={option.value}>
				                <input type="checkbox" 
				                	className="mc-checkbox-input"
									{...eventHandlers}
									{...attrs}
				                	name={name}
				                	ref={name}
				                	id={option.id || id}
				                	value={ String(option.value) }
				                	checked={ Boolean(state.checked[option.value]) }
									onChange={(e) => me.handleChange(e, 'checkbox')} />

				                <label htmlFor={option.id || id}>{option.label}</label>
				            </div>
			            )
					})
				}
				<div className="form-warn-tip abs">
					<span className="fa fa-times-circle"></span>
					{props.errorMsg}
				</div>
			</div>
		)
	},

	renderSelect() {  //渲染select
		let me = this;
		let state = me.state;
		let props = me.props;
		let eventHandlers = me.getEvents();
		let {className = '', label, options, name, placeholder , attrs} = props;

		if( !Array.isArray(options) ){
			options = [];
		}

		return (
            <div className="mc-field-select" >
                <select
					{...eventHandlers}
					{...attrs}
                	className="form-control mc-select-input"
                	name={name}
                	ref={name}
                	value={state.value}
                	onChange={(e) => me.handleChange(e)}>
                {
                	options.map(function(option, index) {
                		return <option key={index} value={option.value}>{option.text}</option>
                	})
                }
                </select>
				<div className="form-warn-tip abs">
					<span className="fa fa-times-circle"></span>
					{props.errorMsg}
				</div>
            </div>
		)
	},

	renderTextarea() {  //渲染textarea
		let me = this;
		let state = me.state;
		let props = me.props;
		let eventHandlers = me.getEvents();
		let {
            id,
            className,
            label,
            name,
            placeholder,
            rows = 3,
            defaultValue,
			attrs
        } = props;

		return (
            <div className="mc-field-textarea">
                <textarea 
                	className="mc-textarea-input"
					{...eventHandlers}
                	id={id}
                	rows={rows}
                	ref={name}
                	placeholder={placeholder}
					{...attrs}
					onChange={(e) => me.handleChange(e)}
                    value={ state.value || ''} >
                </textarea>
				<div className="form-warn-tip abs">
					<span className="fa fa-times-circle"></span>
					{props.errorMsg}
				</div>
            </div>
		)
	},

	renderEntry() {  //渲染入口函数
		let me = this;
		let type = me.props.type;

		switch(type) {
			case 'text':
				return me.renderText();
			case 'radio':
				return me.renderRadio();
			case 'checkbox':
				return me.renderCheckbox();
			case 'select':
				return me.renderSelect();
			case 'textarea':
				return me.renderTextarea();
			case 'password':
				return me.renderPassword();
			case 'raw':
				return me.renderRaw();
			default:
				break;
		}
	},

	render() {
		let me = this;
		let state = me.state;
		let props = me.props;
		let {id, className, label, required} = props;

		return (
			<div className="mc-module-field">
				<div dataId={ this._id } className={`form-group clearfix ${className || ''} ${state.error ? 'invaild' : ''}`}>
	                <label className={` mc-field-label  col-lg`} htmlFor={id}>
						{ required ? <span className="require">*</span> : ''}
	                	{label}
	                </label>
					{me.renderEntry()}
				</div>
			</div>
		)
	}
});

export default Field;
