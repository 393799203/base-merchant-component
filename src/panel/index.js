import React, { Component, PropTypes } from 'react';
import './style/index.less';

class Panel extends Component {
    render () {
        const me = this;
        const { className, children, title, elem, ...otherAttrs } = me.props;

        return (
            <div className={`mc-panel ${className}`} {...otherAttrs}>
                <div className='mc-panel-header'>
                    <h3 className='mc-title'>
                        {title}
                    </h3>
                    {elem}
                </div>
                <div className='mc-panel-body'>
                    {
                        children
                    }
                </div>
            </div>
        );
    }
}

Panel.defaultProps = {
    className: '',
    title: '',
    elem: null
};

Panel.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    elem: React.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

export default Panel;
