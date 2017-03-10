/* eslint-disable */
import M from '@meili/m';
import React, { Component, PropTypes } from 'react';

const liOptions = [{
    text:'基础组件',
    link:'#/button'
},{
    text:'业务组件',
    link:'#/areacode'
},{
    text:'组件问题反馈',
    link:'http://gitlab.mogujie.org/Aveng/meili-base-merchant-component/issues'
},{
    text:'CSS',
    link:'#/css'
},{
    text:'我要贡献组件',
    link:'http://gitlab.mogujie.org/Aveng/meili-base-merchant-component'
},{
    text:'商家文档',
    link:'#/doc'
},{
    text:'商家数据',
    link:'#/data'
},{
    text:'商家规范',
    link:'#/rule'
}];

export default class HeadNav extends Component {
    constructor (props) {
        super(props);
        this.state = {
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

    render () {
        const isHome = this.props.isHome;

        return (
            <div className={isHome ? 'app-header' : 'app-header '}>
                <a href='#/' className='app-brand'>
                    商家后台
                </a>
                <ul className='app-menu'>
                    {liOptions.map((item, index) => {
                        return (
                            <li className='menu-item' key={index}>
                                <a href={item.link}>{item.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className='app-user'>
                    <a href='http://aveng.meili-inc.com/#/doc/%40meili%2Fbase-merchant-component?_k=ij7y6x'>
                        返回Aveng
                    </a>
                </div>
            </div>
        );
    }
}

HeadNav.propTypes = {
    isHome: PropTypes.bool,
    onChangeType: PropTypes.func
};

/* eslint-enable */

