import React, { Component, PropTypes } from 'react';
import SubMenu from './SubMenu.js';
import './style/index.less';

export default class Menu extends Component {

    static defaultProps = {
        menus: [],
        width: '225px',
        height: '350px',
        menuBackground: '#494757',
        menuItemHoverBg: '#34323d',
        menuItemBorderColor: '#4f4d5c',
        menuItemColor: '#fff'
    };
    static propTypes = {
        menus: PropTypes.array.isRequired,
        width: PropTypes.string,
        height: PropTypes.string,
        menuBackground: PropTypes.string,
        menuItemHoverBg: PropTypes.string,
        menuItemBorderColor: PropTypes.string,
        menuItemColor: PropTypes.string
    };

    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {

    }
    itemHover (e, bg) {
        const el = e.currentTarget;
        if (el) {
            el.style.backgroundColor = bg;
            const a = el.querySelector('.item');
            a && (a.style.borderColor = bg);
        }
    }
    itemOut (e, bg, border) {
        const el = e.currentTarget;
        if (el) {
            el.style.backgroundColor = bg;
            const a = el.querySelector('.item');
            a && (a.style.borderColor = border);
        }
    }
    render () {
        const menus = this.props.menus;

        const menuBg = { backgroundColor: this.props.menuBackground };
        const menuItemStyle = { backgroundColor: this.props.menuBackground };
        const linkStyle = { borderColor: this.props.menuItemBorderColor, color: this.props.menuItemColor };

        return (
            <div className='menu-box' style={{ width: this.props.width, height: this.props.height }}>
                <ul className='menu-bd' style={menuBg}>
                    {menus && menus.map((item, key) => {
                        return (
                            <li
                                className='menu-item'
                                key={key}
                                style={menuItemStyle}
                                onMouseOver={(e) => { this.itemHover(e, this.props.menuItemHoverBg); }}
                                onMouseOut={(e) => { this.itemOut(e, this.props.menuBackground, this.props.menuItemBorderColor); }}
                            >
                                <a className='item' href={item.link} data-id={item.id} style={linkStyle}>{item.title}</a>
                                <SubMenu menus={item.items} title={item.title} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

