var React = require('react');
var ReactDOM = require('react-dom');
import { AJAX } from '../../base/js/AJAX/index.js';
require('./index.less');

var LEVEL_PROVINCE = 1,
    LEVEL_CITY = 2,
    LEVEL_AREA = 3;

function validateAddress(ref) {
    var state = this.refs[ref].state;
    return state.province !== '' && state.city !== '' && state.area !== '';
}

function getAddressData(ref, scope) {
    var data = _.pick(this.refs[ref].state, ['province', 'city', 'area']);
    return scope ?  _.setValueAt(data, {}, scope) : data;
}

var AddressSelector = React.createClass({
    statics: {
        levelMap: [null, 'province', 'city', 'area'],
        Mixins: {
            /**
             * 用于Field组件的`validate()`函数
             * @param {string} ref AddressSelector的`ref`属性值
             * @returns {function}
             */
            validateAddress: function (ref) {
                return validateAddress.bind(this, ref)
            },

            /**
             * 用于Field组件的`getData()`函数
             * @param {string} ref AddressSelector的`ref`属性值
             * @param {string} [scope] 地址数据挂载在`state`上的位置
             * @returns {function}
             */
            getAddressData: function (ref, scope) {
                return getAddressData.bind(this, ref, scope);
            }
        }
    },

    getDefaultProps: function () {
        return {
            province: '',
            city: '',
            area: ''
        };
    },

    getInitialState: function () {
        return Object.assign({}, this.props, {
            provinceOptions: [],
            cityOptions: [],
            areaOptions: []
        });
    },

    componentDidMount: function () {
        this.getOptions(LEVEL_PROVINCE);
    },

    updateOptions: function (level, options, isChange) {
        var keyOfLevel = AddressSelector.levelMap[level];
        var state = {};
        state[keyOfLevel + 'Options'] = options;
        if (isChange || options.length === 0) {
            state[keyOfLevel] = '';
        }

        this.setState(state, function () {
            this.getOptions(level + 1);
        });
    },

    /**
     * 获取下拉列表选项
     * @param {number} level 层级
     * @param {boolean} [isChange]
     */
    getOptions: function (level, isChange) {
        var that = this;
        if (level < LEVEL_PROVINCE || level > LEVEL_AREA) {
            return;
        }

        var postData = {
            level: level
        };

        if (level !== LEVEL_PROVINCE) {
            var parentId = this.state[AddressSelector.levelMap[level - 1] + 'ID'];
            if (!parentId) {
                this.updateOptions(level, []);
                return;
            }
            postData.parentId = parentId;
        }

        AJAX({
            url: '/h5/trade/order/getaddrmap',
            type: 'GET',
            data: postData,
            dataType: 'json',
            success:function(data) {
                if (!that || !that.isMounted()) {
                    return;
                }
                let res = JSON.parse(data);
                if( res.status.code == 1001 ){
                    that.updateOptions(level, res.result.addList, isChange);
                }
            },
            fail:function(error) {
                console.log(error)
            }
        })
    },

    handleChange: function (level) {
        var keyOfLevel = AddressSelector.levelMap[level],
            //value = this.refs[keyOfLevel].getDOMNode().value;
            value = ReactDOM.findDOMNode(this.refs[keyOfLevel]).value;
        var state = {};
        state[keyOfLevel] = value;
        this.setState(state, function () {
            this.getOptions(level + 1, true);
        });
    },

    renderOptions: function (level) {
        var keyOfLevel = AddressSelector.levelMap[level];
        this.state[keyOfLevel + 'ID'] = null;
        return this.state[keyOfLevel + 'Options'].map(function (option) {
            if (option.placeZh === this.state[keyOfLevel]) {
                this.state[keyOfLevel + 'ID'] = option.id;
            }
            return (
                <option key={option.id} id={option.id} value={option.placeZh}>{option.placeZh}</option>
            );
        }.bind(this));
    },

    render: function () {
        return (
            <div className="address-select">
                <select ref='province' className="xd-select" name="province"
                    value={this.state.province}
                    onChange={this.handleChange.bind(this, LEVEL_PROVINCE)}>
                    <option value="">省</option>
                    {this.renderOptions(LEVEL_PROVINCE)}
                </select>

                <select ref="city" className="xd-select" name="city"
                    value={this.state.city}
                    onChange={this.handleChange.bind(this, LEVEL_CITY)}>
                    <option value="">市</option>
                    {this.renderOptions(LEVEL_CITY)}
                </select>

                <select ref="area" className="xd-select" name="area"
                    value={this.state.area}
                    onChange={this.handleChange.bind(this, LEVEL_AREA)}>
                    <option value="">区</option>
                    {this.renderOptions(LEVEL_AREA)}
                </select>
            </div>
        );
    }
});

module.exports = AddressSelector;
