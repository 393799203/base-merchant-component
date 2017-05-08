import React, { Component } from 'react';
import './style/index.less';

class Popover extends Component {
    constructor (props) {
        super(props);
        this.state = {
            popoverHeight: '',
            popoverWidth: '',
            popoverId: this.generateId()
        };
    }
    componentDidMount () {
        this.generateSize();
    }
    componentWillReceiveProps () {
        this.generateSize();
    }
    generateId () {
        return `popover-${Math.random().toString(36).substr(2, 16)}`;
    }
    generateSize () {
        const { popoverId } = this.state;
        const popoverHeight = document.getElementById(popoverId).clientHeight;
        const popoverWidth = document.getElementById(popoverId).clientWidth;
        this.setState({ popoverHeight, popoverWidth });
    }
    render () {
        const { className, content, position, children } = this.props;
        const { popoverHeight, popoverWidth, popoverId } = this.state;

        let positionStyle = {};
        if (position === 'top') { positionStyle = { bottom: `${popoverHeight + 10}px`, left: 0 }; }
        if (position === 'left') { positionStyle = { top: 0, right: `${popoverWidth + 10}px` }; }
        if (position === 'right') { positionStyle = { top: 0, left: `${popoverWidth + 10}px` }; }
        if (position === 'bottom') { positionStyle = { top: `${popoverHeight + 10}px`, left: 0 }; }
        return (
            <div className={`mc-popover ${className}`} id={`${popoverId}`}>
                {children}
                <div className={`mc-popover-wrapper ${position}`} style={positionStyle}>
                    <div className='mc-popover-triangle' />
                    <div className='mc-popover-content'>{content}</div>
                </div>

            </div>
        );
    }
}

Popover.defaultProps = {
    className: '',
    content: '',
    position: 'top'
};

Popover.propTypes = {
    className: React.PropTypes.string,
    content: React.PropTypes.node.isRequired,
    position: React.PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    children: React.PropTypes.node.isRequired
};

module.exports = Popover;
