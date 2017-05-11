import React, { PropTypes } from 'react';
import classNames from 'classnames';

const omit = (obj, fields) => {
    const copy = Object.assign({}, obj);
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete copy[key];
    }
    return copy;
};

const Icon = (props) => {
    const { type, className = '', spin } = props;
    const classString = classNames({
        iconfont: true,
        'icon-spin': !!spin || type === 'loading',
        [`icon-${type}`]: true
    }, className);
    return <i {...omit(props, ['type', 'spin'])} className={classString} />;
};
Icon.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    spin: PropTypes.string
};

export default Icon;
