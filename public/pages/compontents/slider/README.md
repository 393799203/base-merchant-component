## 2. 使用说明
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

## 3. - 参数说明
    className: '',
    initial: 0,
    slideShow: 1,
    slideMove: 1,
    duration: 300,
    arrows: false,
    prevArrow: null,
    nextArrow: null,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    pauseOnHover: false,
    beforeChange: null,
    afterChange: null,
    dotsShow: true,
    dots: null

| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |  
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| className |  N  | 组件顶层样式  | string  | 需要重写样式时使用 | '' |
| initial |  N  | 图片开始滚动的起始位置  | number |  | 0 |
| slideShow | N | 展示的图片的数量 | numer | 1 | null |