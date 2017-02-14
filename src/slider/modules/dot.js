import React, { Component, PropTypes } from 'react';

class Dot extends Component {
    renderDots () {
        const { slideMove, count, currIndex } = this.props;
        const groupNum = Math.ceil(count / slideMove);
        const arr = Array.apply(null, new Array(groupNum));
        arr.map((item, i) => {
            const leftBound = slideMove * i;
            const rightBound = slideMove * (i + 1) - 1;
            const between = leftBound <= currIndex && currIndex <= rightBound;

            return (
                <li className={`${between ? 'dot-active' : null}`}>
                    <button></button>
                </li>
            );
        });
    }

    render () {
        const me = this;
        const dots = me.renderDots();

        return (
            <ul className='dot-list'>
                {dots}
            </ul>
        );
    }
}

Dot.propTypes = {
    onClick: PropTypes.func
};

export default Dot;
