/* eslint-disable */

import React, { Component } from 'react';

export default class TeamtalkView extends Component {
    componentDidMount () {
    }
    render () {
        return (
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    TT - Teamtalk
                    <a href='mactt://message/user/01828' style={{ border: 'none', boxShadow: 'none' }} className='ml-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3 className='mt' style={{border: 'none', textAlign: 'center'}}>
                    teamtalk组件已经拆分成独立组件
                    <i className='text-danger m-xs'>@meili/call-teamtalk</i>
                    <a target='blank' href='http://aveng.meili-inc.com/doc/%40meili%2Fcall-teamtalk?ver='>
                        查看具体使用
                    </a>
                </h3>
            </div>
        );
    }
}
/* eslint-enable */
