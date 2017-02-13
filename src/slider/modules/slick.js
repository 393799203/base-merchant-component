import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Velocity from 'velocity-animate';
import Dot from './dot';
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
        const { slideShow } = me.props;
        const { count } = me.state;
        const wrapper = me.sliderWrapper;
        const wrapperWidth = me.getWidth(wrapper);
        const slideWidth = wrapperWidth / slideShow;
        const total = (slideShow * 2) + count;
        const listWidth = slideWidth * total;

        this.setState({
            slideStyle: {
                width: slideWidth
            },
            listStyle: {
                width: listWidth,
                left: -slideWidth * slideShow
            }
        });
    }

    initRef (instance, key) {
        this[key] = instance;
    }

    run () {

    }

    calcLeft (index) {
        const me = this;
        const { slideStyle, count } = me.state;
        const { slideShow, slideMove, infinite } = me.props;
        const slideWidth = slideStyle.width; // width of single slide item

        if (infinite) {
            if (index + slideMove > count) {

            }
        }
        return -(index + slideShow) * slideWidth;
    }

    prev () {
        const me = this;
        const { state, props } = me;
        const { currIndex } = state;
        const { count } = state;
        const { slideMove, slideShow, speed } = props;
        const sliderListDOM = ReactDOM.findDOMNode(me.sliderList);
        let nextIndex;
        let targetIndex;

        if (currIndex - slideMove < 0) {
            targetIndex = currIndex - slideMove;
            nextIndex = count + (currIndex - slideMove);
            sliderListDOM.style.left = `${me.calcLeft(currIndex)}px`;
        } else {
            nextIndex = targetIndex = currIndex - slideMove;
        }

        const nextLeft = me.calcLeft(nextIndex);
        const targetLeft = me.calcLeft(targetIndex);
        
        console.log('prev->', 'currIndex:', currIndex, 'nextIndex:', nextIndex, 'targetIndex:', targetIndex);

        Velocity(sliderListDOM, {
            left: targetLeft
        }, {
            duration: speed
        }).then(() => {
            sliderListDOM.style.left = `${nextLeft}px`;
            me.setState({
                currIndex: nextIndex,
                targetIndex
            });
        });
    }

    next () {
        const me = this;
        const { state, props } = me;
        let { currIndex } = state;
        const { count } = state;
        const { slideMove, slideShow, speed } = props;
        const sliderListDOM = ReactDOM.findDOMNode(me.sliderList);
        let nextIndex;
        let targetIndex;

        targetIndex = currIndex + slideMove;
        if (targetIndex + slideShow > count) {
            if (targetIndex > count) {
                nextIndex = currIndex + slideShow - (targetIndex - count);
            } else {
                nextIndex = currIndex + count % slideMove;
            }
        } else {
            nextIndex = targetIndex;
        }
        console.log(nextIndex, targetIndex);
        
        /*if (currIndex + slideMove >= count) {
            targetIndex = nextIndex = (currIndex + slideMove) - count;
            currIndex = nextIndex - slideMove; // 校准currIndex
            sliderListDOM.style.left = `${me.calcLeft(currIndex)}px`;
        } else {
            nextIndex = targetIndex = currIndex + slideMove;
        }*/

        const nextLeft = me.calcLeft(nextIndex);
        console.log(nextLeft);
        // const targetLeft = me.calcLeft(targetIndex);

        Velocity(sliderListDOM, {
            left: `${nextLeft}px`
        }, {
            duration: speed
        }).then(() => {
            sliderListDOM.style.left = `${nextLeft}px`;
            me.setState({
                currIndex: nextIndex,
                targetIndex
            });
        });
    }

    goto () {

    }

    render () {
        const me = this;
        /* eslint-disable no-unused-vars */
        const { children, ...otherAttrs } = me.props;
        const { currIndex, slideStyle, listStyle } = me.state;
        const nodes = me.getChildrens();

        return (
            <div className=''>
                <button onClick={() => me.prev()}>上一个</button>
                <div className='slider-list-wrapper' ref={c => this.initRef(c, 'sliderWrapper')}>
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
                <button onClick={() => me.next()}>下一个</button>
                {/* <NextArrow /> */}
                <Dot onClick={i => me.goto(i)} />
            </div>
        );
    }
}

Slick.propTypes = {
    arrows: PropTypes.bool,
    initial: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

export default Slick;
