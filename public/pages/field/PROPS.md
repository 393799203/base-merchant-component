## 1. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| type        | 类型           | string       | null         |
| defaultValue | 默认值 | All | - |
| value | 值 | All | - |
| type | 控件类型:'text','textarea','select','checkbox','radio','raw'(自定义控件) | String | － |
| id | 控件id属性 | String   | - |
| name | 表单描述字段的名称 | String  | - |
| form | 表单所属的form组，如果不传则默认归集到同一组 | String   | - |
| className | 扩展class | String | - |
| required | 是否必填 | boolean | false |
| label |  传递input对应label显示的文字说明 | String | - |
| placeholder | 同input的placeholder，提供输入字段预期值的提示信息 | String | - |
| format | 表示表单校验使用的校验规则,提供的校验有:'number','int','+int'(正整数),'mobile','phone','email','realname'(中文名),'password'(密码长度6-20) | String | - |
| onValidate | type='raw'时的自定义表单校验函数 | function | - |
| errorMsg | 校验失败时显示的提示 | String | - |
| options | checkbox类型、select类型和radio类型需要传递的一组值，类型为array，数组成员为object | Array | - |
| on(Events) | 可自行添加事件侦听和对应处理函数，如onClick | function | - |
| attrs | 追加到控件上得自定义属性，以对象形式传递如{readOnly: 'readOnly'} | Object | - |


## 2. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取表单数据    | form           | 表单中的数据       |
| resetData   |  重置表单数据    | form        | 无      | 
| clearData   |  清空表单数据    | form        | 无      | 