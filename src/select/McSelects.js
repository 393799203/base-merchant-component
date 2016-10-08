import React, { Component } from 'react'
import './style/index.less';
import Selects from '@mogu/up-components/lib/Select/Selects';

export default class McSelects extends Component {
    constructor(props){
        super(props);
        McSelects.instance = this;
    }

    render() {
        return (
            <div>
                <Selects {...this.props.selectData} 
                    containerClassName="form-group col-xs-3" 
                    labelClassName="col-lg-4 control-label"  
                    selectClassName="col-lg-8"/>
            </div>
        );
    }
};