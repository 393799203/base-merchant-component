import React, { Component, PropTypes } from 'react';

export class PrevArrow extends Component {
    render () {
        const { onClick } = this.props;

        return (
            <span className='slider-icon prev-arrow' onClick={onClick}>&#xe61d;</span>
        );
    }
}

PrevArrow.propTypes = {
    onClick: PropTypes.func
};

export class NextArrow extends Component {
    render () {
        const { onClick } = this.props;

        return (
            <span className='slider-icon next-arrow' onClick={onClick}>&#xe613;</span>
        );
    }
}

NextArrow.propTypes = {
    onClick: PropTypes.func
};
