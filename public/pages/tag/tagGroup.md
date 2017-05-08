### 2.2、TagGroup 基本用法

	import React, { Component } from 'react'
    import { TagGroup }  from '@meili/base-merchant-component/lib/tag';

    class TagGroupView extends Component {
    	getTag () {
        	const data1 = TagGroup.getData('name1');
        	console.log(data1);
    	}
        render () {
            return (<div>
			<TagGroup
                className='m-t'
                name='name1'
                theme='success'
                shape='normal'
                isAddon={true}
                icon={{
                    checked: 'check',
                    default: 'add'
                }}
                options={[{
                    text: '选项1'
                },{
                    text: '选项2',
                    checked: true
                },{
                    text: '选项3',
                    disabled: true
                }]}
                onChange={() => {this.getTag()}}
            />
	    </div>);
        }
    }

### 2.3、TagGroup 参数说明
| 参数          | 说明                  | 类型         |默认值        |是否必需
| ----------   | -------------------- | ----------- |------------ |
| name    | 唯一标示 |    string   |   -   | true
| className    | 自定义样式 |    string   |   -   | -
| theme       | 主题色，可选 `default`,`danger`,`dark`,`success`,`info`,`warning` |   string      |   `default`     | -
| shape    | 形状，可选 `round`, `normal` |    string     |   `normal`     | -
| type   | 线条或者填充，可选 `fill`, `border`        |    string     |   `fill`      | -
| isAddon   | 是否是addon形式tag        |    bool     |   false      | -
| icon   | 选中以及默认时icon, 具体参考样式库中 iconfont 值   |    object     |   `{checked: 'close', default: 'add'}`     | -
| options   | tag可选项, 一个选项的字段支持<br/> `{text: '选项3', checked: true, disabled: true}`<br/>允许有冗余字段  |    array     |   [ ]      | true
| onChange    | tag选中或者取消选中时的回调 |    func   |   -   | -

### 2.4、TagGroup 方法

`getData` 获取指定`name`的`TagGroup` `options`的值, 如获取 `name1`的`TagGroup` `options`的值：<br/><br/>

    TagGroup.getData('name1');




