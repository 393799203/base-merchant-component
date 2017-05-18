import React, { Component, PropTypes } from 'react';
import Item from './sider.item';

export default class Sider extends Component {
    render () {
        const { type, theme, menuOptions, className, activeLink, siderHandler } = this.props;

        return (
            <div className={`mc-sider mc-sider-${type} bg-${theme} ${className}`}>
                <div className='mc-sider-inner'>
                    {
                        menuOptions.map((menuItem, index) => {
                            return (
                                <Item
                                    key={index}
                                    menuItem={menuItem}
                                    activeLink={activeLink}
                                    className={className}
                                    siderHandler={siderHandler}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

Sider.defaultProps = {
    type: 'fixed',
    theme: 'light',
    menuOptions: [],
    className: '',
    activeLink: window.location.href,
    siderHandler: () => {}
};

Sider.propTypes = {
    type: PropTypes.oneOf(['default', 'fixed']),
    theme: PropTypes.oneOf(['default', 'danger', 'info', 'dark', 'success', 'warning', 'light']),
    menuOptions: PropTypes.array,
    className: PropTypes.string,
    activeLink: PropTypes.string,
    siderHandler: PropTypes.func
};

