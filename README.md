####项目简介

该node包为小店公用组件，基于MFP平台生成，依赖React@0.14.x。

[在线地址](http://aveng.meili-inc.com/packages/@meili/base-merchant-component_0.1.0/package/demo//test/index.html#/?_k=ks263i)

[MFP项目地址](http://aveng.meili-inc.com/#/doc/%40meili%2Fbase-merchant-component?_k=479u84)

[git仓库地址](http://gitlab.mogujie.org/Aveng/meili-base-merchant-component)

####组件使用

1. $ npm install @meili/base-merchant-component

2. 安装完毕后，在项目中引用lib中的组件即可。eg：

	import { AddressEditor }  from '@meili/base-merchant-component/lib/index.js';
	
####组件开发

##### 目录结构规范

```
  meili/base-merchant-component
  	|-- base								    组件所依赖的公共js和less
    |-- demo
    |    |-- test  	                            组件的运行示例demo
    |        |-- index.html                  	入口文件
    |        |-- bundle.js                      组件运行示例的js源码
    |        |-- app.css                        组件运行示例的css源码
    |-- public                                  
    |    |-- index.html                         用于调试组件功能的html页面，可以通过localhost:5000访问
    |    |-- main.js                            用于调试组件功能的js代码
    |    |-- route.js                           用于一个项目多个组件时方便地添加页面和路由
    |-- scripts                                 脚本目录
    |    |-- publish.sh                         发布脚本,可根据需要自行调整
    |    |-- server.js                          本地起port为5000的服务，可以根据需要自行修改
    |-- spec
    |    |-- index.spec.js                      组件的测试用例
    |    |-- setup.js                           
    |-- src                                     源码目录
    |    |-- pagenav                      		以PageNav名字命名的组件
    |        |-- index.js                       PageNav业务组件的源码
    |        |-- index.less                     PageNav业务组件的样式源码
    |    |-- address                            以Address名字命名的组件
    |-- .gitignore
    |-- .npmignore								$npm run pub 时忽略的文件
    |-- package.json
    |-- README.md                               项目整体的说明比如项目背景，项目的CHANGELOG等
    |-- webpack.config.js                       组件打包webpack基础配置文件
    |-- webpack.dev.config.js                   组件跑server时的webpack配置文件
    |-- webpack.test.config.js                  组件打包运行示例的webpack配置文件
    |-- webpack.pack.config.js                  组件统一打包的webpack配置文件
    
```

#####注意事项

1. 每一个组件文件都需要一个index.js，index.css/less。在编译过程中index.js文件是入口文件，如果index.css/less未被index.js引用则不会被编译并保存。

2. 在 $npm run pub 时会统一将jsx文件转为js文件。因此组件文件建议统一使用.js后缀，避免被其他组件引用导致报错的情况。

3. 如果组件依赖其他组件，请引入lib文件夹下对应的组件。$npm run babel 的时候并不会对文件的依赖路径进行修改，如果依赖路径是src下的文件，因为src下的文件并不会被发布至MFP，那么$npm run pub上去的组件文件在使用时会有未找到文件的报错。
 
 
