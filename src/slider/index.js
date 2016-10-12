import './style/index.less';
import RCCarousel from 'react-slick';
import React from 'react';

const Carousel = React.createClass({
    getDefaultProps() {
        return {
            dots: true,
            arrows: false
        };
    },
    render() {
        let props = Object.assign({}, this.props);

        if (props.effect === 'fade') {
            props.fade = true;
            props.draggable = false;
        }

        let className = 'mc-carousel';
        if (props.vertical) {
            className = `${className} mc-carousel-vertical`;
        }

        return (
            <div className={className}>
                <RCCarousel {...props} />
            </div>
        );
    }
});

module.exports = Carousel;