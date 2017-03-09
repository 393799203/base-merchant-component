/* eslint-disable */
import React, { Component } from 'react';
import Notification from '../../src/notification';

const api = {
	open: Notification.open,
	success: Notification.success,
	error: Notification.error,
	info: Notification.info,
	warn: Notification.warn
};

describe ('Notification Component', () => {
	it('notification api', () => {
		const arg1 = { message: 'test'};
		const arg2 = { message: 'test', duration: 2000};
		const arg3 = { message: 'test', duration: 2000, position: 'center'};
		const arg4 = { message: 'test', duration: 2000, position: 'right'};
		const arg5 = { message: 'test', duration: 2000, position: 'custom', style: {top: '50px', left: '50%', marginLeft: '-150px'}};

    	const spyOpen = sinon.spy(api, 'open');
    	const spySuccess = sinon.spy(api, 'success');
    	const spyError = sinon.spy(api, 'error');
    	const spyInfo = sinon.spy(api, 'info');
    	const spyWarn = sinon.spy(api, 'warn');

    	spyOpen.withArgs(arg1);
    	spySuccess.withArgs(arg2);
    	spyError.withArgs(arg3);
    	spyInfo.withArgs(arg4);
    	spyWarn.withArgs(arg5);

    	api.open(arg1);
    	expect($('.mc-notification-error-notice').length).to.equal(1);
    	api.success(arg2);
    	expect($('.mc-notification-success-notice').length).to.equal(1);
    	api.error(arg3);
    	expect($('.mc-notification-error-notice').length).to.equal(1);
    	api.info(arg4);
    	expect($('.mc-notification-info-notice').length).to.equal(1);
    	api.warn(arg5);
    	expect($('.mc-notification-warn-notice').length).to.equal(1);

    	expect(spyOpen.withArgs(arg1).calledOnce).to.be.true;
    	expect(spySuccess.withArgs(arg2).calledOnce).to.be.true;
    	expect(spyError.withArgs(arg3).calledOnce).to.be.true;
    	expect(spyInfo.withArgs(arg4).calledOnce).to.be.true;
    	expect(spyWarn.withArgs(arg5).calledOnce).to.be.true;
    });

    it('after opened notification some seconds, close by default', () => {
    	const clock = sinon.useFakeTimers();
    	const arg = {message: 'test'};
        api.open(arg);
    	expect($('.mc-notification-error-notice').length).to.equal(1);
    	clock.tick(4000);
    	expect($('.mc-notification-error-notice').length).to.equal(0);
    });

});

/* eslint-enable */
