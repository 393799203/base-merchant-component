/* eslint-disable */
import React, { Component } from 'react';
import Slider from 'source_path/slider';
import './style/index.less';
import Readme from './Readme.md';

class SliderDemo extends Component {
    renderList (index) {
        const arr = Array.apply(null, new Array(index));
        return arr.map((item, i) => {
            return (
                <div className='list-item fl' key={i}>第{i + 1}张</div>
            )
        });
    }
    afterChange () {
        console.log('afterChange');
    }
    render () {
        const me = this;
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    轮播器 - Slider
                    <a href="mactt://message/user/01173" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <div>
                    <h4>1. 带箭头的轮播器</h4>
                    <Slider className='slider-demo' arrows afterChange={me.afterChange}>
                        {me.renderList(6)}
                    </Slider>
                </div>
                <div>
                    <h4>2. 自动播放-无圆点-无限轮播器</h4>
                    <Slider className='slider-demo' infinite autoplay dotsShow={false}>
                        {me.renderList(6)}
                    </Slider>
                </div>
                <div>
                    <h4>3. 自动播放-多张显示-无限轮播器</h4>
                    <Slider className='slider-demo' slideShow={2} slideMove={2} infinite autoplay>
                        {me.renderList(6)}
                    </Slider>
                </div>
                <div>
                    <h4>4. 带箭头-非偶数集-多张显示-无限轮播器</h4>
                    <Slider className='slider-demo' slideShow={3} slideMove={3} arrows infinite>
                        {me.renderList(7)}
                    </Slider>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

export default SliderDemo;
/* eslint-enable */

