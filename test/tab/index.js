import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { TabWrapper, Tab } from 'source_path/tab';

const nav1 = [{
    title: '最新消息'
}, {
    title: '我的关注'
}, {
    title: '历史消息'
}];

const nav2 = [{
    title: '最新消息',
    children: <span className='lastest'>NEW!</span>,
    className: 'news'
}, {
    title: '我的关注',
    attrs: {
        onClick () {
            console.log('second tab click');
        },
        title: '哈哈'
    }
}, {
    title: '历史消息(超链接)',
    attrs: {
        href: 'http://www.xiaodian.com'
    }
}];

const tabArr = [
    <Tab key='0'>我是第一个Tab的内容</Tab>,
    <Tab key='1'>我的第二个Tab的内容</Tab>,
    <Tab key='2'>我是第三个Tab的内容</Tab>
];

class LazyExample extends Component {
    componentDidMount () {
        console.log(`第${this.props.index}组件加载完毕`);
    }

    render () {
        return (
            <div>我是第{this.props.index}个组件，我是懒加载进来的，component mounted的时候我弹出了提示</div>
        );
    }
};

describe('Tab Component', () => {
    it('common tab fuction', () => {
        // 基础功能测试
        const wrapper = shallow(
            <TabWrapper navs={nav1}>
                {tabArr}
            </TabWrapper>
        );

        expect(wrapper.find(Tab).length).toEqual(3);
        wrapper.find('.mc-tab-nav li a').at(1).simulate('click'); // change tab index to 1
        expect(wrapper.state('active')).toEqual(1);
    });

    it('non child render', () => { // no tab render
        const wrapper = shallow(
            <TabWrapper navs={nav1}>
            </TabWrapper>
        );

        expect(wrapper.find(Tab).length).toEqual(0);
    });

    it('when mouse hover, trigger tab change', () => {
        // 修改触发方式为mouseover测试
        const wrapper = shallow(
            <TabWrapper navs={nav1} trigger='mouseOver'>
                {tabArr}
            </TabWrapper>
        );

        wrapper.find('.mc-tab-nav li a').at(2).simulate('mouseover');
        expect(wrapper.state('active')).toEqual(2);
    });

    it('onChange handler', () => {
        // tab onChange事件触发
        let changeHandler = jasmine.createSpy('changeHandler');

        const wrapper = shallow(
            <TabWrapper navs={nav1} onChange={(newVal, oldVal) => changeHandler(newVal, oldVal)}>
                {tabArr}
            </TabWrapper>
        );

        wrapper.find('.mc-tab-nav li a').at(2).simulate('click');
        expect(changeHandler).toHaveBeenCalled();
        expect(changeHandler.calls.argsFor(0)).toEqual([2, 0]);
    });

    it('tab child component function', () => {
        // 子tab的事件触发
        const singleTabClick = jasmine.createSpy('singleTabClick');
        const wrapper = mount(
            <TabWrapper navs={nav2}>
                <Tab key='0'>我的第二个Tab的内容</Tab>
                <Tab key='1' onClick={() => singleTabClick()}>点击下这个Tab的内容试试</Tab>
                <Tab key='2'>我是第三个Tab的内容</Tab>
            </TabWrapper>
        );

        wrapper.find('.mc-tab-nav li a').at(1).simulate('click');
        wrapper.find('.tab-wrapper .show').simulate('click');
        expect(singleTabClick).toHaveBeenCalled();
    });

    it('all lazy load test', () => {
        // 多个tab lazyload
        spyOn(LazyExample.prototype, 'componentDidMount');

        const wrapper = mount(
            <TabWrapper navs={nav1} lazyLoad>
                <Tab key='0'>第一个组件的内容</Tab>
                <Tab key='1'><LazyExample index={2} /></Tab>
                <Tab key='2'><LazyExample index={3} /></Tab>
            </TabWrapper>
        );
        wrapper.find('.mc-tab-nav li a').at(1).simulate('click');
        expect(LazyExample.prototype.componentDidMount.calls.count()).toEqual(1);
        wrapper.find('.mc-tab-nav li a').at(2).simulate('click');
        expect(LazyExample.prototype.componentDidMount.calls.count()).toEqual(2);
    });

    it('single tab lazyload test', () => {
        // 单个tab lazyload test
        spyOn(LazyExample.prototype, 'componentDidMount');

        const wrapper = mount(
            <TabWrapper navs={nav1}>
                <Tab key='0'>第一个组件的内容</Tab>
                <Tab key='1' lazyLoad><LazyExample index={2} /></Tab>
                <Tab key='2'><LazyExample index={3} /></Tab>
            </TabWrapper>
        );
        // tab 2 loaded时触发调用一次
        expect(LazyExample.prototype.componentDidMount.calls.count()).toEqual(1);
        wrapper.find('.mc-tab-nav li a').at(1).simulate('click');
        expect(LazyExample.prototype.componentDidMount.calls.count()).toEqual(2);
    });

    it('single tab lazyload test when parent set lazyload property', () => {
        // 单个tab lazyload test
        spyOn(LazyExample.prototype, 'componentDidMount');

        const wrapper = mount(
            <TabWrapper navs={nav1} lazyLoad>
                <Tab key='0'>第一个组件的内容</Tab>
                <Tab key='1' lazyLoad={false}><LazyExample index={2} /></Tab>
                <Tab key='2' lazyLoad={false}><LazyExample index={3} /></Tab>
            </TabWrapper>
        );
        // tab 2 loaded时触发调用一次
        expect(LazyExample.prototype.componentDidMount.calls.count()).toEqual(2);
    });
});
