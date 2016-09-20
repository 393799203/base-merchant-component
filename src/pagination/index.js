import React from 'react';
import './style/index.less';

var Pagination = React.createClass({
    getInitialState: function () {
        var newProps = this.updateProps(this.props);
        return newProps;
    },

    componentWillReceiveProps: function(props){
        var newProps = this.updateProps(props);
        this.setState(newProps);
    },
    updateProps: function(props){
        var totalPage = props.totalPage;

        //不显示最后一页，显示点点点
        if(props.hideEnd) {
            totalPage = props.currentPage + 2;
        }

        var props = {
            current: parseInt(props.currentPage) || 1,     // 当前页码
            isEnd: this.props.isEnd,                       // 是否是最后一页
            totalPage: totalPage || parseInt(props.currentPage) || 1,                          // 总共有多少页
            display_num: parseInt(props.display_num) || 4, // 显示数字的页码数
            link: props.link,                              // 页面直接跳转链接
            changePage: props.onChangePage||'',             // 页码选中回调
            hideEnd: props.hideEnd
        };
        return props;
    },
    // 显示数字的区间
    getInterval: function(current){
        var state = this.state;
        var half_display_num = Math.floor(state.display_num/2);
        var upper_limit = state.totalPage - state.display_num;
        var start = current > half_display_num ? Math.max(Math.min(current - half_display_num, upper_limit), 1) : 1;
        var end = current > half_display_num ? Math.min(current + half_display_num + (state.display_num % 2), state.totalPage) : Math.min(state.display_num, state.totalPage);
        return {start: start, end: end}
    },
    changePage: function(page){
        if(this.state.changePage && typeof this.state.changePage == 'function') {
            this.state.changePage(page);
        }
    },
    createLink: function(current, page_id, text, className, length){
        var link = this.state.link ? this.state.link + 'page=' + page_id : 'javascript:;';

        className = (current == page_id) ? 'active' : className;
        return (
            <li className={className} key={length} onClick={page_id ? this.changePage.bind(this, page_id) : ''}>
                <a href={page_id ? link : 'javascript:;'}>{text}</a>
            </li>
        );
    },
    createRangeLink: function(current, start, end){
        var arr = [];
        if(current > 1) {
            arr.push(
                this.createLink(current, current-1, '<', 'btn-opera', arr.length)
            )
        }
        if(start > 1) {
            arr.push(
                this.createLink(current, 1, 1,'',arr.length)
            );
            if(start > 2) {
                arr.push(
                    this.createLink(current, 0, '...', 'disabled', arr.length)
                );
            }
        }
        for(var i=start; i<=end; i++) {
            arr.push(
                this.createLink(current, i, i, '', arr.length)
            );
        }
        if(this.state.hideEnd) {
            arr.push(
                this.createLink(current, 0, '...', 'disabled', arr.length)
            );
        }else if(end < this.state.totalPage) {
            if(end < (this.state.totalPage - 1)) {
                arr.push(
                    this.createLink(current, 0, '...', 'disabled', arr.length)
                );
            }
            arr.push(
                this.createLink(current, this.state.totalPage, this.state.totalPage, '',arr.length)
            );
        }

        if(current < this.state.totalPage) {
            arr.push(
                this.createLink(current, current + 1, '>','btn-opera', arr.length)
            )
        }
        return arr
    },

    createPagination: function(current){
        var interval = this.getInterval(current);
        return this.createRangeLink(current, interval.start, interval.end);
    },

    render: function(){
        var arr = this.createPagination(this.state.current);
        return (
            <ul className="mc-pagination">
                {arr.map(function(item){
                    return item
                })}
            </ul>
        )
    }
});

module.exports = Pagination;
