##PageNav tab切换
参数说明
  
params | 说明 | 备注
-------|------|----
list | 给tab切换的标题赋值的数组 | 数组元素为object形式，包含KEY为text和link，text为标题文案，link为链接或者回调函数
active | 当前选中的页面 | 从0开始计算
  
基本用法

```
    var React = require('react');
    var PageNav = require('module_path/nav/PageNav.jsx');
    var Test = React.createClass({
	     getInitialState: function(){
             return {
             tabId: 0
             };
	     },
	     options:[
	     {text:'标题1',link:this.changeTab},
	     {text:'标题2',link:"/pc/shopadmin/index"}]，
	     changeTab: function(){
		    //向后端请求数据
	     },
	     render: function () {
		     return <div>
		     <PageNav list={this.options} active={this.state.tabId} />		
		      </div>
	     }
       });
      React.render(
	    <Test />,
	    document.getElementById('J_Page')
	);  
```  
	