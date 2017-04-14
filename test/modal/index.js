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
describe ('Modal.alert Component Test', () => {

    it('show alert', (done) => {

        // const spyOpen = sinon.spy(api, 'alert');
        // spyOpen.withArgs(arg1);
        const option = {theme: 'warning'};
        const callback = function (){
            console.log('回调成功');
            done();
        };

        api.alert( '这是一个alert', callback, option);

        expect($('.mc-modal').length).to.equal(1);
        expect($('.mc-modal-header').length).to.equal(0);
        expect($('.mc-modal-body').length).to.equal(1);
        expect($('.mc-modal-footer').length).to.equal(1);
        expect($('.mc-modal-mask').length).to.equal(1);
        expect($('.mc-modal-footer .btn-sm').length).to.equal(1);

        $('.mc-modal-footer .btn-sm').click();
        setTimeout(function(){
            expect($('.mc-modal').length).to.equal(0);
        },10);

        Modal.closeAll();
    })

});


describe ('Modal.confirm Component Test', () => {

    it('show confirm', () => {

        const spyOpen = sinon.spy(api, 'confirm');
        const option = {theme: 'warning'};
        const callback = function (){
            console.log('回调成功');
            done();
        };

        api.confirm( '这是一个confirm', callback, option);

        expect($('.mc-modal').length).to.equal(1);
        expect($('.mc-modal-header').length).to.equal(0);
        expect($('.mc-modal-body').length).to.equal(1);
        expect($('.mc-modal-footer').length).to.equal(1);
        expect($('.mc-modal-mask').length).to.equal(1);
        expect($('.mc-modal-footer .btn-sm').length).to.equal(2);

        $('.mc-modal-footer .btn-sm').click();
        setTimeout(function(){
            expect($('.mc-modal').length).to.equal(0);
        },500)


        Modal.closeAll();
    })
});

describe ('Modal.tip Component Test', () => {

    it('show tip some seconds, close by default', () => {
        const clock = sinon.useFakeTimers();

        Modal.tip('2000ms 后消失', 2000);
        expect($('.mc-modal').length).to.equal(1);
        expect($('.mc-modal-body').length).to.equal(1);

        clock.tick(2020);
        expect($('.mc-modal').length).to.equal(0);

        Modal.closeAll();
    })
});

describe ('Modal.open Component Test', () => {

    const arg = {
        title: '自定义弹出层',
        body: body,
        footer: footer,
        isAbsolute: true,
        showMask: true,
        closeByMask: true
    };

     it('show open', () => {
         const spyOpen = sinon.spy(api, 'open');
         spyOpen.withArgs(arg);

         api.open(arg);
         expect($('.mc-modal').length).to.equal(1);
         expect($('.mc-modal-header').length).to.equal(1);
         expect($('.mc-modal-body').length).to.equal(1);
         expect($('.mc-modal-footer').length).to.equal(1);
         expect($('.mc-modal-mask').length).to.equal(1);

         //closeByMask test
         $('.mc-modal-mask').click();
         expect($('.mc-modal').length).to.equal(0);

         Modal.closeAll();
     })
});
