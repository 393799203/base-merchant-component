### 2. - 使用说明
* 引入方式:

```
import React, { Component } from 'react';
import { Tab, TabWrapper } from '@meili/base-merchant-component/lib/tab';
```

* 用法示例

```
const navs = [{
    title: '最新消息'
}, {
    title: '我的关注'
}, {
    title: '历史消息'
}];

<TabWrapper navs={navs}>
    <Tab key='0'>我是第一个Tab的内容</Tab>
    <Tab key='1'>我的第二个Tab的内容</Tab>
    <Tab key='2'>我是第三个Tab的内容</Tab>
</TabWrapper>
```

* 修改切换方式

```
const navs = [{
    title: '最新消息'
}, {
    title: '我的关注'
}, {
    title: '历史消息'
}];

// 鼠标移到tab上时触发切换
<TabWrapper navs={navs} trigger="mouseEnter" className="tab-container">
    <Tab key='0'>我是第一个Tab的内容</Tab>
    <Tab key='1' className="second-tab">我的第二个Tab的内容</Tab>
    <Tab key='2'>我是第三个Tab的内容</Tab>
</TabWrapper>
```

* 整体tab绑定事件

```
const navs = [{
    title: '最新消息'
}, {
    title: '我的关注'
}, {
    title: '历史消息'
}];

clickHanler (i) {
	// click 事件处理函数
   Notification.info({
       message: `你点击了第${i + 1}个tab`,
       duration: 2000
   });
}

changeHandler (newVal, oldVal) {
	// change 事件处理函数
   Notification.info({
       message: `你点击了第${newVal + 1}个tab，你是从第${oldVal + 1}个tab切换过来的`,
       duration: 2000
   });
}

<TabWrapper
	 navs={nav1}
	 onClick={i => this.clickHanler(i)}
	 onChange={(newVal, oldVal) => this.changeHandler(newVal, oldVal)}>
    <Tab key='0'>我是第一个Tab的内容</Tab>
    <Tab key='1'>我的第二个Tab的内容</Tab>
    <Tab key='2'>我是第三个Tab的内容</Tab>
</TabWrapper>
```

* 单个tab绑定事件 | 添加其他属性

```
const navs = [{
    title: '最新消息',
    children: <span className="lastest">NEW!</span>,
    className: 'news'
}, {
    title: '我的关注',
    attrs: {
        onClick () { // 第二个tab绑定的click事件
            Notification.info({
                message: '你摸我了',
                duration: 2000
            });
        },
        title: '哈哈'
    }
}, {
    title: '历史消息(超链接)',
    attrs: {
        href: 'http://www.xiaodian.com'
    }
}];

singleTabClick () {
   Notification.success({
       message: '点击tab内容的时候触发了事件',
       duration: 3000
   });
}

<TabWrapper navs={navs}>
   <Tab key='0'>我的第一个Tab的内容</Tab>
   <Tab key='1' onClick={this.singleTabClick}>点击下这个Tab的内容试试</Tab>
   <Tab key='2'>我是第三个Tab的内容</Tab>
</TabWrapper>
```

* lazyload

```
/** TabWrapper的lazyLoad属性应用于所有Tab，all or all not
	单独设置Tab则代表该组件是否需要懒加载，Tab组件的lazyLoad属性权重更高 */
<TabWrapper navs={navs} lazyLoad>
    <Tab key='0'>第一个组件的内容</Tab>
    <Tab key='1'>
   	  <SomeComponent />
    </Tab>
    <Tab key='2' lazyLoad={false}>
   	  <SomeComponent />
    </Tab>
</TabWrapper>
```

* 手动改变Tab


```
// 第一种方式，不会触发Tab上绑定的事件
change () {
    this.setState({
        active: 2
    });
}

<TabWrapper navs={navs} active={this.state.active}>
    <Tab key='0'>1</Tab>
    <Tab key='1'>2</Tab>
    <Tab key='2'>3</Tab>
</TabWrapper>


// 第二种方式，正常触发回调

initRef (r) {
    this.tab = r;
}

change () { // 调用组件内部函数
    this.tab.changeTab(2);
}

<TabWrapper navs={navs} ref={(ref) => this.initRef(ref)}>
    <Tab key='0'>1</Tab>
    <Tab key='1'>2</Tab>
    <Tab key='2'>3</Tab>
</TabWrapper>

```

### 3. - 参数说明
#### 3.1 - TabWrapper
| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| navs |  Y  | 标签页列表  | [Object] | 需要重写样式时使用 | [] |
| active |  N  | 默认激活的Tab  | number | 设置展示选中的Tab | 默认值: 0 |
| theme |  N  | 主题色, `danger`, `info`, `dark`, `success`, `warning`  | string | 选中时高亮颜色 | `danger` |
| className |  N  | 组件顶层样式  | string | 需要重写样式时使用 | '' |
| trigger |  N  | 组件Tab切换触发方式  | string | 驼峰式写法，如mouseOver | 'click' |
| lazyLoad |  N  | 子组件是否需要懒加载  | bool |  | false |


备注：

1. navs为对象数组，目前提供三个属性：
	* title - nav的标题
	* attrs - nav的DOM属性和相关绑定的事件合集，参考上述示例
	* children - nav附加的JSX元素，如Tab的右上角角标等

2. TabWrapper 上还支持onChange，onClick等事件的绑定和处理，这些函数绑定对象为所有nav.当单个nav也在attrs绑定同样的事件时，先触发触发nav自己独有绑定的事件，再触发全局绑定的事件。

#### 3.2 - Tab
| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| className |  N  | 组件顶层样式  | string | 需要重写样式时使用 | '' |
| lazyLoad |  N  | 本组件是否需要懒加载  | bool |  | false |


备注：

1. Tab也支持各类事件的绑定
2. 当TabWrapper设置了lazyLoad属性，单个Tab也设置了lazyLoad属性时，单个Tab上的优先级更高。



