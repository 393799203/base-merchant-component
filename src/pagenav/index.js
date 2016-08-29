var React = require('react');
var _ = require('underscore');

var PageNav = React.createClass({
    propTypes: {
        list: React.PropTypes.array,
        active: React.PropTypes.number
    },

    getDefaultProps: function () {
        return {
            list: [],
            active: 0
        };
    },

    render: function () {
        return (
            <ul className="xd-page-nav clearfix">
                {this.props.list.map(function (item, i) {
                    return (
                        <li className={i === this.props.active ? 'active' : ''} key={i}>
                            {_.isFunction(item.link) ? <a href="javascript:;" onClick={item.link}>{item.text}</a> : <a href={item.link}>{item.text}</a>}
                        </li>
                    );
                }.bind(this))}
            </ul>
        );
    }
});

module.exports = PageNav;
