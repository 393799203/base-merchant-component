## 1. 属性 - Props

| props        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| type        | 类型           | string       | null         |
| name     | 标识 ，获取数据时的返回对象的key       | string       | null    |
|  label    | 名称 | string | null  |
| form     | 所有表单所属类别 | string | null  |

## 2. 方法 - Function

> 通过refs获取Modal实例调用的方法

| 方法名        |   说明    | 参数          | 返回值         |
| ------------ | ------------- | ------------- | ------------ |
| getData    |   获取表单数据    | form           | 表单中的数据       |
| resetData   |  重置表单数据    | form        | 无      | 
| clearData   |  清空表单数据    | form        | 无      | 