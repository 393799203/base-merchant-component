# Tabs
> tabs

## 使用

### 基本用法

```

import React from 'react';
import { ToolTip }  from '../../component/index';

require("./style/index.less")

class TooTip extends Component {
    render(){
        return(
            <div className="tooTipdemo">
                <p> position  top： </p>
                <ToolTip
                    tooltip={"我就是提示信息哟！！！"} 
                    position="top"
                    trigger="hover">
                    <span>鼠标放在我上面看看，样式可以自己写哟！！</span>
                </ToolTip>

                <p> position  right </p>
                <ToolTip
                    tooltip={"我就是提示信息哟！！！"} 
                    position="right"
                    trigger="click">
                    <span>点击我看看，样式可以自己写哟！！</span>
                </ToolTip>
            </div>
        );
    }
});

```