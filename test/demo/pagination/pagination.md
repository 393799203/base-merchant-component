## pagination 分页  
参数说明

params | 说明 | 备注
-------|------|---
currentPage |当前页 | 必填
totalPage | 总页数 | 
display_num | 显示数字的页码数 | 默认为4
onChangePage | 页码选中的回调函数 |
isEnd | 是否是最后一页 |
link | 页面直接跳转链接 |

基本用法

```
     var React = require('react');  
     var Pagination = require('module_path/pagination/Pagination.jsx');
     var Test = React.createClass({
	     getInitialState: function(){
           return {
               currentPage: 1,
               totalPage: 2
           };
	     },
	     getBaseData: function(page){
	       //page参数必有，getBaseData如有其他参数，page可放在最后
		    //这里向后端发起请求，请求第page页的数据，并根据返回的参数重置state里的currentPage和totalPage
	     },
	     render: function () {
		    return 
		    	<div style={{marginLeft:'250px;'}}>
				    <Pagination currentPage={this.state.currentPage} totalPage={this.state.totalPage} onChangePage={this.getBaseData}/>		     
				 </div>
	    }
      });
     React.render(
	    <Test />,
	   document.getElementById('J_Page')
	 );

```