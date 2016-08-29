import React from 'react';
import { TimesView }  from 'module_path/index';

export default React.createClass({
    render(){
        return(
            <TimesView timeRange='1;2;3;4;25' />
        );
    }
});
