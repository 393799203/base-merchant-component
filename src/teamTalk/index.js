const React = require('react');
const Modal = require('../../lib/modal/index');
/**
 * [xd teamtalk组件]
 * @type {[type]}
 * @author  yefei
 * @create  2015-04-07
 * @param {[type]}    [varname]    [description]
 * @param {string}    [name]       [用户名][必填]
 * @param {int}     [userId]     [用户uid][必填]
 * @param {string}    [className]    [新加class][选填]
 */

require('./index.less');

/*
function openClient(url, callback) {
  var agent = navigator.userAgent.toLowerCase();
  if (!url) {
      return;
  }
  var timer;
  var clear = function (evt, isTimeout) {
      if (typeof callback === 'function') {
          callback(isTimeout);
      }
      window.removeEventListener('pagehide', hide, true);
      window.removeEventListener('pageshow', hide, true);

      if (!node) {
          return;
      }
      node.onload = null;
      document.body.removeChild(node);
      node = null;
  };
  var hide = function (e) {
      clearTimeout(timer);
      clear(e, false);
  };

  if (!/chrome/i.test(agent)) {
      var node = document.createElement('iframe');
      node.style.display = 'none';
      node.onload = clear;
      node.src = url;
      document.body.appendChild(node);
  }

  window.addEventListener('pagehide', hide, true);
  window.addEventListener('pageshow', hide, true);

  var now = new Date().getTime();
  //如果事件失败，则1秒设置为空
  timer = setTimeout(function () {
      var newTime = new Date().getTime();

      if (now - newTime > 1100) {
          clear(null, false);
      } else {
          clear(null, true);
      }
  }, 1000);
}
*/

const TeamTalk = React.createClass({
  contactViaTT(evt) {
    if (this.props.onClick && typeof this.props.onClick === 'function') {
      this.props.onClick(evt);
    }

    const name = this.props.name;
    let userId = this.props.id;

    userId = isNaN(userId) ? userId : XD.Util.idtourl(userId);

    const url = `/h5/im/im?imver=1.2&name=${name}&show_header=shop#chat/${userId}`;
    const width = 400;  // 窗口大小
    const height = 500;
    const iTop = (window.screen.availHeight - height) / 2; // 获得窗口的垂直位置
    const iLeft = (window.screen.availWidth - width) / 2; // 获得窗口的水平位置

    // 寻找多多客户端
    let postURL = '/pc/shop/im/callToTalk';
    if (this.props.callToBusiness) {
      postURL = '/pc/shop/im/callToBusiness';
    }
    $.post(postURL, { uid: userId }, function (data) {
      if (data) {
        if (data.status.code == 1022) {
          // 区分蘑菇街和美丽说小店登陆
          let loginUrl = 'https://account.meilishuo.com/user/login';
          if (!window.isMeilishuo) {
            loginUrl = '/pc/user/login?refer=' + encodeURIComponent('/pc/shopadmin/help/callCustomer?id=' + this.props.callid);
          }
          window.location.href = loginUrl;
          return;
        }
        if (data.status.code == 1001) {
          // 启动多多客户端
          const result = data.result;
          if (result && result.url) {
            location.href = result.url;
            Modal.tip(result.failedMessage, () => {}, 2000);
            // TODO: 处理唤醒失败跳下载页的情况
            // openClient(result.url, (success) => {
            //   if (!success) {
            //     Modal.tip('如果您未安装windows版花朵，请在美丽说小店后台的客服管理下载花朵！');
            //   }
            // });
          }
        } else {
          // 启动网页聊天
          Modal.tip(data.status.msg, () => {
            if (!window.isMeilishuo) {
              const params = `width=${width}, height=${height}, top=${iTop}, left=${iLeft}, titlebar=no, toolbar=no, status=no, location=no`;
              window.open(url, 'newwindow', params);
            }
          }, 2000);
        }
      }
    }, 'json');
  },

  render() {
    return (
      <a className={`xd-teamtalk ${this.props.className || ''}`} href="javascript:" onClick={this.contactViaTT}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = TeamTalk;
