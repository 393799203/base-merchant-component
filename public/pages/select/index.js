import React, { Component } from 'react';
import {Select , Selects} from 'source_path/select/index';
import Readme from './README.md';
import './index.less';

const selectOptions = [
    {text:"选择一",value:"1"},
    {text:"选择二",value:"2"},
    {text:"选择三",value:"3"},
    {text:"选择四",value:"4"},
]
export default class SelectComponentView extends Component {
	constructor () {
		super();
	}

    selectChange(e){
        console.info(e);
    }

	render () {
		return (
			<div className="m-l m-r m-t">
				<Select style={{ width: "150px" }}
                    selectOptions={selectOptions} 
                    onChange={(e) => this.selectChange(e)}/>
			</div>
	  	)
	}
}