## 2. 使用说明

```
import React, { Component } from 'react'
import VerifyPhone from '@meili/base-merchant-component/lib/verify-phone';

export default class VerifyIdentyView extends Component {
    constructor () {
        super();
    }
    
    render () {
        return (
            <div className="m-l m-r m-b-xxl">
                <VerifyPhone 
                        phoneConfig={{title:"新手机号码填写",phoneLabel:"新手机号码：",msgContent:"111"}}/>
            </div>
        )
    }
}

```
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| form | 表单      | string       | ""   |
| phoneConfig  | 手机认证配置,title:标题，subTitle:子标题 ， phoneLabel：手机文案 | 对象 | {title:"",subTitle:"",phoneLabel:""}   |
| msgContent | 发送短信验证码时的短信文案   | string   |  ""   |
| disabled | 不可点击   | boolean   |  false   |
| className | 样式   | string   |  ""   |
| btnName | 按钮名称   | string   |  ""   |
| submit | 点击提交出发的事件          | 方法   |  function   |
| getResult | 点击提交先出发验证，然后出发getResult方法   | 方法  |  function   |

## 4. 方法 - Function

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取验证是否成功    |     无       | true/false       |