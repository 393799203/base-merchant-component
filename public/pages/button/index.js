/* eslint-disable */
import React, { Component } from 'react';
import Button from 'source_path/button';
import Readme from './README.md';

export default class ButtonView extends Component {
    constructor () {
        super();
        this.state = {
            isLoading: false
        };
    }
    handleChange (e) {
        console.log('点击事件', e);
    }
    changeStatus () {
        this.setState({
            isLoading: true
        })
    }
    render () {
        let {isLoading} = this.state;
        return (
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    按钮 -  Button
                    <a href="mactt://message/user/02635" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>1、使用示例</h3>
                <table className='mt-15'>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className='mb'>
                                    1.  普通按钮，支持回调函数
                                </h4>
                                <Button value='点击我' handleChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <h4 className='mb'>
                                    2. 禁止点击的按钮
                                </h4>
                                <Button value='点击我' disabled={true}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className='mb'>
                                    3. 点击后变成加载状态的按钮
                                </h4>
                                <Button value='点击我' isLoading = {isLoading} handleChange = {this.changeStatus.bind(this)}/>
                            </td>
                            <td>
                                <h4 className='mb'>
                                    4. 红色皮肤，尺寸大的按钮
                                </h4>
                                <Button value='点击我'  className="red-btn large" handleChange = {this.handleChange.bind(this)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className='mb'>
                                    5. 蓝色皮肤,尺寸小的按钮
                                </h4>
                                <Button value='点击我' className="blue-btn small" handleChange = {this.handleChange.bind(this)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */
