import React, { Component } from 'react'
import './style/index.less';
import UpSelects from '@mogu/up-components/lib/Select/Selects';

export default class Selects extends Component {
    constructor(props){
        super(props);
        Selects.instance = this;
    }

    render() {
        return (
            <div>
                <UpSelects {...this.props.selectData} 
                    containerClassName="form-group col-xs-3" 
                    labelClassName="col-lg-4 control-label"  
                    selectClassName="col-lg-8"/>
            </div>
        );
    }
};