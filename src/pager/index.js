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
    handlePage (e, type, currentPage, totalPage) {
        e.preventDefault();
        let caculatedPage = currentPage + 1;
        if (type === 'pre') { caculatedPage = currentPage - 1; }
        // 如果上一页是0，则return
        if (caculatedPage === 0) { return; }
        // 如果下一页大于totalPage，则return
        if (caculatedPage > totalPage) { return; }
        this.props.onChangePage(caculatedPage);
    }
    render () {
        const { className, preText, nextText, currentPage, totalPage, link, linkParam, size, theme } = this.props;
        const { preLink, nextLink } = formatLink(link, linkParam, currentPage);
        return (
            <div className={`mc-pager ${className}`}>
                <span className='page-count'>{currentPage}/{totalPage}页</span>
                { /* 上一页 */
                    link ?
                        <a
                            href={link && currentPage !== 1 ? preLink : ''}
                            className={currentPage === 1 ? `btn btn-${size} btn-${theme} btn-pre disabled` : `btn btn-${size} btn-${theme} btn-pre`}
                        >
                            {preText}
                        </a>
                    :
                        <a
                            onClick={(e) => { this.handlePage(e, 'pre', currentPage, totalPage); }}
                            className={currentPage === 1 ? `btn btn-${size} btn-${theme} btn-pre disabled` : `btn btn-${size} btn-${theme} btn-pre`}
                        >
                            {preText}
                        </a>
                }
                { /* 下一页 */
                    link ?
                        <a
                            href={link && currentPage !== totalPage ? nextLink : ''}
                            className={currentPage === totalPage ? `btn btn-${size} btn-${theme} btn-next disabled` : `btn btn-${size} btn-${theme} btn-next`}
                        >
                            {nextText}
                        </a>
                    :
                        <a
                            onClick={(e) => { this.handlePage(e, 'next', currentPage, totalPage); }}
                            className={currentPage === totalPage ? `btn btn-${size} btn-${theme} btn-next disabled` : `btn btn-${size} btn-${theme} btn-next`}
                        >
                            {nextText}
                        </a>
                }
            </div>
        );
    }
}

Pager.defaultProps = {
    size: 'sm',
    theme: 'default',
    className: '',
    currentPage: 1,      // 当前页码
    totalPage: 1,        // 总共有多少页
    link: '',            // 页面直接跳转链接
    linkParam: 'page',   // 页面直接跳转时的拼接参数
    onChangePage: noop,  // 页码选中回调
    preText: '<',
    nextText: '>'
};

Pager.propTypes = {
    size: PropTypes.oneOf(['normal', 'xs', 'sm', 'md']),
    theme: PropTypes.oneOf(['default', 'danger', 'info', 'dark', 'success', 'warning']),
    className: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    link: PropTypes.string,
    linkParam: PropTypes.string,
    onChangePage: PropTypes.func,
    preText: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
    nextText: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node])
};

