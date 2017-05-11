import React, { PropTypes, Component } from 'react';

export default class Handle extends Component {
    render () {
        const {
        className, vertical, offset, handleStyle, ...restProps
        } = this.props;
        const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };

        const elStyle = {
            ...style,
            ...handleStyle
        };
        return <div {...restProps} className={className} style={elStyle} />;
    }
}

Handle.propTypes = {
    key: PropTypes.number,
    className: PropTypes.string,
    vertical: PropTypes.bool,
    offset: PropTypes.number,
    handleStyle: PropTypes.object
};
