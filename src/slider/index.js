import React, { Component, PropTypes } from 'react';
import Slick from './modules/slick';
import './style/index.less';

class Slider extends Component {
    render () {
        const { children, className, ...otherAttrs } = this.props;

        return (
            <div className={`mc-slider ${className}`}>
                <Slick {...otherAttrs}>
                    {children}
                </Slick>
            </div>
        );
    }
}

Slider.defaultProps = {
    arrows: false,
    className: '',
    initial: 0,
    slideShow: 1,
    slideMove: 1,
    duration: 300,
    prevArrow: null,
    nextArrow: null,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    pauseOnHover: false,
    beforeChange: null,
    afterChange: null
};

Slider.propTypes = {
    arrows: PropTypes.bool,
    className: PropTypes.string,
    initial: PropTypes.number,
    slideShow: PropTypes.number,
    slideMove: PropTypes.number,
    duration: PropTypes.number,
    prevArrow: PropTypes.element,
    nextArrow: PropTypes.element,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    infinite: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

export default Slider;
