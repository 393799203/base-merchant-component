import React, { Component, PropTypes } from 'react';
import Tooltip from 'source_path/tooltip';
import Handle from './Handle';
import Slider from './Slider';
import Range from './Range';

class SliderBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visibles: {}
        };
    }
    toggleTooltipVisible (index, visible) {
        this.setState(({ visibles }) => ({
            visibles: {
                ...visibles,
                [index]: visible
            }
        }));
    }
    handleWithTooltip ({ value, index, dragging, ...restProps }) {
        const { tooltipPrefixCls, tipFormatter } = this.props;
        const { visibles } = this.state;
        return (
            <Tooltip
                prefixCls={tooltipPrefixCls}
                tooltip={tipFormatter ? tipFormatter(value) : ''}
                visible={tipFormatter && (visibles[index] || dragging)}
                placement='top'
                transitionName='zoom-down'
                key={index}
            >
                <Handle
                    {...restProps}
                    onMouseEnter={() => this.toggleTooltipVisible(index, true)}
                    onMouseLeave={() => this.toggleTooltipVisible(index, false)}
                />
            </Tooltip>
        );
    }

    render () {
        const { range, ...restProps } = this.props;
        if (range) {
            return <Range {...restProps} handle={(d) => { return this.handleWithTooltip(d); }} />;
        }
        return <Slider {...restProps} handle={(d) => { return this.handleWithTooltip(d); }} />;
    }
}

SliderBar.defaultProps = {
    prefixCls: 'mc-sliderBar',
    tooltipPrefixCls: 'mc-tooltip',
    tipFormatter (value) {
        return value.toString();
    }
};
SliderBar.propTypes = {
    tooltipPrefixCls: PropTypes.string,
    tipFormatter: PropTypes.func,
    range: PropTypes.bool
};

export default SliderBar;
