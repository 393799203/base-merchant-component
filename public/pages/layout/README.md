### 2. 使用说明

#### 2.1. MHeader 使用说明

#### MHeader 引入

	import { MHeader } from '@meili/base-merchant-component/lib/layout';

#### MHeader 使用

	<MHeader
		type='default'
		theme='success'
		menuOptions={[{text: '导航一', link: '#/menu1'}, {text: '导航二', link: '#/menu1'}]}
		user={{uname: 'xx', avatar: 'xxx'}}
		userOptions={[{text: '退出', link: ''}]}
	/>

#### MHeader 参数说明

| 参数        | 说明          | 类型         |默认值
| ------------ | ------------- | ------------ |------------ |
|     type    | 定位类型，可选 `default`, `fixed`   |  string | `fixed` |
| theme        | 主题色，可选`default`, `danger`, `info`, `warning`, `dark`, `success`, `light`  |  string | `dark` |
| className        |  顶部导航自定义样式 |  string |- |
| brand        |  顶部栏brand数据, 数据格式 `{text: '', link: ''}`  |  object | `{text: '商家后台', link: '#'}` |
| menuOptions| 顶部栏导航数据，支持下拉导航 具体查看`menuOptions` 说明 |  array |- |
| user        | 当前登录用户信息，格式 `{uname: '', avatar: ''}` |  object |- |
| userOptions | 点击用户名下拉列表，格式和 `menuOptions` 一致 |  array |- |
| menuHandler | 点击导航的回调事件 |  func |- |

#### MHeader 中 menuOptions参数说明

> menuOptions 为顶部栏导航数据, 目前只支持一级下拉导航


	[{text: '', link: ''}, {...}]

	[{text: '', link: '', options: [{text: '', link: ''}, {...}]}, {...}] // 有下拉导航数据格式

| 参数        | 说明          | 类型         |
| ------------ | ------------- | ------------ |
|     text    | 导航文案   |  string |
|     link    | 链接链接   |  string |
|     options    | 子导航数据，格式：`options: [{text: '', link: ''}, {...}]`   |  array |


#### 2.2. MSider 使用说明

#### MSider 引入

	import { MSider } from '@meili/base-merchant-component/lib/layout';

#### MSider 使用

	<MSider
		type='default'
		theme='success'
		menuOptions={[
			{text: '导航一', link: '#/menu1', options:[{text: '子导航1', link: '#/menu1-1'}]},
			{text: '导航二', link: '#/menu1'}
		]}
	/>

#### MSider 参数说明

| 参数        | 说明          | 类型         |默认值
| ------------ | ------------- | ------------ |------------ |
|     type    | 定位类型，可选 `default`, `fixed`   |  string | `fixed` |
| theme        | 主题色，可选`default`, `danger`, `info`, `warning`, `dark`, `success`, `light`  |  string | `light` |
| className        |  侧边栏自定义样式 |  string |- |
| menuOptions| 侧边栏导航数据，支持下拉导航 具体查看`menuOptions` 说明 |  array |- |
| activeLink| 当前选中链接|string| window.location.href|

#### MSider 中 menuOptions参数说明

> menuOptions 为侧边栏导航数据, 目前只支持一级下拉导航

	[{text: '', link: '', icon: ''}, {...}]

	[{text: '', link: '', icon: '', options: [{text: '', link: ''}, {...}]}, {...}] // 有下拉导航数据格式

| 参数        | 说明          | 类型         |
| ------------ | ------------- | ------------ |
|     text    | 导航文案   |  string |
|     link    | 链接链接   |  string |
|     icon    | 小图标，请在 样式库 css 中找对应的icon   |  string |
|     options    | 子导航数据，格式：`options: [{text: '', link: ''}, {...}]`   |  array |

### 3. 具体示例

	import React, { Component } from 'react';
	import { MHeader, MSider } from '@meili/base-merchant-component/lib/layout';

	export default class LayoutView extends Component {
	    render () {
	        return (
	            <div>
	                <MHeader
	                	type='fixed'
	                	theme='dark'
	                	brand={{text: 'xx后台', link: 'xx'}}
	                	menuOptions={[
	                		{text: '导航一', link: '#/menu1'},
	                		{text: '导航二', link: '#/menu1', options: [{text: '子导航一', link: '#/menu1-1'}]}
	                	]}
	                	user={{
	                		uname: '乾巧',
	                		avatar: 'https://s10.mogucdn.com/b7/pic/141119/nihao_ieydamrumy4dgzbzmqytambqhayde_100x100.png_100x100.png'
	                	}}
	                	userOptions={[{text: '退出', link: ''}]}
	                />
	                <MSider
	                	type='fixed'
	                	theme='light'
	                	menuOptions={[
	                		{text: '导航一', link: '#/link1', icon: 'global', options: [{text: '子导航一', link: '#/layout'}, {text: '子导航二', link: '#link1-2'}]},
	                		{text: '导航二', link: '#/link2', icon: 'favor'}
	                	]}
	                />
	            </div>
	        );
	    }
	}

### 4、如果 `MSider` 用于单页应用，需要手动触发当前选中导航，如下 layout.js

> 监听 `hashHistory` 路由变化，将选中路由赋值给 `MSider` 的 `activeLink` 属性

	import { hashHistory } from 'react-router';
	import React, { Component } from 'react';
	import { MSider } from '@meili/base-merchant-component/lib/layout';

	export default class LayoutView extends Component {
	    constructor (props) {
	        super(props);
	        this.state = {
	            activeLink: window.location.href
	        }
	    }
	    componentDidMount () {
	        hashHistory.listen((event) => {
	            this.setState({activeLink: window.location.href});
	        });
	    }
	    render () {
	        const { activeLink } = this.state;
	        return (
	            <div>
	                ...
	                <MSider
	                    activeLink={activeLink}
	                    ....
	                />
	            </div>
	        );
	    }
	}


