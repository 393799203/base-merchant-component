### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| value   | 默认值    | string       |  按钮显示的值，如确定、取消等   |   请选择  |
| onChange       | 点击后的回调函数    | function       |  |     |
| className | 按钮样式 | string | 支持按钮现有的三种皮肤，分别是xd-btn、red-btn、blue-btn，三种大小，分别是 small,normal,large| 默认皮肤是xd-btn,默认大小是normal | 
| isLoading       | 是否是加载中,加载中是不允许点击的哦   | bool       |    |  false   |
| disabled       |  是否禁止点击    |    bool    | -    |   false  |
| ..props | 支持扩展属性 | object | - |



#### 2.2 使用示例
	
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
	            <div className='m-b-lg m-l m-r'>
	                <h1>
	                    按钮 -  Button
	                    <a href="mactt://message/user/02635" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
	                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
	                    </a>
	                </h1>
	                <table>
	                    <tbody>
	                        <tr>
	                            <td>
	                                <h2>
	                                    1.  普通按钮，支持回调函数
	                                </h2>
	                                <Button value='点击我' handleChange={this.handleChange.bind(this)}/>
	                            </td>
	                            <td>
	                                <h2>
	                                    2. 禁止点击的按钮
	                                </h2>
	                                <Button value='点击我' disabled={true}/>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <h2>
	                                    3. 点击后变成加载状态的按钮
	                                </h2>
	                                <Button value='点击我' isLoading = {isLoading} handleChange = {this.changeStatus.bind(this)}/>
	                            </td>
	                            <td>
	                                <h2>
	                                    4. 红色皮肤，尺寸大的按钮
	                                </h2>
	                                <Button value='点击我'  className="red-btn large" handleChange = {this.handleChange.bind(this)}/>
	                            </td>
	                        </tr>
	                        <tr>
	                            <td>
	                                <h2>
	                                    5. 蓝色皮肤,尺寸小的按钮
	                                </h2>
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