import React , { Component , PropTypes } from 'react';
import Modal from '@mogu/up-components/lib/Modal/Modal';
import './style/index.less';

function noop(){}

const UpModal = React.createClass({
    getDefaultProps(){
        return {
            prefixCls : 'mc-modal'
        }
    },
    close(){
        let callback = this.props.onClose;
        if( typeof callback === 'function' ){
            callback();
        }
        this.refs.forModal.close();
    },
    open(){
        this.refs.forModal.open();
        let duration = this.props.duration;
        if ( duration && typeof( +duration ) == 'number' ) {
            setTimeout( () => {
                this.close();
            }, duration )
        }
    },
    render(){
        let {title , prefixCls, size = 'normal' }= this.props;
        return(
            <Modal ref="forModal" prefixCls={`${ prefixCls }`} size={size} >
                <div>
                    {
                        title ?
                        <div className={ `${ prefixCls }-header clearfix` }>
                            <div className={ `${ prefixCls }-title` }>{ title }</div>
                            <a className={ `${ prefixCls }-close`}>
                                <span className={`${ prefixCls }-close-x`} onClick={ () => this.close() }>
                                    ×
                                </span>
                            </a>
                        </div>
                        : null
                    }
                </div>
                <div className={ `${ prefixCls }-body` }>
                    { this.props.children }
                </div>
            </Modal>
        );
    }
});

UpModal.propTypes = {
    title : PropTypes.string,
    callback : PropTypes.func
};

module.exports = UpModal;