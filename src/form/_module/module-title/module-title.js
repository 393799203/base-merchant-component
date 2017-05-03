import React, { Component, PropTypes } from 'react';
import './module-title.less';

export default class ModuleTitle extends Component {
    static defaultProps = {
        title: '',
        subTitle: '',
        more: []
    };

    static propTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string,
        more: PropTypes.array
    };

    constructor (props) {
        super(props);
        this.state = {
        };
        ModuleTitle.instance = this;
    }

    render () {
        const {
            title,
            subTitle,
            more
        } = this.props;
        return (
            <p className='mc-title-container'>
                <span className='title'>
                    {title}
                </span>
                <span className='sub-title'>
                    {subTitle}
                </span>
                {more && more.lengrh ?
                    more.map((item, index) => {
                        return (
                            <a
                                key={index}
                                target='_block'
                                href={item.link}
                                className='fr text-primary more mr20'
                            >
                                {item.text}
                            </a>
                        );
                    })
                    :
                    null
                }
            </p>
        );
    }
}
