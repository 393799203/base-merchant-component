import React, { Component } from 'react';
import DatePicker from 'source_path/datepicker';

export default class DatepickerView extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount () {
    }

    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    时间选择器 - Datepicker
                </h1>
                <h2>
                    1. 示例
                </h2>
                <DatePicker />
                <br />
            </div>
        );
    }
}

