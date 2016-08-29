"use strict";

var React = require('react');

require('./index.less');

var Placeholder = React.createClass({
    getDefaultProps: function () {
        return {
            className: '',
            value: '正在加载...',
            children: null
        };
    },

    render: function () {
        var props = this.props;
        return (
            <div className={'xd-placeholder ' + props.className}>
            {props.children ? (
                props.children
            ) : (
                <p>{props.value}</p>
            )}
            </div>
        );
    }
});

module.exports = Placeholder;
