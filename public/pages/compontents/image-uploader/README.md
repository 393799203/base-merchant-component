### 2. 使用说明
#### 引入方式:
```
import React, { Component } from 'react';
import ImageUploader from '@meili/base-merchant-component/lib/image-uploader';
```

#### 用法示例

1. 单文件上传附带进度
```
class SingleUpload extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgList: [], // 已完成列表
            uploading: false
        }
    }

    before (fileList) { // 选择图片前的处理动作，可用于校验、记录上传文件等
        console.log('选中的图片列表: ', fileList);
        this.setState({
            uploading: true,
            percent: '0%'
        });
    }

    progress (e, file, xhr) {
        /** 
            @desc 上传进度的钩子函数
            @param {object} e upload event对象
            @param {object} file 当前正在上传的图片
            @param {object} xhr 当前正在上传的XMLHttpRequest实例
        */
        this.setState({
            percent: `${(e.loaded / e.total * 100).toFixed(2)}%`
        });
    }

    success (successList) {
        /**
            @desc 上传成功的钩子函数
            @param {[object]} successList 上传成功列表
        */
        let { imgList } = this.state;
        imgList = imgList.concat(successList);
        this.setState({
            imgList
        });
    }

    fail (failList, successList) {
        /**
            @desc 上传失败的钩子函数
            @param {[object]} failList 上传失败列表
            @param {[object]} successList 上传成功列表
        */
        let { imgList } = this.state;
        imgList = imgList.concat(successList);
        this.setState({
            imgList
        });

        Notification.error({
            message: '图片上传失败'
        });
    }

    finish () {
        /**
            @desc 上传完成的钩子
        */
        this.setState({
            uploading: false
        });
    }
    
    render () {
        const me = this;
        const { imgList, uploading, percent } = me.state;

        return (
            <div className="example">
                <ul className="image-list clearfix">
                {
                    imgList.map((item) => {
                        return (
                            <li>
                                <img src={item.url} />
                            </li>
                        )
                    })
                }
                    <li className='upload-entry'>
                        <ImageUploader
                            className={`${uploading ? 'hidden' : null}`}
                            before={(files) => me.before(files)}
                            progress={(e, file, xhr) => me.progress(e, file, xhr)}
                            success={(a) => me.success(a)}
                            fail={(a, b) => me.fail(a, b)}
                            finish={() => me.finish()}
                        />
                        <div className={`uploading-img ${uploading ? null : 'hidden'}`}>
                            <p>{percent}</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
```

2. 多文件上传附带进度
```
class MultiUpload extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgList: [],
            uploading: false,
            percent: '0%',
            uploadList: []
        }
    }

    before (fileList) {
        console.log('选中的图片列表: ', fileList);
        let { uploadList } = this.state;
        for (let i = 0; i < fileList.length; i++) {
            let file = fileList[i];
            uploadList.push(file);
        }
        this.setState({
            uploading: true
        });
    }

    progress (e, file, xhr) {
        this.setState({
            percent: `${(e.loaded / e.total * 100).toFixed(2)}%`
        });
    }

    singleSuccess (resp) {
        let { imgList, uploadList } = this.state;

        imgList.push(resp);
        uploadList.shift();
        this.setState({
            imgList,
            uploadList
        });
    }

    singleFail (resp, file) {
        let { uploadList } = this.state;
        uploadList.shift();
        this.setState({
            uploadList
        });

        Notification.error({
            message: `${file.name}上传失败`
        });
    }

    finish () {
        this.setState({
            uploading: false
        });
    }
    
    render() {
        const me = this;
        const { imgList, uploading, percent, uploadList } = me.state;

        return (
            <div className="example">
                <h4>1.4 多文件上传-附带进度</h4>
                <ul className="image-list clearfix">
                {
                    imgList.map((item) => {
                        return (
                            <li><img src={item.url} /></li>
                        )
                    })
                }
                {
                    uploadList.map((item, i) => {
                        return (
                            <li>
                                <div className='uploading-item'>
                                    <p className="one-line">{item.name}</p>
                                    <p>{i === 0 ? percent : '待上传'}</p>
                                </div>
                            </li>
                        )
                    })
                }
                    <li className='upload-entry'>
                        <ImageUploader
                            className={`${uploading ? 'hidden' : null}`}
                            inputAttrs = {{ multiple: true }}
                            before={(list) => me.before(list)}
                            progress={(e, file, xhr) => me.progress(e, file, xhr)}
                            singleSuccess={(a) => me.singleSuccess(a)}
                            singleFail={(a, b) => me.singleFail(a, b)}
                            finish={() => me.finish()}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}
```

### 3. 参数说明

| 参数         |  必填        |  说明          | 类型         |  备注       |   默认值      |
| ------------ |------------ | ------------- | ------------ | ------------  |------------  |
| className |  N  | 上传组件顶层添加的样式 | String | 需要重写样式时使用 | '' |
| inputAttrs |  N  | 上传文件表单域添加的属性 | Object | 为type='file'表单添加属性 | {} |
| url |  N  | 上传使用的url | String | 需要使用其他上传url时传入 | http://media.xiaodian.com/image/put |
| type |  N  | 上传组件类型 | String | type='raw'时默认样式会被移除，可自行做样式更改 | '' |
| before |  N  | 上传前的处理函数 | Function | 处理上传前的文件或者做校验操作 | null |
| progress |  N  | 上传进度处理函数 | Function |  | null |
| success |  Y  | 上传成功处理函数 | Function |  | null |
| fail |  Y  | 上传失败处理函数 | Function |  | null |
| finish |  N  | 上传完成处理函数 | Function |  | null |
| singleSuccess |  N  | 单个文件上传成功后的回调 | Function | 多文件上传时使用 | null |
| singleFail |  N  | 单个文件上传失败后的回调 | Function | 多文件上传时使用 | null |

### 4. API 使用说明
#### before(fileList)

* fileList: [Object] 为用户选中文件列表，其中的每一个文件会被添加一个key为`fid`的属性标记文件id
* desc: before函数用于文件上传前的预处理或者校验，支持同步或者异步(promise)，
如果其`return false` 或 `reject`了一个`promise`，则组件终止执行后续步骤

#### progress(e, file, xhr)

* e: upload progress事件的event对象
* file: 当前正在上传的文件对象
* xhr: 当前正在上传的XMLHttpRequest实例
* desc：用于上传进度的处理，具体上传进度可根据`e.loaded/e.total`计算得出

#### success(successList)

* successList: [Object] 单个文件上传成功后的回调
e.g.
```
[{
    path: 'xxx',
    url: 'xxx'
}]
```
* 说明：单图上传时，文件上传成功触发；多图上传时，所有文件上传成功时触发


#### fail(failList, successList)

* failList: [Object] 上传失败的文件列表
* successList: [Object] 上传成功的文件列表
* desc: 单图上传时，文件上传失败时触发，此时successList为空数组；多图上传时，部分文件上传失败时触发，
此时failList为失败部分文件的合集，successList为成功部分文件的合集

#### finish()

* desc: 图片上传成功完成后，触发该回调

#### singleSuccess(resp)

* resp: Object 单图片上传成功返回的对象
* desc: 用于多图片上传，串行上传，上传队列每上传成功一张图片触发一次该回调

#### singleFail(resp, file)

* resp: Object 单图片上传失败返回的对象
* file: Object 上传失败的文件对象
* desc: 用于多图片上传，串行上传，上传队列每上传失败一张图片触发一次该回调

#### delete(fid)

* fid: String 即选择文件后组件为文件对象添加的属性fid
* desc: 删除上传队列中的某个文件，如果该文件正在上传则取消该文件上传

    ```
    class AbortUploadFile extends Component {
        constructor(props, context) {
            super(props, context);
            this.state = {
                imgList: [],
                uploading: false,
                file: null
            };
            this.imageUploader = null;
        }

        getRef (instance) {
            this.imageUploader = instance;
        }

        before (fileList) {
            console.log('选中的图片列表: ', fileList);
            this.setState({
                uploading: true,
                percent: '0%',
                file: fileList[0]
            });
        }

        progress (e, file, xhr) {
            this.setState({
                percent: `${(e.loaded / e.total * 100).toFixed(2)}%`
            });
        }

        success (uploadList) {
            let { imgList } = this.state;
            imgList = imgList.concat(uploadList);
            this.setState({
                imgList
            });
        }

        fail (failList, successList) {
            let { imgList } = this.state;
            imgList = imgList.concat(successList);
            this.setState({
                imgList
            });

            Notification.error({
                message: '图片上传失败'
            });
        }

        finish () {
            this.setState({
                uploading: false,
                file: null
            });
        }

        delete () {
            const { file } = this.state;
            this.imageUploader.delete(file.fid);
        }
        
        render() {
            const me = this;
            const { imgList, uploading, percent } = me.state;

            return (
                <div className="example">
                    <h4>1.5 取消文件上传</h4>
                    <ul className="image-list clearfix">
                    {
                        imgList.map((item) => {
                            return (
                                <li>
                                    <img src={item.url} />
                                </li>
                            )
                        })
                    }
                        <li className='upload-entry'>
                            <ImageUploader
                                ref={(r) => me.getRef(r)}
                                className={`${uploading ? 'hidden' : null}`}
                                before={(files) => me.before(files)}
                                progress={(e, file, xhr) => me.progress(e, file, xhr)}
                                success={(a) => me.success(a)}
                                fail={(a, b) => me.fail(a, b)}
                                finish={() => me.finish()}
                            />
                            <div className={`uploading-img ${uploading ? null : 'hidden'}`}>
                                <span className='del-btn' onClick={() => me.delete()}>&times;</span>
                                <p>{percent}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        }
    }
    ```

