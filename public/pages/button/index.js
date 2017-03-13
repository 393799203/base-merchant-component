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
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    按钮 -  Button
                    <a href="mactt://message/user/02635" style={{border: 'none', boxShadow: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
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
                                    4. 支持自定义按钮文字内容
                                </h4>
                                <Button>
                                    <i className='iconfont icon-search'></i> 搜索
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <h4 className='mb'>
                                    5. 不同尺寸按钮
                                </h4>
                                <Button value='点击我' className="btn btn-mini mr"/>
                                <Button value='点击我' className="btn btn-xs mr"/>
                                <Button value='点击我' className="btn btn-sm mr"/>
                                <Button value='点击我' className="btn mr"/>
                                <Button value='点击我' className="btn btn-md mr"/>
                                <Button value='点击我' className="btn btn-lg mr"/>
                                <Button value='点击我' className="btn btn-block mt"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <h4 className='mb'>
                                    6. 不同颜色按钮
                                </h4>
                                <Button value='点击我' className="btn btn-mini btn-danger mr"/>
                                <Button value='点击我' className="btn btn-xs btn-info mr"/>
                                <Button value='点击我' className="btn btn-sm btn-warning mr"/>
                                <Button value='点击我' className="btn mr"/>
                                <Button value='点击我' className="btn btn-md btn-success mr"/>
                                <Button value='点击我' className="btn btn-lg btn-dark mr"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <h4 className='mb'>
                                    7. 不同颜色线条按钮
                                </h4>
                                <Button value='点击我' className="btn btn-mini btn-danger-border mr"/>
                                <Button value='点击我' className="btn btn-xs btn-info-border mr"/>
                                <Button value='点击我' className="btn btn-sm btn-warning-border mr"/>
                                <Button value='点击我' className="btn mr"/>
                                <Button value='点击我' className="btn btn-md btn-success-border mr"/>
                                <Button value='点击我' className="btn btn-lg btn-dark-border mr"/>
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
