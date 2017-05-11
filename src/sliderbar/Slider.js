import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Track from './common/track';
import BaseSlider from './common/BaseSlider';
import Steps from './common/steps';
import Marks from './common/marks';
import * as utils from './utils';
import './style/index.less';

const noop = () => {};

class Slider extends BaseSlider {
    constructor (props) {
        super(props);
        const defaultValue = props.defaultValue !== undefined ?
                props.defaultValue : props.min;
        const value = props.value !== undefined ?
                props.value : defaultValue;
        this.state = {
            value: this.trimAlignValue(value),
            dragging: false
        };
    }
    componentWillReceiveProps (nextProps) {
        if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

        const prevValue = this.state.value;
        const value = nextProps.value !== undefined ?
                nextProps.value : prevValue;
        const nextValue = this.trimAlignValue(value, nextProps);
        if (nextValue === prevValue) return;

        this.setState({ value: nextValue });
        if (utils.isValueOutOfRange(value, nextProps)) {
            this.props.onChange(nextValue);
        }
    }

    onChange (state) {
        const props = this.props;
        const isNotControlled = !('value' in props);
        if (isNotControlled) {
            this.setState(state);
        }

        const changedValue = state.value;
        props.onChange(changedValue);
    }

    onStart (position) {
        this.setState({ dragging: true });
        const props = this.props;
        const prevValue = this.getValue();
        props.onBeforeChange(prevValue);
        const value = this.calcValueByPos(position);
        this.startValue = value;
        this.startPosition = position;
        if (value === prevValue) return;

        this.onChange({ value });
    }

    onEnd = () => {
        this.setState({ dragging: false });
        this.removeDocumentEvents();
        this.props.onAfterChange(this.getValue());
    }

    onMove (e, position) {
        utils.pauseEvent(e);
        const state = this.state;
        const value = this.calcValueByPos(position);
        const oldValue = state.value;
        if (value === oldValue) return;

        this.onChange({ value });
    }

    getValue () {
        return this.state.value;
    }

    getLowerBound () {
        return this.props.min;
    }

    getUpperBound () {
        return this.state.value;
    }

    trimAlignValue (v, nextProps = {}) {
        const mergedProps = { ...this.props, ...nextProps };
        const val = utils.ensureValueInRange(v, mergedProps);
        return utils.ensureValuePrecision(val, mergedProps);
    }
    render () {
        const {
            prefixCls,
            className,
            marks,
            dots,
            step,
            included,
            disabled,
            vertical,
            min,
            max,
            children,
            maximumTrackStyle,
            style,
            minimumTrackStyle,
            handleStyle,
            handle: handleGenerator
      } = this.props;
        const { value, dragging } = this.state;
        const offset = this.calcOffset(value);
        const handles = handleGenerator({
            className: `${prefixCls}-handle`,
            vertical,
            offset,
            value,
            dragging,
            disabled,
            handleStyle,
            ref: h => this.saveHandle(0, h)
        });
        const tracks = (
            <Track
                className={`${prefixCls}-track`}
                vertical={vertical}
                included={included}
                offset={0}
                length={offset}
                minimumTrackStyle={minimumTrackStyle}
            />
        );
        const sliderClassName = classNames({
            [prefixCls]: true,
            [`${prefixCls}-with-marks`]: Object.keys(marks).length,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-vertical`]: vertical,
            [className]: className
        });
        return (
            <div
                ref={this.saveSlider}
                className={sliderClassName}
                onTouchStart={disabled ? noop : this.onTouchStart}
                onMouseDown={disabled ? noop : this.onMouseDown}
                style={style}
            >
                <div className={`${prefixCls}-rail`} style={maximumTrackStyle} />
                {tracks}
                <Steps
                    prefixCls={prefixCls}
                    vertical={vertical}
                    marks={marks}
                    dots={dots}
                    step={step}
                    included={included}
                    lowerBound={this.getLowerBound()}
                    upperBound={this.getUpperBound()}
                    max={max}
                    min={min}
                />
                {handles}
                <Marks
                    className={`${prefixCls}-mark`}
                    vertical={vertical}
                    marks={marks}
                    included={included}
                    lowerBound={this.getLowerBound()}
                    upperBound={this.getUpperBound()}
                    max={max}
                    min={min}
                />
                {children}
            </div>
        );
    }
}

Slider.propTypes = {
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    defaultValue: PropTypes.number,
    value: PropTypes.number,
    disabled: PropTypes.bool
};
Slider.defaultProps = {
    prefixCls: 'mc-sliderBar',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    minimumTrackStyle: {},
    maximumTrackStyle: {},
    handleStyle: {}
};

export default Slider;
