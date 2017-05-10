import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import warning from 'warning';

const calcPoints = (vertical, marks, dots, step, min, max) => {
    warning(
        dots ? step > 0 : true,
        '`Slider[step]` should be a positive number in order to make Slider[dots] work.'
    );
    const points = Object.keys(marks).map(parseFloat);
    if (dots) {
        for (let i = min; i <= max; i += step) {
            if (points.indexOf(i) >= 0) continue;
            points.push(i);
        }
    }
    return points;
};
class Steps extends Component {
    render () {
        const { prefixCls, vertical, marks, dots, step, included,
                lowerBound, upperBound, max, min } = this.props;
        const range = max - min;
        const elements = calcPoints(vertical, marks, dots, step, min, max).map((point) => {
            const offset = `${Math.abs(point - min) / (range * 100)}%`;
            const style = vertical ? { bottom: offset } : { left: offset };

            const isActived = (!included && point === upperBound) ||
                    (included && point <= upperBound && point >= lowerBound);
            const pointClassName = classNames({
                [`${prefixCls}-dot`]: true,
                [`${prefixCls}-dot-active`]: isActived
            });

            return <span className={pointClassName} style={style} key={point} />;
        });
        return <div className={`${prefixCls}-step`}>{elements}</div>;
    }
}

Steps.propTypes = {
    prefixCls: PropTypes.string,
    vertical: PropTypes.bool,
    marks: PropTypes.object,
    dots: PropTypes.bool,
    step: PropTypes.number,
    included: PropTypes.bool,
    upperBound: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lowerBound: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max: PropTypes.number,
    min: PropTypes.number
};

export default Steps;
