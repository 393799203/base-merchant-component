import React, { Component, PropTypes } from 'react';
import Notification from 'source_path/notification';
import { TabWrapper, Tab } from 'source_path/tab';
import './style/index.less';
import Readme from './Readme.md';

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
            Notification.info({
                message: '你摸我了',
                duration: 2000
            });
        },
        title: '哈哈'
    }
}, {
    title: '历史消息(超链接)',
    attrs: {
        href: 'http://www.xiaodian.com'
    }
}];

class LazyExample extends Component {
    static propTypes = {
        index: PropTypes.number
    };

    componentDidMount () {
        Notification.success({
            message: `第${this.props.index}组件加载完毕`,
            duration: 2000
        });
    }
    render () {
        return (
            <div>我是第{this.props.index}个组件，我是懒加载进来的，component mounted的时候我弹出了提示</div>
        );
    }
}

class TabDemo extends Component {
    static clickHanler (i) {
        Notification.info({
            message: `你点击了第${i + 1}个tab`,
            duration: 2000
        });
    }

    static changeHandler (newVal, oldVal) {
        Notification.success({
            message: `你点击了第${newVal + 1}个tab，你是从第${oldVal + 1}个tab切换过来的`,
            duration: 2000
        });
    }

    static singleTabClick () {
        Notification.success({
            message: '点击tab内容的时候触发了事件',
            duration: 3000
        });
    }

    render () {
        const tabArr = [
            <Tab key='0'>我是第一个Tab的内容</Tab>,
            <Tab key='1'>我的第二个Tab的内容</Tab>,
            <Tab key='2'>我是第三个Tab的内容</Tab>
        ];

        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    选项卡 - Tab
                    <a href="mactt://message/user/01173" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2>
                    1. 示例
                </h2>
                <div className='switch-tab'>
                    <div className='example'>
                        <h4>常规</h4>
                        <TabWrapper navs={nav1}>
                            {tabArr}
                        </TabWrapper>
                    </div>
                    <div className='example'>
                        <h4>切换方式-hover</h4>
                        <TabWrapper navs={nav1} trigger='mouseOver'>
                            {tabArr}
                        </TabWrapper>
                    </div>
                </div>
                <div className='switch-tab'>
                    <div className='example'>
                        <h4>整体事件触发-onClick</h4>
                        <TabWrapper navs={nav1} onClick={i => TabDemo.clickHanler(i)}>
                            {tabArr}
                        </TabWrapper>
                    </div>
                    <div className='example'>
                        <h4>整体事件触发-onChange</h4>
                        <TabWrapper navs={nav1} onChange={(newVal, oldVal) => TabDemo.changeHandler(newVal, oldVal)}>
                            {tabArr}
                        </TabWrapper>
                    </div>
                </div>
                <div className='switch-tab'>
                    <div className='example'>
                        <h4>单个tab事件触发-onClick</h4>
                        <TabWrapper navs={nav2}>
                            <Tab key='0'>我的第二个Tab的内容</Tab>
                            <Tab key='1' onClick={TabDemo.singleTabClick}>点击下这个Tab的内容试试</Tab>
                            <Tab key='2'>我是第三个Tab的内容</Tab>
                        </TabWrapper>
                    </div>
                    <div className='example'>
                        <h4>懒加载-lazyload</h4>
                        <TabWrapper navs={nav1} lazyLoad>
                            <Tab key='0'>第一个组件的内容</Tab>
                            <Tab key='1'><LazyExample index={2} /></Tab>
                            <Tab key='2'><LazyExample index={3} /></Tab>
                        </TabWrapper>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}

export default TabDemo;
