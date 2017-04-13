import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { addEvent, delEvent } from './event';

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
        addEvent(window, 'scroll', me.scrollHandler);
    }

    componentWillUnmount () {
        const me = this;
        delEvent(window, 'scroll', me.scrollHandler);
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
        const { offset } = props;
        const clinetHeight = window.innerHeight || document.documentElement.clientHeight;
        const rect = dom.getBoundingClientRect();
        let topOffset;
        let bottomOffset;

        if (me.isArray(offset)) {
            [topOffset = 0, bottomOffset = 0] = offset;
        }

        if (rect.top + topOffset <= clinetHeight) {
            me.setState({
                show: true
            });
        }
    }

    render () {
        const me = this;
        const { state, props } = me;
        const { show } = state;
        const { width, height, className, children } = props;
        const style = {
            width,
            height
        };

        return (
            <div className={`mc-lazy-load ${className}`} ref={i => this.initRef(i)} style={style}>
                {
                    show ? children : null
                }
            </div>
        );
    }
}

LazyLoad.propTypes = {
    offset: PropTypes.oneOf([
        PropTypes.array,
        PropTypes.number
    ]),
    height: PropTypes.number,
    width: PropTypes.number
};

export default LazyLoad;
