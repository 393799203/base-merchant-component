### 2. 引用方式

    import Table  from '@meili/base-merchant-component/lib/table';

### 3. 普通 `Table` 示例

    <Table
        columns={this.state.columns}         // 表头数据
        datas={this.state.datas}             // 内容数据
        sort={this.sortData.bind(this)}      // 排序方法 － 表头数据配置需要排序时，则执行该排序方法
        pageConfig={this.state.pageConfig}   // 分页配置 － 与分页组件配置一致
    />

### 4. 数据

#### 4.1. 表头 `columns` 数据格式

    [{
        key: "price",                           // 对应 datas 回填字段的键值
        title: "优惠卷价格",                      // 表头文字
        align: "right",                         // 对齐方式
        isSort: true,                           // 是否需要排序
        tplData: "哈哈哈，我只是一个提示框而已啦~",   // 表头文字的 tooltip 提醒内容
    }, {...}, ...];

#### 4.2. 内容 `datas` 数据格式

    [{
        id: "1",
        name: "钱包",
        price: "500",
        stock: "300",
        opreat: "编辑",
        checked: true
    }, {...}, ...];

#### 4.3. 格式化 `column` 的表头: `renderHead`

> 如果需要对某一列的表头进行格式化，对该列 `renderHead` 赋值，如需要将ID列表头文字格式化为 `checkbox`

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
        }
    });

#### 4.3. 格式化 `column` 的内容: `renderBody`

> 如果需要对某一列的内容进行格式化，对该列 `renderBody` 赋值，如需要将操作列格式化为操作按钮，并在按钮上绑定编辑方法：

    columns.map((item) => {
        if (item.key === 'opreat') {
            item.renderBody = (text, item, index) => {
                return (
                    <a onClick={ e => this.edit(item) } className="btn btn-mini btn-warning" title="编辑">
                        {text}
                    </a>
                )
            }
        }
    });

### 5. Table参数说明
| 参数        | 说明          | 类型         |默认值
| ------------ | ------------- | ------------ |------------ |
| showIndex        | 是否在第一行显示序号  |  boolean | false |
| theme        | 表格主题色，可选`default`, `danger`, `info`, `warning`, `dark`, `success`  |  string |'default' |
| className        |    表格样式如: `table-hover`, `table-stripe` |  string |- |
| columns        | 表头数组  |  array |- |
| datas        | 表格数据  |  array |- |
| sort        |排序函数 |  func |- |
| pageConfig        | 分页配置，对象内容同Pagination配置,只有一页时默认隐藏  |  object |- |

### 6. columns参数说明

| 参数        | 说明          | 类型         |默认值
| ------------ | ------------- | ------------ |------------ |
| title        | 标头描述文字  |  string | - |
| key        | 对应datas回填字段的键值  |  string |- |
| align        | 对齐方式, 可选 'center', 'left', 'right'  |  string | 'center' |
| width        | 宽度  |  string | 'auto' |
| isSort        | 排序  | boolean  | true排序，不排序不传即可|
| tplData        | 显示框内容  | string  | 若要显示提示框，传入提示框内容|
| renderHead        | 该列表头回填内容函数, 参数依次为 text, item  |-  |- |
| renderBody        | 该列的自定义回填内容函数, 参数依次为 text, item, index  |  -|-|

### 7. 完整示例

    import React, { Component } from 'react';
    import Table from '@meili/base-merchant-component/lib/table';
    import Notification from '@meili/base-merchant-component/lib/notification';

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
        constructor (props) {
            super(props);
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
                <div>
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
                </div>
            );
        }
    }


