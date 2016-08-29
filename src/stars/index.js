"use strict";

var React = require('react');

require('./index.less');

var Stars = React.createClass({
    getDefaultProps: function () {
        return {
            total: 3,
            step: 0
        };
    },

    render: function () {
        return (
            <div className={'xd-stars-wrap l' + this.props.total}>
                <div className={'xd-stars l' + this.props.step}></div>
            </div>
        );
    }
});

module.exports = Stars;
