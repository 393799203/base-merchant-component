var React = require('react');
var AddressSelector = require('./AddressSelector.js');
//下面不直接引用src下面的modal是为了避免Module not found: Error: a dependency to an entry point is not allowed
//这个问题，详情：http://slogeor.com/2016/06/13/webpack-require-error.html
var Modal = require('../../lib/modal/index.js');
var Field = require('../../lib/field/index.js');
var PubSub = require('pubsub-js');
var AjaxMixins = require('../../base/js/AJAX/Ajax.Mixins.js');
require('./index.less');
var AddressEditor = React.createClass({
    mixins: [
        Field.Mixins,
        AddressSelector.Mixins,
        AjaxMixins
    ],

    getInitialState: function () {
        return {
            data: this.props.data || {}
        };
    },

    submit: function (type) {

        if (Field.validate()) {

            var that = this;
            var Data = Field.getData();
            var ajaxUrl = '/pc/trade/logistics/address/editaddress';
            var postData = {};

            Data.data.addressId = that.refs.addressId.getDOMNode().value;

            if(type == 'add') ajaxUrl = '/pc/trade/logistics/address/addaddress';

            postData = {
                "addressId": Data.data.addressId,
                "province": Data.data.province,
                "city": Data.data.city,
                "area": Data.data.area,
                "zip": Data.data.zip,
                "address": Data.data.address,
                "realName": Data.data.realName,
                "mobile": Data.data.mobile
            };

            if(type == 'buyer') {
                ajaxUrl = '/pc/trade/order/operate/updatebuyershipinfo';
                postData = {
                    "xdOrderId": Data.data.addressId,
                    "province": Data.data.province,
                    "city": Data.data.city,
                    "area": Data.data.area,
                    "zip": Data.data.zip,
                    "address": Data.data.address,
                    "name": Data.data.realName,
                    "mobile": Data.data.mobile
                };
            }

            //提交数据
            this.postData(ajaxUrl, postData, function(data){
                if(data.status.code == 1001){
                    that.props.modal.close();
                    // 添加新纪录
                    if(type == 'add') {
                        Data.data.addressId = data.result.addressId;
                        Modal.tip('添加成功');
                    } else {
                        Modal.tip('修改成功');
                    }

                    // 暂时添加放这里
                    PubSub.publish('address.update', {
                        self: that.props.self,
                        list: Data.data
                    });
                } else {
                    Modal.alert(data.result.message || data.status.msg);
                }
            });
        }
    },

    cancel: function () {
        alert('取消动作自定义')
    },
    render: function () {
        var state = this.state;
        return (
            <div className="address-editor">
                <input ref="addressId" name="data.addressId" type="hidden" value={state.data.addressId} />
                <Field label="所在地区：" type="raw" required
                    onValidate={this.validateAddress('address')}
                    onData={this.getAddressData('address', 'data')}>

                    <AddressSelector ref="address"
                        province={state.data.province}
                        city={state.data.city}
                        area={state.data.area} />
                </Field>

                <Field label="邮政编码：" name="data.zip" format="int" value={state.data.zip} required errorText="请填写邮政编码" />
                <Field label="街道地址：" name="data.address" type="textarea" format={/^.{5,100}$/} placeholder="请填写街道地址，至少5个字，最多不能超过100个字" value={state.data.address} required errorText="请填写街道地址，至少5个字，最多不能超过100个字" />
                <Field label="收件姓名：" name="data.realName" value={state.data.realName} required errorText="请填写收件人姓名" />
                <Field label="联系电话：" name="data.mobile" format="phone" value={state.data.mobile} required errorText="请正确填写联系电话，固话别忘了加区号" />

                <div className="xd-panel-footer">
                    <a className="xd-btn primary" onClick={this.submit.bind(this, this.props.type)}>确认</a>
                    <a className="xd-btn" onClick={this.cancel}>取消</a>
                </div>
            </div>
        );
    }
});

module.exports = AddressEditor;
