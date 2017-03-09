import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Slider from 'source_path/Slider';
import Slick from 'source_path/Slider/modules/slick';

const renderList = (index) => {
    const arr = Array.apply(null, new Array(index));
    return arr.map((item, i) => {
        return (
            <div className='list-item fl' key={i}>第{i + 1}张</div>
        )
    });
};

let wrapper, action;

describe('Slider Component', () => {
    it('slider with arrow and dots', () => {
        sinon.spy(Slick.prototype, 'prevClick');
        sinon.spy(Slick.prototype, 'nextClick');
        sinon.spy(Slick.prototype, 'goto');
        
        const wrapper = mount(
            <Slider arrows>
                { renderList(6) }
            </Slider>
        );

        const slick = wrapper.find('.slider-list-wrapper');
        
        expect(wrapper.find('.prev-arrow')).to.have.lengthOf(1);
        expect(wrapper.find('.next-arrow')).to.have.lengthOf(1);

        wrapper.find('.next-arrow').simulate('click');
        expect(Slick.prototype.nextClick.called).to.be.true;
        expect(slick.node.tc).to.be.undefined;
        expect(wrapper.find('.list-item').at(1).hasClass('slide-active')).to.be.ture;

        wrapper.find('.prev-arrow').simulate('click');
        expect(Slick.prototype.prevClick.called).to.be.true;
        expect(wrapper.find('.list-item').at(0).hasClass('slide-active')).to.be.ture;

        wrapper.find('.dot-icon').at(2).simulate('click');
        expect(Slick.prototype.goto.called).to.be.true;
        expect(wrapper.find('.list-item').at(2).hasClass('slide-active')).to.be.ture;
    });

    it('slider autoplay', function () {
        const wrapper = mount(
            <Slider autoplay infinite>
                { renderList(6) }
            </Slider>
        );

        this.timeout(2300);
        expect(wrapper.find('.list-item').at(1).hasClass('slide-active')).to.be.ture;
        this.timeout(2300);
        expect(wrapper.find('.list-item').at(2).hasClass('slide-active')).to.be.ture;
        wrapper.unmount();
    });

    it('user-defined arrow slider and dots', () => {
        const arrow = <div className='user-arrow'></div>
        const dots = <ul className='user-dots'><li></li></ul>
        const wrapper = mount(
            <Slider prevArrow={arrow} nextArrow={arrow} arrows dotsShow dots={dots}>
                { renderList(6) }
            </Slider>
        );

        expect(wrapper.find('.user-arrow')).to.have.lengthOf(2);
        expect(wrapper.find('.user-dots')).to.have.lengthOf(1);
    });

    it('infinite slider', function () {
        let action = {
            beforeChange: (index) => {
                console.log(index, 'beforeChange');
            },
            afterChange: (index) => {
                console.log(index, 'afterChange');
            }
        }

        sinon.spy(action, 'beforeChange');
        sinon.spy(action, 'afterChange');
                
        let wrapper = mount(
            <Slider
                infinite
                arrows
                initial={4}
                slideMove={2} 
                slideShow={2}
                beforeChange={action.beforeChange}
                afterChange={action.afterChange}
            >
                { renderList(6) }
            </Slider>
        );
        
        wrapper.find('.next-arrow').simulate('click');
        expect(wrapper.find('.list-item').at(0).hasClass('slide-active')).to.be.ture;
        expect(wrapper.find('.list-item').at(1).hasClass('slide-active')).to.be.ture;
        expect(action.beforeChange.called).to.be.true;
        setTimeout(() => {
            expect(action.afterChange.called).to.be.true;
        }, 2500);
        $(window).trigger('resize');
    });

    it('pause on hover', () => {
        sinon.spy(Slick.prototype, 'mouseEnterHandler');
        sinon.spy(Slick.prototype, 'mouseLeaveHandler');
        
        const wrapper = mount(
            <Slider autoplay pauseOnHover>
                { renderList(6) }
            </Slider>
        );

        const slick = wrapper.find('.slider-list-wrapper');
        slick.simulate('mouseenter');
        expect(slick.node.tc).to.be.undefined;
        expect(Slick.prototype.mouseEnterHandler.called).to.be.true;
        slick.simulate('mouseleave');
        expect(slick.node.tc).to.be.number;
        expect(Slick.prototype.mouseLeaveHandler.called).to.be.true;
    });
});


    