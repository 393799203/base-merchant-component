import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import LazyLoad from 'source_path/lazyload';
import Readme from './Readme.md';
import './style/index.less';

class LazyloadDemo extends Component {
    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    懒加载 - Lazyload
                    <a href="mactt://message/user/01173" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <ul className='example-list'>
                    <li><Link to='/lazyload-regular'>普通示例</Link></li>
                    <li><Link to='/lazyload-overflow'>滚动容器示例</Link></li>
                </ul>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        )
    }
}

export default LazyloadDemo;
