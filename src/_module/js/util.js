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
    }
};

export default util;
