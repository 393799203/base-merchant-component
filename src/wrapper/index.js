import React, { Component, PropTypes } from 'react';
import './style/index.less';

export default class Wrapper extends Component {
    render () {
        const { className, isLoading } = this.props;
        return (
            <div className={className}>
                <div className={isLoading ? 'inner-wrapper-show' : 'inner-wrapper-hide'}>
                    <img
                        className='loading-img'
                        alt='加载中...'
                        src='https://s10.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif'
                        width='22'
                        height='22'
                    />
                </div>
                {this.props.children}
            </div>
        );
    }
}

Wrapper.defaultProps = {
    className: 'mc-loading-wrapper',
    isLoading: false
};

Wrapper.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    children: PropTypes.node
};
