/* eslint-disable */
import React, { Component } from 'react';

export default class BgView extends Component {
    render () {
        return (
            <div>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num}、Background
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/background.less'
                    >
                      查看 Background 样式源码
                    </a>
                </h3>
                <h4>{this.props.num}.1、使用方式</h4>
                <code className='block'>{"<div className='bg-danger lter'>更浅红色背景</div>"}</code>
                <code className='block'>{"<div className='bg-danger lt'>浅红色背景</div>"}</code>
                <code className='block'>{"<div className='bg-danger'>红色背景</div>"}</code>
                <code className='block'>{"<div className='bg-danger dk'>深红色背景</div>"}</code>
                <code className='block'>{"<div className='bg-danger lter'>更深红色背景</div>"}</code>
                <h4>{this.props.num}.2、示例</h4>
                <div className='clearfix'>
                    <div className='f-l'>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-primary lter text-center'>.bg-primary .lter</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-primary lt text-center'>.bg-primary .lt</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-primary  text-center'>.bg-primary</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-primary dk text-center'>.bg-primary .dk</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-primary dker text-center'>.bg-primary .dker</div>
                    </div>
                    <div className='f-l'>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-info lter text-center'>.bg-info .lter</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-info lt text-center'>.bg-info .lt</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-info text-center'>.bg-info</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-info dk text-center'>.bg-info .dk</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-info dker text-center'>.bg-info .dker</div>
                    </div>
                    <div className='f-l'>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-warning lter text-center'>.bg-warning .lter</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-warning lt text-center'>.bg-warning .lt</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-warning text-center'>.bg-warning</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-warning dk text-center'>.bg-warning .dk</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-warning dker text-center'>.bg-warning .dker</div>
                    </div>
                    <div className='f-l'>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-dark lter text-center'>.bg-dark .lter</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-dark lt text-center'>.bg-dark .lt</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-dark text-center'>.bg-dark</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-dark dk text-center'>.bg-dark .dk</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-dark dker text-center'>.bg-dark .dker</div>
                    </div>
                    <div className='f-l'>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-success lter text-center'>.bg-success .lter</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-success lt text-center'>.bg-success .lt</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-success text-center'>.bg-success</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-success dk text-center'>.bg-success .dk</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-success dker text-center'>.bg-success .dker</div>
                    </div>
                    <div className='f-l'>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-light lter text-center'>.bg-light .lter</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-light lt text-center'>.bg-light .lt</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-light text-center'>.bg-light</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-light dk text-center'>.bg-light .dk</div>
                        <div style={{width: '170px',height: '50px',lineHeight: '50px'}} className='bg-light dker text-center'>.bg-light .dker</div>
                    </div>
                </div>
            </div>
        );
    }
}
/* eslint-enable */

