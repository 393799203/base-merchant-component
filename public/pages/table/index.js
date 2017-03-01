import React, { Component } from 'react';
import Table from 'source_path/table';
import Readme from './README.md';

const TableColumns = [{
    key: "name",
    title: "优惠卷名称",
    isSort: true
},{
    key: "price",
    title: "优惠卷价格",
    isSort: true,
    tplData: "哈哈哈，我只是一个提示框而已啦~",
    tpl:true
},{
    key: "sock",
    title: "库存",
    isSort: true
},{
    key: "num",
    title: "商品数量",
    tpl: true,
    tplData: "哈哈哈，我只是一个提示框而已啦~"
},{
    key: "singlePrice",
    title: "客单价"
},{
    key: "opreat",
    title: "操作",
    renderBody: function(text, record, tbodyCbs){
        return (
            <a onClick={ e => tbodyCbs[0]( e , record.id ) } href="javascript:;" className="table-link" title="编辑">
                <label className="label label-info">
                    <span className="fa fa-pencil">点我点我</span>
                </label>
            </a>
        )
    }
}];
const TableData = [{
    id: "1",
    name: "钱包",
    price: "500",
    sock: "300",
    num: "700",
    singlePrice: "5"
},{
    id: "2",
    name: "手机",
    price: "1900",
    sock: "100",
    num: "50",
    singlePrice: "90"
},{
    id: "3",
    name: "白菜",
    price: "20",
    sock: "1000",
    num: "200",
    singlePrice: "1.7"
}]

export default class TableView extends Component {
    constructor () {
        super();
        this.state = {
            data: TableData,
            columns: TableColumns,
            pageConfig: {
                currentPage: 1,
                totalPage: 20,
                onChangePage: this.changePage.bind(this)
            }
        };
    }
    componentDidMount () {
    }
    changePage (currentPage) {
        const { pageConfig } = this.state;
        pageConfig.currentPage = currentPage;
        this.setState({ pageConfig });
    }
    // 排序方法
    sortData (key, sortType) { //若要排序则传入排序方法,key标记要排序的列，sortType表示排序类型,cbs返回ASC(升序)、DESC(降序)
        // 对数据进行处理
    }
    eidt (e, id) {
        alert('你点我啦~' + id)
    }
    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    表格 - Table
                    <a href="mactt://message/user/02845" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <Table
                  showIndex={false}
                  indexTitle='#'
                  tableClass='table-hover'
                  tableExtend={{ id: 'prod-table' }}
                  forRender={{ key1: 1, key2: 2 }}
                  columns={this.state.columns}
                  datas={this.state.data}
                  pageConfig={this.state.pageConfig}
                  tbodyCbs={[this.eidt.bind(this)]}
                  sort={this.sortData.bind(this)}
                />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

