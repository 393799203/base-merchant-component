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
                <h1>
                    分页简化版 - Pager
                </h1>
                <h2>
                    1. 示例
                </h2>
                <Pager
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

