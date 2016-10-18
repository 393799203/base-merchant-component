import React, { Component, PropTypes } from 'react';
import Modal from '@mogu/up-components/lib/Modal/Modal';
import './style/index.less';

function noop(){}

const Confirm = React.createClass({
    getDefaultProps(){
        return {
            prefixCls : 'confirm-modal'
        }
    },
    close(){
        this.cancelCb();
        this.refs.forConfirm.close();
        return false;
    },
    ensure( ensureCb, ensureParam ,cancelCb, cancelParam){
        this.refs.forConfirm.open();

        if( typeof ensureCb === 'function' ){
            this.ensureCb = ensureCb.bind( null , ensureParam );
        }else{
            this.ensureCb = noop;
        }

        if( typeof cancelCb === 'function' ){
            this.cancelCb = cancelCb.bind( null , cancelParam );
        }else{
            this.cancelCb = noop;
        }
    },
    confirm : function(){
        let res = this.ensureCb();
        if( typeof res === 'undefined' || res ){
            this.refs.forConfirm.close();
        }
    },
    render(){
        let {title = 'Confirm', msg='Confirm msg' , prefixCls }= this.props;
        let { ensureText , cancelText } = this.props.btnTexts || { ensureText : '确定', cancelText : '取消'};

        return(
            <Modal ref="forConfirm" prefixCls={prefixCls}>
                <div className={ `${ prefixCls }-header` }>
                    <div className={ `${ prefixCls }-title` }>{ title }</div>
                    <a className={ `${ prefixCls }-modal-close`}>
                        <span className={`${ prefixCls }-close-x`} onClick={ this.close }>x</span>
                    </a>
                </div>
                <div className={ `${ prefixCls }-body` }>
                    { this.props.children || msg}
                </div>
                <div className={ `${ prefixCls }-footer` }>
                    <button type="button" className="mc-btn primary" onClick={ this.confirm }>{ ensureText }</button>
                    <button type="button" className="mc-btn " onClick={ this.close }>{ cancelText }</button>
                </div>
            </Modal>
        );
    }
});

Confirm.propTypes = {
    title : PropTypes.string,
    btnTexts : PropTypes.object
};

module.exports = Confirm;