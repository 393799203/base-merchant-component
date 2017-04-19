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
        const arr = Array.apply(null, new Array(10));

        return (
            <div className="lazy-load-example">
                <ul className="lazy-list">
                    {
                        arr.map((item, i) => {
                            return (
                                <li key={i}>
                                    <LazyLoad height={200} className="pic" offset={0} placeholder={palcehoder} overflow index={i} key={i}>
                                        <div className='content'>
                                            我是第{i}个区块的内容
                                        </div>
                                    </LazyLoad>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default LazyLoadDemo;
