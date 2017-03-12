### 2. 使用说明
#### 引入方式:
```
import React, { Component } from 'react';
import Slider from '@meili/base-merchant-component/lib/slider';
```

#### 用法示例

```
<Slider className='my-slider' slideShow={2} slideMove={2} infinite autoplay>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</Slider>
```

### 3. - 参数说明

| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |  
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| className |  N  | 组件顶层样式  | string  | 需要重写样式时使用 | '' |
| initial |  N  | 图片开始滚动的起始位置  | number |  | 0 |
| slideShow | N | 展示的图片的数量 | numer |  | 1 |
| slideMove | N | 每次移动图片的数量 | numer |  | 1 |
| duration | N | 补间动画的时间 | numer | 单位:ms | 300 |
| arrows | N | 是否显示左右箭头 | bool |  | false |
| prevArrow | N | 左箭头组件 | ReactElement | 重写左箭头时使用，覆盖默认的左箭头 | null |
| nextArrow | N | 右箭头组件 | ReactElement | 重写右箭头时使用，覆盖默认的右箭头 | null |
| autoplay | N | 是否自动播放 | bool |  | false |
| autoplaySpeed | N | 自动播放切换的时间间隔 | number | 单位:ms | 2000 |
| infinite | N | 是否无限滚动 | bool |  | false |
| pauseOnHover | N | 鼠标悬停时是否停止滚动 | bool |  | false |
| dotsShow | N | 是否显示下方原点提示 | bool |  | true |
| dots | N | 原点提示组件 | ReactElement | 重写圆点提示组件时使用，覆盖默认的原点组件 | null |
| beforeChange | N | 开始动画切换前的回调 | function | 参数为切换前的index值 | null |
| afterChange | N | 结束动画切换后的回调 | function | 参数为切换后的index值 | null |



