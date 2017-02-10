import React, { Component } from 'react';

export default class TeamtalkView extends Component {
    componentDidMount () {
    }
    render () {
        return (
            <div className='m-b-lg m-l m-r'>
                <h1>
                    TT - Teamtalk
                    <a href="mactt://message/user/01828" style={{border: 'none'}} className="m-l-lg btn-info-custom btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h1>
                <h2 className='m-t' style={{border: 'none', textAlign: 'center'}}>
                    teamtalk组件已经拆分成独立组件
                    <i className='text-danger m-xs'>@meili/call-teamtalk</i>
                    <a target='blank' href='http://aveng.meili-inc.com/doc/%40meili%2Fcall-teamtalk?ver='>
                        查看具体使用
                    </a>
                </h2>
            </div>
        );
    }
}
