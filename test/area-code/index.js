/* eslint-disable */
import React, { Component } from 'react';
import AreaCode from '../../src/area-code';
import { mount } from 'enzyme';
import { expect } from 'chai';

class MyAreaCode extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: props.code
        };
    }
    onChange () {
        this.props.onChange();
    }
    render () {
        return (
            <AreaCode
                ref='areacode'
                defaultValue={this.state.code}
                onChange={(code) => this.onChange(code)}
            />
        );
    }
}

let instance;
let instanceNode;
let areacode;
let config = {
    code: '86',
    onChange: sinon.spy()
};

function setup (config) {
    instance = mount(<MyAreaCode {...config} />, window.wrapper);
    instanceNode = instance.node;
    areacode = instanceNode.refs.areacode;
}

function setoff () {
    instance && instance.unmount();
    instance = null;
    areacode = null;
}

describe ('AreaCode Component', () => {

    before(() => {
        setup(config);
    });

    after(() => {
        setoff();
    });

    it('default props type', () => {
        expect(areacode.props.defaultValue).to.be.a('string');
        expect(areacode.props.onChange).to.be.a('function');
        expect(areacode.props.disabled).to.be.a('boolean');
        expect(areacode.props.name).to.be.a('string');
    });

    it('onChange exec', () => {
        instance.simulate('change');
        expect( config.onChange.called ).to.be.true;
    });

});

/* eslint-enable */
