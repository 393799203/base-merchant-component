import React, { Component, PropTypes } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

export default class Item extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMenu: false,
            activeIndex: -9999
        };
    }
    componentDidMount () {
        const { menuItem, activeLink } = this.props;
        const matchedLink = [];
        if (!menuItem.options) {
            if (activeLink.indexOf(menuItem.link) > -1) {
                this.setState({
                    showMenu: true
                });
            }
            return;
        }
        menuItem.options.map((item, index) => {
            if (activeLink.indexOf(item.link) > -1) {
                matchedLink.push({ item, index });
            }
        });
        if (matchedLink.length === 1) {
            this.setState({
                showMenu: true,
                activeIndex: matchedLink[0].index
            });
        } else if (matchedLink.length > 1) {
            const sortLink = matchedLink.sort((a, b) => {
                if (a.item.link.length > b.item.link.length) {
                    return -1;
                }
                return 1;
            });
            this.setState({
                showMenu: true,
                activeIndex: sortLink[0].index
            });
        }
    }
    toggleMenu () {
        const { showMenu } = this.state;
        this.setState({ showMenu: !showMenu });
    }
    render () {
        const { menuItem, className } = this.props;
        const { showMenu, activeIndex } = this.state;

        return (
            <div>
                {
                    menuItem.options ?
                        <div className={showMenu ? `menu-item-wrapper active ${className}` : `menu-item-wrapper ${className}`}>
                            <div
                                className={showMenu ? 'menu-item-trigger clearfix active' : 'menu-item-trigger clearfix'}
                                onClick={() => { this.toggleMenu(); }}
                            >
                                <i className={`iconfont icon-${menuItem.icon}`} />
                                {menuItem.text}
                                {
                                    showMenu ?
                                        <i className='iconfont icon-unfold menu-arrow fr' />
                                    :
                                        <i className='iconfont icon-right menu-arrow fr' />
                                }
                            </div>
                            <VelocityTransitionGroup
                                enter={{ animation: 'slideDown' }}
                                leave={{ animation: 'slideUp' }}
                            >
                                {
                                    showMenu ?
                                        <div className='sub-menu active'>

                                            {
                                                menuItem.options.map((item, index) => {
                                                    return (
                                                        <a
                                                            key={index}
                                                            className={activeIndex === index ? 'sub-item-name active' : 'sub-item-name'}
                                                            href={item.link ? item.link : ''}
                                                            target={item.target ? '_blank' : ''}
                                                        >
                                                            {item.text}
                                                        </a>
                                                    );
                                                })
                                            }

                                        </div>
                                    : null
                                }
                            </VelocityTransitionGroup>
                        </div>
                    :
                        <a
                            className={showMenu ? `menu-item-wrapper active ${className}` : `menu-item-wrapper ${className}`}
                            href={menuItem.link}
                            target={menuItem.target || ''}
                        >
                            <i className={`iconfont icon-${menuItem.icon}`} />
                            {menuItem.text}
                        </a>
                }
            </div>

        );
    }
}

Item.defaultProps = {
    menuItem: {},
    className: '',
    activeLink: window.location.href
};

Item.propTypes = {
    menuItem: PropTypes.object,
    className: PropTypes.string,
    activeLink: PropTypes.string
};

