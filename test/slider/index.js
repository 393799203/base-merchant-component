import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Slider from 'source_path/Slider';

const renderList = (index) => {
    const arr = Array.apply(null, new Array(index));
    return arr.map((item, i) => {
        return (
            <div className='list-item fl' key={i}>第{i + 1}张</div>
        )
    });
};

describe('Slider Component', () => {
    it('slider with arrow and dots', () => {
        const wrapper = mount(
            <Slider arrows>
                { renderList(6) }
            </Slider>
        );

        expect(wrapper.find('.prev-arrow')).to.have.lengthOf(1);
        expect(wrapper.find('.next-arrow')).to.have.lengthOf(1);
        wrapper.find('.next-arrow').simulate('click');
        expect(wrapper.find('.list-item').at(1).hasClass('slide-active')).to.be.ture;
        wrapper.find('.prev-arrow').simulate('click');
        expect(wrapper.find('.list-item').at(0).hasClass('slide-active')).to.be.ture;
        wrapper.find('.dot-icon').at(2).simulate('click');
        expect(wrapper.find('.list-item').at(2).hasClass('slide-active')).to.be.ture;
    });

    it('slider autoplay', function () {
        const wrapper = mount(
            <Slider autoplay infinite>
                { renderList(6) }
            </Slider>
        );

        this.timeout(2500);
        expect(wrapper.find('.list-item').at(1).hasClass('slide-active')).to.be.ture;
    });
});
