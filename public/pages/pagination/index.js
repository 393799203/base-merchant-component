/* eslint-disable */
import React, { Component } from 'react';
import Pagination from 'source_path/pagination';
import Readme from './README.md';

export default class PaginationView extends Component {
    constructor () {
        super();
        this.state = {
            currentPage: 1,
            totalPage: 20,
            onChangePage: this.changePage.bind(this)
        };
    }
    componentDidMount () {
    }
    changePage (current) {
        debugger;
        this.setState({ currentPage: current });
    }
    render () {
        const {currentPage, totalPage, onChangePage } = this.state;
        return (
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    分页 - Pagination
                    <a href="mactt://message/user/00639" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <Pagination
                    size='xs'
                    theme='success'
                    totalPage={totalPage}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
                <br />
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
                <br />
                <Pagination
                    size='normal'
                    theme='info'
                    totalPage={totalPage}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
                <br />
                <Pagination
                    size='md'
                    theme='dark'
                    totalPage={totalPage}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */

