import React, { Component, PropTypes } from 'react';

export default class HeadNav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            orOpen: 'mc-head-hidden'
        };
    }

    openComponent () {
        this.setState({
            orOpen: 'mc-head-display'
        });
    }

    closeComponent () {
        this.setState({
            orOpen: 'mc-head-hidden'
        });
    }

    choiceBussinss (e) {
        if (typeof this.props.onChangeType === 'function') {
            this.props.onChangeType(e);
        }
    }

    render () {
        const isHome = this.props.isHome;
        const orOpen = this.state.orOpen;

        return (
            <div className={isHome ? 'app-header navbar bg-white-only clearfix' : 'app-header navbar bg-danger clearfix'}>
                <div className={isHome ? 'navbar-header bg-white-only' : 'navbar-header bg-danger'}>
                    <a href='#/' className='navbar-brand text-lt'>商家后台</a>
                </div>
                <div className='pull-left' style={{ marginLeft: '215px' }}>
                    <ul className='nav navbar-nav'>
                        <li><a href='#/css'>CSS</a></li>
                        <li
                            onMouseOver={() => this.openComponent()}
                            onMouseOut={() => this.closeComponent()}
                        >
                            <a onClick={() => this.choiceBussinss('')}>组件</a>
                            <div className={orOpen}>
                                <a onClick={() => this.choiceBussinss('')}>基础组件</a>
                                <a onClick={() => this.choiceBussinss('buss')}>业务组件</a>
                            </div>
                        </li>
                        <li>
                            <a href='http://gitlab.mogujie.org/Aveng/meili-base-merchant-component/issues'>
                                组件问题反馈
                            </a>
                        </li>
                        <li><a href='http://gitlab.mogujie.org/Aveng/meili-base-merchant-component'>我要贡献组件</a></li>
                        <li><a href='#/doc'>商家文档</a></li>
                        <li><a href='#/data'>商家数据</a></li>
                        <li><a href='#/rule'>商家规范</a></li>
                    </ul>
                </div>
                <div className='pull-right'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <a href='http://aveng.meili-inc.com/#/doc/%40meili%2Fbase-merchant-component?_k=ij7y6x'>
                                返回Aveng
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

HeadNav.propTypes = {
    isHome: PropTypes.bool,
    onChangeType: PropTypes.func
};
