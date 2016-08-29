import React from 'react';
//import { RecordPublisher }  from 'module_path/index';
var RecordPublisher = require('../../../lib/recordPublisher/index')
// require('./style/index.less');

export default React.createClass({
	filterData(){
		alert("过滤数据");
	},

	handlePublishCallback(){
		alert("提交成功");
	},

	handlePublishCallback(){
		alert("取消成功");
	},

    render(){
        return(
            <div>
                <RecordPublisher 
                	ref="publisher" 
                	URL=""
                	itemId={'test'} 
                	dataFilter={this.filterData} 
                	onSuccess={this.handlePublishCallback} 
                	onCancel={this.handlePublishCallback} />
            </div>
        );
    }
});
