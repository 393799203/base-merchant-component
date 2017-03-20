/* eslint-disable */
import React, { Component } from 'react';
import Pagination from '../../src/pagination';
import { mount } from 'enzyme';
import { expect } from 'chai';

class MyPagination extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentPage: props.currentPage,
            totalPage: props.totalPage,
            className: props.className,
            link: props.link
        };
    }
    changePage (currentPage) {
        this.props.onChangePage();
        this.setState({ currentPage });
    }
    render () {
        return <Pagination {...this.state} ref='pagination' onChangePage={ page => this.changePage(page) } />
    }
}

let instance;
let instanceNode;
let pagination;
let config = {
    className: 'pagination-test',
    onChangePage: sinon.spy(),
    currentPage: 1,
    totalPage: 20,
    link: ''
};

function setup (config) {
    instance = mount(<MyPagination {...config} />, window.wrapper);
    instanceNode = instance.node;
    pagination = instanceNode.refs.pagination;
}

function setoff () {
    instance && instance.unmount();
    instance = null;
    pagination = null;
}

describe ('Pagination Component', () => {

    before(() => {
        setup(config);
    });

    after(() => {
        setoff();
    });

    it('default props type', () => {
        expect(pagination.props.className).to.be.a('string');
        expect(pagination.props.currentPage).to.be.a('number');
        expect(pagination.props.totalPage).to.be.a('number');
    });

    it('default disabled',() => {
        expect( instance.find('a.btn-pre').hasClass('disabled') ).to.be.true;
        expect( instance.find('a.btn-next').hasClass('disabled') ).to.be.false
    });

    it('default displayNum is 4 + 1 + 2', () => {
        expect( instance.find('a.btn').length ).to.equal(7);
    });

    it('... btn disabled', () => {
        expect( instance.find('a.btn.disabled').at(1).text() ).to.equal('...');
    });

    it('page btn has handler', () => {
        instance.find('a.btn-next').simulate('click');
        expect( config.onChangePage.called ).to.be.true;
        instance.find('a.btn-pre').simulate('click');
    });

    it('click next', () => {
        instance.find('a.btn-next').simulate('click');
        expect(pagination.props.currentPage).to.equal(2);
        expect(pagination.props.totalPage).to.equal(20);
    });

    it('click pre', () => {
        instance.find('a.btn-pre').simulate('click');
        expect(pagination.props.currentPage).to.equal(1);
        expect(pagination.props.totalPage).to.equal(20);
    });

    it('curent btn has btn-danger class', () => {
        expect(instance.find('a.btn').at(1).hasClass('btn-danger')).to.be.true;
    });

    it('currentPage is last page next btn disabled', () => {
        config.currentPage = 20;
        setoff();
        setup(config);
        expect( instance.find('a.btn-pre').hasClass('disabled') ).to.be.false;
        expect( instance.find('a.btn-next').hasClass('disabled') ).to.be.true
    });

    it('if has link props, not exec onChangePage function', () => {
        config.link = '//www.mogujie.com?q=';
        config.currentPage = 1;
        setoff();
        setup(config);
        expect( instance.find('a.btn-next').prop('href') ).to.equal('//www.mogujie.com?q=2');
    });

});

/* eslint-enable */
