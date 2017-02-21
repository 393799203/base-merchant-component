import React, { Component, PropTypes } from 'react';

const liOptions = [{
    text:"基础组件",
    href:"#/button"
},{
    text:"业务组件",
    href:"#/areacode"
},{
    text:"组件问题反馈",
    href:"http://gitlab.mogujie.org/Aveng/meili-base-merchant-component/issues"
},{
    text:"CSS",
    href:"#/css"
},{
    text:"我要贡献组件",
    href:"http://gitlab.mogujie.org/Aveng/meili-base-merchant-component"
},{
    text:"商家文档",
    href:"#/doc"
},{
    text:"商家数据",
    href:"#/data"
},{
    text:"商家规范",
    href:"#/rule"
}];

export default class HeadNav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            orOpen: 'mc-head-hidden',
            options: liOptions
        };
    }

    componentDidMount () {
        const activeUrl = window.location.hash.slice(0, window.location.hash.indexOf('?'));
        const options = this.state.options;

        options.map((item, index) => {
            if(item.href == activeUrl){
                options[index].active = true;
            }
        });

        this.setState({
            options
        })
    }

    changeTab (item,index) {
        const options = this.state.options;
        options.map((item,index) => {
            options[index].active = false;
        });

        options[index].active = true;

        this.setState({
            options
        }, () => {
            location.href=item.href;
        })
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
                        {liOptions.map((item, index) => {
                            return (
                                <li key={index} className={item.active ? 'active' : ''}>
                                    <a onClick={() => this.changeTab(item,index)}>{item.text}</a>
                                </li>
                            );
                        })}
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
