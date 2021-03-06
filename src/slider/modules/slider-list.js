import React, { Component, PropTypes } from 'react';

class SliderList extends Component {
    renderSildes () {
        const { children, slideShow, infinite, slideStyle, currIndex } = this.props;
        const count = React.Children.count(children);
        const pre = [];
        const post = [];
        const slides = [];
        const nodes = React.Children.toArray(children);

        const getSlideClass = (i) => {
            return currIndex <= i && i < currIndex + slideShow ? 'slide-active' : '';
        };

        nodes.forEach((node, index) => {
            slides.push(React.cloneElement(node, {
                key: `original-${index}`,
                'data-index': index,
                style: Object.assign({}, node.props.style || {}, slideStyle),
                className: `${node.props.className} ${getSlideClass(index)}`
            }));

            if (infinite) {
                if (index < slideShow) {
                // add the front silde items to the post array
                    const key = count + index;
                    const postItem = React.cloneElement(node, {
                        key: `post-${key}`,
                        'data-index': key,
                        style: Object.assign({}, node.props.style || {}, slideStyle),
                        className: `${node.props.className} ${getSlideClass(index)}`
                    });
                    post.push(postItem);
                }

                if (index + slideShow >= count) {
                // add the end silde items to the pre array
                    const key = -(count - index);
                    const preItem = React.cloneElement(node, {
                        key: `post-${key}`,
                        'data-index': key,
                        style: Object.assign({}, node.props.style || {}, slideStyle),
                        className: `${node.props.className} ${getSlideClass(index)}`
                    });
                    pre.push(preItem);
                }
            }
        });

        return pre.concat(slides, post);
    }

    render () {
        const me = this;
        const { listStyle } = me.props;
        const slides = me.renderSildes();

        return (
            <div className='slider-list clearfix' style={listStyle}>
                {slides}
            </div>
        );
    }
}

SliderList.propTypes = {
    slideStyle: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    slideShow: PropTypes.number,
    infinite: PropTypes.bool,
    currIndex: PropTypes.number
};

export default SliderList;
