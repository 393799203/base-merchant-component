import React, { Component } from 'react';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
require('./index.less');

class ToolTip extends Component {
    render() {
    	let tooltip = <Tooltip id="tooltip">{this.props.tooltip}</Tooltip>;
        return (
            <OverlayTrigger trigger={this.props.trigger} placement={this.props.position} overlay={tooltip}>
              {this.props.children}
            </OverlayTrigger>
        )
    }
}

module.exports = ToolTip

