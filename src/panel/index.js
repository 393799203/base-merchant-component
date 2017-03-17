import React, { Component, PropTypes } from 'react';
import './style/index.less';

class Panel extends Component {
    render () {
        const me = this;
        const { theme, className, children, title, elem, ...otherAttrs } = me.props;

        return (
            <div className={`mc-panel ${className} panel-${theme}`} {...otherAttrs}>
                <div className='panel-header'>
                    <h3 className='mc-title'>
                        {title}
                    </h3>
                    {elem}
                </div>
                <div className='panel-body'>
                    {
                        children
                    }
                </div>
            </div>
        );
    }
}

Panel.defaultProps = {
    theme: 'default',
    className: '',
    title: '',
    elem: null
};

Panel.PropTypes = {
    theme: PropTypes.oneOf(['default', 'danger', 'info', 'warning', 'dark', 'success']),
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
