/* eslint-disable */
import React, { Component } from 'react';

export default class PanelView extends Component {
    render () {
        return (
            <div className='p-t-20 p-l-30 p-r-30'>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num || 1}、Panel
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/Aveng/meili-merchant-theme/blob/develop/lib/panel.less'
                    >
                      查看 Panel 样式源码
                    </a>
                </h3>
                <blockquote>
                    组件库中封装了 Panel 组件，让 Panel 有更多的使用姿势
                    <a href='#/panel' className='btn btn-info btn-xs m-l'>查看 Panel 组件</a>
                </blockquote>
                <h4>{this.props.num || 1}.1、Panel 使用方式</h4>
                <code className='block'>{"<div className='panel'><div className='panel-header'>...</div><div className='panel-body'>...</div><div className='panel-footer'>...</div></div>"}</code>
                <h4>{this.props.num || 1}.2、Panel 支持样式</h4>
                <p className='p-t p-b'><code className='m-r'>.panel</code> <code className='m-r'>.panel .panel-success</code> <code className='m-r'>.panel .panel-info</code> <code className='m-r'>.panel .panel-danger</code> <code className='m-r'>.panel .panel-warning</code> <code className='m-r'>.panel .panel-dark</code></p>
                <h4>{this.props.num || 1}.3、Panel 示例</h4>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='panel'>
                            <div className='panel-header'>.panel-header</div>
                            <div className='panel-body'>.panel-body</div>
                            <div className='panel-footer'>.panel-footer</div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='panel panel-success'>
                            <div className='panel-header'>.panel-header</div>
                            <div className='panel-body'>.panel-body</div>
                            <div className='panel-footer'>.panel-footer</div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='panel panel-info'>
                            <div className='panel-header'>.panel-header</div>
                            <div className='panel-body'>.panel-body</div>
                            <div className='panel-footer'>.panel-footer</div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='panel panel-danger'>
                            <div className='panel-header'>.panel-header</div>
                            <div className='panel-body'>.panel-body</div>
                            <div className='panel-footer'>.panel-footer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
/* eslint-enable */

