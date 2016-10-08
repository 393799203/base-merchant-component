/* ************************************************************************** */
/*                                                                            */
/*   Field.Mixins.js                                                          */
/*                                                                            */
/*   By  yuxin <yuxin@mogujie.com>                                            */
/*                                                                            */
/*   Created  2016/02/22 11:36:26 by yuxin                                    */
/*   Updated  2016/02/24 14:40:46 by yuxin                                    */
/*                                                                            */
/* ************************************************************************** */

let REGEX_EMAIL = /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}$/;
let REGEX_MOBILE = /^0?[1][34578][0-9]{9}$/;
let REGEX_PHONE = /(\d{11})|((\d{3,4})-(\d{7,8}))$/;
let REGEX_REALNAME = /^[\u4E00-\u9FA5\uf900-\ufa2d·]{2,30}$/i;
let REGEX_PASSWORD = /^.{6,20}$/;

function isFunction( obj ){
    return obj ? Object.prototype.toString.call( obj ) === '[object Function]' : false;
}

let base = {
    isRegExp: function(reg) {  //是否是正则
        return Object.prototype.toString.call(reg) === '[object RegExp]';
    },

    isElement: function(obj) {
        return !!(obj && obj.nodeType === 1);
    },

    all: function(obj, predicate) {
        if (obj == null) return true;

        if ('function' !== typeof(predicate)) {
            predicate = function(key, value) {
                return value;
            }
        }

        var keys = obj.length !== +obj.length && Object.keys(obj),
            len = (keys || obj).length;

        for (let index = 0; index < len; index++) {
            let currentKey = keys ? keys[index] : index;

            if (!predicate(currentKey, obj[currentKey])) return false;
        }

        return true;
    },

    valueAt: function(obj, keyPath) {  //将user.name格式的字符串设置到对象中{user: {name: ''}}格式
        if (keyPath === undefined || keyPath === null) {
            return undefined;
        }

        let keys = keyPath.split('.');
        if (keys.length === 1) {
            return obj[keyPath];
        }

        let iterator = obj;
        for (let i = 0, len = keys.length; i < len; i++) {
            iterator = iterator[keys[i]];
            if (!iterator) {
                return undefined;
            }
        }

        return iterator;
    },

    setValueAt: function(val, obj, keyPath) {
        if (keyPath === undefined || keyPath === null) {
            return obj;
        }

        let keys = keyPath.split('.');

        if (keys.length === 1) {
            obj[keyPath] = val;
            return obj;
        }

        let iterator = obj;
        let i;
        for (i = 0; i < keys.length - 1; i++) {
            let key = keys[i];
            if (!iterator[key]) {
                iterator[key] = {};
            }
            iterator = iterator[key];
        }

        iterator[keys[i]] = val;

        return obj;
    },

    checkFormat: function(value, format) {
        /**
         * Check whether value matches format; if no format passed in, just check whether value is empty;
         * @param {string|number} value
         * @param {string|RegExp} [format]
         * @returns {boolean}
         */
        if (!value) {
            return false;
        }

        if (this.isRegExp(format) && !format.test(value)) {
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
    },

    validateField: function(fields) {
        let me = this,
            state = me.state,
            values = {};

        if ('string' === typeof(fields)) {
            fields = [fields];
        }

        if (Array.isArray(fields)) {
            fields.map(function (keyPath) {
                values[keyPath] = me.valueAt(state, keyPath);
            });

            return me.all(values);
        } else {
            Object.keys(fields).forEach( (keyPath) => {
                values[keyPath] = me.valueAt(state, keyPath);
            });

            return me.all(values, (key, value) => {
                return this.checkFormat(value, fields[key]);
            });
        }
    },

    getFieldData: function(fields) {
        let me = this,
            state = me.state,
            data = {};

        if ('string' === typeof(fields)) {
            fields = [fields];
        } else if (!Array.isArray(fields)) {
            fields = Object.keys(fields);
        }

        fields.map(function (keyPath) {
            me.setValueAt(me.valueAt(state, keyPath), data, keyPath);
        });

        return data;
    },

    handlePathChange: function(event, keyPath, valueExtractor) {
        let me = this,
            paths = keyPath.split('.'),
            key = paths[0],
            obj = {};

        if (!isFunction(valueExtractor)) {
            event = event === undefined ? valueExtractor : event;
            valueExtractor = me.extractValue;
        }

        me.setValueAt(valueExtractor(event), me.state, keyPath);

        obj[key] = me.state[key];
        this.setState(obj);
    },
    extractValue: function (event) {
        var me = this;
        if ('string' === typeof(event) || 'number' === typeof(event)) {
            return event;
        }

        let target = event.target;
        if (me.isElement(target)) {
            if (target.tagName.toLowerCase() === 'input' && target.type === 'checkbox') {
                return target.checked;
            }

            return target.value;
        }

        return;
    }        
};

//export default base;
module.exports = base;