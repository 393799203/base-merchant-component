import React, { Component, PropTypes } from 'react';
import HeadNav from './headNav';

export default class FullPageView extends Component {
    render () {
        const curHash = window.location.hash ? window.location.hash.split('?')[0] : '';
        const isHome = curHash === '#/';

        return (
            <div>
                <div className='app-header-fixed'>
                    <HeadNav isHome={isHome} />
                </div>

            </div>
        );
    }
}

FullPageView.propTypes = {
    children: PropTypes.node
};
