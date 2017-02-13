import React, { Component, PropTypes } from 'react';
import './style/index.less';

export default class Tag extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    close (e) {
        const event = e;
        event.target.parentNode.style.display = 'none';
        this.props.afterClose();
    }

    render () {
        const me = this;
        const { color, circle, closeable, children } = me.props;
        let clsName = 'wrap ';
        clsName += ['red', 'blue', 'green'].indexOf(color) === -1 ? 'default' : color;
        clsName += circle ? ' circle' : '';
        return (<div className={clsName}>
            { children }
            {
                closeable ? (<span className='closeBtn' onClick={e => me.close(e)}>×</span>) : null
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
