import React from 'react';
import { Pagination }  from 'module_path/index';

require("./style/index.less")

export default React.createClass({
    getInitialState: function(){
       return {
          currentPage: 1,
          totalPage: 20
        };
     },
     getBaseData: function(page){
        this.setState({
          currentPage:page
        })
     },
     render: function () {
	    return (
	    	<div>
  			    <Pagination 
              currentPage={this.state.currentPage} 
              totalPage={this.state.totalPage} 
              display_num={5}
              onChangePage={this.getBaseData}/>
			  </div>
	    )
    }
});
