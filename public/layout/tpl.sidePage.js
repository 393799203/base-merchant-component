/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import _menuData from './data.sider.a';
import _busMenuData from './data.sider.b';
import { MHeader } from 'source_path/layout';
import menuOptions from './data.header.js';

_menuData.sort((item1, item2) => {
    const temp1 = item1.link.slice(2, 3).toLowerCase();
    const temp2 = item2.link.slice(2, 3).toLowerCase();
    if (temp1 > temp2) {
        return 1;
    }
    if (temp1 < temp2) {
        return -1;
    }
    return 0;
});

_busMenuData.sort((item1, item2) => {
    const temp1 = item1.link.slice(2, 3).toLowerCase();
    const temp2 = item2.link.slice(2, 3).toLowerCase();
    if (temp1 > temp2) {
        return 1;
    }
    if (temp1 < temp2) {
        return -1;
    }
    return 0;
});

export default class LayoutView extends Component {
    constructor () {
        super();
        this.state = {
            keywords: '',
            menuData: [],
            OriginMenuData: [],
            activeUrl: window.location.hash.slice(0, window.location.hash.indexOf('?'))
        };
    }

    componentDidMount () {
        // 判断默认为哪种类型组件
        this.getCompType();
    }

    getCompType (item) {
        let activeUrl;
        if (item && item.link) {
            activeUrl = item.link;
        } else {
            const urllast = window.location.hash.indexOf('?') > 0 ? window.location.hash.indexOf('?') : window.location.hash.length;
            activeUrl = window.location.hash.slice(0, urllast);
        }
        let menu = false;
        for (let i = 0; i < _busMenuData.length; i++) {
            if (_busMenuData[i].link === activeUrl) {
                menu = true;
                break;
            }
        }

        this.setState({
            menuData: menu ? _busMenuData : _menuData,
            OriginMenuData: menu ? _busMenuData : _menuData,
            activeUrl
        });
    }

    filterData (e) {
        const filterKey = e.target.value;
        const resultData = [];
        this.state.OriginMenuData.map((item) => {
            if (item.title.toLowerCase().indexOf(filterKey) > -1) {
                resultData.push(item);
            }
        });
        this.setState({
            keywords: filterKey,
            menuData: resultData
        });
    }

    activeMenu (item) {
        this.setState({ activeUrl: item.link });
    }

    render () {
        const { menuData, activeUrl, keywords } = this.state;
        return (
            <div>
                <MHeader menuOptions={menuOptions} type='fixed' theme='danger' menuHandler={this.getCompType.bind(this)} />
                <div className='app-body'>
                    <div className='app-sider'>
                        <div className='app-sider-content bg-light'>
                            <form className="form-sm p-t-15 p-l-10">
                                <div className="form-group">
                                    <i className="iconfont icon-search form-addon-r"></i>
                                    <input
                                        type="text"
                                        value={keywords}
                                        onChange={(e) => { this.filterData(e); }}
                                        className="form-input"
                                        placeholder='搜索'
                                    />
                                </div>
                            </form>
                            {
                                menuData.length === 0 ?
                                    <div className='p-15 text-center'>
                                        <p>还没有这个组件哦～</p>
                                        <p>
                                            <a className='btn btn-sm btn-danger' href='http://gitlab.mogujie.org/Aveng/meili-base-merchant-component' target='_blank'>
                                                我要贡献一个
                                            </a>
                                        </p>
                                    </div>
                                : null
                            }
                            <ul style={{ background: '#edf1f2' }} className='m-t-10'>
                                {
                                    menuData.map((item, index) => {
                                        return (
                                            <li
                                                className={activeUrl === item.link ? 'app-sider-item active' : 'app-sider-item'}
                                                key={index}
                                                onClick={() => this.activeMenu(item)}
                                            >
                                                <a href={item.link} className='block p-15 text-base'>{item.title}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='app-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

LayoutView.propTypes = {
    children: PropTypes.node
};
/* eslint-enable */
