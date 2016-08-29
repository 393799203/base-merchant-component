var Modal = require('../../../lib/modal/index.js');
var AJAX = require('./AJAX.js');
var _ = require('underscore');

var AjaxMixins = {

    /**
     * Common ajax function
     * @param {string} ajaxUrl
     * @param {'GET'|'POST'} type
     * @param {object} [data]
     * @param {function} [callback]
     * @return {$.Deferred}
     */
    ajax: function(ajaxUrl, type, data, callback){
        if (_.isFunction(data)) {
            callback = callback || data || _.noop;
            data = {}
        }
        return AJAX({
            url: ajaxUrl,
            type: type,
            data: data,
            dataType: 'json',
            success: function() {
                callback.call(this, retData);
            },
            fail: function() {
                Modal.alert('网络错误，请稍候刷新重试。');
            }
        })
    },

    /**
     * Common post function
     * @param {string} ajaxUrl
     * @param {object} [postData]
     * @param {function} [callback]
     * @return {$.Deferred}
     */
    postData: function(ajaxUrl, postData, callback){
        return this.ajax(ajaxUrl, 'POST', postData, callback);
    },

    /**
     * Common get function
     * @param {string} ajaxUrl
     * @param {object} [queries]
     * @param {function} [callback]
     * @return {$.Deferred}
     */
    getData: function (ajaxUrl, queries, callback) {
        return this.ajax(ajaxUrl, 'GET', queries, callback);
    }
};

module.exports = AjaxMixins;
