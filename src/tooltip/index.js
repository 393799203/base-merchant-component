import React, { Component } from 'react';
import RcTooltip from 'rc-tooltip';

import './style/index.less';

class ToolTip extends Component {
    constructor (props) {
        super(props);

        this.state = {
            visible: false
        };

        this.onVisibleChange = this.onVisibleChange.bind(this);
    }

    // tip是否展示
    onVisibleChange (visible) {
        this.setState({ visible });
    }

    render () {
        const transitionName = ({
            top: 'zoom-down',
            bottom: 'zoom-up',
            left: 'zoom-right',
            right: 'zoom-left',
            topLeft: 'zoom-down',
            bottomLeft: 'zoom-up',
            leftTop: 'zoom-right',
            rightTop: 'zoom-left',
            topRight: 'zoom-down',
            bottomRight: 'zoom-up',
            leftBottom: 'zoom-right',
            rightBottom: 'zoom-left'
        })[this.props.placement];

        let visible = this.state.visible;
        if (!this.props.tooltip) {
            visible = false;
        }

        return (
            <RcTooltip
                transitionName={transitionName}
                overlay={this.props.tooltip}
                visible={visible}
                onVisibleChange={this.onVisibleChange}
                {...this.props}
            >
                {this.props.children}
            </RcTooltip>
        );
    }
}

ToolTip.propTypes = {
    placement: React.PropTypes.string.isRequired,
    tooltip: React.PropTypes.string,
    children: React.PropTypes.any
};

ToolTip.defaultProps = {
    prefixCls: 'mc-tooltip',
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
};

module.exports = ToolTip;
