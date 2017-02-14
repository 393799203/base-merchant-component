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
    arrows: true,
    slideShow: 1,
    slideMove: 1,
    duration: 300,
    className: '',
    nextArrow: null,
    prevArrow: null,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    initial: 0,
    pauseOnHover: false,
    afterChange: null,
    beforeChange: null
};

Slider.propTypes = {
    arrows: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

export default Slider;
