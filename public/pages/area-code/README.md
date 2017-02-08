## 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| defaultValue   | 默认值    | string       |  默认选中项的value，如果想置为 - 请选择 -，则设置为 '－1'   |   86(中国区号)  |
| onChange       | 取实际选中的选项    | function       | －  |   －  |
| className       | css选择器    | string       | -    |     |
| disabled     | 禁止下拉菜单点击   | boolean | - |  false | 


#### 2.2 使用示例
    
    import React, { Component } from 'react';
    import AreaCode from '@meili/base-merchant-component/lib/area-code';

    export default class AreaCodeView extends Component {
        constructor (props) {
            super(props);
            this.state = {
                code: '86'
            };
        }
        handleChange(code){
            this.setState({ code: code });
        }
        render () {
            let {code} = this.state;

            return (
                <div className="m-l m-r m-b-xxl">
                    <h1>
                        手机区号 - AreaCode
                    </h1>
                    <h2>
                        1. 示例
                    </h2>
                    <div className="m-l m-r m-t m-b">
                        <AreaCode
                            defaultValue={code}
                            onChange = {(code) => this.handleChange(code)} 
                        />
                    </div>
                </div>
            )
        }
    }