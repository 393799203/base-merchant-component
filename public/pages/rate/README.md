### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| count   | star 总数	    | number       |     |   5  |
| value   | 当前数，受控值	    | number	       |     |   -  |
| defaultValue   | 默认值		    | number      | -    |  0   |
| onChange       | 选择时的回调	  | Function(value: number)     | -    |  -   |
| onHoverChange  | 鼠标经过时数值变化的回调		    | Function(value: number)  | -  | -  |
| allowHalf     | 是否允许半选  | boolean | - |  false | 
| disabled     | 只读，无法进行交互  | boolean | - |  false | 
| character     | 自定义字符 | ReactNode	 | - |  <Icon type="favorfill" /> | 
| className     | 自定义样式类名 | string | - |  - | 
| style     | 自定义样式对象 | object | - |  - | 



#### 2.2 使用示例
##### 基本
```
import React, { Component } from 'react';
import Rate from '@meili/base-merchant-component/lib/rate';
export default class RateView extends Component {
        render () {
             return(
                <Rate />
            )    
        }
}
```
##### 半星
```
import React, { Component } from 'react';
import Rate from '@meili/base-merchant-component/lib/rate';
export default class RateView extends Component {
        render {
             return(
                <Rate allowHalf defaultValue={2.5} />
            )
        }
}
```
##### 只读
```
import React, { Component } from 'react';
import Rate from '@meili/base-merchant-component/lib/rate';
export default class RateView extends Component {
        render {
            return(
                <Rate disabled defaultValue={2} />
            )
        }
}
```
##### 文案展示

```
import React, { Component } from 'react';
import Rate from '@meili/base-merchant-component/lib/rate';
export default class RateView extends Component {
        render {
            return(
                <div>
                    <Rate onChange={this.handleChange} value={value} />
                    {value && <span>{value} stars</span>}
                </div>
            )
        }
}
```
##### 其他字符

```
import React, { Component } from 'react';
import Rate from '@meili/base-merchant-component/lib/rate';
import Icon from '@meili/base-merchant-component/lib/icon';
export default class RateView extends Component {
        render () {
                return(
                    <Rate character={<Icon type="likefill" />} allowHalf />
                    <br />
                    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
                    <br />
                    <Rate character="好" allowHalf />
                )
        }
}
```