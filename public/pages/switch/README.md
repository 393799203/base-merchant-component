### 2. 使用说明

#### 2.1 参数说明

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| checked   | 指定当前是否选中    | boolean       |  选中的值   |   false  |
| defaultChecked   | 初始是否选中    | boolean       |  默认选中项的value   |   false  |
| onChange       | 变化时回调函数	    | Function(checked:Boolean)       | -    |     |
| checkedChildren       | 选中时的内容	    | string/ReactNode       | -    |     |
| unCheckedChildren       | 非选中时的内容	    | string/ReactNode       | -  |     |
| size     | 开关大小，可选值：default small	   | string | - |  default | 



#### 2.2 使用示例

```
import React, { Component } from 'react';
import Switch from '@meili/base-merchant-component/lib/switch';
export default SwitchView extends Component {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    render(){
       return(<Switch defaultChecked={false} onChange={onChange} />) 
    }
}
```

```
import React, { Component } from 'react';
import Switch from '@meili/base-merchant-component/lib/switch';
import Button from '@meili/base-merchant-component/lib/button';
export default SwitchView extends Component {
   state = {
        disabled: true
    }
    toggle = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    }
    render () {
        return (
            <span>
                <Switch disabled={this.state.disabled} />
                <br />
                <Button type='primary' onClick={this.toggle}>Toggle disabled</Button>
            </span>
        );
    }
}
```

```
import React, { Component } from 'react';
import Switch from '@meili/base-merchant-component/lib/switch';
import Icon from '@meili/base-merchant-component/lib/icon';
export default SwitchView extends Component {
    render () {
        return (<span>
            <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
            <br /><br />
            <Switch checkedChildren='1' unCheckedChildren='0' />
            <br /><br />
            <Switch checkedChildren={<Icon type='check' />} unCheckedChildren={<Icon type="close" />} />
        </span>);
    }
}
```

```
import React, { Component } from 'react';
import Switch from '@meili/base-merchant-component/lib/switch';
export default SwitchView extends Component {
   return (<span>
        <Switch />
        <br />
        <Switch size='small' />
    </span>);
}
```