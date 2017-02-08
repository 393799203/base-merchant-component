import React, { Component, PropTypes } from 'react';
import Pagination from 'source_path/pagination';
import Tooltip from 'source_path/tooltip';
import './style/index.less';

export default class Table extends Component {
    constructor (props) {
        super(props);
        this.state = {
            flagKey: null,
            sortType: null
        };
    }

    // 获取表头内容
    getThead (columns, theadCbs) {
        const { indexTitle, showIndex, forRender } = this.props;
        const self = this;

        return (
            <thead>
                <tr>
                    { showIndex ? <th>{ indexTitle }</th> : null }
                    { columns.map((item, index) =>
                        <th
                          key={item.title || item.key || index}
                          className={`md-table-${item.key}`}
                          {...item.colAttrs}
                          {...item.thAttrs}
                        >
                            {/* 如果有排序，则在头部添加排序*/}
                            <div>
                                {item.isSort ?
                                    <div className='table-title-content table-title-sort' onClick={() => { self.handleClick(item.key); }}>
                                        {(typeof item.renderHead === 'function') ?
                                            item.renderHead(item.key, item, theadCbs, forRender)
                                            : item.title
                                        }
                                        <span className='arrow'>
                                            <i className={((self.state.sortType === 'ASC' && self.state.flagKey === item.key) ? 'arrowup arrowup_active' : 'arrowup')} />
                                            <i className={((self.state.sortType === 'DESC' && self.state.flagKey === item.key) ? 'arrowdown arrowdown_active' : 'arrowdown')} />
                                        </span>
                                        {/* 如果有提示框，则在头部添加提示框*/}
                                        {item.tpl ?
                                            <Tooltip
                                              tooltip={item.tplData}
                                              position='bottom'
                                            >
                                                <span className='icon-help'>?</span>
                                            </Tooltip> :
                                            null
                                        }
                                    </div>
                                    :
                                    <div className='table-title-content'>
                                        {(typeof item.renderHead === 'function') ?
                                            item.renderHead(item.key, item, theadCbs, forRender)
                                            : item.title
                                        }
                                        {/* 如果有提示框，则在头部添加提示框*/}
                                        {item.tpl ?
                                            <Tooltip
                                              tooltip={item.tplData}
                                              position='bottom'
                                            >
                                                <span className='icon-help'>?</span>
                                            </Tooltip> :
                                            null
                                        }
                                    </div>
                                }
                            </div>
                        </th>
                    )}
                </tr>
            </thead>
        );
    }

    // 获取表格内容
    getTbody (columns, datas, tbodyCbs) {
        const { showIndex, forRender } = this.props;

        return (
            <tbody>
                { datas.length ?
                datas.map((item, rowIndex) =>
                    <tr key={rowIndex} >
                        {showIndex ? <td> {rowIndex + 1}</td> : null}
                        {columns.map((col, index) =>
                            <td
                              key={col.title || item[col.key] || index}
                              {...col.colAttrs}
                              {...col.tdAttrs}
                            >
                                {(typeof col.renderBody === 'function') ? col.renderBody(item[col.key], item, tbodyCbs, forRender, rowIndex) : item[col.key]}
                            </td>
                        )}
                    </tr>
                ) : null
            }
            </tbody>
        );
    }
    // 点击排序
    handleClick (key) {
        let sortType = 'ASC';
        if (key === this.state.flagKey) {
            sortType = this.state.sortType;
        }

        if (sortType === 'DESC') {
            sortType = 'ASC';
        } else {
            sortType = 'DESC';
        }

        if (this.props.sort) {
            this.props.sort(key, sortType);
        }
        this.setState({
            flagKey: key,
            sortType
        });
    }

    render () {
        const { prefixCls, tableClass, columns, datas } = this.props;
        const { tableExtend, theadCbs, tbodyCbs, pageConfig } = this.props;

        return (
            <div className='md-module-table'>
                <table className={`${prefixCls}-table ${tableClass}`} {...tableExtend}>
                    { this.getThead(columns, theadCbs) }
                    { this.getTbody(columns, datas, tbodyCbs) }
                </table>
                { datas && datas.length ? null : <div className='nullinfo'>暂无数据</div> }
                {(pageConfig && typeof pageConfig.currentPage !== 'undefined') ? <div style={{ marginTop: '10px' }}><Pagination {...pageConfig} /></div> : null }
            </div>
        );
    }
}

Table.defaultProps = {
    tableClass: '',
    columns: [],
    datas: [],
    showIndex: false,
    indexTitle: '序号',
    prefixCls: 'up'
};

Table.propTypes = {
    tableClass: PropTypes.string,
    columns: PropTypes.array.isRequired,
    datas: PropTypes.array.isRequired,
    showIndex: PropTypes.bool,
    indexTitle: PropTypes.string,
    prefixCls: PropTypes.string,
    theadCbs: PropTypes.func,
    tbodyCbs: PropTypes.func,
    tableExtend: PropTypes.object,
    sort: PropTypes.func,
    forRender: PropTypes.object,
    pageConfig: PropTypes.object
};
