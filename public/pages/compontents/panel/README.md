### 2. - 使用说明

* 引入方式

```
import Panel from '@meili/base-merchant-component/lib/panel';
```

* 用法示例

```
const elem = [
    <span className='panel-header-option-1'>时间:2017-01-01</span>,
    <a className='panel-header-option-2' target='_blank' href='http://www.xiaodian.com'>查看更多</a>
];

<Panel title='示例代码' elem={elem} className="my-panel">
    <p>你的组件内容</p>
</Panel>

```

### 3. - 参数说明

| 参数        |  必填        |说明           | 类型         |  备注       |   默认值      |
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| theme |  N  | Panel主题色 可选：`default`, `danger`, `info`, `warning`, `dark`, `success`  | string | - | 'default' |
| title |  Y  | Panel的表头名称  | string or jsx element |  | '' |
| className |  N  | 组件顶层样式  | string | 需要重写样式时使用 | '' |
| elem | N | 表头额外添加的其他元素 | string or jsx element |  | null |

备注： panel上支持绑定事件