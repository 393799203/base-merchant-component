"use strict";

var React = require('react');
var Field = require('../../lib/field/index');
var Modal = require('../../lib/modal/index');
var AjaxMixins = require('../../base/js/AJAX/Ajax.Mixins');
var UploadImage = require('../../lib/imageUploader/UploadImage');
var _ = require('underscore');

require('./index.less');

var FORM_NAME = 'RecordPublisher';

var RecordPublisher = React.createClass({
    mixins: [Field.Mixins, AjaxMixins],

    getDefaultProps: function () {
        return {
            itemId: null,
            URL: null,
            placeholder: '最多不能超过200个字',
            dataFilter: null,
            onSuccess: _.noop,
            onCancel: _.noop
        };
    },

    getInitialState: function () {
        return {
            content: '',
            images: []
        };
    },

    render: function () {
        var state = this.state;
        return (
            <div className="record-publisher">
                <Field type="textarea" form={FORM_NAME} name="content" format={/^.{1,200}$/} required placeholder={this.props.placeholder} errorText="记录格式错误" />
                <Field type="raw" form={FORM_NAME} name="images" onData={this.getFieldData('images')}>
                    <div className={'btn-upload' + (state.images.length > 2 ? ' disabled' : '')}>
                        <UploadImage singleUpload={false} onFinish={this.handleImageUploaded} />
                        <button type="button" disabled={state.images.length > 2} className="xd-btn primary">上传图片</button>
                    </div>
                    最多3张
                    <ul className="upload-image-list clearfix">
                        {state.images.map(function (img, i) {
                            return (
                                <li className="fl" key={i}>
                                    <a className="btn-close" href="javascript:;" onClick={this.removeImage.bind(this, i)}>×</a>
                                    <img src={img + '_80x80.jpg'} width="80" height="80" />
                                </li>
                            );
                        }.bind(this))}
                    </ul>
                </Field>

                <div>
                    <button type="button" className="xd-btn primary" onClick={this.submit}>确认</button>
                    <button type="button" className="xd-btn" onClick={this.close}>取消</button>
                </div>
            </div>
        );
    },

    handleImageUploaded: function (newImgs) {
        var images = this.state.images.concat(newImgs).slice(0, 3);

        this.setState({
            images: images
        });
    },

    removeImage: function (index) {
        var images = this.state.images;
        images.splice(index, 1);

        this.setState({
            images: images
        });
    },

    submit: function () {
        var props = this.props;
        if (!props.URL || !props.itemId) {
            return;
        }

        if (Field.validate(FORM_NAME)) {
            var data = Field.getData(FORM_NAME),
                postData = {
                    itemId: props.itemId,
                    content: data.content,
                    images: _.map(data.images, function (img) {
                        return img.replace(/(.+:)?\/\/[^/]+/, '');
                    })
                };

            if (props.dataFilter) {
                postData = props.dataFilter(postData);
            }

            postData._ajax = 1;

            this.postData(props.URL, postData, function (retData) {
                if (retData.status.code === 1001) {
                    Modal.tip('发表成功');

                    var record = {
                        userId: XD.Util.urltoid(XD.UserInfo.getUserId()),
                        time: Math.floor(+new Date() / 1000),
                        show_content: [data.content],
                        images: data.images
                    };

                    this.props.onSuccess(record);
                }
                else {
                    Modal.alert(retData.result || retData.status.msg);
                }
            });
        }
    },

    close: function () {
        this.props.onCancel();
    }
});

module.exports = RecordPublisher;
