/* eslint-disable */
import React, { Component } from 'react';

export default class ButtonView extends Component {
    render () {
        return (
            <div>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num}、Button
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/button.less'
                    >
                      查看 Button 样式源码
                    </a>
                </h3>
                <blockquote>
                    组件库中封装了 Button 组件，让 Button 有更多的使用姿势
                    <a href='#/button' className='btn btn-info btn-xs m-l'>查看 Button 组件</a>
                </blockquote>
                <h4>{this.props.num}.1、使用方式</h4>
                <p className='m-t m-b'>大小为<code>mini</code>的按钮</p>
                <code>
                    {
                        "<button className='btn btn-mini'>\
                            按钮\
                        </button>"
                    }
                </code>
                <p className='m-t m-b'>有icon的按钮</p>
                <code>
                    {
                        "<button className='btn btn-mini'>\
                            <i className='iconfont icon-notice'></i>\
                            按钮\
                        </button>"
                    }
                </code>
                <h4>{this.props.num}.2、支持样式</h4>
                <table className='m-t'>
                    <thead>
                        <tr><th>序号</th><th>样式类型</th><th>可选样式</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>按钮大小, <code>.btn</code> <code>height: 36px</code></td>
                            <td>
                                <code className='m-r-5'>.btn-mini</code>
                                <code className='m-r-5'>.btn-xs</code>
                                <code className='m-r-5'>.btn-sm</code>
                                <code className='m-r-5'>.btn</code>
                                <code className='m-r-5'>.btn-md</code>
                                <code className='m-r-5'>.btn-lg</code>
                                <code className='m-r-5'>.btn-block</code>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>填充按钮, <code>.btn</code> <code>background: #fff</code></td>
                            <td>
                                <code className='m-r-5'>.btn-danger</code>
                                <code className='m-r-5'>.btn-info</code>
                                <code className='m-r-5'>.btn-success</code>
                                <code className='m-r-5'>.btn-warning</code>
                                <code className='m-r-5'>.btn-dark</code>
                                <code className='m-r-5'>.btn</code>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>线条按钮, <code>.btn</code> <code>border-color: #d5d8df</code></td>
                            <td>
                                <code className='m-r-5'>.btn-danger-border</code>
                                <code className='m-r-5'>.btn-info-border</code>
                                <code className='m-r-5'>.btn-success-border</code>
                                <code className='m-r-5'>.btn-warning-border</code>
                                <code className='m-r-5'>.btn-dark-border</code>
                                <code className='m-r-5'>.btn</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4>{this.props.num}.3、示例</h4>
                <div className="m-10">
                    <button className='btn btn-mini m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-xs btn-dark m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-sm btn-danger m-r-5'>
                        <i className="iconfont icon-loading icon-spin"></i>
                        按钮
                    </button>
                    <button className='btn btn-info m-r-5'>
                        <i className="iconfont icon-addressbook"></i>
                        按钮
                    </button>
                    <button className='btn btn-md btn-warning m-r-5'>
                        <i className="iconfont icon-check"></i>
                        按钮
                    </button>
                    <button className='btn btn-lg btn-success m-r-5'>
                        <i className="iconfont icon-creative"></i>
                        按钮
                    </button>
                    <button className='btn btn-mini m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-xs btn-dark-border m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-sm btn-danger-border m-r-5'>
                        <i className="iconfont icon-loading icon-spin"></i>
                        按钮
                    </button>
                    <button className='btn btn-info-border m-r-5'>
                        <i className="iconfont icon-addressbook"></i>
                        按钮
                    </button>
                    <button className='btn btn-md btn-warning-border m-r-5'>
                        <i className="iconfont icon-check"></i>
                        按钮
                    </button>
                    <button className='btn btn-lg btn-success-border m-r-5'>
                        <i className="iconfont icon-creative"></i>
                        按钮
                    </button>
                </div>
                <div className="m-10">
                    <button className='btn btn-mini disabled m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-xs btn-dark disabled m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-sm btn-danger disabled m-r-5'>
                        <i className="iconfont icon-loading icon-spin"></i>
                        按钮
                    </button>
                    <button className='btn btn-info disabled m-r-5'>
                        <i className="iconfont icon-addressbook"></i>
                        按钮
                    </button>
                    <button className='btn btn-md btn-warning disabled m-r-5'>
                        <i className="iconfont icon-check"></i>
                        按钮
                    </button>
                    <button className='btn btn-lg btn-success disabled m-r-5'>
                        <i className="iconfont icon-creative"></i>
                        按钮
                    </button>
                    <button className='btn btn-mini disabled m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-xs btn-dark-border disabled m-r-5'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-sm btn-danger-border disabled m-r-5'>
                        <i className="iconfont icon-loading icon-spin"></i>
                        按钮
                    </button>
                    <button className='btn btn-info-border disabled m-r-5'>
                        <i className="iconfont icon-addressbook"></i>
                        按钮
                    </button>
                    <button className='btn btn-md btn-warning-border disabled m-r-5'>
                        <i className="iconfont icon-check"></i>
                        按钮
                    </button>
                    <button className='btn btn-lg btn-success-border disabled m-r-5'>
                        <i className="iconfont icon-creative"></i>
                        按钮
                    </button>
                </div>
                <div className='m-t'>
                    <button className='btn btn-block btn-info'>block 按钮</button>
                </div>
                <h4>{this.props.num}.4、Button addon 示例</h4>
                <code>
                    {
                        "<button className='btn btn-mini btn-addon'>\
                            <i className='iconfont icon-notice'></i>\
                            按钮\
                        </button>"
                    }
                </code>
                <div className='m-t'>
                    <button className='btn btn-mini m-r-5 btn-addon'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-xs btn-dark m-r-5 btn-addon'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-sm btn-danger m-r-5 btn-addon'>
                        <i className="iconfont icon-loading"></i>
                        按钮
                    </button>
                    <button className='btn btn-info m-r-5 btn-addon'>
                        <i className="iconfont icon-addressbook"></i>
                        按钮
                    </button>
                    <button className='btn btn-md btn-warning m-r-5 btn-addon'>
                        <i className="iconfont icon-check"></i>
                        按钮
                    </button>
                    <button className='btn btn-lg btn-success m-r-5 btn-addon'>
                        <i className="iconfont icon-creative"></i>
                        按钮
                    </button>
                    <button className='btn btn-mini m-r-5 btn-addon-r'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-xs btn-dark-border m-r-5 btn-addon-r'>
                        <i className="iconfont icon-notice"></i>
                        按钮
                    </button>
                    <button className='btn btn-sm btn-danger-border m-r-5 btn-addon-r'>
                        <i className="iconfont icon-loading"></i>
                        按钮
                    </button>
                    <button className='btn btn-info-border m-r-5 btn-addon-r'>
                        <i className="iconfont icon-addressbook"></i>
                        按钮
                    </button>
                    <button className='btn btn-md btn-warning-border m-r-5 btn-addon-r'>
                        <i className="iconfont icon-check"></i>
                        按钮
                    </button>
                    <button className='btn btn-lg btn-success-border m-r-5 btn-addon-r'>
                        <i className="iconfont icon-creative"></i>
                        按钮
                    </button>
                </div>
            </div>
        );
    }
}
/* eslint-enable */

