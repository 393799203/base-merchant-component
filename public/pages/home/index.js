/* eslint-disable */
import React, { Component } from 'react';

export default class HomeView extends Component {
    componentDidMount () {
    }
    render () {
        return (
            <div className='text-center w-900 m-auto pt-60'>
                <p className='text-thin text-white text-h2 mt-60 pt-60'>
                    商家后台组件是基于 React@0.14 封装的一套组件， 主要用于 美丽说商家后台、蘑菇街商家后台（小店）快速构建页面。
                    react 组件化，实现快速开发，管理升级，从而达到更加高效地支撑业务。
                </p>
                <p className='mt-60 pt-30'>
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
                    ©copyright 美丽联合研发部 - 商家前端
                </p>
            </div>
        );
    }
}
/* eslint-enable */
