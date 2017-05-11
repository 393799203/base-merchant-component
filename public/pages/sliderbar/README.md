### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| range   | 双滑块模式	    | boolean       |     |   false  |
| min   | 最小值	    | number	       |     |   0  |
| max       | 最大值		    | number      | -    |  100   |
| step       | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。	    | number/null	      | -    |  1   |
| marks       | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式	    | object  | -  |  { number: string/ReactNode } or { number: { style: object, label: string/ReactNode } }   |
| dots     | 是否只能拖拽到刻度上  | boolean | - |  false | 
| value     | 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]	   | number/number[] | - |   | 
| defaultValue     | 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number] | number/number[]	 | - |  0 or [0, 0] | 
| included     | marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列  | boolean | - |  true | 
| disabled     | 值为 true 时，滑块为禁用状态	  | boolean | - |  false | 
| vertical     | 值为 true 时，Slider 为垂直方向	 | boolean | - |  false | 
| onChange     | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。	   | Function(value)	 | - |  NOOP | 
| onAfterChange     | 与 onmouseup 触发时机一致，把当前值作为参数传入。   | Function(value) | - |  NOOP | 
| tipFormatter     | Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。 | Function／null	 | - |  IDENTITY | 



#### 2.2 使用示例
##### 基本
```

import React, { Component } from 'react';
import SliderBar from '@meili/base-merchant-component/lib/sliderbar';
import Switch from '@meili/base-merchant-component/lib/switch';

class NormalDemo extends Component {
    state = {
        disabled: false
    };
    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }
    render () {
        const { disabled } = this.state;
        return (
            <div>
                <SliderBar defaultValue={30} disabled={disabled} />
                <SliderBar range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch size='small' checked={disabled} onChange={this.handleDisabledChange} />
            </div>
        );
    }
}
```
##### 输入框联动
```
import React, { Component } from 'react';
import SliderBar from '@meili/base-merchant-component/lib/sliderbar';

class InputDemo extends Component {
    state = {
        inputValue: 1
    }
    onChange = (value) => {
        this.setState({
            inputValue: value
        });
    }
    render () {
        return (
            <div>
                <SliderBar min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
                <input type='text' defaultValue={this.state.inputValue} onChange={ (e)=> this.onChange(e.target.value)} />
            </div>
        );
    }
}
```
##### 垂直
```
import React, { Component } from 'react';
import SliderBar from '@meili/base-merchant-component/lib/sliderbar';

class VerticalDemo extends Component {
    render () {
        const style = {
            float: 'left',
            height: 300,
            marginLeft: 70
        };
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div style={{ height: 300 }}>
                <div style={style}>
                    <SliderBar vertical defaultValue={30} />
                </div>
                <div style={style}>
                    <SliderBar vertical range step={10} defaultValue={[20, 50]} />
                </div>
                <div style={style}>
                    <SliderBar vertical range marks={marks} defaultValue={[26, 37]} />
                </div>
            </div>
        );
    }
}
```
##### 带标签的滑块

```
import React, { Component } from 'react';
import SliderBar from '@meili/base-merchant-component/lib/sliderbar';

class MarkDemo extends Component {
    render () {
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div>
                <h4>included=true</h4>
                <SliderBar marks={marks} defaultValue={37} />
                <SliderBar range marks={marks} defaultValue={[26, 37]} />

                <h4>included=false</h4>
                <SliderBar marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <SliderBar marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <SliderBar marks={marks} step={null} defaultValue={37} />
            </div>
        );
    }
}
```