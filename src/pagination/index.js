import React, { Component, PropTypes } from 'react';
import './style/index.less';

export default class Pagination extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        // this.state = this.formatProps(props);
    }
    render () {
        return (
            <div>test</div>
        );
    }
}

Pagination.defaultProps = {
    currentPage: 1,     // 当前页码
    totalPage: 1,   // 总共有多少页
    display_num: 4, // 显示数字的页码数
    link: '',       // 页面直接跳转链接
    onChangePage: '', // 页码选中回调
    hideEnd: false  // 是否显示最后
};

Pagination.propTypes = {
    // currentPage: PropTypes.number.isRequired,
    // totalPage: PropTypes.number.isRequired,
    display_num: PropTypes.number,
    link: PropTypes.string,
    onChangePage: PropTypes.func,
    hideEnd: PropTypes.bool
};

