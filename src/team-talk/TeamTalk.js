import React from 'react';
import ModalController from '../modal/Modal';

/**
 * [teamtalk组件]联系客服组件 两种应用场景
 * @author ziyi-wang 根据小店f-day里的组件改写
 * @param create at 2016-09-06
 * @param {function}  [onClick]         [点击事件]
 * @param {string}    [userId]          [用户UID,当联系对象为商家官方客服时候，后端写死了userId,为普通用户时候，需传用户userId]
 * @param {string }   [callToBusiness]  [callToBusiness为商家，否则为客户]
 * @param {string}    [className]       [新加class][选填]
 */

require('./style/index.less');
const TeamTalk = React.createClass({
    contactViaTT(evt) {
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(evt);
        }
        const userId = this.props.userId;
        // IM请求接口
        let postImUrl = this.props.callToBusiness ? 'http://imapi.mogujie.com/call/business' : 'http://imapi.mogujie.com/call/talk';
        $.ajax({
            url: postImUrl,
            type: 'post',
            dataType: 'jsonp',
            data: {
                uid: userId
            }
        }).done((resData) => {
            if (resData) {
                //没有登陆
                if (resData.status.code == 4005) {

                    let meilishuoLoginUrl = 'http://xd.meilishuo.com/user/login'; //meilishuo的登陆，登陆完成后，自动跳转会refer页面 http://www.meilishuo.com/user/login
                    let xiaodianLoginUrl = 'http://www.xiaodian.com/pc/user/login?refer=' + encodeURIComponent('http://www.xiaodian.com/pc/shopadmin/help/callCustomer?problemCategorId=-3');
                    let loginUrl = window.isMeilishuo ? meilishuoLoginUrl : xiaodianLoginUrl;
                    //区分蘑菇街和美丽说小店登陆
                    window.location.href = loginUrl;
                    return;
                }

                //登陆
                if (resData.status.code == 1001) {
                    // 启动多多客户端
                    const result = resData.result;
                    //接口返回有url，failedMessage等信息
                    if (result && result.url) {
                        location.href = result.url;
                        let msg = [];
                        //为了让他能正常的编译HTML
                        msg.push(<span key={1}>{result.failedMessage},</span>);
                        msg.push(<a href={result.downloadUrl} key={2} style={{color:"#189ec8"}} target="_blank"> &nbsp;去下载	&rarr;</a>);
                        ModalController.alert(<div>{msg}</div>);
                    }
                } else {
                    //错误情况下，提示错误信息
                    ModalController.alert(resData.status.msg);
                }

            }
        });

    },
    render() {
        return (
            <a onClick={this.contactViaTT} className={`xd-teamtalk ${this.props.className || ''}`}>
                {this.props.children}
            </a>
        );
    }
});

module.exports = TeamTalk;