import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Panel from 'source_path/panel';

describe('Panel Component', () => {
    it('panel test', () => {
        const clickHandler = sinon.spy();
        const elem = (
            <span>
                <span className='panel-header-option-1'>时间:2017-01-01</span>
                <a className='panel-header-option-2' target='_blank' href='http://www.xiaodian.com'>查看更多</a>
            </span>
        );

        const wrapper = shallow(
            <Panel title='示例代码' elem={elem} className='my-panel' onClick={clickHandler}>
                <p>你的组件内容</p>
            </Panel>
        );

        expect(wrapper.find('.mc-panel').hasClass('my-panel')).to.equal(true);
        expect(wrapper.find('.panel-header').contains(elem)).to.equal(true);
        wrapper.find('.mc-panel').simulate('click');
        expect(clickHandler.called).to.equal(true);
    });
});
