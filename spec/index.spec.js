import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import TestUtils  from 'react-addons-test-utils';
import MyComponent from '../src/MyComponent/index.js';

describe('test',(done) => {
	let instance;
    let div;

    beforeEach(() => {
      div = document.createElement('div');
      document.body.appendChild(div);
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    });
	it('MyComponent test innerHTML', () => {
		instance = ReactDOM.render(
            <MyComponent></MyComponent>, div);
		expect(ReactDOM.findDOMNode(instance).innerHTML).to.be.equal('this is MyComponent');
	});
	it('MyComponent test class', () => {
		instance = ReactDOM.render(
            <MyComponent></MyComponent>, div);
    	expect(ReactDOM.findDOMNode(instance).className.indexOf('c') !== -1).to.be.equal(true);
	});

});