/* eslint-disable */
import React, { Component } from 'react';

export default class IconView extends Component {
    render () {
        return (
            <div className='p-t-20 p-l-30 p-r-30'>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num || 1}、Iconfont
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/Aveng/meili-merchant-theme/blob/develop/lib/iconfont.less'
                    >
                      查看 Iconfont 样式源码
                    </a>
                </h3>
                <h4>{this.props.num || 1}.1、使用方式</h4>
                <code>{"<i className='iconfont icon-appreciate'></i>"}</code>
                <p className='m-t m-b'>加<code>.icon-spin</code>可以让icon旋转</p>
                <code>{"<i className='iconfont icon-loading icon-spin'></i>"}</code>
                <h4>{this.props.num || 1}.2、所有icon</h4>
                <ul className='clearfix'>
                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-appreciate'></i>
                        <div className='name'>appreciate</div>
                        <div className='fontclass'>.icon-appreciate</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-check'></i>
                        <div className='name'>check</div>
                        <div className='fontclass'>.icon-check</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-close'></i>
                        <div className='name'>close</div>
                        <div className='fontclass'>.icon-close</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-edit'></i>
                        <div className='name'>edit</div>
                        <div className='fontclass'>.icon-edit</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-emoji'></i>
                        <div className='name'>emoji</div>
                        <div className='fontclass'>.icon-emoji</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-favorfill'></i>
                        <div className='name'>favorfill</div>
                        <div className='fontclass'>.icon-favorfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-favor'></i>
                        <div className='name'>favor</div>
                        <div className='fontclass'>.icon-favor</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-loading'></i>
                        <div className='name'>loading</div>
                        <div className='fontclass'>.icon-loading</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-locationfill'></i>
                        <div className='name'>locationfill</div>
                        <div className='fontclass'>.icon-locationfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-location'></i>
                        <div className='name'>location</div>
                        <div className='fontclass'>.icon-location</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-phone'></i>
                        <div className='name'>phone</div>
                        <div className='fontclass'>.icon-phone</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundcheckfill'></i>
                        <div className='name'>roundcheckfill</div>
                        <div className='fontclass'>.icon-roundcheckfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundcheck'></i>
                        <div className='name'>roundcheck</div>
                        <div className='fontclass'>.icon-roundcheck</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundclosefill'></i>
                        <div className='name'>roundclosefill</div>
                        <div className='fontclass'>.icon-roundclosefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundclose'></i>
                        <div className='name'>roundclose</div>
                        <div className='fontclass'>.icon-roundclose</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundrightfill'></i>
                        <div className='name'>roundrightfill</div>
                        <div className='fontclass'>.icon-roundrightfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundright'></i>
                        <div className='name'>roundright</div>
                        <div className='fontclass'>.icon-roundright</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-search'></i>
                        <div className='name'>search</div>
                        <div className='fontclass'>.icon-search</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-taxi'></i>
                        <div className='name'>taxi</div>
                        <div className='fontclass'>.icon-taxi</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-timefill'></i>
                        <div className='name'>timefill</div>
                        <div className='fontclass'>.icon-timefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-time'></i>
                        <div className='name'>time</div>
                        <div className='fontclass'>.icon-time</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-unfold'></i>
                        <div className='name'>unfold</div>
                        <div className='fontclass'>.icon-unfold</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-warnfill'></i>
                        <div className='name'>warnfill</div>
                        <div className='fontclass'>.icon-warnfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-warn'></i>
                        <div className='name'>warn</div>
                        <div className='fontclass'>.icon-warn</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-camerafill'></i>
                        <div className='name'>camerafill</div>
                        <div className='fontclass'>.icon-camerafill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-camera'></i>
                        <div className='name'>camera</div>
                        <div className='fontclass'>.icon-camera</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-commentfill'></i>
                        <div className='name'>commentfill</div>
                        <div className='fontclass'>.icon-commentfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-comment'></i>
                        <div className='name'>comment</div>
                        <div className='fontclass'>.icon-comment</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-likefill'></i>
                        <div className='name'>likefill</div>
                        <div className='fontclass'>.icon-likefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-like'></i>
                        <div className='name'>like</div>
                        <div className='fontclass'>.icon-like</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-notificationfill'></i>
                        <div className='name'>notificationfill</div>
                        <div className='fontclass'>.icon-notificationfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-notification'></i>
                        <div className='name'>notification</div>
                        <div className='fontclass'>.icon-notification</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-order'></i>
                        <div className='name'>order</div>
                        <div className='fontclass'>.icon-order</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-samefill'></i>
                        <div className='name'>samefill</div>
                        <div className='fontclass'>.icon-samefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-same'></i>
                        <div className='name'>same</div>
                        <div className='fontclass'>.icon-same</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-deliver'></i>
                        <div className='name'>deliver</div>
                        <div className='fontclass'>.icon-deliver</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-evaluate'></i>
                        <div className='name'>evaluate</div>
                        <div className='fontclass'>.icon-evaluate</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pay'></i>
                        <div className='name'>pay</div>
                        <div className='fontclass'>.icon-pay</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-send'></i>
                        <div className='name'>send</div>
                        <div className='fontclass'>.icon-send</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-shop'></i>
                        <div className='name'>shop</div>
                        <div className='fontclass'>.icon-shop</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-ticket'></i>
                        <div className='name'>ticket</div>
                        <div className='fontclass'>.icon-ticket</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-wang'></i>
                        <div className='name'>wang</div>
                        <div className='fontclass'>.icon-wang</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-back'></i>
                        <div className='name'>back</div>
                        <div className='fontclass'>.icon-back</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cascades'></i>
                        <div className='name'>cascades</div>
                        <div className='fontclass'>.icon-cascades</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-discover'></i>
                        <div className='name'>discover</div>
                        <div className='fontclass'>.icon-discover</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-list'></i>
                        <div className='name'>list</div>
                        <div className='fontclass'>.icon-list</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-more'></i>
                        <div className='name'>more</div>
                        <div className='fontclass'>.icon-more</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-scan'></i>
                        <div className='name'>scan</div>
                        <div className='fontclass'>.icon-scan</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-settings'></i>
                        <div className='name'>settings</div>
                        <div className='fontclass'>.icon-settings</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-questionfill'></i>
                        <div className='name'>questionfill</div>
                        <div className='fontclass'>.icon-questionfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-question'></i>
                        <div className='name'>question</div>
                        <div className='fontclass'>.icon-question</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-shopfill'></i>
                        <div className='name'>shopfill</div>
                        <div className='fontclass'>.icon-shopfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-form'></i>
                        <div className='name'>form</div>
                        <div className='fontclass'>.icon-form</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-wangfill'></i>
                        <div className='name'>wangfill</div>
                        <div className='fontclass'>.icon-wangfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pic'></i>
                        <div className='name'>pic</div>
                        <div className='fontclass'>.icon-pic</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-filter'></i>
                        <div className='name'>filter</div>
                        <div className='fontclass'>.icon-filter</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-footprint'></i>
                        <div className='name'>footprint</div>
                        <div className='fontclass'>.icon-footprint</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-top'></i>
                        <div className='name'>top</div>
                        <div className='fontclass'>.icon-top</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pulldown'></i>
                        <div className='name'>pulldown</div>
                        <div className='fontclass'>.icon-pulldown</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pullup'></i>
                        <div className='name'>pullup</div>
                        <div className='fontclass'>.icon-pullup</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-right'></i>
                        <div className='name'>right</div>
                        <div className='fontclass'>.icon-right</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-refresh'></i>
                        <div className='name'>refresh</div>
                        <div className='fontclass'>.icon-refresh</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-moreandroid'></i>
                        <div className='name'>moreandroid</div>
                        <div className='fontclass'>.icon-moreandroid</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-deletefill'></i>
                        <div className='name'>deletefill</div>
                        <div className='fontclass'>.icon-deletefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-refund'></i>
                        <div className='name'>refund</div>
                        <div className='fontclass'>.icon-refund</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cart'></i>
                        <div className='name'>cart</div>
                        <div className='fontclass'>.icon-cart</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-qrcode'></i>
                        <div className='name'>qrcode</div>
                        <div className='fontclass'>.icon-qrcode</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-remind'></i>
                        <div className='name'>remind</div>
                        <div className='fontclass'>.icon-remind</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-delete'></i>
                        <div className='name'>delete</div>
                        <div className='fontclass'>.icon-delete</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-profile'></i>
                        <div className='name'>profile</div>
                        <div className='fontclass'>.icon-profile</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-home'></i>
                        <div className='name'>home</div>
                        <div className='fontclass'>.icon-home</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cartfill'></i>
                        <div className='name'>cartfill</div>
                        <div className='fontclass'>.icon-cartfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-discoverfill'></i>
                        <div className='name'>discoverfill</div>
                        <div className='fontclass'>.icon-discoverfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-homefill'></i>
                        <div className='name'>homefill</div>
                        <div className='fontclass'>.icon-homefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-message'></i>
                        <div className='name'>message</div>
                        <div className='fontclass'>.icon-message</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-addressbook'></i>
                        <div className='name'>addressbook</div>
                        <div className='fontclass'>.icon-addressbook</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-link'></i>
                        <div className='name'>link</div>
                        <div className='fontclass'>.icon-link</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-lock'></i>
                        <div className='name'>lock</div>
                        <div className='fontclass'>.icon-lock</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-unlock'></i>
                        <div className='name'>unlock</div>
                        <div className='fontclass'>.icon-unlock</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-vip'></i>
                        <div className='name'>vip</div>
                        <div className='fontclass'>.icon-vip</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-weibo'></i>
                        <div className='name'>weibo</div>
                        <div className='fontclass'>.icon-weibo</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-activity'></i>
                        <div className='name'>activity</div>
                        <div className='fontclass'>.icon-activity</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-big'></i>
                        <div className='name'>big</div>
                        <div className='fontclass'>.icon-big</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friendaddfill'></i>
                        <div className='name'>friendaddfill</div>
                        <div className='fontclass'>.icon-friendaddfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friendadd'></i>
                        <div className='name'>friendadd</div>
                        <div className='fontclass'>.icon-friendadd</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friendfamous'></i>
                        <div className='name'>friendfamous</div>
                        <div className='fontclass'>.icon-friendfamous</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friend'></i>
                        <div className='name'>friend</div>
                        <div className='fontclass'>.icon-friend</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goods'></i>
                        <div className='name'>goods</div>
                        <div className='fontclass'>.icon-goods</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-selection'></i>
                        <div className='name'>selection</div>
                        <div className='fontclass'>.icon-selection</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-tmall'></i>
                        <div className='name'>tmall</div>
                        <div className='fontclass'>.icon-tmall</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-explore'></i>
                        <div className='name'>explore</div>
                        <div className='fontclass'>.icon-explore</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-present'></i>
                        <div className='name'>present</div>
                        <div className='fontclass'>.icon-present</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-squarecheckfill'></i>
                        <div className='name'>squarecheckfill</div>
                        <div className='fontclass'>.icon-squarecheckfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-square'></i>
                        <div className='name'>square</div>
                        <div className='fontclass'>.icon-square</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-squarecheck'></i>
                        <div className='name'>squarecheck</div>
                        <div className='fontclass'>.icon-squarecheck</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-round'></i>
                        <div className='name'>round</div>
                        <div className='fontclass'>.icon-round</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundaddfill'></i>
                        <div className='name'>roundaddfill</div>
                        <div className='fontclass'>.icon-roundaddfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundadd'></i>
                        <div className='name'>roundadd</div>
                        <div className='fontclass'>.icon-roundadd</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-add'></i>
                        <div className='name'>add</div>
                        <div className='fontclass'>.icon-add</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-notificationforbidfill'></i>
                        <div className='name'>notificationforbidfill</div>
                        <div className='fontclass'>.icon-notificationforbidfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-explorefill'></i>
                        <div className='name'>explorefill</div>
                        <div className='fontclass'>.icon-explorefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-fold'></i>
                        <div className='name'>fold</div>
                        <div className='fontclass'>.icon-fold</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-game'></i>
                        <div className='name'>game</div>
                        <div className='fontclass'>.icon-game</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-redpacket'></i>
                        <div className='name'>redpacket</div>
                        <div className='fontclass'>.icon-redpacket</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-selectionfill'></i>
                        <div className='name'>selectionfill</div>
                        <div className='fontclass'>.icon-selectionfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-similar'></i>
                        <div className='name'>similar</div>
                        <div className='fontclass'>.icon-similar</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-appreciatefill'></i>
                        <div className='name'>appreciatefill</div>
                        <div className='fontclass'>.icon-appreciatefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-infofill'></i>
                        <div className='name'>infofill</div>
                        <div className='fontclass'>.icon-infofill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-info'></i>
                        <div className='name'>info</div>
                        <div className='fontclass'>.icon-info</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-tao'></i>
                        <div className='name'>tao</div>
                        <div className='fontclass'>.icon-tao</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-mobiletao'></i>
                        <div className='name'>mobiletao</div>
                        <div className='fontclass'>.icon-mobiletao</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-forwardfill'></i>
                        <div className='name'>forwardfill</div>
                        <div className='fontclass'>.icon-forwardfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-forward'></i>
                        <div className='name'>forward</div>
                        <div className='fontclass'>.icon-forward</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-rechargefill'></i>
                        <div className='name'>rechargefill</div>
                        <div className='fontclass'>.icon-rechargefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-recharge'></i>
                        <div className='name'>recharge</div>
                        <div className='fontclass'>.icon-recharge</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-vipcard'></i>
                        <div className='name'>vipcard</div>
                        <div className='fontclass'>.icon-vipcard</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-voice'></i>
                        <div className='name'>voice</div>
                        <div className='fontclass'>.icon-voice</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-voicefill'></i>
                        <div className='name'>voicefill</div>
                        <div className='fontclass'>.icon-voicefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friendfavor'></i>
                        <div className='name'>friendfavor</div>
                        <div className='fontclass'>.icon-friendfavor</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-wifi'></i>
                        <div className='name'>wifi</div>
                        <div className='fontclass'>.icon-wifi</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-share'></i>
                        <div className='name'>share</div>
                        <div className='fontclass'>.icon-share</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-wefill'></i>
                        <div className='name'>wefill</div>
                        <div className='fontclass'>.icon-wefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-we'></i>
                        <div className='name'>we</div>
                        <div className='fontclass'>.icon-we</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-lightauto'></i>
                        <div className='name'>lightauto</div>
                        <div className='fontclass'>.icon-lightauto</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-lightforbid'></i>
                        <div className='name'>lightforbid</div>
                        <div className='fontclass'>.icon-lightforbid</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-lightfill'></i>
                        <div className='name'>lightfill</div>
                        <div className='fontclass'>.icon-lightfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-camerarotate'></i>
                        <div className='name'>camerarotate</div>
                        <div className='fontclass'>.icon-camerarotate</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-light'></i>
                        <div className='name'>light</div>
                        <div className='fontclass'>.icon-light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-barcode'></i>
                        <div className='name'>barcode</div>
                        <div className='fontclass'>.icon-barcode</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-flashlightclose'></i>
                        <div className='name'>flashlightclose</div>
                        <div className='fontclass'>.icon-flashlightclose</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-flashlightopen'></i>
                        <div className='name'>flashlightopen</div>
                        <div className='fontclass'>.icon-flashlightopen</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-searchlist'></i>
                        <div className='name'>searchlist</div>
                        <div className='fontclass'>.icon-searchlist</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-service'></i>
                        <div className='name'>service</div>
                        <div className='fontclass'>.icon-service</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-sort'></i>
                        <div className='name'>sort</div>
                        <div className='fontclass'>.icon-sort</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-1212'></i>
                        <div className='name'>1212</div>
                        <div className='fontclass'>.icon-1212</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-down'></i>
                        <div className='name'>down</div>
                        <div className='fontclass'>.icon-down</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-mobile'></i>
                        <div className='name'>mobile</div>
                        <div className='fontclass'>.icon-mobile</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-mobilefill'></i>
                        <div className='name'>mobilefill</div>
                        <div className='fontclass'>.icon-mobilefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-copy'></i>
                        <div className='name'>copy</div>
                        <div className='fontclass'>.icon-copy</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-countdownfill'></i>
                        <div className='name'>countdownfill</div>
                        <div className='fontclass'>.icon-countdownfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-countdown'></i>
                        <div className='name'>countdown</div>
                        <div className='fontclass'>.icon-countdown</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-noticefill'></i>
                        <div className='name'>noticefill</div>
                        <div className='fontclass'>.icon-noticefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-notice'></i>
                        <div className='name'>notice</div>
                        <div className='fontclass'>.icon-notice</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-qiang'></i>
                        <div className='name'>qiang</div>
                        <div className='fontclass'>.icon-qiang</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-upstagefill'></i>
                        <div className='name'>upstagefill</div>
                        <div className='fontclass'>.icon-upstagefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-upstage'></i>
                        <div className='name'>upstage</div>
                        <div className='fontclass'>.icon-upstage</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-babyfill'></i>
                        <div className='name'>babyfill</div>
                        <div className='fontclass'>.icon-babyfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-baby'></i>
                        <div className='name'>baby</div>
                        <div className='fontclass'>.icon-baby</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-brandfill'></i>
                        <div className='name'>brandfill</div>
                        <div className='fontclass'>.icon-brandfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-brand'></i>
                        <div className='name'>brand</div>
                        <div className='fontclass'>.icon-brand</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-choicenessfill'></i>
                        <div className='name'>choicenessfill</div>
                        <div className='fontclass'>.icon-choicenessfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-choiceness'></i>
                        <div className='name'>choiceness</div>
                        <div className='fontclass'>.icon-choiceness</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-clothesfill'></i>
                        <div className='name'>clothesfill</div>
                        <div className='fontclass'>.icon-clothesfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-clothes'></i>
                        <div className='name'>clothes</div>
                        <div className='fontclass'>.icon-clothes</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-creativefill'></i>
                        <div className='name'>creativefill</div>
                        <div className='fontclass'>.icon-creativefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-creative'></i>
                        <div className='name'>creative</div>
                        <div className='fontclass'>.icon-creative</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-female'></i>
                        <div className='name'>female</div>
                        <div className='fontclass'>.icon-female</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-keyboard'></i>
                        <div className='name'>keyboard</div>
                        <div className='fontclass'>.icon-keyboard</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-male'></i>
                        <div className='name'>male</div>
                        <div className='fontclass'>.icon-male</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-newfill'></i>
                        <div className='name'>newfill</div>
                        <div className='fontclass'>.icon-newfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-new'></i>
                        <div className='name'>new</div>
                        <div className='fontclass'>.icon-new</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pullleft'></i>
                        <div className='name'>pullleft</div>
                        <div className='fontclass'>.icon-pullleft</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pullright'></i>
                        <div className='name'>pullright</div>
                        <div className='fontclass'>.icon-pullright</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-rankfill'></i>
                        <div className='name'>rankfill</div>
                        <div className='fontclass'>.icon-rankfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-rank'></i>
                        <div className='name'>rank</div>
                        <div className='fontclass'>.icon-rank</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-bad'></i>
                        <div className='name'>bad</div>
                        <div className='fontclass'>.icon-bad</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cameraadd'></i>
                        <div className='name'>cameraadd</div>
                        <div className='fontclass'>.icon-cameraadd</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-focus'></i>
                        <div className='name'>focus</div>
                        <div className='fontclass'>.icon-focus</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friendfill'></i>
                        <div className='name'>friendfill</div>
                        <div className='fontclass'>.icon-friendfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cameraaddfill'></i>
                        <div className='name'>cameraaddfill</div>
                        <div className='fontclass'>.icon-cameraaddfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-apps'></i>
                        <div className='name'>apps</div>
                        <div className='fontclass'>.icon-apps</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-paintfill'></i>
                        <div className='name'>paintfill</div>
                        <div className='fontclass'>.icon-paintfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-paint'></i>
                        <div className='name'>paint</div>
                        <div className='fontclass'>.icon-paint</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-picfill'></i>
                        <div className='name'>picfill</div>
                        <div className='fontclass'>.icon-picfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-refresharrow'></i>
                        <div className='name'>refresharrow</div>
                        <div className='fontclass'>.icon-refresharrow</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-markfill'></i>
                        <div className='name'>markfill</div>
                        <div className='fontclass'>.icon-markfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-mark'></i>
                        <div className='name'>mark</div>
                        <div className='fontclass'>.icon-mark</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-presentfill'></i>
                        <div className='name'>presentfill</div>
                        <div className='fontclass'>.icon-presentfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-repeal'></i>
                        <div className='name'>repeal</div>
                        <div className='fontclass'>.icon-repeal</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-album'></i>
                        <div className='name'>album</div>
                        <div className='fontclass'>.icon-album</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-peoplefill'></i>
                        <div className='name'>peoplefill</div>
                        <div className='fontclass'>.icon-peoplefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-people'></i>
                        <div className='name'>people</div>
                        <div className='fontclass'>.icon-people</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-servicefill'></i>
                        <div className='name'>servicefill</div>
                        <div className='fontclass'>.icon-servicefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-repair'></i>
                        <div className='name'>repair</div>
                        <div className='fontclass'>.icon-repair</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-file'></i>
                        <div className='name'>file</div>
                        <div className='fontclass'>.icon-file</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-repairfill'></i>
                        <div className='name'>repairfill</div>
                        <div className='fontclass'>.icon-repairfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-taoxiaopu'></i>
                        <div className='name'>taoxiaopu</div>
                        <div className='fontclass'>.icon-taoxiaopu</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attentionfill'></i>
                        <div className='name'>attentionfill</div>
                        <div className='fontclass'>.icon-attentionfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attention'></i>
                        <div className='name'>attention</div>
                        <div className='fontclass'>.icon-attention</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-commandfill'></i>
                        <div className='name'>commandfill</div>
                        <div className='fontclass'>.icon-commandfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-command'></i>
                        <div className='name'>command</div>
                        <div className='fontclass'>.icon-command</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-communityfill'></i>
                        <div className='name'>communityfill</div>
                        <div className='fontclass'>.icon-communityfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-community'></i>
                        <div className='name'>community</div>
                        <div className='fontclass'>.icon-community</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-read'></i>
                        <div className='name'>read</div>
                        <div className='fontclass'>.icon-read</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-suan'></i>
                        <div className='name'>suan</div>
                        <div className='fontclass'>.icon-suan</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-hua'></i>
                        <div className='name'>hua</div>
                        <div className='fontclass'>.icon-hua</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-ju'></i>
                        <div className='name'>ju</div>
                        <div className='fontclass'>.icon-ju</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-tian'></i>
                        <div className='name'>tian</div>
                        <div className='fontclass'>.icon-tian</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-calendar'></i>
                        <div className='name'>calendar</div>
                        <div className='fontclass'>.icon-calendar</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cut'></i>
                        <div className='name'>cut</div>
                        <div className='fontclass'>.icon-cut</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-magic'></i>
                        <div className='name'>magic</div>
                        <div className='fontclass'>.icon-magic</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-backwardfill'></i>
                        <div className='name'>backwardfill</div>
                        <div className='fontclass'>.icon-backwardfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-forwardfill1'></i>
                        <div className='name'>forwardfill1</div>
                        <div className='fontclass'>.icon-forwardfill1</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-playfill'></i>
                        <div className='name'>playfill</div>
                        <div className='fontclass'>.icon-playfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-stop'></i>
                        <div className='name'>stop</div>
                        <div className='fontclass'>.icon-stop</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-tagfill'></i>
                        <div className='name'>tagfill</div>
                        <div className='fontclass'>.icon-tagfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-tag'></i>
                        <div className='name'>tag</div>
                        <div className='fontclass'>.icon-tag</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-group'></i>
                        <div className='name'>group</div>
                        <div className='fontclass'>.icon-group</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-all'></i>
                        <div className='name'>all</div>
                        <div className='fontclass'>.icon-all</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-backdelete'></i>
                        <div className='name'>backdelete</div>
                        <div className='fontclass'>.icon-backdelete</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-hotfill'></i>
                        <div className='name'>hotfill</div>
                        <div className='fontclass'>.icon-hotfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-hot'></i>
                        <div className='name'>hot</div>
                        <div className='fontclass'>.icon-hot</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-post'></i>
                        <div className='name'>post</div>
                        <div className='fontclass'>.icon-post</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-radiobox'></i>
                        <div className='name'>radiobox</div>
                        <div className='fontclass'>.icon-radiobox</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-rounddown'></i>
                        <div className='name'>rounddown</div>
                        <div className='fontclass'>.icon-rounddown</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-upload'></i>
                        <div className='name'>upload</div>
                        <div className='fontclass'>.icon-upload</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-writefill'></i>
                        <div className='name'>writefill</div>
                        <div className='fontclass'>.icon-writefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-write'></i>
                        <div className='name'>write</div>
                        <div className='fontclass'>.icon-write</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-radioboxfill'></i>
                        <div className='name'>radioboxfill</div>
                        <div className='fontclass'>.icon-radioboxfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-punch'></i>
                        <div className='name'>punch</div>
                        <div className='fontclass'>.icon-punch</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-shake'></i>
                        <div className='name'>shake</div>
                        <div className='fontclass'>.icon-shake</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-add1'></i>
                        <div className='name'>add1</div>
                        <div className='fontclass'>.icon-add1</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-move'></i>
                        <div className='name'>move</div>
                        <div className='fontclass'>.icon-move</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-safe'></i>
                        <div className='name'>safe</div>
                        <div className='fontclass'>.icon-safe</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-haodian'></i>
                        <div className='name'>haodian</div>
                        <div className='fontclass'>.icon-haodian</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-mao'></i>
                        <div className='name'>mao</div>
                        <div className='fontclass'>.icon-mao</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-qi'></i>
                        <div className='name'>qi</div>
                        <div className='fontclass'>.icon-qi</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-ye'></i>
                        <div className='name'>ye</div>
                        <div className='fontclass'>.icon-ye</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-juhuasuan'></i>
                        <div className='name'>juhuasuan</div>
                        <div className='fontclass'>.icon-juhuasuan</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-taoqianggou'></i>
                        <div className='name'>taoqianggou</div>
                        <div className='fontclass'>.icon-taoqianggou</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-tianmao'></i>
                        <div className='name'>tianmao</div>
                        <div className='fontclass'>.icon-tianmao</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-activityfill'></i>
                        <div className='name'>activityfill</div>
                        <div className='fontclass'>.icon-activityfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-crownfill'></i>
                        <div className='name'>crownfill</div>
                        <div className='fontclass'>.icon-crownfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-crown'></i>
                        <div className='name'>crown</div>
                        <div className='fontclass'>.icon-crown</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goodsfill'></i>
                        <div className='name'>goodsfill</div>
                        <div className='fontclass'>.icon-goodsfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-messagefill'></i>
                        <div className='name'>messagefill</div>
                        <div className='fontclass'>.icon-messagefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-profilefill'></i>
                        <div className='name'>profilefill</div>
                        <div className='fontclass'>.icon-profilefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-sound'></i>
                        <div className='name'>sound</div>
                        <div className='fontclass'>.icon-sound</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-sponsorfill'></i>
                        <div className='name'>sponsorfill</div>
                        <div className='fontclass'>.icon-sponsorfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-sponsor'></i>
                        <div className='name'>sponsor</div>
                        <div className='fontclass'>.icon-sponsor</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-upblock'></i>
                        <div className='name'>upblock</div>
                        <div className='fontclass'>.icon-upblock</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-weblock'></i>
                        <div className='name'>weblock</div>
                        <div className='fontclass'>.icon-weblock</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-weunblock'></i>
                        <div className='name'>weunblock</div>
                        <div className='fontclass'>.icon-weunblock</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-1111'></i>
                        <div className='name'>1111</div>
                        <div className='fontclass'>.icon-1111</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-my'></i>
                        <div className='name'>my</div>
                        <div className='fontclass'>.icon-my</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-myfill'></i>
                        <div className='name'>myfill</div>
                        <div className='fontclass'>.icon-myfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-emojifill'></i>
                        <div className='name'>emojifill</div>
                        <div className='fontclass'>.icon-emojifill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-emojiflashfill'></i>
                        <div className='name'>emojiflashfill</div>
                        <div className='fontclass'>.icon-emojiflashfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-flashbuyfill-copy'></i>
                        <div className='name'>flashbuyfill-copy</div>
                        <div className='fontclass'>.icon-flashbuyfill-copy</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-text'></i>
                        <div className='name'>text</div>
                        <div className='fontclass'>.icon-text</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goodsfavor'></i>
                        <div className='name'>goodsfavor</div>
                        <div className='fontclass'>.icon-goodsfavor</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-musicfill'></i>
                        <div className='name'>musicfill</div>
                        <div className='fontclass'>.icon-musicfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-musicforbidfill'></i>
                        <div className='name'>musicforbidfill</div>
                        <div className='fontclass'>.icon-musicforbidfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-xiamiforbid'></i>
                        <div className='name'>xiamiforbid</div>
                        <div className='fontclass'>.icon-xiamiforbid</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-xiami'></i>
                        <div className='name'>xiami</div>
                        <div className='fontclass'>.icon-xiami</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundleftfill'></i>
                        <div className='name'>roundleftfill</div>
                        <div className='fontclass'>.icon-roundleftfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-triangledownfill'></i>
                        <div className='name'>triangledownfill</div>
                        <div className='fontclass'>.icon-triangledownfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-triangleupfill'></i>
                        <div className='name'>triangleupfill</div>
                        <div className='fontclass'>.icon-triangleupfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundleftfill-copy'></i>
                        <div className='name'>roundleftfill-copy</div>
                        <div className='fontclass'>.icon-roundleftfill-copy</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-pulldown1'></i>
                        <div className='name'>pulldown1</div>
                        <div className='fontclass'>.icon-pulldown1</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-emojilight'></i>
                        <div className='name'>emojilight</div>
                        <div className='fontclass'>.icon-emojilight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-keyboardlight'></i>
                        <div className='name'>keyboardlight</div>
                        <div className='fontclass'>.icon-keyboardlight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-recordfill'></i>
                        <div className='name'>recordfill</div>
                        <div className='fontclass'>.icon-recordfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-recordlight'></i>
                        <div className='name'>recordlight</div>
                        <div className='fontclass'>.icon-recordlight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-record'></i>
                        <div className='name'>record</div>
                        <div className='fontclass'>.icon-record</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-roundaddlight'></i>
                        <div className='name'>roundaddlight</div>
                        <div className='fontclass'>.icon-roundaddlight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-soundlight'></i>
                        <div className='name'>soundlight</div>
                        <div className='fontclass'>.icon-soundlight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cardboardfill'></i>
                        <div className='name'>cardboardfill</div>
                        <div className='fontclass'>.icon-cardboardfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cardboard'></i>
                        <div className='name'>cardboard</div>
                        <div className='fontclass'>.icon-cardboard</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-formfill'></i>
                        <div className='name'>formfill</div>
                        <div className='fontclass'>.icon-formfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-coin'></i>
                        <div className='name'>coin</div>
                        <div className='fontclass'>.icon-coin</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-sortlight'></i>
                        <div className='name'>sortlight</div>
                        <div className='fontclass'>.icon-sortlight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cardboardforbid'></i>
                        <div className='name'>cardboardforbid</div>
                        <div className='fontclass'>.icon-cardboardforbid</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-circlefill'></i>
                        <div className='name'>circlefill</div>
                        <div className='fontclass'>.icon-circlefill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-circle'></i>
                        <div className='name'>circle</div>
                        <div className='fontclass'>.icon-circle</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attentionforbid'></i>
                        <div className='name'>attentionforbid</div>
                        <div className='fontclass'>.icon-attentionforbid</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attentionforbidfill'></i>
                        <div className='name'>attentionforbidfill</div>
                        <div className='fontclass'>.icon-attentionforbidfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attentionfavorfill'></i>
                        <div className='name'>attentionfavorfill</div>
                        <div className='fontclass'>.icon-attentionfavorfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attentionfavor'></i>
                        <div className='name'>attentionfavor</div>
                        <div className='fontclass'>.icon-attentionfavor</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-piclight'></i>
                        <div className='name'>piclight</div>
                        <div className='fontclass'>.icon-piclight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-shoplight'></i>
                        <div className='name'>shoplight</div>
                        <div className='fontclass'>.icon-shoplight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-voicelight'></i>
                        <div className='name'>voicelight</div>
                        <div className='fontclass'>.icon-voicelight</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-attentionfavorfill-copy'></i>
                        <div className='name'>attentionfavorfill-copy</div>
                        <div className='fontclass'>.icon-attentionfavorfill-copy</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-full'></i>
                        <div className='name'>full</div>
                        <div className='fontclass'>.icon-full</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-mail'></i>
                        <div className='name'>mail</div>
                        <div className='fontclass'>.icon-mail</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-peoplelist'></i>
                        <div className='name'>peoplelist</div>
                        <div className='fontclass'>.icon-peoplelist</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goodsnewfill'></i>
                        <div className='name'>goodsnewfill</div>
                        <div className='fontclass'>.icon-goodsnewfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goodsnew'></i>
                        <div className='name'>goodsnew</div>
                        <div className='fontclass'>.icon-goodsnew</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-medalfill'></i>
                        <div className='name'>medalfill</div>
                        <div className='fontclass'>.icon-medalfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-medal'></i>
                        <div className='name'>medal</div>
                        <div className='fontclass'>.icon-medal</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-newsfill'></i>
                        <div className='name'>newsfill</div>
                        <div className='fontclass'>.icon-newsfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-newshotfill'></i>
                        <div className='name'>newshotfill</div>
                        <div className='fontclass'>.icon-newshotfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-newshot'></i>
                        <div className='name'>newshot</div>
                        <div className='fontclass'>.icon-newshot</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-news'></i>
                        <div className='name'>news</div>
                        <div className='fontclass'>.icon-news</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-videofill'></i>
                        <div className='name'>videofill</div>
                        <div className='fontclass'>.icon-videofill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-video'></i>
                        <div className='name'>video</div>
                        <div className='fontclass'>.icon-video</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-askfill'></i>
                        <div className='name'>askfill</div>
                        <div className='fontclass'>.icon-askfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-ask'></i>
                        <div className='name'>ask</div>
                        <div className='fontclass'>.icon-ask</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-exit'></i>
                        <div className='name'>exit</div>
                        <div className='fontclass'>.icon-exit</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-skinfill'></i>
                        <div className='name'>skinfill</div>
                        <div className='fontclass'>.icon-skinfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-skin'></i>
                        <div className='name'>skin</div>
                        <div className='fontclass'>.icon-skin</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-moneybagfill'></i>
                        <div className='name'>moneybagfill</div>
                        <div className='fontclass'>.icon-moneybagfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-usefullfill'></i>
                        <div className='name'>usefullfill</div>
                        <div className='fontclass'>.icon-usefullfill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-usefull'></i>
                        <div className='name'>usefull</div>
                        <div className='fontclass'>.icon-usefull</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-moneybag'></i>
                        <div className='name'>moneybag</div>
                        <div className='fontclass'>.icon-moneybag</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-redpacket_fill'></i>
                        <div className='name'>redpacket_fill</div>
                        <div className='fontclass'>.icon-redpacket_fill</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-subscription'></i>
                        <div className='name'>subscription</div>
                        <div className='fontclass'>.icon-subscription</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-home_light'></i>
                        <div className='name'>home_light</div>
                        <div className='fontclass'>.icon-home_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-my_light'></i>
                        <div className='name'>my_light</div>
                        <div className='fontclass'>.icon-my_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-community_light'></i>
                        <div className='name'>community_light</div>
                        <div className='fontclass'>.icon-community_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cart_light'></i>
                        <div className='name'>cart_light</div>
                        <div className='fontclass'>.icon-cart_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-we_light'></i>
                        <div className='name'>we_light</div>
                        <div className='fontclass'>.icon-we_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-home_fill_light'></i>
                        <div className='name'>home_fill_light</div>
                        <div className='fontclass'>.icon-home_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-cart_fill_light'></i>
                        <div className='name'>cart_fill_light</div>
                        <div className='fontclass'>.icon-cart_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-community_fill_light'></i>
                        <div className='name'>community_fill_light</div>
                        <div className='fontclass'>.icon-community_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-my_fill_light'></i>
                        <div className='name'>my_fill_light</div>
                        <div className='fontclass'>.icon-my_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-we_fill_light'></i>
                        <div className='name'>we_fill_light</div>
                        <div className='fontclass'>.icon-we_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-skin_light'></i>
                        <div className='name'>skin_light</div>
                        <div className='fontclass'>.icon-skin_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-search_light'></i>
                        <div className='name'>search_light</div>
                        <div className='fontclass'>.icon-search_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-scan_light'></i>
                        <div className='name'>scan_light</div>
                        <div className='fontclass'>.icon-scan_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-people_list_light'></i>
                        <div className='name'>people_list_light</div>
                        <div className='fontclass'>.icon-people_list_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-message_light'></i>
                        <div className='name'>message_light</div>
                        <div className='fontclass'>.icon-message_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-close_light'></i>
                        <div className='name'>close_light</div>
                        <div className='fontclass'>.icon-close_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-add_light'></i>
                        <div className='name'>add_light</div>
                        <div className='fontclass'>.icon-add_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-profile_light'></i>
                        <div className='name'>profile_light</div>
                        <div className='fontclass'>.icon-profile_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-service_light'></i>
                        <div className='name'>service_light</div>
                        <div className='fontclass'>.icon-service_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friend_add_light'></i>
                        <div className='name'>friend_add_light</div>
                        <div className='fontclass'>.icon-friend_add_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-edit_light'></i>
                        <div className='name'>edit_light</div>
                        <div className='fontclass'>.icon-edit_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-camera_light'></i>
                        <div className='name'>camera_light</div>
                        <div className='fontclass'>.icon-camera_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-hot_light'></i>
                        <div className='name'>hot_light</div>
                        <div className='fontclass'>.icon-hot_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-refresh_light'></i>
                        <div className='name'>refresh_light</div>
                        <div className='fontclass'>.icon-refresh_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-back_light'></i>
                        <div className='name'>back_light</div>
                        <div className='fontclass'>.icon-back_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-share_light'></i>
                        <div className='name'>share_light</div>
                        <div className='fontclass'>.icon-share_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-comment_light'></i>
                        <div className='name'>comment_light</div>
                        <div className='fontclass'>.icon-comment_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-appreciate_light'></i>
                        <div className='name'>appreciate_light</div>
                        <div className='fontclass'>.icon-appreciate_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-favor_light'></i>
                        <div className='name'>favor_light</div>
                        <div className='fontclass'>.icon-favor_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-appreciate_fill_light'></i>
                        <div className='name'>appreciate_fill_light</div>
                        <div className='fontclass'>.icon-appreciate_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-comment_fill_light'></i>
                        <div className='name'>comment_fill_light</div>
                        <div className='fontclass'>.icon-comment_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-wang_light'></i>
                        <div className='name'>wang_light</div>
                        <div className='fontclass'>.icon-wang_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-more_android_light'></i>
                        <div className='name'>more_android_light</div>
                        <div className='fontclass'>.icon-more_android_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-friend_light'></i>
                        <div className='name'>friend_light</div>
                        <div className='fontclass'>.icon-friend_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-more_light'></i>
                        <div className='name'>more_light</div>
                        <div className='fontclass'>.icon-more_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goods_favor_light'></i>
                        <div className='name'>goods_favor_light</div>
                        <div className='fontclass'>.icon-goods_favor_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goods_new_fill_light'></i>
                        <div className='name'>goods_new_fill_light</div>
                        <div className='fontclass'>.icon-goods_new_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goods_new_light'></i>
                        <div className='name'>goods_new_light</div>
                        <div className='fontclass'>.icon-goods_new_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-goods_light'></i>
                        <div className='name'>goods_light</div>
                        <div className='fontclass'>.icon-goods_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-medal_fill_light'></i>
                        <div className='name'>medal_fill_light</div>
                        <div className='fontclass'>.icon-medal_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-medal_light'></i>
                        <div className='name'>medal_light</div>
                        <div className='fontclass'>.icon-medal_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-news_fill_light'></i>
                        <div className='name'>news_fill_light</div>
                        <div className='fontclass'>.icon-news_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-news_hot_fill_light'></i>
                        <div className='name'>news_hot_fill_light</div>
                        <div className='fontclass'>.icon-news_hot_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-news_hot_light'></i>
                        <div className='name'>news_hot_light</div>
                        <div className='fontclass'>.icon-news_hot_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-news_light'></i>
                        <div className='name'>news_light</div>
                        <div className='fontclass'>.icon-news_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-video_fill_light'></i>
                        <div className='name'>video_fill_light</div>
                        <div className='fontclass'>.icon-video_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-message_fill_light'></i>
                        <div className='name'>message_fill_light</div>
                        <div className='fontclass'>.icon-message_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-form_light'></i>
                        <div className='name'>form_light</div>
                        <div className='fontclass'>.icon-form_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-video_light'></i>
                        <div className='name'>video_light</div>
                        <div className='fontclass'>.icon-video_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-search_list_light'></i>
                        <div className='name'>search_list_light</div>
                        <div className='fontclass'>.icon-search_list_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-form_fill_light'></i>
                        <div className='name'>form_fill_light</div>
                        <div className='fontclass'>.icon-form_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-global_light'></i>
                        <div className='name'>global_light</div>
                        <div className='fontclass'>.icon-global_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-global'></i>
                        <div className='name'>global</div>
                        <div className='fontclass'>.icon-global</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-favor_fill_light'></i>
                        <div className='name'>favor_fill_light</div>
                        <div className='fontclass'>.icon-favor_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-delete_light'></i>
                        <div className='name'>delete_light</div>
                        <div className='fontclass'>.icon-delete_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-back_android'></i>
                        <div className='name'>back_android</div>
                        <div className='fontclass'>.icon-back_android</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-back_android_light'></i>
                        <div className='name'>back_android_light</div>
                        <div className='fontclass'>.icon-back_android_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-down_light'></i>
                        <div className='name'>down_light</div>
                        <div className='fontclass'>.icon-down_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-round_close_light'></i>
                        <div className='name'>round_close_light</div>
                        <div className='fontclass'>.icon-round_close_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-round_close_fill_light'></i>
                        <div className='name'>round_close_fill_light</div>
                        <div className='fontclass'>.icon-round_close_fill_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-expressman'></i>
                        <div className='name'>expressman</div>
                        <div className='fontclass'>.icon-expressman</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-punch_light'></i>
                        <div className='name'>punch_light</div>
                        <div className='fontclass'>.icon-punch_light</div>
                    </li>

                    <li className='f-l text-center m'>
                        <i className='text-lg iconfont icon-evaluate_fill'></i>
                        <div className='name'>evaluate_fill</div>
                        <div className='fontclass'>.icon-evaluate_fill</div>
                    </li>
                </ul>
            </div>
        );
    }
}
/* eslint-enable */

