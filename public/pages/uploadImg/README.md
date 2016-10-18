## 2. 使用说明

> 小店 ***www.xiaodian.com*** 上传接口使用的是 [***media.xiaodian.com/image/put***](http://gitlab.mogujie.org/media/media-center) 
> * 线下环境使用请绑定 ***10.13.36.12 media.xiaodian.com***
> * 预发环境使用请绑定 ***221.228.216.45 media.xiaodian.com***

> 美丽说商家后台 ***xd.meilishuo.com*** 上传接口使用的是 [***media.meilishuo.com/image/put***](http://gitlab.mogujie.org/media/media-center)
> * 线下环境使用请绑定 ***10.13.36.12 media.meilishuo.com***
> * 预发环境使用请绑定 ***221.228.216.45 media.meilishuo.com***

> 组件内部通过域名做了兼容。

#### 2.1 参数说明

| 参数        | 说明           | 类型         |   默认值       |
| ------------ | ------------- | ------------ | ------------  |
| isMultiple   | 是否批量上传   | bealoon        | false|
| onStart      | 上传开始      | function       | -    |
| onFinish     | 上传结束      | function       | － | 
| onFailed     | 上传失败  | function       | - | 

#### 2.2 使用示例
	import React, { Component } from 'react';
	import UploadImg from '@meili/base-merchant-component/lib/upload-img';

	export default class UploadImgView extends Component {
		constructor () {
			super();
			this.state = {};
		}
		handleUploadStart () {
			console.log('start');
		}
		handleUploadFinish (resData) {
			console.log(resData);
		}
		handleUploadFailed (msg, resData) {
			console.log(msg, resData);
		}
		render () {
			return (
				<div>
					<div>
					 	<UploadImg 
					 		onStart={ this.handleUploadStart.bind(this) }
					 		onFinish={ this.handleUploadFinish.bind(this) }
					 		onFailed={ this.handleUploadFailed.bind(this) }/>
					</div>
				</div>
			)
		}
	}