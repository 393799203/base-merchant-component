import React, { Component, PropTypes } from 'react';
import LazyLoad from 'source_path/lazyload';
import Readme from './Readme.md';
import './style/index.less';

class LazyLoadDemo extends Component {
    render () {
        const palcehoder = (
            <div className='palceholder'>
                正在加载...
            </div>
        );

        return (
            <div className="lazy-load-example">
                <div className="top">
                    <h2>我来组成头部</h2>
                </div>
                <LazyLoad height={500} className="pic" offset={[50, 50]} placeholder={palcehoder} once>
                    <img src="https://s24.mogucdn.com/mlcdn/e5265e/170419_57hj0k3ecc8eigh7hiaflhhclf000_1914x708.png" />
                </LazyLoad>
                <div className="top">
                    <h2>我来组成底部</h2>
                </div>
            </div>
        );
    }
}

export default LazyLoadDemo;
