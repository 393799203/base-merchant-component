/* eslint-disable */
import React, { Component } from 'react';

export default class TextView extends Component {
    render () {
        return (
            <div className='p-t-20 p-l-30 p-r-30'>
                <h3 className='p-t-60 p-b b-b dashed'>
                    {this.props.num || 1}、Text
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/text.less'
                    >
                      查看 Text 样式源码
                    </a>
                </h3>
                <h4>{this.props.num || 1}.1、Text 使用方式</h4>
                <code className='block'>{"<div className='text-h1'>h1 － 展示性文字</div>"}</code>
                <h4>{this.props.num || 1}.2、Text 示例</h4>
                <div className='text-h1 m-t'><code>.text-h1</code> － 展示性文字 #333 24px 加粗</div>
                <div className='text-h2 m-t'><code>.text-h2</code> － 我是主标题 #333 20px 加粗</div>
                <div className='text-h3 m-t'><code>.text-h3</code> － 我是副标题 #555 16px 加粗</div>
                <div className='text-h4 m-t'><code>.text-h4</code> － 我是小标题 #555 14px</div>
                <div className='text-p m-t'><code>.text-p</code> － 我是段落文字 #555 13px</div>
                <h4>{this.props.num || 1}.3、Text 支持样式</h4>
                <table className='m-t'>
                    <thead>
                        <tr><th>序号</th><th>样式类型</th><th>可选样式</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>使用场景</td>
                            <td>
                                <code className='m-r-5'>.text-h1</code>
                                <code className='m-r-5'>.text-h2</code>
                                <code className='m-r-5'>.text-h3</code>
                                <code className='m-r-5'>.text-h4</code>
                                <code className='m-r-5'>.text-p</code>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                字体大小
                                <br/>
                                24px, 20px, 16px, 14px, 13px, 12px, 10px</td>
                            <td>
                                <code className='m-r-5'>.text-xxl</code>
                                <code className='m-r-5'>.text-xl</code>
                                <code className='m-r-5'>.text-lg</code>
                                <code className='m-r-5'>.text-md</code>
                                <code className='m-r-5'>.text</code>
                                <code className='m-r-5'>.text-sm</code>
                                <code className='m-r-5'>.text-xs</code>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>字体颜色</td>
                            <td>
                                <span className='m-r-5 text-danger'>.text-danger</span>
                                <span className='m-r-5 text-info'>.text-info</span>
                                <span className='m-r-5 text-warning'>.text-warning</span>
                                <span className='m-r-5 text-dark'>.text-dark</span>
                                <span className='m-r-5 text-success'>.text-success</span>
                                <span className='m-r-5 text-light bg-dark p-5'>.text-light</span>
                                <span className='m-r-5 text-black'>.text-black</span>
                                <span className='m-r-5 text-white bg-dark p-5'>.text-white</span>
                                <span className='m-r-5 text-muted bg-dark p-5'>.text-muted</span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>字体粗细</td>
                            <td>
                                <code className='m-r-5 text-bold'>.text-bold</code>
                                <code className='m-r-5 text-normal'>.text-normal</code>
                                <code className='m-r-5 text-thin'>.text-thin</code>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>对齐方式</td>
                            <td>
                                <code className='m-r-5 text-left'>.text-left</code>
                                <code className='m-r-5 text-center'>.text-center</code>
                                <code className='m-r-5 text-right'>.text-right</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
/* eslint-enable */

