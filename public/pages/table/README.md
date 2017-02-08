### 2. 基本用法

	import React, { Component } from 'react'
    import Table  from 'modules_path/table/index';
    
    const TableColumns = [{
			key: "name",
			title: "优惠卷名称",
			isSort: true
		},{
			key: "price",
			title: "优惠卷价格",
			isSort: true,
			tplData: "哈哈哈，我只是一个提示框而已啦~",
			renderHead: function (text, record , theadCbs , forRender) {
				return (
					 <a onClick={ e => theadCbs[0]( e , record.key ) } href="#" className="table-link" title="编辑">
						<label className="label label-info">
							<span className="fa fa-pencil">优惠卷价格</span>
						</label>
					</a>
				)
			}
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
					<a onClick={ e => tbodyCbs[0]( e , record.id ) } href="#" className="table-link" title="编辑">
						<label className="label label-info">
							<span className="fa fa-pencil">查看趋势</span>
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
	            data: TABLE_DATA,
	            columns: TABLE_COLUMNS,
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
	    render () {
	        return (
	            <div className='m-b-lg m-l m-r'>
	                <h1>
	                    表格 - Table
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
	                  sort={this.sortData.bind(this)}
	                  theadCbs = {[your function]}
                      tbodyCbs = {[your function]}
	                />
	                <div dangerouslySetInnerHTML={{ __html: Readme }} />
	            </div>
	        );
	    }
	}

### 3. Table参数说明
| 参数        | 说明          | 类型         |默认值
| ------------ | ------------- | ------------ |------------ |
| showIndex        | 是否在第一行显示序号  |  boolean | false |
| indexTitle        | 序号列的标头  |  string |- |
| tableClass        | 	表格样式  |  string |- |
| tableExtend        | 表格扩展属性，如{ id : 'prod-table' }  |  object |- |
| columns        | 表头数组  |  array |- |
| datas        | 表格数据  |  array |- |
| theadCbs        | thead回调函数  |  array |- |
| tbodyCbs        | tbody回调函数  |  array |- |
| sort        |排序函数 |  func |- |
| pageConfig        | 分页配置，对象内容同Pagination配置,只有一页时默认隐藏  |  object |- |
| forRender        | 表头render方法的第4个参数  |  object |- |

### 4. columns参数说明
| 参数        | 说明          | 类型         |默认值
| ------------ | ------------- | ------------ |------------ |
| title        | 标头描述文字  |  string | - |
| key        | 对应datas回填字段的键值  |  string |- |
| colAttrs        | 	当前自定义属性  |  object |- |
| thAttrs        | 标头自定义属性  |  object |- |
| tdAttrs        | 该列数据的自定义属性，通常用来控制样式或者传递data-*  |  array |- |
| isSort        | 排序  | boolean  | true排序，不排序不传即可|
| tpl        | 显示提示框  | boolean  | true显示，不显示不传即可|
| tplData        | 显示框内容  | string  | 若要显示提示框，传入提示框内容|
| renderHead        | 该列表头回填内容函数,theadCbs表头自定义回调函数  |-  |- |
| renderBody        | 该列的自定义回填内容函数,tbodyCbs是table上自定义列的回调函数  |  -|-|



