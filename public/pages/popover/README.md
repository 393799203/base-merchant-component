### 2、基本用法

	import React, { Component } from 'react'
    import Popover from '@meili/base-merchant-component/lib/popover';

    class PopoverView extends Component {
        render () {
            return (
	            <Popover
		            position='top'
		            content={
		                <div>
		                    <p className='b-b dashed p-b-sm m-b text-bold'>标题</p>
		                    <p>我是 top 提示</p>
		                </div>
		            }
		        >
		            <a className='btn btn-danger-border'>top 提示</a>
		        </Popover>
		    );
        }
    }

### 3、参数说明
| 参数          | 说明                  | 类型         |默认值        |是否必需
| ----------   | -------------------- | ----------- |------------ |
| className    | 自定义样式 |    string   |   -   | false
| content       | 提示内容 |   node      |    -    | true
| position    | 显示位置：`left`, `top`, `right`, `bottom` |    string     |   `top`     | false
| children   | 占位内容 |    node     |   -      | true



