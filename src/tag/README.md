# Tag
> 表格组件

## 使用

### 基本用法

	import React, { Component } from 'react'
    import Tag  from 'modules_path/tag/index';
    
    
    class HomeComponent extends Component {
        
        afterClose(){
        	console.log('afterClose');
        }

        render () {
            return <div>
	            <Tag color={'red'}>文字部分</Tag>
	            <Tag color={'red'} circle={true}>文字部分</Tag>
	            <Tag color={'red'} circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>

	            <Tag color={'blue'}>文字部分</Tag>
	            <Tag color={'blue'} circle={true}>文字部分</Tag>
	            <Tag color={'blue'} circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>

	            <Tag color={'green'}>文字部分</Tag>
	            <Tag color={'green'} circle={true}>文字部分</Tag>
	            <Tag color={'green'} circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>

	            <Tag>文字部分</Tag>
	            <Tag circle={true} >文字部分</Tag>
	            <Tag circle={true} closeable={true} afterClose={this.afterClose.bind(this)}>文字部分</Tag>

	          </div>
        }
    }

##Tag参数说明
| 参数          | 说明                  | 类型         |默认值        |是否必需
| ----------   | -------------------- | ----------- |------------ | 
| color        | 颜色（red,green,blue) |    string   |   "default" | false
| circle       | 是否采用圆角           |    bool     |   false     | false
| closeable    | 是否可关闭             |    bool     |   false     | false
| afterClose   | 关闭后执行的事件        |    func     |   null      | false




