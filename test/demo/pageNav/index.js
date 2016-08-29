import React from 'react';
import { PageNav }  from 'module_path/index';

export default React.createClass({
    getInitialState: function(){
	    return {
	    	tabId: 0
	    };
	},
	options:[
		{text:'路径自定义1',link:"/"},
		{text:'路径自定义2',link:"/modal"}
	],

	changeTab: function(){
	    //向后端请求数据
	},
	render: function () {
	    return(
	    	<div>
		    	<PageNav list={this.options} active={this.state.tabId} />        
		    </div>
	    )
	 }
});
