/* eslint-disable */
import React, { Component } from 'react';
import Wrapper from '../../src/wrapper';
import { mount } from 'enzyme';
import { expect } from 'chai';

class MyWrapper extends Component {
    render () {
        return (
            <Wrapper ref='wrapper' {...this.props}>
                <div>这是内容</div>
            </Wrapper>
        );
    }
}

let instance;
let instanceNode;
let wrapper;
let config = {
    isLoading: false,
    className: 'wrapper-test',

};

function setup (config) {
    instance = mount(<MyWrapper {...config} />, window.wrapper);
    instanceNode = instance.node;
    wrapper = instanceNode.refs.wrapper;
}

function setoff () {
    instance && instance.unmount();
    instance = null;
    wrapper = null;
}

describe ('Wrapper Component', () => {
    it('default props type', () => {
        setup(config);
        expect(wrapper.props.className).to.be.a('string');
        expect(wrapper.props.isLoading).to.be.a('boolean');
        setoff();
    });

    it('show loading', () => {
        config.isLoading = true;
        setup(config);
        expect(instance.find('.inner-wrapper-show').length).to.equal(1);
        setoff();
    });

    it('hide loading', () => {
        config.isLoading = false;
        setup(config);
        expect(instance.find('.inner-wrapper-hide').length).to.equal(1);
        setoff();
    });
});

/* eslint-enable */
