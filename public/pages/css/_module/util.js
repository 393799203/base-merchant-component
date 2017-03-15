/* eslint-disable */
import React, { Component } from 'react';

export default class UtilView extends Component {
    render () {
        return (
            <div className='p-t-20 p-l-30 p-r-30'>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num || 1}、Util CSS
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/utils.less'
                    >
                      查看 Util 样式源码
                    </a>
                </h3>
                <h4>{this.props.num || 1}.1、Util 使用方式</h4>
                <div className='row'>
                    <div className='col-lg-6'>
                        <table>
                            <thead><tr><th colSpan='2' className='text-left text-md'>margin</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2' className='text-left'>
                                        <div className='m-b-5'>1、margin 缩写为 <code>m</code>;</div>
                                        <div className='m-b-5'>2、各个方向 <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> 缩写为：<code>t</code>, <code>r</code>, <code>b</code>, <code>l</code>;</div>
                                        <div className='m-b-5'>3、支持多个尺寸：<code>5</code>，<code>10</code>，<code>15</code>，<code>20</code> ...</div>
                                        <div className='m-b-5'>4、<code>margin-bottom: 5px</code> 为 <code>.m-b-5</code></div>
                                        <div className='m-b-5'>5、样式名后接<code>-important</code> 为加 <code>!important</code>样式, 如<code>.m-l-5-important</code>为<code>margin-left: 5px !important</code></div>
                                        <div className=''>
                                            6、<a className='text-info' href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/utils.less'>更多使用</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.m-auto</code></td>
                                    <td>margin: 0 auto</td>
                                </tr>
                                <tr>
                                    <td><code>.m-n</code></td>
                                    <td>margin: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.m-t-n</code></td>
                                    <td>margin-top: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.m-r-n</code></td>
                                    <td>margin-right: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.m-b-n</code></td>
                                    <td>margin-bottom: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.m-l-n</code></td>
                                    <td>margin-left: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.m-t-5</code></td>
                                    <td>margin-top: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>.m-r-5</code></td>
                                    <td>margin-right: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>.m-b-5</code></td>
                                    <td>margin-bottom: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>.m-l-5</code></td>
                                    <td>margin-left: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td><code>.m-l-5-important</code></td>
                                    <td>margin-left: 5px !important</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-6'>
                        <table>
                            <thead><tr><th colSpan='2' className='text-left text-md'>padding</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2' className='text-left'>
                                        <div className='m-b-5'>1、padding 缩写为 <code>p</code>;</div>
                                        <div className='m-b-5'>2、各个方向 <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> 缩写为：<code>t</code>, <code>r</code>, <code>b</code>, <code>l</code>;</div>
                                        <div className='m-b-5'>3、支持多个尺寸：<code>5</code>，<code>10</code>，<code>15</code>，<code>20</code> ...;</div>
                                        <div className='m-b-5'>4、<code>padding-bottom: 5px</code> 为 <code>.p-b-5</code>;</div>
                                        <div className='m-b-5'>5、样式名后接<code>-important</code> 为加 <code>!important</code>样式, 如<code>.p-l-5-important</code>为<code>padding-left: 5px !important</code></div>
                                        <div className=''>
                                            6、<a className='text-info' href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/utils.less'>更多使用</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.p-n</code></td>
                                    <td>padding: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.p-t-n</code></td>
                                    <td>padding-top: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.p-r-n</code></td>
                                    <td>padding-right: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.p-b-n</code></td>
                                    <td>padding-bottom: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.p-l-n</code></td>
                                    <td>padding-left: 0</td>
                                </tr>
                                <tr>
                                    <td><code>.p-t-5</code></td>
                                    <td>padding-top: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>.p-r-5</code></td>
                                    <td>padding-right: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>.p-b-5</code></td>
                                    <td>padding-bottom: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>.p-l-5</code></td>
                                    <td>padding-left: 5px</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td><code>.p-r-5-important</code></td>
                                    <td>padding-right: 5px !important</td>
                                </tr>
                                <tr>
                                    <td><code>.p-l-5-important</code></td>
                                    <td>padding-left: 5px !important</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-6 m-t'>
                        <table>
                            <thead><tr><th colSpan='2' className='text-left text-md'>width</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2' className='text-left'>
                                        <div className='m-b-5'>1、width 缩写为 <code>w</code>;</div>
                                        <div className='m-b-5'>2、支持多个尺寸：<code>xs</code>，<code>sm</code>，<code>md</code>，<code>lg</code> ...;</div>
                                        <div className='m-b-5'>3、样式名后接<code>-important</code> 为加 <code>!important</code>样式, 如<code>.w-xs-important</code>为<code>width: 40px !important</code></div>
                                        <div className=''>
                                            4、<a className='text-info' href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/utils.less'>更多使用</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.w-xs</code></td>
                                    <td>width: 40px</td>
                                </tr>
                                <tr>
                                    <td><code>.w-sm</code></td>
                                    <td>width: 80px</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-6 m-t'>
                        <table>
                            <thead><tr><th colSpan='2' className='text-left text-md'>height</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2' className='text-left'>
                                        <div className='m-b-5'>1、height 缩写为 <code>h</code>;</div>
                                        <div className='m-b-5'>2、支持多个尺寸：<code>xs</code>，<code>sm</code>，<code>md</code>，<code>lg</code> ...;</div>
                                        <div className='m-b-5'>3、样式名后接<code>-important</code> 为加 <code>!important</code>样式, 如<code>.h-xs-important</code>为<code>height: 40px !important</code></div>
                                        <div className=''>
                                            4、<a className='text-info' href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/utils.less'>更多使用</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.h-xs</code></td>
                                    <td>height: 40px</td>
                                </tr>
                                <tr>
                                    <td><code>.h-sm</code></td>
                                    <td>height: 80px</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-6 m-t'>
                        <table>
                            <thead><tr><th colSpan='2' className='text-left text-md'>border</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td colSpan='2' className='text-left'>
                                        <div className='m-b-5'>1、border 缩写为 <code>b</code>;</div>
                                        <div className='m-b-5'>2、各个方向 <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> 缩写为：<code>t</code>, <code>r</code>, <code>b</code>, <code>l</code>;</div>
                                        <div className='m-b-5'>3、支持多种样式：<code>.dashed</code>，<code>.dotted</code>，<code>.solid</code> ...;</div>
                                        <div className=''>
                                            4、<a className='text-info' href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/utils.less'>更多使用</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><code>.b-n</code></td>
                                    <td>border: none</td>
                                </tr>
                                <tr>
                                    <td><code>.b-a</code></td>
                                    <td>border: 1px solid #fefefe</td>
                                </tr>
                                <tr>
                                    <td><code>.b-b .dashed</code></td>
                                    <td>border-bottom: 1px dashed #fefefe</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='m-t'>
                            <thead><tr><th colSpan='2' className='text-left text-md'>vertical-align</th></tr></thead>
                            <tbody>

                                <tr>
                                    <td><code>.v-top</code></td>
                                    <td>vertical-align: top</td>
                                </tr>
                                <tr>
                                    <td><code>.v-middle</code></td>
                                    <td>vertical-align: middle</td>
                                </tr>
                                <tr>
                                    <td><code>.v-base</code></td>
                                    <td>vertical-align: base</td>
                                </tr>
                                <tr>
                                    <td><code>.v-bottom</code></td>
                                    <td>vertical-align: bottom</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-6 m-t'>
                        <table>
                            <thead><tr><th colSpan='2' className='text-left text-md'>其他</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td><code>.clearfix</code></td>
                                    <td>...</td>
                                </tr>
                                <tr>
                                    <td><code>.f-l</code></td>
                                    <td>float: left</td>
                                </tr>
                                <tr>
                                    <td><code>.f-r</code></td>
                                    <td>float: right</td>
                                </tr>
                                <tr>
                                    <td><code>.pos-rlt</code></td>
                                    <td>position: relative</td>
                                </tr>
                                <tr>
                                    <td><code>.pos-abt</code></td>
                                    <td>position: absolute</td>
                                </tr>
                                <tr>
                                    <td><code>.pos-fix</code></td>
                                    <td>position: fixed</td>
                                </tr>
                                <tr>
                                    <td><code>.hide</code></td>
                                    <td>display: none</td>
                                </tr>
                                <tr>
                                    <td><code>.show</code></td>
                                    <td>display: block</td>
                                </tr>
                                <tr>
                                    <td><code>.inline</code></td>
                                    <td>display: inline</td>
                                </tr>
                                <tr>
                                    <td><code>.inline-block</code></td>
                                    <td>display: inline-block</td>
                                </tr>
                                <tr>
                                    <td><code>.block</code></td>
                                    <td>display: block</td>
                                </tr>
                                <tr>
                                    <td><code>.opacity-50</code></td>
                                    <td>opacity: 0.5;</td>
                                </tr>
                                <tr>
                                    <td><code>.thumb</code></td>
                                    <td>height: 100px; width: 100px;</td>
                                </tr>
                                <tr>
                                    <td><code>.thumb-sm</code></td>
                                    <td>height: 40px; width: 40px;</td>
                                </tr>
                                <tr>
                                    <td><code>...</code></td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}
/* eslint-enable */
