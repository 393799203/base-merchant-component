import React from 'react';
var Breadcrumb = require('lib_path/breadcrumb/index')
export default React.createClass({
    render(){
    	var breadList = [{active:"true",url:"/",title:"面包屑"},{active:"true",url:"http://localhost:8080/#/breadcrumb?_k=itylcb",title:"跳转地址需要自定义"}]
        return(
            <div>
                <Breadcrumb breadList={breadList} />
            </div>
        );
    }
});
