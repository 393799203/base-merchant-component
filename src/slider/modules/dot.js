import React, { Component, PropTypes } from 'react';

class Dot extends Component {
    clickHandler (e, i) {
        this.props.onClick(e, i);
    }

    renderDots () {
        const me = this;
        const { slideMove, count, currIndex, slideShow } = me.props;
        const groupNum = Math.ceil(count / slideMove);
        const arr = Array.apply(null, new Array(groupNum));

        return arr.map((item, i) => {
            let leftBound = slideMove * i;
            let rightBound = (slideMove * (i + 1)) - 1;

            if (rightBound >= count) {
                rightBound = count - 1;
                leftBound = rightBound - slideShow + 1;
                // console.log(leftBound, rightBound);
            }

            const between = leftBound <= currIndex && currIndex <= rightBound;

            return (
                <li key={i} className={`${between ? 'dot-active' : null}`} onClick={e => me.clickHandler(e, i)}>
                    <span className='slider-icon dot-icon'>&#xe61f;</span>
                </li>
            );
        });
    }

    render () {
        const me = this;
        const dots = me.renderDots();

        return (
            <ul className='dot-list clearfix'>
                {dots}
            </ul>
        );
    }
}

Dot.propTypes = {
    onClick: PropTypes.func,
    slideMove: PropTypes.number,
    count: PropTypes.number,
    currIndex: PropTypes.number
};

export default Dot;
