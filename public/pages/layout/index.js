/* eslint-disable */
import React, { Component } from 'react';
import { MHeader, MSider } from 'source_path/layout';
import Readme from './README.md';

export default class LayoutView extends Component {
    componentDidMount () {
    }

    render () {

        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    布局 - Layout
                    <a href="mactt://message/uname/qianqiao" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <h4>
                    1.1. MHeader 顶部导航，支持主题： <code>default</code> <code>info</code> <code>warning</code> <code>success</code> <code>dark</code> <code>danger</code> <code>light</code>
                </h4>
                <div className='m-b'>
                    <MHeader type='default' theme='success' menuOptions={[{text: '导航一', link: '#/menu1', }, {text: '导航二', link: '#/menu1'}]} userOptions={[{text: '退出', link: ''}]} user={{uname: '乾巧', avatar: 'https://s10.mogucdn.com/b7/pic/141119/nihao_ieydamrumy4dgzbzmqytambqhayde_100x100.png_100x100.png'}} />
                </div>
                <div className='m-b'>
                    <MHeader type='default' theme='info' menuOptions={[{text: '导航一', link: '#/menu1'}, {text: '下拉导航', link: '#/menu1', options: [{text: '子导航一', link: '#/layout'},{text: '子导航二', link: '#link1-2'}]}]}/>
                </div>
                <h4>
                    1.2. MSider 侧边栏，支持主题： <code>default</code> <code>info</code> <code>warning</code> <code>success</code> <code>dark</code> <code>danger</code> <code>light</code>
                </h4>
                <div className='clearfix m-b'>
                    <div className='fl'>
                        <MSider type='default' theme='default' menuOptions={[{text: '导航一', link: '#/link1', icon: 'global', options: [{text: '子导航一', link: '#/layout'},{text: '子导航二', link: '#link1-2'}]}, {text: '导航二', link: '#/link2', icon: 'favor'}]} />
                    </div>
                    <div className='fl m-l'>
                        <MSider type='default' theme='info' menuOptions={[{text: '导航一', link: '#/link1', icon: 'global', options: [{text: '子导航一', link: '#/layout'},{text: '子导航二', link: '#link1-2'}, {text: '子导航四', link: '#/layout-1'},{text: '子导航五', link: '#link1-2'}, {text: '子导航四', link: '#/layout-1'},{text: '子导航五', link: '#/layout'}, {text: '子导航四', link: '#/layout-1'},{text: '子导航五', link: '#link1-2'}]}, {text: '导航二', link: '#/link2', icon: 'favor'}]} />
                    </div>
                    <div className='fl m-l'>
                        <MSider type='default' theme='warning' menuOptions={[{text: '导航一', link: '#/link1', icon: 'global', options: [{text: '子导航一', link: '#/layout'},{text: '子导航二', link: '#link1-2'}]}, {text: '导航二', link: '#/link2', icon: 'favor'}]} />
                    </div>
                    <div className='fl m-l'>
                        <MSider type='default' theme='dark' menuOptions={[{text: '导航一', link: '#/link1', icon: 'global', options: [{text: '子导航一', link: '#/layout'},{text: '子导航二', link: '#link1-2'}]}, {text: '导航二', link: '#/link2', icon: 'favor'}]} />
                    </div>
                </div>
                <h4>
                    1.3. 组合使用
                </h4>
                <div className='m-b'>
                    <MHeader type='default' theme='dark' menuOptions={[{text: '导航一', link: '#/menu1'}, {text: '导航二', link: '#/menu1'}]}/>
                    <MSider type='default' theme='light' menuOptions={[{text: '导航一', link: '#/link1', icon: 'global', options: [{text: '子导航一', link: '#/layout'},{text: '子导航二', link: '#link1-2'}]}, {text: '导航二', link: '#/link2', icon: 'favor'}]} />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
/* eslint-enable */

