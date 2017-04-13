import React, { Component, PropTypes } from 'react';
import LazyLoad from 'source_path/lazyload';
import Readme from './Readme.md';
import './style/index.less';

class LazyLoadDemo extends Component {
    render () {
        return (
            <div className="lazy-load-example">
                <div className="top">
                    <h2>我来组成头部</h2>
                </div>
                <LazyLoad height={200} className="pic">
                    <img src="https://s10.mogucdn.com/mlcdn/c45406/170318_56d7jeac7b7b6aiaghkeh196a59dk_640x960.jpg" />
                </LazyLoad>
            </div>
        );
    }
}

LazyLoadDemo.propTypes = {
    
};

export default LazyLoadDemo;