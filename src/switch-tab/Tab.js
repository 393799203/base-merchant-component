import React, { Component, PropTypes } from 'react';

class Tab extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            firstLoad: false // 是否第一次加载过
        };
    }

    componentWillMount () {
        this.updateLoadState(this.props);
    }

    componentWillReceiveProps (nextProps) {
        this.updateLoadState(nextProps);
    }

    updateLoadState (props) {
        const me = this;
        const { active, index } = props;
        const state = me.state;
        const isActive = active === index;

        if (isActive && state.firstLoad === false) {
            this.setState({
                firstLoad: active === index
            });
        }
    }

    render () {
        const me = this;
        const { firstLoad } = me.state;
        const { active, index, lazyLoad, children, className, ...otherAttrs } = me.props;

        return (
            <div className={`${className} ${active === index ? 'show' : 'hide'}`} {...otherAttrs}>
                {
                    lazyLoad
                    ? (firstLoad ? children : null)
                    : children
                }
            </div>
        );
    }
}

Tab.defaultProps = {
    lazyLoad: undefined,
    className: ''
};

Tab.propTypes = {
    lazyLoad: PropTypes.bool,
    className: PropTypes.string
};

export default Tab;
