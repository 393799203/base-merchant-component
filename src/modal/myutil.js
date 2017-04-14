let idCounter = 0;

const util = {
    noop () {},
    isFunction (fun) {
        return typeof fun === 'function';
    },
    isNumber (num) {
        return typeof num === 'number';
    },
    isString (str) {
        return typeof str === 'string';
    },
    uniqueId (prefix) {
        idCounter += 1;
        const id = idCounter.toString();
        return prefix ? prefix + id : id;
    },
    last (arr) {
        return arr && arr.length >= 1 ? arr[arr.length - 1] : null;
    }
};

util.extend = Object.assign || function (first, ...otherArgs) {
    const target = first;
    for (let i = 0; i < otherArgs.length; i++) {
        const source = otherArgs[i];
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

export default util;
