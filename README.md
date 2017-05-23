### @meili/base-merchant-component Changelog

#### v1.4.1
* 修复 field 组件样式 bug


#### v1.4.0 `该版本 field 组件样式有明显bug, 如果使用该版本请避免使用 field 组件`
* 新增基础组件 tree
* 新增基础组件 treeSelect
* 基础组件field - 组件样式抽离
	* radio&checkbox布局变更
	* 时间相关组件使用主题库icon
	* 删除组件icon，引用主题库

#### v1.3.1
* 修复 v1.3.0 版本中的 undefined source_path bug

#### v1.3.0 `该版本有明显bug, 已废弃, 请勿安装该版本`
* 新增基础组件 rate
* 新增基础组件 sliderBar
* 新增基础组件 switch
* 基础组件 tab － 新增三种样式
* 基础组件 select
	* 增加多选模式
	* 组件新增model参数，默认为combobox单选模式
* 基础组件 echarts - 图表组件升级优化
* 业务组件 form - 图片上传增加蘑菇街、美丽说区分
* 业务组件 layout - 修改样式


#### v1.2.13
* 业务组件 form - 修改样式
* 业务组件 layout
	* msider 单页应用时改变路由时，直接改变选中导航，不重置折叠导航

#### v1.2.12
* 业务组件 form - fix eslint error
* 业务组件 layout
	* msider 高度不够时增加样式 overflow:auto
	* msider 去除第三方 velocity-react 动画依赖，改为 css3 animate

#### v1.2.11
* fix 第三方 velocity-react 依赖 react ^15.0 bug
* 业务组件 form - 增加校验


#### v1.2.10
* 基础组件 modal － modal.confirm 增加确认和取消时的文字配置
* 业务组件 form － 添加 label 控件

#### v1.2.9
* 基础组件 tag
	* 修改 tag 组件，有 api 变动
	* 新增 tagGroup 组件，支持选中，取消选中，获取数据等功能
* 基础组件 popover － 新增 popover 组件
* 基础组件 field
	* 修复表单组件 checkbox 与 radio，getData方法获得返回值为字符串的问题
    * 修改表单组件 checkbox 重置功能问题
* 去除 underscore 依赖
* 修改主题库 `@meili/merchant-theme` 引用方式为 npm
* 修改主题库文档说明

#### v1.2.8
* 基础组件 modal
	* 解决了按enter键，不断出现弹框的bug
	* 因为ie下数组对findIndex不支持，改为forEach

#### v1.2.7
* 基础组件 tooltip － 升级依赖库 rc-animate,fix api 过期的warning
* 基础组件 modal － 修改说明文档里的updateFooter名称
* 基础组件 Tab － 支持两种手动切换方式：响应触发和静默触发
* 基础组件 lazyload - 新增组件
	* 支持页面以及overflow容器中使用
 	* 支持去抖和节流
 	* 支持load once

#### v1.2.6
* 业务组件 form － 修改时间类型默认值
* 基础组件 modal － 修改样式覆盖问题

#### v1.2.5
* 基础组件 linecharts － 修改默认配置
* 基础组件 datepicker － fix 赋默认值bug

#### v1.2.4
* 基础组件 modal
	* 去掉对underscore的引用
	* 完善markdown文档
	* 增加updateBody和updateFooter方法
* 业务组件 form － 修改uploadImgList的时间选中bug

#### v1.2.3
* 基础组件 table － 增加 columns width 属性
* 基础组件 tooltip － fix readme 中引用方式错误 bug
* 业务组件 form
	* 上传图片两个组件的校验
	* 修改手机号码校验
	* 添加全局defaultValue属性，映射赋默认值
* 基础组件 lineCharts － 删除默认配置中的下载按钮
* 业务组件 address - 名称中是否包含省、市、区字眼进行兼容

#### v1.2.2
* 基础组件 select － fix select 清除输入框中值后没有真正清除值 bug
* 基础组件 modal - fix modal wrap z-index 过高覆盖 notification bug
* 基础组件 tab - 增加可配置选中 tab index feature
* 业务组件 layout {msider} - fix 单页应用时 hash 变化没有选中当前选中路由 bug
* fix 组件入口文件 index.js 中导出组件 代码 bug

#### v1.2.1
* 修复图表组件 - china map 图表线条错误bug
* 增加业务组件 -  Layout


#### v1.2.0
* 组件样式库拆分，支持不同主题颜色组件：info, warning, danger, success
* 增加基础组件 - Dropdown
* 增加基础组件 - 图表组件
	* china map
	* line chart
	* bar chart
	* pie chart
* 增加业务组件 － Form
* 增加业务组件 － Menu
* 增加组件测试用例


#### v1.1.1
* AreaCode 手机区号组件：修复组件内部依赖路径
* Table 表格组件：修复组件内部依赖路径
* Slider 轮播组件：修复组件resize window 方法找不到

#### v1.1.0
* 增加基础组件 － 轮播组件：Slider
* 增加业务组件 － 地址组件：Address
* 增加业务组件 － 全地址组件：FullAddress
* 增加业务组件 － 身份认证组件：VerifyIdenty
* 增加业务组件 － 手机验证组件：VerifyPhone

#### v1.0.1
* Modal 弹出层组件：修复样式字符串bug，webapck@1.12.1 版本打包
* Select 下拉组件：
	* 添加getData、clearData、resetData方法
	* 添加下拉框内容搜索功能、添加键盘上下键监听功能
* AreaCode 手机区号组件：
	* 添加clearData方法
	* 添加下拉列表搜索功能
* Field 表单组件
	* 修复错误提示样式问题

#### 使用

	npm install @meili/base-merchant-component --save

#### 项目简介

该node包为小店公用组件，基于MFP平台生成，依赖React@0.14.x。

#### 组件说明

目前维护两个版本：

* 0.x.x -- develop 分支
* 1.0.0 -- v1.0.0 分支

v1.0.0的版本是使用商家后台新的UI规范开发的一套新的组件，api兼容0.x.x版本。

#### 组件开发

##### 1、gitlab代码提交规范

[fork & mr](http://doc.f2e.meili-inc.com/merchant/gitlab.html)

组件开发不用关注打包

##### 2、本地环境搭建
	# 进入项目
	$ cd your-project-name

	# 如果开发0.x.x版本，请从远程切出develop分支
	# 如果开发v1.0.0 版本，请从远程切出v1.0.0分支；
	# 假设远程主仓库以 main 命名
	$ git checkout -b develop main/develop
	$ git checkout -b v1.0.0 main/v1.0.0


	# 安装依赖
	$ npm install

##### 3、项目目录说明

	├── README.md
	├── demo/      # 组件文档说明打包后文件，原文件在 public/ 下，使用webpack.build.config.js打包生成
	├── dist/      # 使用cdn方式引用，暂时没有提供
	├── lib/       # 编译后组件，提供给用户使用，使用webpack.config.js打包
	├── node_modules/
	├── package.json/
	├── public/    # 组件文档api站点源码
	├── scripts/   # 一些脚本
	├── spec/      # 测试用例
	├── src/       # 组件源码
	├── webpack.build.config.js
	├── webpack.config.js
	├── webpack.dev.config.js
	├── webpack.pack.config.js
	├── webpack.pub.config.js
	└── webpack.test.config.js

##### 4、组件源码说明

    src
	├── index.js  # 组件注册文件，开发一个组件后在此文件注册，
	│             # 用户可以通过 import {xx} from @meili/base-merchant-component 引用，
	│             # 尽管不推荐此种用法
	│  
	└── tab
    	├── index.js    # 组件入口文件
    	└── style       # 样式
        	  └── index.less

##### 5、组件API

组件API站点为react单页应用，最后打包生产一个js,一个css，具体组件API写法可以参考 pages/tab

	public
	├── index.html
	├── layout
	│   ├── headNav.js
	│   ├── menu.js
	│   ├── tpl.fullPage.js
	│   └── tpl.sidePage.js
	├── main.js
	├── pages
	│   ├── home
	│   │   └── index.js
	│   └── tab    # tab 组件 api 页面
	│       ├── README.md
	│       └── index.js
	├── route.js   # 路由
	└── style
    	└── index.css

##### 6、启动组件文档API站点

	$ npm run dev




















