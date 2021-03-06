import React, { Component, PropTypes } from 'react';

class TabWrapper extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            active: 0
        };
        /**
         * @var triggerEventName - 触发tab切换的事件名 mouseOver -> onMouseOver
        */
        const { trigger } = props;
        this.triggerEventName = `on${trigger[0].toUpperCase()}${trigger.slice(1)}`;
    }

    componentWillMount () {
        const active = this.props.active;
        this.setState({
            active
        });
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.active !== nextProps.active) {
            this.setState({
                active: nextProps.active
            });
        }
    }

    getChildTabs () {
        /**
         * @desc 获取tab wrapper下的tab元素
        */
        const me = this;
        const { active } = me.state;
        const { children, lazyLoad } = me.props;

        if (!children) {
            return null;
        }

        const list = React.Children.toArray(children);

        return list.map((item, index) => {
            return React.cloneElement(item, {
                index,
                active,
                lazyLoad: typeof item.props.lazyLoad !== 'undefined' ? item.props.lazyLoad : lazyLoad
            });
        });
    }

    changeTab (i) {
        /**
         * @when tabs changed fire this func
        */
        const me = this;
        const props = me.props;
        const { navs = [] } = props;
        const { active } = me.state;
        const eName = me.triggerEventName;

        if (navs[i].attrs && navs[i].attrs[eName]) {
            navs[i].attrs[eName](i);
        }

        if (props[eName]) { // 外层wrapper绑定的tigger相同的事件
            props[eName](i);
        }

        if (active !== i && props.onChange) { // fire change event
            props.onChange(i, active); // (new, old)
        }

        me.setState({
            active: i
        });
    }

    render () {
        const me = this;
        const { navs, className, theme, type } = me.props;
        const { active } = me.state;
        const childrens = me.getChildTabs();
        const eName = me.triggerEventName;

        return (
            <div className={`mc-tab-wrapper mc-tab-${theme} ${className}`}>
                <ul className={`mc-tab-nav mc-tab-${type} clearfix`}>
                    {
                        navs.map((item, i) => {
                            let itemProps = {};
                            itemProps[eName] = () => me.changeTab(i);
                            if (item.attrs && typeof item.attrs === 'object') {
                                itemProps = Object.assign({}, item.attrs, itemProps);
                            }

                            return (
                                <li className={i === active ? 'active' : null} key={i}>
                                    <a href='javascript:void(0)' {...itemProps}>{item.title}</a>
                                    {
                                        item.children
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
                <div className='tab-wrapper'>
                    {
                        childrens
                    }
                </div>
            </div>
        );
    }
}

TabWrapper.defaultProps = {
    navs: [],
    active: 0,
    theme: 'danger',
    className: '',
    lazyLoad: false,
    trigger: 'click',
    type: 'normal'
};

TabWrapper.propTypes = {
    theme: PropTypes.oneOf(['danger', 'info', 'dark', 'success', 'warning']),
    navs: PropTypes.array.isRequired,
    active: PropTypes.number,
    className: PropTypes.string,
    lazyLoad: PropTypes.bool,
    trigger: PropTypes.string,
    type: PropTypes.oneOf(['normal', 'card', 'block'])
};

export default TabWrapper;
