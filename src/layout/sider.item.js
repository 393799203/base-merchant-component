import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMenu: false,
            activeIndex: -9999
        };
    }
    componentDidMount () {
        this.getActiveIndex(this.props);
    }
    componentWillReceiveProps (nextProps) {
        // this.setState({
        //     showMenu: false,
        //     activeIndex: -9999
        // }, () => {
        //     this.getActiveIndex(nextProps);
        // });

        const { menuItem, activeLink = window.location.href } = nextProps;
        const matchedLink = [];
        if (!menuItem.options) {
            if (activeLink.indexOf(menuItem.link) > -1) {
                this.setState({
                    activeIndex: 9999
                });
            } else {
                this.setState({
                    activeIndex: -9999
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
                activeIndex: sortLink[0].index
            });
        } else {
            this.setState({
                activeIndex: -9999
            });
        }
    }
    getActiveIndex (props) {
        const { menuItem, activeLink = window.location.href } = props;
        const matchedLink = [];
        if (!menuItem.options) {
            if (activeLink.indexOf(menuItem.link) > -1) {
                this.setState({
                    activeIndex: 9999
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
        const { menuItem, className, siderHandler } = this.props;
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
                            {
                                showMenu ?
                                    <div className='sub-menu active'>

                                        {
                                            menuItem.options.map((item, index) => {
                                                return (
                                                    <a
                                                        key={index}
                                                        className={activeIndex === index ? 'sub-item-name active' : 'sub-item-name'}
                                                        href={item.link || ''}
                                                        target={item.target || ''}
                                                        onClick={() => { siderHandler(menuItem, item, index); }}
                                                    >
                                                        {item.text}
                                                    </a>
                                                );
                                            })
                                        }

                                    </div>
                                : null
                            }
                        </div>
                    :
                        <a
                            className={activeIndex === 9999 ? `menu-item-wrapper active ${className}` : `menu-item-wrapper ${className}`}
                            href={menuItem.link}
                            target={menuItem.target || ''}
                            onClick={() => { siderHandler(menuItem); }}
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
    activeLink: window.location.href,
    siderHandler: () => {}
};

Item.propTypes = {
    menuItem: PropTypes.object,
    className: PropTypes.string,
    activeLink: PropTypes.string,
    siderHandler: PropTypes.func
};

