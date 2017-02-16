import React, { Component, PropTypes } from 'react';

export class PrevArrow extends Component {
    renderArrow () {
        const { onClick, prevArrow } = this.props;
        if (prevArrow) {
            return React.cloneElement(prevArrow, {
                onClick
            });
        }

        return <span className='slider-icon prev-arrow' onClick={onClick}>&#xe61d;</span>;
    }

    render () {
        return this.renderArrow();
    }
}

PrevArrow.propTypes = {
    prevArrow: PropTypes.element,
    onClick: PropTypes.func
};

export class NextArrow extends Component {
    renderArrow () {
        const { onClick, nextArrow } = this.props;
        if (nextArrow) {
            return React.cloneElement(nextArrow, {
                onClick
            });
        }

        return <span className='slider-icon next-arrow' onClick={onClick}>&#xe613;</span>;
    }

    render () {
        return this.renderArrow();
    }
}

NextArrow.propTypes = {
    nextArrow: PropTypes.element,
    onClick: PropTypes.func
};
