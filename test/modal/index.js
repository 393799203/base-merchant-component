import React, { Component } from 'react';
import Modal from '../../src/modal';

const api = {
    tip: Modal.tip,
    alert: Modal.alert,
    confirm: Modal.confirm,
    open: Modal.open
}

const body = (
    <div>
        <p>这是内容区</p>
    </div>
);

const footer = (
    <div>
        <button className="btn btn-sm btn-primary-border mr" onClick={ (e) => this.closeModal(modalId) }>取消</button>
        <button className="btn btn-sm btn-primary" onClick={ (e) => this.closeModal(modalId) } style={{marginRight:0}}>确认</button>
    </div>
);


// test start
describe ('Modal Component Test', () => {

    const arg1 = {
        title: '自定义弹出层'
    };

    const arg2 = {
        title: '自定义弹出层',
        body: body
    }

    const arg3 = {
        title: '自定义弹出层',
        body: body,
        footer: footer
    }

    const argIsAbsolute = {
        title: '自定义弹出层',
        body: body,
        footer: footer,
        isAbsolute: true
    };

    const argNotShowMask = {
        title: '自定义弹出层',
        body: body,
        footer: footer,
        isAbsolute: true,
        showMask: false
    }

    const argCloseByMask = {
        title: '自定义弹出层',
        body: body,
        footer: footer,
        closeByMask: true
    }


    it('show head', () => {

        const spyOpen = sinon.spy(api, 'open');
        spyOpen.withArgs(arg1);

        api.open(arg1);
        expect($('.mc-modal').length).to.equal(1);
        expect($('.mc-modal-header').length).to.equal(1);
    })

    it('show body', () => {

        const spyOpen = sinon.spy(api, 'open');
        spyOpen.withArgs(arg2);

        api.open(arg2);
        expect($('.mc-modal').length).to.equal(1);
        expect($('.mc-modal-header').length).to.equal(1);
        expect($('.mc-modal-body').length).to.equal(1);
    })

});