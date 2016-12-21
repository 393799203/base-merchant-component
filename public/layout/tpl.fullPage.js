import React, { Component, PropTypes } from 'react';
import HeadNav from './headNav';

export default class FullPageView extends Component {
    render () {
        const curHash = window.location.hash ? window.location.hash.split('?')[0] : '';
        const isHome = curHash === '#/';

        return (
            <div>
                <div className='app-header-fixed app-aside-fixed'>
                    <HeadNav isHome={isHome} />
                </div>
                <div
                  style={
                      isHome ?
                          {
                              position: 'absolute',
                              width: '100%',
                              top: '0',
                              minHeight: '100%',
                              background: 'linear-gradient(135deg, #f52121, #f57272, #f5a6a6)'
                          } :
                          { background: '#fefefe' }
                  }
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

FullPageView.propTypes = {
    children: PropTypes.node
};
