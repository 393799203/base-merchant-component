"use strict";

var React = require('react');

var FieldMixins = require('./Field.Mixins');

var DEFAULT_FORM = 'default';

var _ = require('underscore');

require('./style/index.less');

/**
 * @author nanzhu
 * @desc 表单组件 module/field/Field.jsx

 props:
 - label: label名
 - type: (radio|checkbox|select|raw|...)
 - name: 数据属性名
 - [form]: field所属form名称，默认为"default"
 - [options]: (radio|checkbox|select)必需字段
 - [value]: 默认值，checkbox需传入对象，KEY为对应checkbox的value，VALUE为该checkbox是否选中(bool)
 - [required]: 是否必填
 - [disabled]: 是否禁止，注意目前仅mc-input适用
 - [format]: 数据格式
 - [placeholder]: 默认值
 - [errorText]: 错误时提示文案
 - [onValidate]: 额外校验函数，[type='raw']时若未传入则该field需自行校验
 - [onData]: 用于[type='raw']时，若未传入则该field包含数据需自行处理

 静态方法:
 - Field.validate([form]): 校验表单form数据合法性
 - Field.getData([form]): 获取表单form的所有数据

 */

var returnTrue = function returnTrue() {
    return true;
};

var Field = React.createClass({
    statics: {
        forms: {},

        addField: function (field, form) {
            if (Field.forms[form] === undefined) {
                Field.forms[form] = {};
            }

            Field.forms[form][field._id] = field;
        },

        removeField: function (field, form) {
            delete Field.forms[form][field._id];
        },

        validate: function (form) {
            form = form || DEFAULT_FORM;

            return _.all(Field.forms[form], function (field) {
                return field.validate();
            });
        },

        getData: function (form) {
            form = form || DEFAULT_FORM;

            var data = {};
            _.each(Field.forms[form], function (field, key) {
                // use deep merge
                _.merge(data, field.getData());
            });

            return data;
        },

        objectToOptions: function (optionObject) {
            return _.map(optionObject, function (val, key) {
                return {
                    text: val,
                    value: key
                };
            });
        },

        Mixins: FieldMixins
    },

    propTypes: {
        label: React.PropTypes.string,
        className: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        form: React.PropTypes.string,
        options: React.PropTypes.array,
        //format: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        errorText: React.PropTypes.string,
        required: React.PropTypes.bool,
        onValidate: React.PropTypes.func,
        onData: React.PropTypes.func,
        disabled: React.PropTypes.bool,
    },

    getDefaultProps: function () {
        return {
            type: 'text',
            label: null,
            form: DEFAULT_FORM,
            required: false,
            format: 'text',
            options: [],
            onValidate: returnTrue,
            onData: function () {
                return {};
            }
        };
    },

    getInitialState: function () {
        var props = this.props,
            state = {
                error: props.error,
                errorText: props.errorText
            };

        switch (this.props.type) {
            case 'raw':
                state.value = null;
                break;

            case 'checkbox':
                var checked = {},
                    values = this.props.value;

                if (_.isArray(this.props.options)) {
                    this.props.options.forEach(function (option) {
                        checked[option.value] = _.indexOf(values, option.value) > -1;
                    });
                    state.checked = checked;
                }

                state.value = values;
                break;

            case 'select':
                var initialValue = this.props.value;
                state.value = this.props.options.reduce(function (value, option) {
                    return option.value == initialValue ? option.value : value;
                }, (this.props.options[0] || {value: ''}).value);
                break;

            default:
                state.value = this.props.value;
        }

        return state;
    },

    componentWillReceiveProps: function (props) {
        var changedProps = {};
        _.each(props, function (prop, key) {
            if (prop != this.props[key]) {
                changedProps[key] = prop;
            }
        }, this);

        this.setState(_.pick(changedProps, _.keys(this.state)));

        if (this.props.type === 'raw' && this.props.onValidate !== returnTrue && this.state.error) {
            this.validate();
        }
    },

    componentWillMount: function () {
        this._id = _.uniqueId('fd_');
        Field.addField(this, this.props.form);
    },

    componentWillUnmount: function () {
        Field.removeField(this, this.props.form);
    },

    handleChange: function (event) {
        var value = event.target.value;
        this.setState({
            value: value
        }, function () {
            if (_.isFunction(this.props.onChange)) {
                this.props.onChange(value);
            }

            if (this.state.error) {
                this.validate();
            }
        });
    },

    handleCheckboxChange: function (event) {
        var newState = {};

        if (_.isArray(this.props.options)) {
            var checked = this.state.checked,
                key = event.target.value;

            checked[key] = event.target.checked;

            newState.checked = checked;
        }
        else {
            newState.value = event.target.checked;
        }

        this.setState(newState, function () {
            if (_.isFunction(this.props.onChange)) {
                this.props.onChange(_.pick(this.state, ['value', 'checked']));
            }

            if (this.state.error) {
                this.validate();
            }
        });
    },

    validate: function () {
        var isValid = true;
        var type = this.props.type;

        if (type !== 'raw') {
            var value = this.state.value;

            if (type === 'checkbox') {
                if (this.props.required) {
                    var isOneChecked = false;
                    for (var valueKey in value) {
                        if (value.hasOwnProperty(valueKey)) {
                            isOneChecked = isOneChecked || value[valueKey];
                        }
                    }

                    isValid = isOneChecked;
                }
            }
            else {
                value = value ? ('' + value).trim() : '';
                if (value === '') {
                    if (this.props.required) {
                        isValid = false;
                    }
                }
                else {
                    var format = this.props.format;
                    isValid = FieldMixins.checkFormat(value, format);
                }
            }
        }

        isValid = isValid && (!this.props.required || this.props.onValidate());

        this.setState({
            error: !isValid
        });

        return isValid;
    },

    getData: function () {
        var data = {};
        switch (this.props.type) {
            case 'checkbox':
                var values;

                if (_.isArray(this.props.options)) {
                    values = [];
                    var checked = this.state.checked;

                    for (var valueKey in checked) {
                        if (checked.hasOwnProperty(valueKey) && checked[valueKey]) {
                            values.push(valueKey);
                        }
                    }
                }
                else {
                    values = this.state.value;
                }

                _.setValueAt(values, data, this.props.name);
                break;

            case 'raw':
                data = this.props.onData();
                break;

            default:
                _.setValueAt(this.state.value, data, this.props.name);
                break;
        }

        return data;
    },

    renderChild: function () {
        var eventHandlers = {};
        _.each(this.props, function (value, key) {
            if (key.indexOf('on') === 0 && (key.toLowerCase() in window)) {
                eventHandlers[key] = value;
            }
        });

        switch (this.props.type) {
            case 'radio':
                return this.props.options.map(function (option, index) {
                    return (
                        <label className="mc-option" key={index}>
                            <input className="mc-radio"
                                type="radio"
                                value={option.value}
                                checked={this.state.value == option.value}
                                {...eventHandlers}
                                onChange={this.handleChange} />
                            {option.text}
                        </label>
                    )
                }.bind(this));

            case 'checkbox':
                return _.isArray(this.props.options) ? (
                    this.props.options.map(function (option, index) {
                        return (
                            <label className="mc-option" key={index}>
                                <input className="mc-checkbox"
                                    type="checkbox"
                                    value={option.value}
                                    checked={this.state.checked[option.value]}
                                    {...eventHandlers}
                                    onChange={this.handleCheckboxChange} />
                                {option.text}
                            </label>
                        )
                    }.bind(this))
                ) : (
                    <label className="mc-option">
                        <input className="mc-checkbox"
                            type="checkbox"
                            checked={this.state.value}
                            {...eventHandlers}
                            onChange={this.handleCheckboxChange} />
                        {this.props.options}
                    </label>
                );

            case 'select':
                return (
                    <select className="mc-select"
                        value={this.state.value}
                        disabled={this.props.disabled}
                        {...eventHandlers}
                        onChange={this.handleChange}>
                    {this.props.options.map(function (option, index) {
                        return (
                            <option key={index} value={option.value}>{option.text}</option>
                        );
                    }.bind(this))}
                    </select>
                );

            case 'textarea':
                return (
                    <textarea className="mc-textarea"
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        {...eventHandlers}
                        onChange={this.handleChange}></textarea>
                );

            case 'raw':
                return this.props.children;

            default:
                return (
                    <input className="mc-input" type={this.props.type} disabled={this.props.disabled}
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        {...eventHandlers}
                        onChange={this.handleChange} />
                )
        }
    },

    render: function () {
        var props = this.props,
            state = this.state,
            classNames = ['mc-form-group', props.className];
        if (state.error) {
            classNames.push('invalid');
        }

        return (
            <div className={classNames.join(' ')}>
                {props.label ? <label className={props.required ? 'mc-label required' : 'mc-label'}>{props.label}</label> : null}
                <div className="mc-field">
                    {this.renderChild()}
                </div>
                <div className="mc-form-tip">{state.errorText}</div>
            </div>
        );
    }
});

module.exports = Field;

