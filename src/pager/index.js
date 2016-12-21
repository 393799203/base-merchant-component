import React, { Component, PropTypes } from 'react';
import './style/index.less';

const noop = function () {};

const formatLink = function (link, linkParam, currentPage) {
    const hasQueryReg = /[?][A-Za-z0-9_]+=/;
    let joinChar = '?'; // 连接字符
    if (hasQueryReg.test(link)) { joinChar = '&'; }
    const preLink = `${link}${joinChar}${linkParam}=${currentPage - 1}`;
    const nextLink = `${link}${joinChar}${linkParam}=${currentPage + 1}`;
    return { preLink, nextLink };
};

export default class Pager extends Component {
    handlePage (e, type, currentPage) {
        e.preventDefault();
        let caculatedPage = currentPage + 1;
        if (type === 'pre') { caculatedPage = currentPage - 1; }
        this.props.onChangePage(caculatedPage);
    }
    render () {
        const { className, preText, nextText, currentPage, totalPage, link, linkParam } = this.props;
        const { preLink, nextLink } = formatLink(link, linkParam, currentPage);
        return (
            <div className={className}>
                { /* 上一页 */
                    link ?
                        <a
                          href={link && currentPage !== 1 ? preLink : ''}
                          className={currentPage === 1 ? 'btn btn-pre disabled' : 'btn btn-pre'}
                        >
                            {preText}
                        </a>
                    :
                        <a
                          onClick={(e) => { this.handlePage(e, 'pre', currentPage); }}
                          className={currentPage === 1 ? 'btn btn-pre disabled' : 'btn btn-pre'}
                        >
                            {preText}
                        </a>
                }
                { /* 下一页 */
                    link ?
                        <a
                          href={link && currentPage !== totalPage ? nextLink : ''}
                          className={currentPage === totalPage ? 'btn btn-next disabled' : 'btn btn-next'}
                        >
                            {nextText}
                        </a>
                    :
                        <a
                          onClick={(e) => { this.handlePage(e, 'next', currentPage); }}
                          className={currentPage === totalPage ? 'btn btn-next disabled' : 'btn btn-next'}
                        >
                            {nextText}
                        </a>
                }
            </div>
        );
    }
}

Pager.defaultProps = {
    className: 'mc-pager',
    currentPage: 1,      // 当前页码
    totalPage: 1,        // 总共有多少页
    link: '',            // 页面直接跳转链接
    linkParam: 'page',   // 页面直接跳转时的拼接参数
    onChangePage: noop,  // 页码选中回调
    preText: '上一页',
    nextText: '下一页'
};

Pager.propTypes = {
    className: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    link: PropTypes.string,
    linkParam: PropTypes.string,
    onChangePage: PropTypes.func,
    preText: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
    nextText: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node])
};

