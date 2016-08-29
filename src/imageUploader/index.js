"use strict";

var React = require('react');

var UploadImage = require('./UploadImage.js');

require('./index.less');
var _ = require('underscore');


var ImageUploader = React.createClass({
    getDefaultProps: function () {
        return {
            value: null,
            onChange: _.noop
        };
    },


    getInitialState: function () {
        return {
            uploading: false,
            URL: this.props.value
        };
    },

    handleStart: function () {
        this.setState({
            uploading: true
        });
    },

    handleFinish: function (URLs) {
        var URL = URLs.pop();

        this.setState({
            URL: URL,
            uploading: false
        }, function () {
            this.props.onChange(URL);
        });
    },

    clear: function () {
        this.setState({
            URL: null
        }, function () {
            this.props.onChange('');
        });
    },

    render: function () {
        var state = this.state;

        return (
            <div className="image-uploader">
                {state.uploading ? (
                    <div className="loading-wrap">
                        <img src="http://s17.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif" width="24" height="24" />
                    </div>
                ) : (
                    state.URL ? (
                        <div className="image-wrap">
                            <a className="image-close" href="javascript:;" onClick={this.clear}>×</a>
                            <img src={state.URL + '_100x100.jpg'} width="98" height="98" />
                        </div>
                    ) : (
                        <div className="placeholder-wrap">
                            <span className="text-helper">＋</span>
                            <span className="text-secondary">上传照片</span>
                        </div>
                    )
                )}

                <UploadImage isMultiple={false} onStart={this.handleStart} onFinish={this.handleFinish} />
            </div>
        );
    }
});

module.exports = ImageUploader;
