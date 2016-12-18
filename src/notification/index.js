import React from 'react';
import Notification from 'rc-notification';
import './style/index.less';

let notificationInstance;

function getNotificationInstance (args, optType) {
    let style;
    if (notificationInstance) { notificationInstance.destroy(); }
    if (args.position === 'right') {
        style = { top: '50px', right: '0' };
    } else if (args.position === 'custom') {
        style = args.style || {};
    } else {
        style = { top: '40%', left: '50%', marginLeft: '-150px' };
    }
    const prefixCls = args.prefixCls || 'mc-notification';
    notificationInstance = Notification.newInstance({
        prefixCls: `${prefixCls}-${optType}`,
        style
    });
    return notificationInstance;
}

function notice (args, type) {
    const types = ['error', 'success', 'warn', 'info'];
    let duration;
    let optType;
    if (args.duration === undefined) {
        duration = 3;
    } else {
        duration = args.duration / 1000;
    }
    if (typeof args.type !== 'undefined' && types.indexOf(args.type) > -1) {
        optType = args.type;
    } else if (type === undefined || types.indexOf(type) === -1) {
        optType = 'error';
    } else {
        optType = type;
    }
    const prefixCls = args.prefixCls || 'mc-notification';
    getNotificationInstance(args, optType).notice({
        content: (<div>
            <div className={`${prefixCls}-description`}>
                <i className={`${prefixCls}-${optType}-icon`} />
                {args.message}
            </div>
        </div>),
        duration,
        closable: true,
        style: {}
    });
}

const api = {
    open (args) {
        notice(args);
    },
    error (args) {
        notice(args, 'error');
    },
    success (args) {
        notice(args, 'success');
    },
    info (args) {
        notice(args, 'info');
    },
    warn (args) {
        notice(args, 'warn');
    }
};

export default api;

