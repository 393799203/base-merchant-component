/* eslint-disable */
import React, { Component } from 'react';
import Button from 'source_path/button';
import Notification from 'source_path/notification';
import Readme from './README.md';

export default class ButtonView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }
    handleChange (e) {
        Notification.info({ message: '你点击了按钮'});
    }
    changeStatus () {
        this.setState({
            isLoading: !this.state.isLoading
        })
    }
    render () {
        let {isLoading} = this.state;
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    按钮 -  Button
                    <a href="mactt://message/uname/ziqiu" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>1、使用示例</h3>
                <table className='m-t-15'>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className='m-b'>
                                    1.  普通按钮，支持回调函数
                                </h4>
                                <Button value='点击我' handleChange={this.handleChange.bind(this)}/>
                            </td>
                            <td>
                                <h4 className='m-b'>
                                    2. 禁止点击的按钮
                                </h4>
                                <Button value='点击我' disabled={true}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4 className='m-b'>
                                    3. 点击后变成加载状态的按钮
                                </h4>
                                <Button value='点击我' isLoading = {isLoading} handleChange = {this.changeStatus.bind(this)}/>
                            </td>
                            <td>
                                <h4 className='m-b'>
                                    4. 支持自定义按钮文字内容
                                </h4>
                                <Button>
                                    <i className='iconfont icon-search'></i> 搜索
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <h4 className='m-b'>
                                    5. 不同尺寸按钮
                                </h4>
                                <Button value='.btn-mini' className="btn btn-mini m-r"/>
                                <Button value='.btn-xs' className="btn btn-xs m-r"/>
                                <Button value='.btn-sm' className="btn btn-sm m-r"/>
                                <Button value='.btn' className="btn m-r"/>
                                <Button value='.btn-md' className="btn btn-md m-r"/>
                                <Button value='.btn-lg' className="btn btn-lg m-r"/>
                                <Button value='.btn-block' className="btn btn-block m-t"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <h4 className='m-b'>
                                    6. 填充按钮
                                </h4>
                                <Button value='.btn-danger' className="btn btn-mini btn-danger m-r"/>
                                <Button value='.btn-info' className="btn btn-xs btn-info m-r"/>
                                <Button value='.btn-warning' className="btn btn-sm btn-warning m-r"/>
                                <Button value='.btn' className="btn m-r"/>
                                <Button value='.btn-success' className="btn btn-md btn-success m-r"/>
                                <Button value='.btn-dark' className="btn btn-lg btn-dark m-r"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <h4 className='m-b'>
                                    7. 线条按钮
                                </h4>
                                <Button value='.btn-danger-border' className="btn btn-mini btn-danger-border m-r"/>
                                <Button value='.btn-info-border' className="btn btn-xs btn-info-border m-r"/>
                                <Button value='.btn-warning-border' className="btn btn-sm btn-warning-border m-r"/>
                                <Button value='.btn' className="btn m-r"/>
                                <Button value='.btn-success-border' className="btn btn-md btn-success-border m-r"/>
                                <Button value='.btn-dark-border' className="btn btn-lg btn-dark-border m-r"/>
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
