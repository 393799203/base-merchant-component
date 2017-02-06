import React, { Component } from 'react';
import './style/index.less';

export default class Tab extends Component {
    render () {
        const { list, active } = this.props;

        return (
            <ul className='cm-page-nav clearfix'>
                {
                    list.map((item, i) => (
                        <li className={i === active ? 'active' : ''} key={i}>
                            {
                                typeof item.link === 'function' ?
                                    <a href='' onClick={(e) => { item.link(e, item, i); }}>{item.text}</a> :
                                    <a href={item.link}>{item.text}</a>
                            }
                        </li>
                    ))
                }
            </ul>
        );
    }
}


Tab.propTypes = {
    list: React.PropTypes.array.isRequired,
    active: React.PropTypes.number
};

Tab.defaultProps = {
    list: [],
    active: 0
};
