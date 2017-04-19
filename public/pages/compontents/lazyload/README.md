### 2. 使用说明
#### 引入方式:
```
import React, { Component } from 'react';
import Lazyload from '@meili/base-merchant-component/lib/lazyload';
```

#### 用法示例

```
const palcehoder = (
    <div className='palceholder'>
        正在加载...
    </div>
);

<Lazyload className='lazy' height={500} offset={[50, 50]} placeholder={palcehoder}>
    <img src="https://s24.mogucdn.com/mlcdn/e5265e/170419_57hj0k3ecc8eigh7hiaflhhclf000_1914x708.png" />
</Lazyload>
```

### 3. - 参数说明

| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |  
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| className |  N  | 组件顶层样式  | string  | 需要重写样式时使用 | '' |
| offset |  N  | 距离视区多少距离以内时开始加载组件 | number/array | 当为数组如:[200, 100]时分辨设置顶部和底部的距离 | 200 |
| width | N | 组件的宽度 | number |  | undefined |
| height | N | 组件的高度 | number |  | undefined |
| overflow | N | 当在设置了overflow属性为auto/scroll的容器内加载时的标志 | bool |  | false |
| throttle | N | scroll事件函数节流 | number/bool | 当为true时，默认事件执行间隔为200ms | false |
| debounce | N | scroll事件函数去抖 | number/bool | 当为true时，默认延迟执行事件间隔为200ms | false |
| once | N | 是否只加载一次 | bool | 为true时当组件加载完成不再监听scroll事件和做其他处理 | true |
| placeholder | N | 组件加载时占位元素 | react element |  | null |


* 备注:
 1. 为了减少浏览器reflow，以及保证在加载过程中滚动条不会因页面高度的变化发生长短变化，请尽量保证设置lazyload组件的高度。
 2. 在滚动容器中懒加载时请设置overflow属性，保证父元素可以正确的绑定scroll事件