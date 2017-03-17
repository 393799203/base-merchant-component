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
import './style/index.less';

export default class CSSView extends Component {
    render () {
        return (
            <div className='m-60'>
                <h2 className='p-t p-b b-b dashed'>
                    商家主题样式 - v3.0.0
                    <a
                      className='btn btn-danger-border w m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme.git'
                    >
                      查看 Gitlab 源码 v3.0.0 分支
                    </a>
                </h2>
                <blockquote className='m-t'>
                    主题样式源码文件为less, 使用时将样式源码放在项目样式文件夹中, 引入 index.less (样式主文件), 然后在webpack中增加loader
                </blockquote>
<pre>
    {"{\n\
        test: /\.(css|less)$/,\n\
        loader:'style-loader!css-loader!less-loader'\n\
}"}
</pre>
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
                    <a href='#/css/grid' style={{width: '25%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Grid</div>
                    </a>
                    <a href='#/css/bg' style={{width: '25%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Background</div>
                    </a>
                    <a href='#/css/button' style={{width: '25%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Button</div>
                    </a>
                    <a href='#/css/icon' style={{width: '25%', height: '100px', lineHeight: '100px'}} className=' text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Icon</div>
                    </a>
                    <a href='#/css/panel' style={{width: '25%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Panel</div>
                    </a>
                    <a href='#/css/table' style={{width: '25%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Table</div>
                    </a>
                    <a href='#/css/text' style={{width: '25%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Text</div>
                    </a>
                    <a href='#/css/util' style={{width: '25%', height: '100px', lineHeight: '100px'}} className='m-t-20 text-center text-xl block f-l' >
                        <div style={{borderRadius: '4px'}} className='bg-info m'>Util</div>
                    </a>
                </div>
            </div>
        );
    }
}
/* eslint-enable */

