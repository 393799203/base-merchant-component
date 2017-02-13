import React, { Component } from 'react';
import Slider from 'source_path/slider';
import './style/index.less';
import Readme from './Readme.md';

class SliderDemo extends Component {
    render() {
        return (
            <div>
                <Slider className='slider-demo' slideShow={4} slideMove={4}>
                    <div className='list-item fl'>第1个</div>
                    <div className='list-item fl'>第2个</div>
                    <div className='list-item fl'>第3个</div>
                    <div className='list-item fl'>第4个</div>
                    <div className='list-item fl'>第5个</div>
                    <div className='list-item fl'>第6个</div>
                </Slider>
            </div>
        );
    }
}

export default SliderDemo;
