import Reqwest from 'reqwest';

const util = {
    fetch (options) {
        const url = options.url;
        const type = options.type || options.method || 'POST';
        const data = options.data || {};
        const dataType = options.dataType || 'json';
        const setting = {
            url,
            method: type,
            headers: {
                Accept: 'application/json'
            },
            contentType: options.contentType || 'application/x-www-form-urlencoded',
            type: dataType,
            data
        };
        return Reqwest(setting).then((resData) => {
            return resData;
        }).fail(() => {
            Notification.open({
                message: '服务器异常'
            });
        });
    },
    deepClone (obj) {
        const cloneObj = JSON.stringify(obj);
        return JSON.parse(cloneObj);
    },
    extend (...arg) {
        let options;
        let name;
        let src;
        let copy;
        let copyIsArray;
        let clone;
        let target = arg[0] || {};
        let i = 1;
        let deep = false;
        const length = arg.length;

        // Handle a deep copy situation
        if (typeof target === 'boolean') {
            deep = target;
            target = arg[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== 'object' && typeof target !== 'function') {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if (length === i) {
            target = this;
            i -= 1;
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            options = arg[i];
            if (options !== null) {
                // Extend the base object
                for (name in options) {
                    if (Object.prototype.hasOwnProperty.call(options, name)) {
                        src = target[name];
                        copy = options[name];
                        if (target !== copy) {
                            // Recurse if we're merging plain objects or arrays
                            copyIsArray = copy.constructor === Array;
                            if (deep && copy && (copy.constructor === Object || copyIsArray)) {
                                if (copyIsArray) {
                                    copyIsArray = false;
                                    clone = src && src.constructor === Array ? src : [];
                                } else {
                                    clone = src && src.constructor === Object ? src : {};
                                }

                                // Never move original objects, clone them
                                target[name] = util.extend(deep, clone, copy);

                                // Don't bring in undefined values
                            } else if (copy !== undefined) {
                                target[name] = copy;
                            }
                        }
                    }
                }
            }
        }

        // Return the modified object
        return target;
    },

    // extend (target, ...args) {
    //     if (target == null) {
    //         throw new TypeError('Cannot convert undefined or null to object');
    //     }

    //     const to = Object(target);

    //     for (let index = 1; index < args.length; index++) {
    //         const nextSource = args[index];
    //         if (nextSource != null) { // Skip over if undefined or null
    //             for (const nextKey in nextSource) {
    //                 // Avoid bugs when hasOwnProperty is shadowed
    //                 if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
    //                     to[nextKey] = JSON.parse(JSON.stringify(nextSource[nextKey]));
    //                 }
    //             }
    //         }
    //     }
    //     return to;
    // },
    dateFormat (timestamp, fmt) { // 时间格式化
        if (timestamp) { // 后端存储的时间戳单位为秒
            const d = new Date(timestamp * 1000);
            const month = d.getMonth();
            const day = d.getDate();
            const hour = d.getHours();
            const minute = d.getMinutes();
            const seconds = d.getSeconds();
            const yy = d.getFullYear();
            const mm = month < 9 ? `0${parseInt(month + 1, 10)}` : month + 1;
            const dd = day < 10 ? `0${day}` : day;
            const h = hour < 10 ? `0${hour}` : hour;
            const m = minute < 10 ? `0${minute}` : minute;
            const s = seconds < 10 ? `0${seconds}` : seconds;

            const time = {
                'yy-mm-dd h:m:s': `${yy}-${mm}-${dd} ${h}:${m}:${s}`,
                'yy-mm-dd': `${yy}-${mm}-${dd}`,
                'yy/mm/dd': `${yy}/${mm}/${dd}`,
                'yy/mm/dd h:m:s': `${yy}/${mm}/${dd} ${h}:${m}:${s}`,
                'yy.mm.dd': `${yy}.${mm}.${dd}`,
                'yy-mm-dd h:m': `${yy}-${mm}-${dd} ${h}:${m}`
            };
            return time[fmt] || time['yy.mm.dd'];
        }
        return fmt;
    },
    urlParamToJson (params) {
        const search = params || window.location.search.substring(1);
        return search ? JSON.parse(`{"${search.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
            (key, value) => {
                return key === '' ? value : decodeURIComponent(value);
            }) : {};
    }
};

export default util;
