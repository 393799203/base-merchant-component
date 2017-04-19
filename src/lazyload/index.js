import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { addEvent, delEvent } from './event';
import util from './util';

let lazyLoadHandler = null;

class LazyLoad extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: false
        };
        this.dom = null;
        this.scrollHandler = () => this.scrollEventHandler();
    }

    componentDidMount () {
        const me = this;
        const { props } = me;
        let { throttle, debounce } = props;
        if (throttle) {
            throttle = typeof throttle === 'number' ? throttle : undefined;
            lazyLoadHandler = util.throttle(this.scrollHandler, throttle);
        } else if (debounce) {
            debounce = typeof debounce === 'number' ? debounce : undefined;
            lazyLoadHandler = util.debounce(this.scrollHandler, debounce);
        } else {
            lazyLoadHandler = this.scrollHandler;
        }

        addEvent(window, 'scroll', lazyLoadHandler);
        addEvent(window, 'resize', lazyLoadHandler);
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

    scrollEventHandler () {
        const me = this;
        const { props, dom } = me;
        const { offset, once } = props;
        const clientHeight = window.innerHeight || document.documentElement.clientHeight;
        const rect = dom.getBoundingClientRect();
        let topOffset;
        let bottomOffset;

        if (me.isArray(offset)) {
            [topOffset = 0, bottomOffset = 0] = offset;
        } else if (typeof offset === 'number' && !isNaN(offset) && isFinite(offset)) {
            topOffset = bottomOffset = offset;
        }

        if (rect.top - topOffset <= clientHeight && rect.top + rect.height + bottomOffset >= 0) {
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
        delEvent(window, 'scroll', lazyLoadHandler);
        delEvent(window, 'resize', lazyLoadHandler);
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
    offset: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number
    ]),
    once: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    placeholder: PropTypes.element
};

LazyLoad.defaultProps = {
    offset: 200,
    once: false
};

export default LazyLoad;
