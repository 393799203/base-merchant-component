/* eslint-disable */
import React, { Component } from 'react';
import GridView from './_module/grid';
import BgView from './_module/bg';
import ButtonView from './_module/button';
import TextView from './_module/text';
import TableView from './_module/table';
import IconView from './_module/icon';
import PanelView from './_module/panel';
import UtilView from './_module/util';

export default class CSSView extends Component {
    render () {
        return (
            <div className='m-60'>
                <h2 className='p-t p-b b-b dashed'>
                    商家主题样式
                    <a
                      className='btn btn-danger-border w m-l'
                      href='http://gitlab.mogujie.org/Aveng/meili-merchant-theme'
                    >
                      查看 Gitlab 源码 develop 分支
                    </a>
                </h2>
                <h3>
                    1、安装
                </h3>
<pre>
    $ npm i @meili/merchant-theme --save
</pre>
                <h3>
                    2、使用
                </h3>
                <blockquote className='m-t'>
                    主题样式源码文件为less, 安装 npm 包后, 然后在webpack中增加loader
                </blockquote>
<pre>
    {"{\n\
        test: /\.(css|less)$/,\n\
        loader:'style-loader!css-loader!less-loader'\n\
}"}
</pre>
                <blockquote className='m-t'>
                    如果你使用的<code>less-loader</code>低于<code>4.0</code>版本，又想在 <code>less</code> 文件中 <code>@import</code> node_modules 中 <code>@meili/merchant-theme</code> 目录下的 <code>less</code> 文件, 则需要在 webpack 中配置 alias
                </blockquote>
<pre>
    resolve: {"{\n\
        alias: {\n\
            '@meili/merchant-theme': path.join(__dirname, '/node_modules/@meili/merchant-theme')\n\
        }\n\
}"}
</pre>
<p>这样你在 <code>less</code> 文件中就可以按如下方式引用<code>@meili/merchant-theme</code>中的具体文件了：</p>
<pre className='m-t-10'>@import '~@meili/merchant-theme/lib/variables.less';</pre>
                <h3 className='m-t-30'>
                    分类查看
                    <a
                      className='btn btn-danger-border m-l'
                      href='#/css/all'
                    >
                      查看所有
                    </a>
                </h3>
                <div className='clearfix'>
                    <a href='#/css/grid' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Grid</div>
                    </a>
                    <a href='#/css/bg' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Background</div>
                    </a>
                    <a href='#/css/button' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Button</div>
                    </a>
                    <a href='#/css/icon' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Icon</div>
                    </a>
                    <a href='#/css/panel' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Panel</div>
                    </a>
                    <a href='#/css/table' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Table</div>
                    </a>
                    <a href='#/css/text' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Text</div>
                    </a>
                    <a href='#/css/util' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Util</div>
                    </a>
                    <a href='#/css/form' style={{width: '33.33%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Form</div>
                    </a>
                </div>
            </div>
        );
    }
}
/* eslint-enable */

