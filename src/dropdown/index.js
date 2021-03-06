import React, { Component, PropTypes } from 'react';
import './style/index.less';

const noop = function () {};

export default class Dropdown extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMenu: false,
            activeId: -9999
        };
    }
    toggleMenu () {
        const { showMenu } = this.state;
        this.setState({ showMenu: !showMenu });
    }
    hideMenu () {
        setTimeout(() => {
            this.setState({ showMenu: false });
        }, 300);
    }
    enterItem (id) {
        this.setState({ activeId: id });
    }
    leaveItem () {
        this.setState({ activeId: -9999 });
    }
    render () {
        const { options, handleClick, className = '' } = this.props;
        const { showMenu, activeId } = this.state;

        return (
            <div
                tabIndex={1}
                className={`mc-dropdown ${className}`}
                onBlur={() => { this.hideMenu(); }}
            >
                <div
                    className={showMenu ? 'mc-trigger clearfix active' : 'mc-trigger clearfix'}
                    onClick={() => { this.toggleMenu(); }}
                >
                    {this.props.children}
                </div>
                <div className={showMenu ? 'mc-menu active' : 'mc-menu'}>
                    {
                        options.map((item, index) => {
                            if (!item.id) options[index].id = Math.random().toString(36).substr(2, 16);
                            return (
                                <div
                                    key={index}
                                    className={activeId === item.id ? 'mc-menu-item active' : 'mc-menu-item'}
                                    onMouseEnter={() => { this.enterItem(item.id); }}
                                    onMouseLeave={() => { this.leaveItem(); }}
                                >
                                    <a
                                        className={item.options ? 'mc-item-name has-options' : 'mc-item-name'}
                                        href={item.link ? item.link : ''}
                                        target={item.target ? '_blank' : ''}
                                        onClick={(e) => {
                                            if (!item.link) { e.preventDefault(); }
                                            handleClick(item, index);
                                        }}
                                    >
                                        {item.text}
                                    </a>
                                    {
                                        item.options ?
                                            <div className={activeId === item.id ? 'mc-sub-menu active' : 'mc-sub-menu'}>
                                                {
                                                    item.options.map((subItem, subIndex) => {
                                                        if (!subItem.id) options[index].options[subIndex].id = Math.random().toString(36).substr(2, 16);
                                                        return (
                                                            <a
                                                                key={subIndex}
                                                                className='mc-sub-menu-item'
                                                                href={subItem.link ? subItem.link : ''}
                                                                target={item.target ? '_blank' : ''}
                                                                onClick={(e) => {
                                                                    if (!subItem.link) { e.preventDefault(); }
                                                                    handleClick(item, index, subItem, subIndex);
                                                                }}
                                                            >
                                                                {subItem.text}
                                                            </a>
                                                        );
                                                    })
                                                }
                                            </div>
                                        : null
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    options: [],
    handleClick: noop
};

Dropdown.propTypes = {
    children: PropTypes.node,
    options: PropTypes.array,
    handleClick: PropTypes.func,
    className: PropTypes.string
};

