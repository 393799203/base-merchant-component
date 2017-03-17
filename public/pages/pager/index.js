/* eslint-disable */
import React, { Component } from 'react';
import Pager from 'source_path/pager';
import Readme from './README.md';

export default class PagerView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPage: 20,
            onChangePage: this.changePage.bind(this)
        };
    }
    componentDidMount () {
    }
    changePage (currentPage) {
        this.setState({ currentPage });
    }
    render () {
        const { currentPage, totalPage, onChangePage } = this.state;
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    分页简化版 - Pager
                    <a href="mactt://message/user/00639" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <Pager
                    currentPage={currentPage}
                    totalPage={totalPage}
                    onChangePage={onChangePage}
                />
                <br />
                <Pager
                    size='normal'
                    theme='danger'
                    currentPage={currentPage}
                    totalPage={totalPage}
                    onChangePage={onChangePage}
                />
                <br />
                <Pager
                    size='md'
                    theme='dark'
                    currentPage={currentPage}
                    totalPage={totalPage}
                    onChangePage={onChangePage}
                />
                <br />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */

