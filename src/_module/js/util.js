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
    extend(){
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !Util.isFunction(target) ) {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if ( length === i ) {
            target = this;
            --i;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( Util.isPlainObject(copy) || (copyIsArray = Util.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Util.isArray(src) ? src : [];

                        } else {
                            clone = src && Util.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[ name ] = Util.extend( deep, clone, copy );

                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    },
    dateFormat ( timestamp, fmt ) { // 时间格式化
        if (timestamp) { // 后端存储的时间戳单位为秒
            let d = new Date(timestamp * 1000);
            let month = d.getMonth();
            let day = d.getDate();
            let hour = d.getHours();
            let minute = d.getMinutes();
            let seconds = d.getSeconds();
            let yy = d.getFullYear();
            let mm = month < 9 ? '0' + parseInt(month + 1,10) : month + 1;
            let dd = day < 10 ? '0' + day : day;
            let h = hour < 10 ? '0' + hour : hour;
            let m = minute < 10 ? '0' + minute : minute;
            let s = seconds < 10 ? '0' + seconds : seconds;

            let time = {
                'yy-mm-dd h:m:s': `${yy}-${mm}-${dd} ${h}:${m}:${s}`,
                'yy-mm-dd': `${yy}-${mm}-${dd}`,
                'yy/mm/dd': `${yy}/${mm}/${dd}`,
                'yy/mm/dd h:m:s': `${yy}/${mm}/${dd} ${h}:${m}:${s}`,
                'yy.mm.dd': `${yy}.${mm}.${dd}`,
                'yy-mm-dd h:m': `${yy}-${mm}-${dd} ${h}:${m}`
            };
            return time[fmt] || time['yy.mm.dd'];
        }
    },
    urlParamToJson (params) {
        let search = params || window.location.search.substring(1);
        return search ? JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
            function (key, value) {
                return key === '' ? value : decodeURIComponent(value);
            }) : {};
    }
};

export default util;
