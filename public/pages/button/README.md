### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |
| ------------ | ------------- | ------------ | ------------  |------------  |
| value   | 按钮显示的值，如确定、取消等    | string       |  如果children有值则优先显示children  |   确定  |
| children   | 按钮标签包裹内容    | node   |   如果有值则显示，否则显示value值  |   －  |
| onChange       | 点击后的回调函数    | function       |  |     |
| className | 按钮样式 | string | 支持大小、填充、线条;具体查看className 具体说明| 默认 `btn`, 大小normal |
| isLoading       | 是否是加载中,加载中是不允许点击的哦   | bool       |    |  false   |
| disabled       |  是否禁止点击    |    bool    | -    |   false  |
| ..props | 支持扩展属性 | object | - |


#### className 具体说明

| 类型        | 说明           | 样式         |
| ------------ | ------------- | ------------ |
| 按钮大小   | 控制按钮大小，默认normal    |   `btn-mini`, `btn-xs`, `btn-sm`, `btn`, `btn-md`, `btn-lg`, `btn-block` |
| 填充按钮   | 填充按钮和线条按钮只能二选一    |   `btn-danger`, `btn-success`, `btn-info`, `btn-warning`, `btn-dark` |
| 线条按钮   | 填充按钮和线条按钮只能二选一    |   `btn-danger-border`, `btn-success-border`, `btn-info-border`, `btn-warning-border`, `btn-dark-border` |

#### 2.2 使用示例

	import React, { Component } from 'react';
	import Button from '@meili/base-merchant-component/lib/button';
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
	        );
	    }
	}