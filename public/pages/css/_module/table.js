/* eslint-disable */
import React, { Component } from 'react';

export default class TextView extends Component {
    render () {
        return (
            <div className='p-t-20 p-l-30 p-r-30'>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num || 1}、Table
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/table.less'
                    >
                      查看 Table 样式源码
                    </a>
                </h3>
                <blockquote>
                    组件库中封装了 Table 组件，让 Table 有更多的使用姿势
                    <a href='#/table' className='btn btn-info btn-xs m-l'>查看 Table 组件</a>
                </blockquote>
                <h4>{this.props.num || 1}.1、Table 使用方式</h4>
                <code className='block'>{"<table className='table table-hover table-stripe'>...</table>"}</code>
                <h4>{this.props.num || 1}.2、Table 支持样式</h4>
                <table className='m-t text-hover'>
                    <thead>
                        <tr><th>序号</th><th>样式类型</th><th>可选样式</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>类型</td>
                            <td>
                                <code className='m-r-5'>.text-hover</code>
                                <code className='m-r-5'>.text-stripe</code>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                颜色 <code>.table</code> 默认浅灰色
                            </td>
                            <td>
                                <code className='m-r-5'>.table-danger</code>
                                <code className='m-r-5'>.table-info</code>
                                <code className='m-r-5'>.table-warning</code>
                                <code className='m-r-5'>.table-success</code>
                                <code className='m-r-5'>.table-dark</code>
                                <code className='m-r-5'>.table</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
/* eslint-enable */

