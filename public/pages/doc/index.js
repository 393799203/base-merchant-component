/* eslint-disable */
import React, { Component } from 'react';

export default class DocView extends Component {
    render () {
        return (<div className='mt-50'>
            <iframe
              style={{ minHeight: '800px' }}
              width='100%'
              frameBorder='0'
              src='http://doc.f2e.meili-inc.com/merchant/merchant.html'
            />
        </div>);
    }
}
/* eslint-enable */