## 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| className       | css选择器    | string       | 需要自定义样式时使用   |     |
| isLoading     | 是否显示加载中的gif   | boolean | - |  false | 
| children     | 被wrapper标签包裹的代码片段   | node | 具体使用请查看使用示例 |  - | 

#### 2.2 使用示例
    
    import React, { Component } from 'react';
    import Wrapper from '@meili/base-merchant-component/lib/wrapper';

    export default class WrapperView extends Component {
        constructor (props) {
            super(props);
            this.state = {
                isLoading: false
            };
        }
        showLoading () {
            this.setState({isLoading: true});
        }
        stopLoading () {
            this.setState({isLoading: false});
        }
        render () {
            const { isLoading } = this.state;

            return (
                <div>
                    <div>
                        <button
                          className='m-b btn btn-info-custom w-sm m-r'
                          onClick={() => { this.showLoading(); }}
                        >
                            开始加载
                        </button>
                        <button
                          className='m-b btn btn-success-custom w-sm m-r'
                          onClick={() => { this.stopLoading(); }}
                        >
                            停止加载
                        </button>
                    </div>
                    <Wrapper isLoading={isLoading}>
                        <div style={{
                            height: '200px', 
                            background: '#FEFAF4', 
                            fontSize: '30px', 
                            lineHeight: '200px', 
                            textAlign: 'center'}}>
                            这是内容加载区
                        </div>
                    </Wrapper>
                </div>
            )
        }
    }