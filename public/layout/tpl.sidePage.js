import React, { Component, PropTypes } from 'react';
import _menuData from './menu';
import _busMenuData from './business-menu';
import HeadNav from './headNav';

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

    getCompType () {
        const activeUrl = window.location.hash.slice(0, window.location.hash.indexOf('?'));
        let menu = false;
        for (let i = 0; i < _busMenuData.length; i++) {
            if (_busMenuData[i].link === activeUrl) {
                menu = true;
                break;
            }
        }

        this.setState({
            menuData: menu ? _busMenuData : _menuData,
            OriginMenuData: menu ? _busMenuData : _menuData
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
            <div className='app-header-fixed app-aside-fixed'>
                <HeadNav isHome={false} />
                <div>
                    <div className='app-aside bg-light'>
                        <div className='aside-wrap' style={{ overflow: 'scroll', paddingBottom: '40px' }}>
                            <div className='input-group wrapper'>
                                <input
                                    value={keywords}
                                    onChange={(e) => { this.filterData(e); }}
                                    type='text'
                                    className='form-control bg-white-only no-border padder ng-pristine ng-valid ng-touched'
                                    placeholder='搜索'
                                />
                                <span className='input-group-btn'>
                                    <button type='submit' className='btn bg-white-only'>
                                        <i className='fa fa-search' />
                                    </button>
                                </span>
                            </div>
                            {
                                menuData.length === 0 ?
                                    <div className='wrapper text-center'>
                                        <p>还没有这个组件哦～</p>
                                        <p>
                                            <a className='btn btn-sm btn-danger' href='http://gitlab.mogujie.org/Aveng/meili-base-merchant-component' target='_blank'>
                                                我要贡献一个
                                            </a>
                                        </p>
                                    </div>
                                : null
                            }
                            <ul className='nav' style={{ background: '#edf1f2' }}>
                                {
                                    menuData.map((item, index) => {
                                        return (
                                            <li
                                                className={activeUrl === item.link ? 'active' : ''}
                                                key={index}
                                                onClick={() => this.activeMenu(item)}
                                            >
                                                <a href={item.link}>{item.title}</a>
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
