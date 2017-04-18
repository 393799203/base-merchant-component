import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Velocity from 'velocity-animate';
import { PrevArrow, NextArrow } from './arrow';
import Dots from './dots';
import SliderList from './slider-list';

class Slick extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            count: 0,
            currIndex: 0, // 当前展示的slider index
            targetIndex: 0,
            slideStyle: {},
            listStyle: {}
        };
        this.onWindowResized = () => this.onWindowResized;
        this.sliderList = null;
        this.sliderWrapper = null;
        this.tc = null;
        this.mounted = false;
    }

    componentWillMount () {
        const me = this;
        const { initial, slideMove, slideShow } = me.props;

        if (slideMove > slideShow) {
            /* eslint-disable no-console */
            console.warn('slideShow must be greater than slideMove');
        }

        me.setState({
            currIndex: initial,
            count: me.getChildrens().length
        });
    }

    componentDidMount () {
        const me = this;

        me.calcStyle();
        me.autoplay(); // whether autoplay
        me.mounted = true;
        if (window.addEventListener) {
            window.addEventListener('resize', me.onWindowResized);
        } else {
            window.attachEvent('onresize', me.onWindowResized);
        }
    }

    componentWillUnmount () {
        const me = this;

        me.mounted = false;
        if (me.tc) {
            window.clearInterval(me.tc);
        }
        if (window.removeEventListener) {
            window.removeEventListener('resize', me.onWindowResized);
        } else {
            window.detachEvent('onresize', me.onWindowResized);
        }
    }

    onWindowResized () {
        const me = this;
        me.calcStyle();
    }

    getWidth (elem) {
        return elem.getBoundingClientRect().width || elem.offsetWidth || 0;
    }

    getChildrens () {
        const { children } = this.props;
        let nodes = React.Children.toArray(children);

        nodes = nodes.filter((node) => {
            // filter the false/null node
            return !!node;
        });
        return nodes;
    }

    getDotsProps () {
        const me = this;
        const { dots, dotsShow, slideMove, slideShow } = me.props;
        const { currIndex, count } = me.state;

        return {
            dots,
            dotsShow,
            onClick: (e, i) => me.goto(e, i),
            currIndex,
            count,
            slideMove,
            slideShow
        };
    }

    calcStyle () {
        const me = this;
        const { slideShow, infinite } = me.props;
        const { count, currIndex } = me.state;
        const wrapper = me.sliderWrapper;
        const wrapperWidth = me.getWidth(wrapper);
        const slideWidth = wrapperWidth / slideShow;
        const total = infinite ? (slideShow * 2) + count : count;
        const listWidth = slideWidth * total;
        let left;

        if (infinite) {
            left = -(currIndex + slideShow) * slideWidth;
        } else {
            left = -currIndex * slideWidth;
        }

        this.setState({
            slideStyle: {
                width: slideWidth
            },
            listStyle: {
                width: listWidth,
                left
            }
        });
    }

    initRef (instance, key) {
        this[key] = instance;
    }

    autoplay () {
        const me = this;
        const { autoplay, autoplaySpeed, duration } = me.props;
        if (autoplay && !me.tc) {
            me.tc = setInterval(me.next.bind(me), autoplaySpeed + duration);
        }
    }

    calcLeft (index) {
        const me = this;
        const { slideStyle } = me.state;
        const { slideShow, infinite } = me.props;
        const slideWidth = slideStyle.width; // width of single slide item
        const left = infinite ? -(index + slideShow) * slideWidth : -index * slideWidth;

        return left;
    }

    prev () {
        const me = this;
        const { state, props } = me;
        const { slideMove, slideShow, duration, infinite, beforeChange, afterChange } = props;
        const { currIndex, count } = state;
        const sliderListDOM = ReactDOM.findDOMNode(me.sliderList);
        const indexOffset = (count - slideShow) % slideMove;
        let targetIndex = currIndex - slideMove;
        let nextIndex;

        if (me.tc) {
            me.tc = clearInterval(me.tc);
        }

        beforeChange && beforeChange(currIndex);

        if (infinite) {
            if (targetIndex < 0) {
                if (currIndex === 0) {
                    nextIndex = count + targetIndex;
                } else {
                    targetIndex = nextIndex = 0;
                }
            } else {
                nextIndex = targetIndex;
            }
        } else if (targetIndex < 0) {
            nextIndex = targetIndex = 0;
        } else if (currIndex + slideShow === count && indexOffset) {
            nextIndex = targetIndex = currIndex - indexOffset;
        } else {
            nextIndex = targetIndex;
        }

        return new Promise((resolve, reject) => {
            if (currIndex === nextIndex) { // 无变更
                reject();
            }

            const nextLeft = me.calcLeft(nextIndex);
            const targetLeft = me.calcLeft(targetIndex);

            Velocity(sliderListDOM, {
                left: `${targetLeft}px`
            }, {
                duration
            }).then(() => {
                if (me.mounted) {
                    sliderListDOM.style.left = `${nextLeft}px`;
                    me.setState({
                        currIndex: nextIndex
                    }, () => {
                        afterChange && afterChange(nextIndex);
                        resolve();
                    });
                }
            });
        });
    }

    next () {
        const me = this;
        const { state, props } = me;
        const { currIndex } = state;
        const { count } = state;
        const { slideMove, slideShow, duration, infinite, beforeChange, afterChange } = props;
        const sliderListDOM = ReactDOM.findDOMNode(me.sliderList);

        let targetIndex = currIndex + slideMove;
        let nextIndex;

        beforeChange && beforeChange(currIndex);

        if (infinite) {
            if (targetIndex + slideShow > count) {
                if (targetIndex > count) {
                    nextIndex = count - slideShow;
                } else if (targetIndex === count) {
                    nextIndex = 0;
                } else {
                    targetIndex = nextIndex = currIndex + (count - targetIndex);
                }
            } else {
                nextIndex = targetIndex;
            }
        } else if (targetIndex + slideShow >= count) {
            targetIndex = nextIndex = count - slideShow;
        } else {
            nextIndex = targetIndex;
        }

        return new Promise((resolve, reject) => {
            if (currIndex === nextIndex) { // 无变更
                reject();
            }

            const targetLeft = me.calcLeft(targetIndex);
            const nextLeft = me.calcLeft(nextIndex);

            Velocity(sliderListDOM, {
                left: `${targetLeft}px`
            }, {
                duration
            }).then(() => {
                if (me.mounted) {
                    sliderListDOM.style.left = `${nextLeft}px`;
                    me.setState({
                        currIndex: nextIndex
                    }, () => {
                        afterChange && afterChange(nextIndex);
                        resolve();
                    });
                }
            });
        });
    }

    prevClick () {
        const me = this;

        if (me.tc) {
            me.tc = clearInterval(me.tc);
        }

        me.prev().then(() => {
            me.autoplay();
        }, () => {});
    }

    nextClick () {
        const me = this;
        if (me.tc) {
            me.tc = clearInterval(me.tc);
        }

        me.next().then(() => {
            me.autoplay();
        }, () => {});
    }

    mouseEnterHandler () {
        const me = this;
        if (me.props.pauseOnHover && me.tc) {
            me.tc = clearInterval(me.tc);
        }
    }

    mouseLeaveHandler () {
        const me = this;
        if (me.props.pauseOnHover && !me.tc) {
            me.autoplay();
        }
    }

    goto (e, i) {
        const me = this;
        const { slideMove, slideShow, duration, beforeChange, afterChange } = me.props;
        const { currIndex, count } = me.state;
        const sliderListDOM = ReactDOM.findDOMNode(me.sliderList);
        let targetIndex = slideMove * i;
        let nextIndex = targetIndex;

        if (me.tc) {
            me.tc = clearInterval(me.tc);
        }

        beforeChange && beforeChange(currIndex);

        if (targetIndex + slideShow >= count) {
            nextIndex = targetIndex = count - slideShow;
        }

        const targetLeft = me.calcLeft(targetIndex);
        const nextLeft = me.calcLeft(nextIndex);

        return new Promise((resolve) => {
            Velocity(sliderListDOM, {
                left: `${targetLeft}px`
            }, {
                duration
            }).then(() => {
                sliderListDOM.style.left = `${nextLeft}px`;
                me.setState({
                    currIndex: nextIndex
                }, () => {
                    this.autoplay();
                    afterChange && afterChange(nextIndex);
                    resolve();
                });
            });
        });
    }

    render () {
        const me = this;
        /* eslint-disable no-unused-vars */
        const { children, arrows, prevArrow, nextArrow, dots, dotsShow, ...otherAttrs } = me.props;
        const { currIndex, slideStyle, listStyle, count } = me.state;
        const nodes = me.getChildrens();
        const dotsProps = me.getDotsProps();

        return (
            <div className='slider-container'>
                {
                    arrows ?
                        <PrevArrow onClick={() => me.prevClick()} prevArrow={prevArrow} />
                    : null
                }
                <div
                    className='slider-list-wrapper'
                    ref={c => this.initRef(c, 'sliderWrapper')}
                    onMouseEnter={() => me.mouseEnterHandler()}
                    onMouseLeave={() => me.mouseLeaveHandler()}
                >
                    <SliderList
                        ref={c => this.initRef(c, 'sliderList')}
                        currIndex={currIndex}
                        slideStyle={slideStyle}
                        listStyle={listStyle}
                        {...otherAttrs}
                    >
                        {nodes}
                    </SliderList>
                </div>
                {
                    arrows ?
                        <NextArrow onClick={() => me.nextClick()} nextArrow={nextArrow} />
                    : null
                }
                <Dots {...dotsProps} />
            </div>
        );
    }
}

Slick.propTypes = {
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    duration: PropTypes.number,
    arrows: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    initial: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func
};

export default Slick;
