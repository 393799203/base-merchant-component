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
                        src='https://s10.mogucdn.com/p2/170210/81209932_1el794igh9akdce29fed0j912iddf_32x32.gif'
                        width='32'
                        height='32'
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
