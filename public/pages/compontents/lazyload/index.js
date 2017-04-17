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
                <LazyLoad height={200} className="pic" offset={[-200, 200]} placeholder={palcehoder}>
                    <img src="https://s10.mogucdn.com/mlcdn/c45406/170318_56d7jeac7b7b6aiaghkeh196a59dk_640x960.jpg" />
                </LazyLoad>
                <div className="top">
                    <h2>我来组成底部</h2>
                </div>
            </div>
        );
    }
}

export default LazyLoadDemo;
