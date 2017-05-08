import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {
    render () {
        const { theme, className, shape, type, disabled } = this.props;
        return (
            <div
                className={
                    disabled
                        ? `bg-${theme} ${className} mc-tag mc-tag-${shape} mc-tag-${type} mc-tag-disabled`
                        : `bg-${theme} ${className} mc-tag mc-tag-${shape} mc-tag-${type}`
                }
            >
                {this.props.children}
            </div>
        );
    }
}

Tag.defaultProps = {
    theme: 'default',
    className: '',
    shape: 'normal',
    type: 'fill',
    disabled: false
};

Tag.propTypes = {
    theme: PropTypes.oneOf(['danger', 'warning', 'success', 'info', 'default', 'dark']),
    className: PropTypes.string,
    shape: PropTypes.oneOf(['round', 'normal']),
    type: PropTypes.oneOf(['fill', 'border']),
    disabled: PropTypes.bool,
    children: PropTypes.node
};
