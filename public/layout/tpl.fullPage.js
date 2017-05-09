/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { MHeader } from 'source_path/layout';
import menuOptions from './data.header.js';

export default class FullPageView extends Component {
    render () {
        const curHash = window.location.hash ? window.location.hash.split('?')[0] : '';
        const isHome = curHash === '#/';

        return (
            <div>
                <MHeader
                    brand={{text: 'Makeup', link: '#/'}}
                    menuOptions={menuOptions}
                    userOptions={[{text: '退出', link: 'http://aaaa.com'}]}
                    type='fixed'
                    theme={isHome ? 'default': 'danger'}
                />
                <div
                    style={
                        isHome ?
                            {
                                position: 'absolute',
                                width: '100%',
                                top: '0',
                                minHeight: '100%',
                                background: 'linear-gradient(135deg, #FF2555, #fa5b78, #f9bec8)'
                            }
                            :
                            { background: '#fefefe' }
                    }
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/* eslint-enable */
