import React, { Component, PropTypes } from 'react';
import './style/index.less';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

export default class Table extends Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}
	render () {
		return (
			<div>
				{this.props.text}
			</div>
		)
	}
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;