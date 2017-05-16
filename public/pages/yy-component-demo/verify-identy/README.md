### 2. 使用说明

```
import React, { Component } from 'react'
import VerifyIdenty from '@meili/base-merchant-component/lib/verify-identy';

export default class VerifyIdentyView extends Component {
    constructor () {
        super();
    }
    render () {
        return (
            <VerifyIdenty 
                hideModule={{identy:false,phone:false}}
                identyConfig={{title:"法人代表身份认证",subTitle:"必须保证填写的企业证件与入驻时填写的一致"}}
                phoneConfig={{title:"验证一下",subTitle:"验证文案",phoneLabel:"手机号码："}}
            />
        )
    }
}

```
    
### 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| hideModule | 不展示的模块      | 对象       | {identy:false,phone:false}   |
| identyConfig  | 身份认证配置,title:标题，subTitle:子标题, idNameLabel:身份证姓名文案，idCodeLabel：身份证号码文案 | 对象 | {title:"",subTitle:"",idNameLabel:"",idCodeLabel:""}   |
| phoneConfig  | 手机认证配置,title:标题，subTitle:子标题 ， phoneLabel：手机文案 | 对象 | {title:"",subTitle:"",phoneLabel:""}   |
| form | 表单名称          | string   |  ""   |
| msgContent | 发送短信验证码时的短信文案   | string   |  ""   |
| disabled | 不可点击   | boolean   |  false   |
| userId | 需要验证的用户id，id为后端返回的编码后的id   | string   |  "",验证为当前登陆人   |
| className | 样式   | string   |  ""   |
| btnName | 按钮名称   | string   |  ""   |
| submit | 点击提交出发的事件          | 方法   |  function   |
| getResult | 点击提交先出发验证，然后出发getResult方法   | 方法  |  function   |

### 4. 方法 - Function

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取验证是否成功    |     无       | true/false       |