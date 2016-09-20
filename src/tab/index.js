import React from 'react';
import './style/index.less';

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
            <ul className="cm-page-nav clearfix">
                {this.props.list.map((item, i) => {
                    return (
                        <li className={i === this.props.active ? 'active' : ''} key={i}>
                            {typeof item.link == 'function' ? <a href="javascript:;" onClick={(e) => item.link(item, i) }>{item.text}</a> : <a href={item.link}>{item.text}</a>}
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = PageNav;
