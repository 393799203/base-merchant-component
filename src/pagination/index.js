import React, { Component, PropTypes } from 'react';
import './style/index.less';

const calculateBtns = function (currentPage, totalPage, displayNum) {
    const displayLength = displayNum - 2;
    const pageBtns = [1];
    let start = Math.round(currentPage - (displayLength / 2));
    let end = Math.round(currentPage + (displayLength / 2));
    if (totalPage <= 1) { return pageBtns; }
    if (start <= 1) {
        start = 2;
        end = start + (displayLength - 1);
        if (end >= totalPage - 1) {
            end = totalPage - 1;
        }
    }
    if (end >= totalPage - 1) {
        end = totalPage - 1;
        start = end - (displayLength + 1);
        if (start <= 1) {
            start = 2;
        }
    }
    if (start !== 2) {
        pageBtns.push('...');
    }
    for (let i = start; i <= end; i++) {
        pageBtns.push(i);
    }
    if (end !== totalPage - 1) {
        pageBtns.push('...');
    }
    pageBtns.push(totalPage);
    pageBtns.unshift('<');
    pageBtns.push('>');
    return pageBtns;
};

const renderPageBtn = function (pageBtns, currentPage, totalPage, onChangePage, link) {
    return (
        <div className='mc-pagination'>
            {
                pageBtns.map((item, index) => {
                    let btnElem;
                    /* 视图情况1: ... 不可点击 */
                    if (item === '...') {
                        btnElem = <a className='btn disabled' key={index} href='javascript:;'>{item}</a>;
                    /* 视图情况2: 上一页按钮，当前页与首页相等时，不可点击 */
                    } else if (item === '<') {
                        if (currentPage === 1) {
                            btnElem = <a className='btn btn-pre disabled' key={index} href='javascript:;'>{item}</a>;
                        } else {
                            btnElem = (<a
                                className='btn btn-pre'
                                href={link ? link + (currentPage - 1) : 'javascript:;'}
                                onClick={(e) => { if (!link) { e.preventDefault(); onChangePage(currentPage - 1); } }}
                                key={index}
                            >
                                {item}
                            </a>);
                        }
                    /* 视图情况3: 下一页按钮，当前页与尾页相等时，不可点击 */
                    } else if (item === '>') {
                        if (currentPage === totalPage) {
                            btnElem = <a className='btn btn-next disabled' key={index} href='javascript:;'>{item}</a>;
                        } else {
                            btnElem = (<a
                                className='btn btn-next'
                                href={link ? link + (currentPage + 1) : 'javascript:;'}
                                onClick={(e) => { if (!link) { e.preventDefault(); onChangePage(currentPage + 1); } }}
                                key={index}
                            >
                                {item}
                            </a>);
                        }
                    /* 视图情况4: 当前页高亮 */
                    } else if (item === currentPage) {
                        btnElem = (<a
                            className='btn btn-current'
                            href={link ? link + item : 'javascript:;'}
                            onClick={(e) => { if (!link) { e.preventDefault(); onChangePage(item); } }}
                            key={index}
                        >
                            {item}
                        </a>);
                    /* 视图情况5: 其他 */
                    } else {
                        btnElem = (<a
                            className='btn'
                            href={link ? link + item : 'javascript:;'}
                            onClick={(e) => { if (!link) { e.preventDefault(); onChangePage(item); } }}
                            key={index}
                        >
                            {item}
                        </a>);
                    }
                    return btnElem;
                })
            }
        </div>
    );
};

export default class Pagination extends Component {
    render () {
        const { totalPage, currentPage, displayNum, onChangePage, link } = this.props;
        const pageBtns = calculateBtns(currentPage, totalPage, displayNum);
        return (
            <div>
                { renderPageBtn(pageBtns, currentPage, totalPage, onChangePage, link) }
            </div>
        );
    }
}

Pagination.defaultProps = {
    currentPage: 1,     // 当前页码
    totalPage: 1,   // 总共有多少页
    displayNum: 4, // 显示数字的页码数
    link: '',       // 页面直接跳转链接
    onChangePage: () => {} // 页码选中回调
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    displayNum: PropTypes.number,
    link: PropTypes.string,
    onChangePage: PropTypes.func
};

