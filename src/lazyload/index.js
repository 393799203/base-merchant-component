import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { addEvent, delEvent } from './event';
import util from './util';

class LazyLoad extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: false
        };
        this.dom = null;
        this.parent = null;
        this.scrollHandler = () => this.scrollEventHandler();
    }

    componentDidMount () {
        const me = this;
        const { props } = me;
        const { dom } = me;
        let { throttle, debounce } = props;

        if (throttle) {
            throttle = typeof throttle === 'number' ? throttle : undefined;
            me.scrollHandler = util.throttle(this.scrollHandler, throttle);
        } else if (debounce) {
            debounce = typeof debounce === 'number' ? debounce : undefined;
            me.scrollHandler = util.debounce(this.scrollHandler, debounce);
        }

        if (props.overflow) {
            const parent = util.getScrollParent(dom);
            me.parent = parent;
            addEvent(parent, 'scroll', me.scrollHandler);
            addEvent(parent, 'resize', me.scrollHandler);
        } else {
            addEvent(window, 'scroll', me.scrollHandler);
            addEvent(window, 'resize', me.scrollHandler);
        }

        me.scrollHandler();
    }

    componentWillUnmount () {
        this.unmount();
    }

    initRef (ref) {
        this.dom = ReactDOM.findDOMNode(ref);
    }

    isArray (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }

    isAppeared () {
        const me = this;
        const { props, dom } = me;
        const { offset, overflow } = props;
        const clientHeight = window.innerHeight || document.documentElement.clientHeight;
        const rect = dom.getBoundingClientRect();
        let topOffset;
        let bottomOffset;

        if (me.isArray(offset)) {
            [topOffset = 0, bottomOffset = 0] = offset;
        } else if (typeof offset === 'number' && !isNaN(offset) && isFinite(offset)) {
            topOffset = bottomOffset = offset;
        }

        if (overflow) {
            return me.isOverflowAppeared(rect, [topOffset, bottomOffset]);
        }

        return rect.top - topOffset <= clientHeight && rect.top + rect.height + bottomOffset >= 0;
    }

    isOverflowAppeared (rect, offset) {
        const me = this;
        const [topOffset = 0, bottomOffset = 0] = offset;
        const parent = me.parent;
        const pRect = parent.getBoundingClientRect();
        const { top: pTop, height: pHeight } = pRect;
        const { top = 0, height = 0 } = rect;

        if (pTop + pHeight + topOffset >= top && topOffset + height + bottomOffset >= pTop) {
            return true;
        }

        return false;
    }

    scrollEventHandler () {
        const me = this;
        const { props } = me;
        const { once } = props;

        if (me.isAppeared()) {
            me.setState({
                show: true
            }, () => {
                if (once) {
                    me.unmount();
                }
            });
        }
    }

    unmount () {
        const { parent, props } = this;

        if (props.overflow) {
            delEvent(parent, 'scroll', this.scrollHandler);
            delEvent(parent, 'resize', this.scrollHandler);
        } else {
            delEvent(window, 'scroll', this.scrollHandler);
            delEvent(window, 'resize', this.scrollHandler);
        }
    }

    render () {
        const me = this;
        const { state, props } = me;
        const { show } = state;
        const { width, height, className, children, placeholder } = props;
        const style = {
            width,
            height
        };

        return (
            <div className={`mc-lazy-load ${className}`} ref={i => this.initRef(i)} style={style}>
                {
                    show ? children
                    : placeholder || null
                }
            </div>
        );
    }
}

LazyLoad.propTypes = {
    className: PropTypes.string,
    offset: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number
    ]),
    overflow: PropTypes.bool,
    once: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    placeholder: PropTypes.element,
    throttle: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool
    ]),
    debounce: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool
    ])
};

LazyLoad.defaultProps = {
    className: '',
    offset: 200,
    once: true,
    overflow: false,
    debounce: false,
    throttle: false,
    placeholder: null
};

export default LazyLoad;
