import React, { Component, PropTypes } from 'react';
import Dropdown from '../dropdown';

const noop = function () {};

export default class MHeader extends Component {
    render () {
        const { user, userOptions, menuOptions, theme, type, className, brand, menuHandler } = this.props;
        const matchedLink = [];
        const activeLink = window.location.href;
        let activeIndex = -9999;

        menuOptions.map((item, index) => {
            if (item.link && activeLink.indexOf(item.link) > -1) {
                matchedLink.push({ item, index });
            }
        });
        if (matchedLink.length === 1) {
            activeIndex = matchedLink[0].index;
        } else if (matchedLink.length > 1) {
            const sortLink = matchedLink.sort((a, b) => {
                if (a.item.link.length > b.item.link.length) {
                    return -1;
                }
                return 1;
            });
            activeIndex = sortLink[0].index;
        }

        return (
            <div className={`mc-header mc-header-${type} bg-${theme} ${className}`}>
                <a href={brand.link ? brand.link : 'javascript:;'} className='mc-header-brand'>
                    {brand.text}
                </a>
                <ul className='mc-header-menu'>
                    {menuOptions.map((item, index) => {
                        return (
                            <li className={activeIndex === index ? 'mc-header-menu-item active' : 'mc-header-menu-item'} key={index}>
                                {
                                    !item.options || (item.options && item.options.length === 0) ?
                                        <a href={item.link} onClick={() => { menuHandler(item, index); }}>{item.text}</a>
                                    :
                                        <Dropdown options={item.options} handleClick={menuHandler}>
                                            <a href='javascript:;'>{item.text}</a>
                                        </Dropdown>
                                }
                            </li>
                        );
                    })}
                </ul>
                {
                    userOptions.length === 0 ?
                        <div className='mc-header-user'>
                            {user.avatar ? <img src={user.avatar} className='mc-header-user-avatar' alt='' /> : null}
                            <div className='mc-header-user-name'>
                                {user.uname ? user.uname : null}
                            </div>
                        </div>
                    :
                        <Dropdown options={userOptions}>
                            <div className='mc-header-user'>
                                {user.avatar ? <img src={user.avatar} className='mc-header-user-avatar' alt='' /> : null}
                                <div className='mc-header-user-name'>
                                    {user.uname ? user.uname : null}
                                </div>
                            </div>
                        </Dropdown>
                }
            </div>
        );
    }
}

MHeader.defaultProps = {
    type: 'fixed',
    theme: 'default',
    className: '',
    brand: {
        text: '商家后台',
        link: '#'
    },
    menuOptions: [],
    user: {},
    userOptions: [],
    menuHandler: noop
};

MHeader.propTypes = {
    type: PropTypes.oneOf(['default', 'fixed']),
    theme: PropTypes.oneOf(['default', 'danger', 'info', 'dark', 'success', 'warning']),
    brand: PropTypes.object,
    className: PropTypes.string,
    menuOptions: PropTypes.array,
    user: PropTypes.object,
    userOptions: PropTypes.array,
    menuHandler: PropTypes.func
};

