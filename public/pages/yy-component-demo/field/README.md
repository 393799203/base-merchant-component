### 3. 属性－Props

| props   | 说明    | 类型    | 默认值  |
| ------- |--------|---------|-------|
| type | 控件类型:'text','textarea','select','checkbox','radio','raw'(自定义控件) | String | - |
| label |  传递input对应label显示的文字说明 | String | - |
| subInfo |  表单的提示文案 | String | - |
| name | 表单描述字段的名称 | String  | - |
| id | 控件id属性 | String   | - |
| form | 表单所属的form组，如果不传则默认归集到同一组 | String   | - |
| placeholder | 同input的placeholder，提供输入字段预期值的提示信息 | String | - |
| errorMsg | 校验失败时显示的提示 | String | - |
| error | 由外部判断是否展示错误提示信息 | bool | - |
| className | 扩展class | String | - |
| required | 是否必填 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| defaultValue | 默认值 | All | - |
| value | 值 | All | - |
| options | checkbox类型、select类型和radio类型需要传递的一组值，类型为array，数组成员为object | Array | - |
| onValidate | 自定义表单校验函数 | function | - |
| onChange | 表单改变的回调函数 | function | - |
| attrs | 追加到控件上得自定义属性，以对象形式传递如{readOnly: 'readOnly'} | Object | - |
| events | 追加到控件上得自定义方法，以对象形式传递如{onClick: function} | Object | - |