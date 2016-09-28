"use strict";

/**
 * Created by neo on 13/4/15.
 */
var _ = require('underscore');

var REGEX_EMAIL = /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}$/;
var REGEX_MOBILE = /^0?[1][34578][0-9]{9}$/;
var REGEX_PHONE = /(\d{11})|((\d{3,4})-(\d{7,8}))$/;
var REGEX_REALNAME = /^[\u4E00-\u9FA5\uf900-\ufa2d·]{2,30}$/i;
var REGEX_PASSWORD = /^.{6,20}$/;

_.mixin({
    valueAt: function valueAt(obj, keyPath) {
        if (keyPath === undefined || keyPath === null) {
            return undefined;
        }

        var keys = keyPath.split('.');
        if (keys.length === 1) {
            return obj[keyPath];
        }

        var iterator = obj;
        for (var i = 0, len = keys.length; i < len; i++) {
            iterator = iterator[keys[i]];
            if (!iterator) {
                return undefined;
            }
        }

        return iterator;
    },

    setValueAt: function setValueAt(val, obj, keyPath) {
        if (keyPath === undefined || keyPath === null) {
            return obj;
        }

        var keys = keyPath.split('.');
        if (keys.length === 1) {
            obj[keyPath] = val;
            return obj;
        }

        var iterator = obj;
        for (var i = 0, len = keys.length - 1; i < len; i++) {
            var key = keys[i];
            if (!iterator[key]) {
                iterator[key] = {};
            }
            iterator = iterator[key];
        }

        iterator[keys[i]] = val;

        return obj;
    },

    isPureObject: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    },

    merge: function merge(dest, src) {
        for (var key in src) {
            if (!src.hasOwnProperty(key)) {
                continue;
            }

            var destVal = dest[key], srcVal = src[key];
            if (destVal === srcVal) {
                continue;
            }

            if (destVal && _.isPureObject(destVal) && _.isPureObject(srcVal)) {
                _.merge(destVal, srcVal);
            }
            else {
                dest[key] = srcVal;
            }
        }
    }
});

/**
 * Check whether value matches format; if no format passed in, just check whether value is empty;
 * @param {string|number} value
 * @param {string|RegExp} [format]
 * @returns {boolean}
 */
function checkFormat(value, format) {
    if (!value) {
        return false;
    }

    if (_.isRegExp(format) && !format.test(value)) {
        return false;
    }

    switch (format) {
        case 'number':
            return !isNaN(+value);

        case 'int':
            value = +value;
            return !isNaN(value) && Math.floor(value) === value;

        case '+int':
            value = +value;
            return !isNaN(value) && value > 0 && Math.floor(value) === value;

        case 'mobile':
            return REGEX_MOBILE.test(value);

        case 'phone':
            return REGEX_PHONE.test(value);

        case 'email':
            return REGEX_EMAIL.test(value);

        case 'realname':
            return REGEX_REALNAME.test(value);

        case 'password':
            return REGEX_PASSWORD.test(value);

        default:
            return value !== undefined && value !== null && ('' + value).length > 0;
    }
}

function validateField(fields) {
    var state = this.state,
        values = {};

    if (_.isString(fields)) {
        fields = [fields];
    }

    if (_.isArray(fields)) {
        _.each(fields, function (keyPath) {
            values[keyPath] = _.valueAt(state, keyPath);
        });

        return _.every(values);
    }
    else {
        _.each(fields, function (field, keyPath) {
            values[keyPath] = _.valueAt(state, keyPath);
        });

        return _.every(values, function (value, key) {
            return checkFormat(value, fields[key]);
        });
    }
}

function getFieldData(fields) {
    var state = this.state,
        data = {};

    if (_.isString(fields)) {
        fields = [fields];
    }
    else if (!_.isArray(fields)) {
        fields = _.keys(fields);
    }

    _.each(fields, function (keyPath) {
        _.setValueAt(_.valueAt(state, keyPath), data, keyPath);
    });

    return data;
}

function handlePathChange(keyPath, valueExtractor, event) {
    var paths = keyPath.split('.');

    if (!_.isFunction(valueExtractor)) {
        event = event === undefined ? valueExtractor : event;
        valueExtractor = this.extractValue;
    }

    _.setValueAt(valueExtractor(event), this.state, keyPath);

    this.setState(_.pick(this.state, paths[0]));
}

module.exports = {
    /**
     * Handle change on state for keyPath, which is a string like 'data.user.name'
     * @param {string} keyPath
     * @param {function} [valueExtractor]
     */
    handlePathChange: function (keyPath, valueExtractor) {
        return handlePathChange.bind(this, keyPath, valueExtractor);
    },

    extractValue: function (event) {
        if (_.isString(event) || _.isNumber(event)) {
            return event;
        }

        var target = event.target;
        if (_.isElement(target)) {
            if (target.tagName === 'INPUT' && target.type === 'checkbox') {

                return target.checked;
            }

            return target.value;
        }

        return undefined;
    },

    /**
     * 通用校验生成器
     * @param {string|[string]|{}} fields 需要校验的state下的字段，多个则传入数组
     * @returns {function}
     */
    validateField: function (fields) {
        return validateField.bind(this, fields)
    },

    /**
     * 通用获取数据生成器
     * @param {string|[string]|{}} fields 需要获取的state下的字段，多个则传入数组
     * @returns {function}
     */
    getFieldData: function (fields) {
        return getFieldData.bind(this, fields);
    },

    checkFormat: checkFormat
};
