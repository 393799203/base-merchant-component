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
    speed: 300,
    className: '',
    nextArrow: null,
    prevArrow: null,
    autoplay: false,
    autoplaySpeed: 300,
    infinite: true,
    initial: 0,
    lazyLoad: false,
    pauseOnHover: false,
    rtl: false,
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
