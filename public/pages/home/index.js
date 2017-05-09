/* eslint-disable */
import React, { Component } from 'react';

export default class HomeView extends Component {
    componentDidMount () {
    }
    render () {
        return (
            <div className='text-center w-900 m-auto p-t-60'>
                <p className='text-thin text-white text-h2 m-t-60 p-t-60'>
                    Meili Makeup 是基于 React@0.14 封装的一套组件 以及 基于小店UI规范的样式库， 用于美丽说商家后台、蘑菇街商家后台（小店）、内部系统快速构建页面。
                    react 组件化，实现快速开发，管理升级，从而达到更加高效地支撑业务。
                </p>
                <p className='m-t-60 p-t-30'>
                    <a
                      className='btn btn-lg'
                      href='#/button'
                    >
                        开始探索
                    </a>
                </p>
                <p
                  className='text-white text-base text-center p-lg'
                  style={{ position: 'absolute', bottom: '0', width: '500px', left: '50%', marginLeft: '-250px' }}
                >
                    ©copyright 美丽联合研发部 - 前端
                </p>
            </div>
        );
    }
}
/* eslint-enable */
