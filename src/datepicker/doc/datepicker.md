# DatePicker

## 简介

 日期选择框，传送门:http://upfront.mogujie.org/static/up-demo/#/datepicker?_k=ems7ei

## 使用

 当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

### 基本用法

```javascript
import DatePicker from '@mogu/up-components/lib/DatePicker';

function onChange(value) {
  console.log(value);
}

ReactDOM.render(<DatePicker onChange={onChange} />, document.getElementById('container'));
```

### 日期格式

使用 format 属性，可以自定义你需要的日期显示格式，如 yyyy/MM/dd
使用 defaultValue可以设置默认值

```javascript

import DatePicker from '@mogu/up-components/lib/DatePicker';

function onChange(value) {
  console.log(value);
}

ReactDOM.render(<DatePicker
    onChange={onChange}
    defaultValue="2015/01/01"
    format="yyyy/MM/dd"
    />, document.getElementById('container'));

```

### 时间选择器

使用showTime可以选择时间,使用timeConfig可以配置可选择的时间

```javascript
import DatePicker from '@mogu/up-components/lib/DatePicker';

function onChange(value) {
  console.log(value);
}

let timeConfig = {
    disabledHours : () => [0,1,2,3,4,5,6,22,23],
    disabledMinutes : () => [0, 2, 4, 6, 8],
    disabledSeconds : () => [0, 2, 4, 6, 8],
    hideDisabledOptions : false  //是否隐藏不可选项
};

ReactDOM.render(<DatePicker
    onChange={ this.onChange }
    format="yyyy-MM-dd HH:mm:ss"
    placeholder="有不可选时间"
    timeConfig={ timeConfig }
    showTime/>,
  document.getElementById('container'));

```

### 日期范围

使用 RangePicker 实现日期范围

```javascript

import DatePicker from '@mogu/up-components/lib/DatePicker';
const RangePicker = DatePicker.RangePicker;

function onChange(value) {
  console.log('From: ', value[0], ', to: ', value[1]);
}

ReactDOM.render(<RangePicker
    showTime
    format="yyyy/MM/dd HH:mm:ss"
    onChange={ this.handleChangeRange }/>,
  document.getElementById('container'));

```

## Props

### DatePicker

| props   | 说明    | 类型    | 默认值  |
| ------- |--------|---------|-------|
| value   | 日期    | string or Date |   -   |
| defaultValue  | 默认日期    | string or Date |   -   |
| format  | 展示的日期格式，配置参考[GregorianCalendarFormat](https://github.com/yiminghe/gregorian-calendar-format)  | string | "yyyy-MM-dd" |
| disabledDate  | 不可选择的日期  | function | - |
| onChange  | 时间发生变化的回调，发生在用户选择时间时  | function(Date value) | - |
| disabled  | 禁用  | bool | - |
| showTime  | 增加时间选择功能  | bool | false |
| timeConfig  | 时间选择器相关配置,可参考TimePicker  | object | - |

### RangePicker

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期          | [string/Date, string/Date]   | - |
| defaultValue | 默认日期       | [string/Date, string/Date]   | - |
| format       | 展示的日期格式  | string    | "yyyy-MM-dd HH:mm:ss" |
| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function([Date start, Date end]) | - |
