import React from 'react';
import Notification from 'rc-notification';
import './style/index.less'

let notificationInstance;

function getNotificationInstance(args) {
    var style;
	if (notificationInstance) {  notificationInstance.destroy(); }
    if (args.position == 'right') {
        style = { top: '50px', right:  '0' }
    } else if ( args.position == 'custom' ) {
        style = args.style || {}
    } else {
        style = { top: '40%', left:  '50%', marginLeft: '-150px' }
    }
    notificationInstance = Notification.newInstance({
    	prefixCls: 'mc-notification',
    	style: style
    });
    return notificationInstance;
}

function notice(args) {
  	let duration;
  	if (args.duration === undefined) {
    	duration = 3;
  	} else {
    	duration = args.duration / 1000;
  	}

	let prefixCls = 'mc-notification-notice-content-';
  	getNotificationInstance(args).notice({
        content: <div>
          		<div className={prefixCls + 'description'}>{args.message}</div>
        	</div>,
        duration: duration,
        closable: true,
        style: {}
  	});
	
}

const api = {
  	open (args) {
    	notice(args);
  	}
};

export default api;