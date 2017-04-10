/* eslint-disable */
import React, { Component } from 'react';
import Table from 'source_path/table';
import Notification from 'source_path/notification';
import Field from 'source_path/field';
import Readme from './README.md';

const TableColumns = [{
    key: "checked",
    title: '选中'
},{
    key: "name",
    title: "优惠卷名称",
    isSort: true
},{
    key: "price",
    title: "优惠卷价格",
    align: "right",
    isSort: true,
    tplData: "哈哈哈，我只是一个提示框而已啦~",
},{
    key: "stock",
    title: "库存",
    align: "right",
    isSort: true
},{
    key: "opreat",
    title: "操作"
}];

const TableDatas = [{
    id: "1",
    name: "钱包",
    price: "500",
    stock: "300",
    opreat: "编辑",
    checked: true,
},{
    id: "2",
    name: "手机",
    price: "1900",
    stock: "200",
    opreat: "编辑",
    checked: true,
},{
    id: "3",
    name: "白菜",
    price: "20",
    stock: "1000",
    opreat: "编辑",
    checked: true
}];


export default class TableView extends Component {
    constructor () {
        super();
        this.state = {
            checkedAll: false,
            columns: TableColumns,
            datas: TableDatas,
            pageConfig: {
                theme: 'info',
                currentPage: 1,
                totalPage: 20,
                onChangePage: this.changePage.bind(this)
            }
        };
    }
    componentDidMount () {
        this.formatColumns();
        this.mapDatas();
    }
    // 遍历表格内容
    mapDatas () {
        const { datas } = this.state;
        const checkedItem = [];
        datas.map((item, index) => {
            if (item.checked) {
                checkedItem.push(item);
            }
        });
        if (datas.length !== 0 && checkedItem.length === datas.length) {
            this.setState({checkedAll: true});
        } else {
            this.setState({checkedAll: false});
        }
    }
    // 格式化表头
    formatColumns () {
        const { columns } = this.state;
        columns.map((item) => {
            if (item.key === 'checked') {
                item.renderHead = (text, item) => {
                    return (
                        <label className="form-checkbox">
                            <input
                                type="checkbox"
                                checked={this.state.checkedAll}
                                onChange={() => this.handleChange(item, -1)}
                            />
                            <span></span>
                        </label>
                    )
                }
                item.renderBody = (text, item, index) => {
                    return (
                        <label className="form-checkbox">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => this.handleChange(item, index)}
                            />
                            <span></span>
                        </label>
                    )
                }
            }

            if (item.key === 'opreat') {
                item.renderBody = (text, item) => {
                    return (
                        <a onClick={() => this.edit(item)} className="btn btn-mini btn-warning" title="编辑">
                            {text}
                        </a>
                    )
                }
            }
        });
        this.setState({columns});
    }
    // checkbox 回调
    handleChange (item, index) {
        const { datas } = this.state;
        if (index === -1) {
            this.setState({
                checkedAll: !this.state.checkedAll
            }, () => {
                datas.map((item) => {
                    item.checked = this.state.checkedAll
                });
                this.setState({datas});
            });
        } else {
            const { datas } = this.state;
            datas[index].checked = !datas[index].checked
            this.setState({datas}, () => {
                this.mapDatas();
            });
        }
    }
    // 分页
    changePage (currentPage) {
        const { pageConfig } = this.state;
        pageConfig.currentPage = currentPage;
        this.setState({ pageConfig });
    }
    // 排序方法
    sort (key, sortType) {
        const message = `对 ${key} 列，${sortType} 排列`;
        Notification.info({message})
    }
    // 编辑
    edit (item) {
        const message = `id: ${item.id}`;
        Notification.info({message, duration: 4000});
    }
    // 获取所有选中行
    getCheckedRow () {
        const {datas} = this.state;
        const checkedItemId = [];
        datas.map((item) => {
            if (item.checked) {
                checkedItemId.push(item.id);
            }
        });
        const message = `选中行的ID: ${checkedItemId.join(',')}`
        Notification.info({message});
    }
    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    表格 - Table
                    <a href="mactt://message/user/02845" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div className='m-b'>
                    <a
                        className='btn btn-xs btn-success'
                        onClick={() => {this.getCheckedRow()}}
                    >
                        获取选中行
                    </a>
                </div>
                <Table
                    columns={this.state.columns}
                    datas={this.state.datas}
                    sort={this.sort.bind(this)}
                    pageConfig={this.state.pageConfig}
                />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */

