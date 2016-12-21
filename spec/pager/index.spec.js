/**
 * Author : yingu
 * Date : 16/12/21
 * Description :
 */
import React, {Component}from 'react';
import Pager from '../../src/pager';
import { mount } from 'enzyme';

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
    // spyOn(instanceNode, 'changePage');
}

function setoff() {
    instance && instance.unmount();
    instance = null;
    pager = null;
}

//默认状态的测试用例
describe('pager default',()=>{

    beforeAll(()=>{
        setup();
    });

    afterAll(()=>{
        setoff();
    });

    it('default props',() => {
        expect(pager.props.currentPage).toBe(1);
        expect(pager.props.totalPage).toBe(1);
    });

    it('default disabled',() => {
        expect( instance.find('a.btn-pre').hasClass('disabled') ).toBe(true);
        expect( instance.find('a.btn-next').hasClass('disabled') ).toBe(true);
    });

    it('click pre', () => {
        instance.find('a.btn-pre').simulate('click');
        expect(pager.props.currentPage).toBe(1);
        expect(pager.props.totalPage).toBe(1);
    });

    it('click next', () => {
        instance.find('a.btn-next').simulate('click');
        expect(pager.props.currentPage).toBe(1);
        expect(pager.props.totalPage).toBe(1);
    });
});


//正常状态的测试用例
describe('normal case', () => {
    beforeAll(() => {
        setup({
            currentPage : 1,
            totalPage : 3
        });
    });

    afterAll(()=>{
        setoff();
    });

    it('default props',()=>{
        expect(pager.props.currentPage).toBe(1);
        expect(pager.props.totalPage).toBe(3);
    });

    it('default button status',()=>{
        expect( instance.find('a.btn-pre').hasClass('disabled') ).toBe(true);
        expect( instance.find('a.btn-next').hasClass('disabled') ).toBe(false);
    });

    it('click pre',()=>{
        instance.find('a.btn-pre').simulate('click');
        expect(pager.props.currentPage).toBe(1);
        expect(pager.props.totalPage).toBe(3);
    });

    it('click next',()=>{
        instance.find('a.btn-next').simulate('click');
        expect(pager.props.currentPage).toBe(2);
        expect(pager.props.totalPage).toBe(3);
    });
});