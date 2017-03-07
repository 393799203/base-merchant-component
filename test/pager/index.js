/**
 * Author : yingu
 * Date : 16/12/21
 * Description :
 */
import React, {Component} from 'react';
import Pager from '../../src/pager';
import { mount } from 'enzyme';
import { expect } from 'chai'; 

class MyPager extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentPage: props.currentPage,
            totalPage: props.totalPage
        };
    }
    changePage (currentPage) {
        console.log(this.state)
        this.setState({ currentPage });
    }
    render(){
        return <Pager {...this.state} ref="pager" onChangePage={ page => this.changePage(page) }/>
    }
}

let instance;
let instanceNode;
let pager;

function setup(config={}) {
    //wrapper 已在setup.js 中定义
    instance = mount(<MyPager {...config}/>, wrapper);
    instanceNode = instance.node;
    pager = instanceNode.refs.pager;
    // sinon.spy(instanceNode, 'changePage');
}

function setoff() {
    instance && instance.unmount();
    instance = null;
    pager = null;
}

//默认状态的测试用例
describe('Pager Component', () => {
    before(() => {
        setup();
    });

    after(() => {
        setoff();
    });

    it('default props',() => {
        expect(pager.props.currentPage).to.equal(1);
        expect(pager.props.totalPage).to.equal(1);
    });

    it('default disabled',() => {
        expect( instance.find('a.btn-pre').hasClass('disabled') ).to.be.true;
        expect( instance.find('a.btn-next').hasClass('disabled') ).to.be.true;
    });

    it('click pre', () => {
        instance.find('a.btn-pre').simulate('click');
        expect(pager.props.currentPage).to.equal(1);
        expect(pager.props.totalPage).to.equal(1);
    });

    it('click next', () => {
        instance.find('a.btn-next').simulate('click');
        expect(pager.props.currentPage).to.equal(1);
        expect(pager.props.totalPage).to.equal(1);
    });
});


//正常状态的测试用例
describe('normal case', () => {
    before(() => {
        setup({
            currentPage : 1,
            totalPage : 3
        });
    });

    after(() => {
        setoff();
    });

    it('default props', ()=> {
        expect(pager.props.currentPage).to.equal(1);
        expect(pager.props.totalPage).to.equal(3);
    });

    it('default button status',() => {
        expect( instance.find('a.btn-pre').hasClass('disabled') ).to.equal(true);
        expect( instance.find('a.btn-next').hasClass('disabled') ).to.equal(false);
    });

    it('click pre', () => {
        instance.find('a.btn-pre').simulate('click');
        expect(pager.props.currentPage).to.equal(1);
        expect(pager.props.totalPage).to.equal(3);
    });

    it('click next', () => {
        instance.find('a.btn-next').simulate('click');
        expect(pager.props.currentPage).to.equal(2);
        expect(pager.props.totalPage).to.equal(3);
    });
});