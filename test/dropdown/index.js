/* eslint-disable */
import React, { Component } from 'react';
import Dropdown from '../../src/dropdown';
import { mount } from 'enzyme';
import { expect } from 'chai';

class MyDropdown extends Component {
    render () {
        return (
            <Dropdown ref='dropdown' {...this.props}>
                下拉
            </Dropdown>
        );
    }
}

let instance;
let instanceNode;
let dropdown;
let config = {
    handleClick: sinon.spy(),
    className: 'dropdown-test',
    options: [
        {
            id: 1,
            text: '下拉选项1'
        }, {
            id: 2,
            text: '下拉选项2',
            options: [
                {
                    id: 21,
                    text: '下拉选项21'
                }, {
                    id: 22,
                    text: '下拉选项22'
                }

            ]
        }
    ]
};

function setup (config) {
    instance = mount(<MyDropdown {...config} />, window.wrapper);
    instanceNode = instance.node;
    dropdown = instanceNode.refs.dropdown;
}

function setoff () {
    instance && instance.unmount();
    instance = null;
    dropdown = null;
}

describe ('Dropdown Component', () => {
    before(() => {
        setup(config);
    });

    after(() => {
        setoff();
    });

    it('default props type', () => {
        expect(dropdown.props.className).to.be.a('string');
        expect(dropdown.props.options).to.be.a('array');
        expect(dropdown.props.handleClick).to.be.a('function');
    });

    it('dropdown blur, hide menu', () => {
        const clock = sinon.useFakeTimers();
        instance.find('.mc-dropdown').simulate('blur');
        clock.tick(300);
        expect( instance.find('.mc-menu').hasClass('active') ).to.be.false;
    });

    it('toggle dropdown menu', () => {
        instance.find('.mc-trigger').simulate('click');
        expect( instance.find('.mc-trigger').hasClass('active') ).to.be.true;
        expect( instance.find('.mc-menu').hasClass('active') ).to.be.true;
        instance.find('.mc-trigger').simulate('click');
        expect( instance.find('.mc-trigger').hasClass('active') ).to.be.false;
        expect( instance.find('.mc-menu').hasClass('active') ).to.be.false;
    });

    it('options item has options key has subMenu', () => {
        instance.find('.mc-trigger').simulate('click');
        expect( instance.find('.mc-sub-menu-item') ).to.exist;
    });

    it('item has click handler', () => {
        instance.find('.mc-item-name').at(1).simulate('click');
        expect( config.handleClick.called ).to.be.true;
    });

    it('subItem has click handler too', () => {
        instance.find('.mc-sub-menu-item').at(1).simulate('click');
        expect( config.handleClick.called ).to.be.true;
    });

    it('mouseenter item, subItem show', () => {
        instance.find('.mc-menu-item').at(1).simulate('mouseenter');
        expect( instance.find('.mc-menu-item').at(1).hasClass('active') ).to.be.true;
    });

    it('mouseleave item, subItem hide', () => {
        instance.find('.mc-menu-item').at(1).simulate('mouseleave');
        expect( instance.find('.mc-menu-item').at(1).hasClass('active') ).to.be.false;
    });
});

/* eslint-enable */
