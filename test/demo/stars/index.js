import React from 'react';
import { Stars }  from 'module_path/index';
export default React.createClass({
    render(){
        return(
            <div>
               <Stars total={5} step={2} />
            </div>
        );
    }
});
