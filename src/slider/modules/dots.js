import React, { Component, PropTypes } from 'react';

class Dots extends Component {
    getDotCount () {
        const me = this;
        const { slideMove, count } = me.props;
        return Math.ceil(count / slideMove);
    }

    clickHandler (e, i) {
        this.props.onClick(e, i);
    }

    generateDots () {
        const me = this;
        const { slideMove, currIndex } = me.props;
        const groupNum = me.getDotCount();
        const arr = Array.apply(null, new Array(groupNum));
        const currDotIndex = Math.ceil(currIndex / slideMove);

        return arr.map((item, i) => {
            const active = currDotIndex === i;

            return (
                <li key={i} className={`${active ? 'dot-active' : null}`} onClick={e => me.clickHandler(e, i)}>
                    <span className='slider-icon dot-icon'>&#xe61f;</span>
                </li>
            );
        });
    }

    renderDots () {
        const me = this;
        const { dotsShow, dots, ...otherAttrs } = me.props;

        if (dotsShow) {
            if (dots) {
                return React.cloneElement(dots, otherAttrs);
            }

            return (
                <ul className='dot-list clearfix'>
                    {me.generateDots()}
                </ul>
            );
        }
        return null;
    }

    render () {
        const dots = this.renderDots();

        return dots;
    }
}

Dots.propTypes = {
    onClick: PropTypes.func,
    slideMove: PropTypes.number,
    slideShow: PropTypes.number,
    count: PropTypes.number,
    currIndex: PropTypes.number
};

export default Dots;
