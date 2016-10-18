## 2. 使用说明
#### 2.1 使用范例

```javascript

import React, { Component } from 'react';
import TeamTalk from '@meili/base-merchant-component/lib/team-talk';
export default class TeamTalkView extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="m-l m-r m-b-xxl">
				<div className="m-t m-b">
					<button className="btn btn-success-custom w-sm">
						<TeamTalk onClick={this.contactTT} className="buttonA fr" userId="b14n0c#23" callToBusiness >立即咨询</TeamTalk>
					</button>
				</div>
			</div>
		)
	}
}	

```
	
## 3. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| onClick        | 绑定点击           | function       | {}         |
| userId          | 用户UID,当联系对象为商家官方客服时候，后端写死了userId,为普通用户时候，需传用户userId        | string       | ''  |
| callToBusiness     | callToBusiness为商家，否则为客户| string       | callToBusiness |
| className     | 样式名称 | sting | -   |

## 4. 方法 - Function

> 没啥方法，就是要注意，userId ，联系官方客服的时候，不传，后端写死了，联系普通客服的时候，传userid就ok了

| 方法名        | 参数          | 返回值         |
| ------------ | ------------- | ------------ |
| onclock       | --            | --       |






