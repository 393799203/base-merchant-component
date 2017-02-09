import React, { Component, PropTypes } from 'react';
import './style/index.less';

export default class Tag extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    close (e) {
        e.target.parentNode.style.display = 'none';
        this.props.afterClose ? this.props.afterClose() : null;
    }

    render () {
        let { color, afterClose, circle, closeable } = this.props;
        let clsName = 'wrap ';
        clsName += ['red', 'blue', 'green'].indexOf(color) === -1 ? 'default' : color;
        clsName += circle ? ' circle' : '';
        return (<div className={clsName}>
          { this.props.children }
          {
            closeable ? (<span className = 'closeBtn' onClick = { this.close.bind(this) }>x</span>) : null
          }
        </div>);
    }
}

Tag.propTypes = {
    color: PropTypes.string,
    closeable: PropTypes.bool,
    afterClose: PropTypes.func,
    circle: PropTypes.bool
};
