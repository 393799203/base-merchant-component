"use strict";

var React = require('react');
var Field = require('../../lib/field/index');

require('./index.less');

var Capture = React.createClass({
    mixins: [Field.Mixins],

    getDefaultProps: function () {
        return {
            enabled: false,
            onChange: null
        };
    },

    getInitialState: function () {
        return {
            captureId: null,
            check: [0, 0, 0, 0]
        };
    },

    componentDidMount: function () {
        //if (this.props.enabled) {
            this.getCaptureImage();
        //}
    },
    componentWillReceiveProps: function (props) {
        //if (props.enabled && !this.props.enabled) {
        //    this.getCaptureImage();
        //}
        if(this.state.captureId && this.state.captureId.indexOf(props.captureId) == -1 ){
            this.state.captureId = props.captureId;
        }

    },

    render: function () {
        var state = this.state;
        var className = 'capture-field' + (this.props.enabled ? '' : ' hide'),
            imageURL = state.captureId ? 'url(http://www.xiaodian.com/api/validate/captcha/' + state.captureId + ')' : '#fff'; //账户合并修改

        return (
            <Field className={className} type="raw" onData={this.getFieldData('check')}>
                <div className="clearfix">
                    <span>请点击下方图片,将她们转到正确方向</span>
                    <a className="text-helper fr" href="javascript:;" onClick={this.getCaptureImage}>换一组</a>
                </div>
                <ul className="capture-list">
                {state.check.map(function (value, column) {
                    var style = {
                        background: imageURL + ' ' + (-column * 75) + 'px ' + (-value * 75) + 'px'
                    };

                    return (
                        <li key={column} style={style} onClick={this.handleClick.bind(this, column)}></li>
                    );
                }.bind(this))}
                </ul>
            </Field>
        );
    },

    handleClick: function (column) {
        var check = this.state.check;
        check[column] = (check[column] + 1) % 4;

        this.setState({
            check: check
        });
        if (this.props.onChange) {
            this.props.onChange(column, check);
        }
    },

    getCaptureImage: function () { //账户合并修改
        this.setState({
            captureId: this.props.captureId + "?key=" + new Date().getTime()
        });
    }
});

module.exports = Capture;
