import React, { Component, PropTypes } from 'react';

export default class LabelList extends Component {
    static defaultProps = {
        defaultValue: {}
    };

    static propTypes = {
        defaultValue: PropTypes.array
    };

    constructor (props) {
        super(props);
        this.state = {
        };
        LabelList.instance = this;
    }

    render () {
        const {
            defaultValue
        } = this.props;

        return (
            <div>
                {defaultValue && defaultValue.length ?
                    defaultValue.map((item, index) => {
                        return (
                            <label
                                key={index}
                                htmlFor={index}
                                style={{
                                    display: 'block',
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
