import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Velocity from 'velocity-animate';
import Dot from './dot';
import SliderList from './slider-list';

let tc = null;

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
        this.sliderList = null;
        this.sliderWrapper = null;
    }

    componentWillMount () {
        const me = this;
        const { initial } = me.props;

        me.setState({
            currIndex: initial,
            count: me.getChildrens().length
        });
    }

    componentDidMount () {
        this.calcStyle();
        this.autoplay(); // whether autoplay
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

        if (autoplay) {
            tc = setInterval(me.next.bind(me), autoplaySpeed + duration);
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
        const { slideMove, duration, infinite, beforeChange, afterChange } = props;
        const { currIndex, count } = state;
        const sliderListDOM = ReactDOM.findDOMNode(me.sliderList);
        let nextIndex;
        let targetIndex = currIndex - slideMove;

        if (tc) {
            tc = clearInterval(tc);
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
        } else {
            nextIndex = targetIndex;
        }

        const nextLeft = me.calcLeft(nextIndex);
        const targetLeft = me.calcLeft(targetIndex);

        console.log('prev->', 'currIndex:', currIndex, 'nextIndex:', nextIndex, 'targetIndex:', targetIndex);
        return new Promise(function (resolve) {
            Velocity(sliderListDOM, {
                left: targetLeft
            }, {
                duration
            }).then(() => {
                sliderListDOM.style.left = `${nextLeft}px`;
                me.setState({
                    currIndex: nextIndex
                }, () => {
                    afterChange && afterChange(nextIndex);
                    resolve();
                });
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
        let nextIndex;
        let targetIndex = currIndex + slideMove;

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
        } else if (targetIndex >= count - slideShow) {
            targetIndex = nextIndex = count - slideShow;
        } else {
            nextIndex = targetIndex;
        }

        console.log('targetIndex', targetIndex, 'nextIndex:', nextIndex);

        /* if (currIndex + slideMove >= count) {
            targetIndex = nextIndex = (currIndex + slideMove) - count;
            currIndex = nextIndex - slideMove; // 校准currIndex
            sliderListDOM.style.left = `${me.calcLeft(currIndex)}px`;
        } else {
            nextIndex = targetIndex = currIndex + slideMove;
        } */

        const targetLeft = me.calcLeft(targetIndex);
        const nextLeft = me.calcLeft(nextIndex);

        return new Promise(function (resolve) {
            Velocity(sliderListDOM, {
                left: `${targetLeft}px`
            }, {
                duration
            }).then(() => {
                sliderListDOM.style.left = `${nextLeft}px`;
                me.setState({
                    currIndex: nextIndex,
                    targetIndex
                }, () => {
                    afterChange && afterChange(nextIndex);
                    resolve();
                });
            });
        });
    }

    prevClick () {
        const me = this;

        if (tc) {
            tc = clearInterval(tc);
            me.prev().then(() => {
                me.autoplay();
            });
        }
    }

    nextClick () {
        const me = this;

        if (tc) {
            tc = clearInterval(tc);
            me.next().then(() => {
                me.autoplay();
            });
        }
    }

    mouseEnterHandler () {
        if (this.props.pauseOnHover && tc) {
            tc = clearInterval(tc);
        }
    }

    mouseLeaveHandler () {
        if (this.props.pauseOnHover && !tc) {
            this.autoplay();
        }
    }

    goto (i) {
        
    }

    render () {
        const me = this;
        /* eslint-disable no-unused-vars */
        const { children, ...otherAttrs } = me.props;
        const { currIndex, slideStyle, listStyle, count } = me.state;
        const nodes = me.getChildrens();

        return (
            <div className=''>
                <button onClick={() => me.prevClick()}>上一个</button>
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
                <button onClick={() => me.nextClick()}>下一个</button>
                {/* <NextArrow /> */}
                <Dot onClick={i => me.goto(i)} {...otherAttrs} currIndex={currIndex} count={count} />
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
