import React, { Component, PropTypes } from 'react';

export default class LabelList extends Component {
    static defaultProps = {
        value: {}
    };

    static propTypes = {
        value: PropTypes.array
    };

    constructor (props) {
        super(props);
        this.state = {
        };
        LabelList.instance = this;
    }

    render () {
        const {
            value
        } = this.props;

        return (
            <div>
                {value && value.length ?
                    value.map((item, index) => {
                        return (
                            <label
                                key={index}
                                htmlFor={index}
                                style={{
                                    display: 'block',
                                    height: '40px',
                                    lineHeight: '40px',
                                    fontSize: '13px',
                                    color: '#555'
                                }}
                            >
                                {item}
                            </label>
                        );
                    })
                    :
                    null
                }
            </div>
        );
    }
}
