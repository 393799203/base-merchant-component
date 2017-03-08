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
            <div className='m-b-lg m-l m-r'>
                <h1>
                    分页 - Pagination
                    <a href="mactt://message/user/00639" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    link='http://www.mogujie.com?q='
                />
                <br />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

