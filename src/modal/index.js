import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from './myutil.js';
import styles from './style/index';
import './style/index.less';

class Modal extends Component {
    static optionArr = [];
    static instance = null;
    static v = '1.0.0';

    /**
     * Open a modal
     * @param {object} params Modal设置（title、class、id等）
     */
    static open (params) {
        // 组件默认选项
        const defaultOption = {
            // options for modalComponent
            title: null,
            body: null,
            footer: null,
            className: null,
            callback: null,
            beforeClose: null,
            // options for modal controller
            showMask: true,
            closeByMask: false,
            theme: 'primary'
        };

        let option = params;
        // option = _.extend(defaultOption, option);
        option = { ...defaultOption, ...option };

        // 生成option.id
        if (option.id) {
            option.id = String(option.id);
            // 根据id查找, 如果找不到,返回最后一项?? 奇怪,没看懂
            if (Modal.privateFindComponent(option.id)) {
                // console.log('A modal with ID %s has existed', options.id);
                return null;
            }
        } else {
            option.id = _.uniqueId('ReactModal-');
        }

        Modal.optionArr.push(option);
        Modal.privateForceUpdate();

        return option.id;
    }

    /**
     * Open a alert modal
     * @param {string} msg
     * @param {function} [callback=Modal.close] 单击确定时的回调
     * @param {object} [params] Modal设置（title、class、id等）
     */
    static alert (msg, callback, params) {
        let option = params;
        let cb = callback;

        if (!_.isFunction(cb)) {
            option = option || cb;
            cb = Modal.close;
        }

        Modal.confirm(msg, cb, option, 'alert');
    }

    /**
     * Open a confirm modal
     * @param {string} msg
     * @param {function} [callback=_.noop] 单击确定时的回调
     * @param {object} [params] Modal设置（title、class、id等）
     * @param {type} is show cancel
     */
    static confirm (msg, callback, params, type) {
        let option = params;
        let cb = callback;
        const isAlert = type === 'alert';
        let okText = '确定';
        let noText = '取消';


        if (!_.isFunction(cb)) {
            option = option || cb;
            cb = _.noop;
        }
        if (option) {
            if (option.ensureText) {
                okText = option.ensureText;
            }
            if (option.cancelText) {
                noText = option.cancelText;
            }
        }

        const theme = (option && option.theme) || 'primary';

        const defaultOption = {
            body: (
                <div style={styles.alertWrap}>
                    <div style={styles.alertContent}>{msg}</div>
                </div>
            ),
            footer: (
                <div>
                    { isAlert ?
                        '' : <button className={`btn btn-sm btn-${theme}-border m-r modal-btn`} onClick={Modal.close}>{noText}</button>
                    }
                    <button className={`btn btn-sm btn-${theme} modal-btn`} onClick={cb}>{okText}</button>
                </div>
            ),
            closeByMask: false,
            callback: cb
        };

        // option = _.extend(defaultOption, option);
        option = { ...defaultOption, ...option };
        return Modal.open(option);
    }

    /**
     * Open a tip modal
     * @param {string} msg
     * @param {function|int} [callback]
     * @param {int|object} [delays=800] time before the tip dismisses
     * @param {object} [params] Modal设置（title、class、id等）
     */
    static tip (msg, callback, delays, params) {
        let option = params;
        let cb = callback;
        let delay = delays;

        if (!_.isFunction(cb)) {
            option = delay;
            delay = cb;
            cb = _.noop;
        }
        if (!_.isNumber(delay)) {
            option = delay;
            delay = 800;
        }

        const defaultOption = {
            body: (
                <div style={styles.alertWrap}>{msg}</div>
            ),
            closeByMask: false
        };

        // option = _.extend(defaultOption, option);
        option = { ...defaultOption, ...option };
        const modalId = Modal.open(option);

        // cb = _.compose(cb, Modal.close.bind(Modal, modalId));
        // cb = _.compose(cb, Modal.close);

        if (delay > 0) {
            setTimeout(() => { cb(); Modal.close(modalId); }, delay);
        }

        return modalId;
    }

    /**
     * Close a modal
     * @param {string} [id] - Modal ID (optional)
     * @return {Modal}
     */
    static close (id) {
        let index = -1;
        if (typeof id === 'string') {
            Modal.optionArr.forEach((modal, i) => {
                if (modal.id === id) {
                    index = i;
                }
            });

            if (index < 0) {
                // console.log('modal with ID %s not found', id);
                return Modal;
            }
        }

        const modalComponent = Modal.privateFindComponent(id);
        if (modalComponent && modalComponent.handleBeforeClose()) {
            // console.log('真实的删除');
            // Modal.optionArr[index].beforeClose();
            Modal.optionArr.splice(index, 1);
            Modal.privateForceUpdate();
        }
        return Modal;
    }

    static closeAll () {
        const activeComponent = Modal.privateActiveComponent();
        if (activeComponent && activeComponent.handleBeforeClose()) {
            Modal.optionArr = [];
            Modal.privateForceUpdate();
        }
        return Modal;
    }

    /**
     * 根据id找到ModalComponent实例, 并更新。如果id不存在,则更新最后一个ModalComponent实例
     * @param id
     */
    static update (id) {
        const modalComponent = Modal.privateFindComponent(id);
        if (modalComponent) {
            modalComponent.forceUpdate();   // 相当于 Modal.instance.refs[id].foreUpdate();
        }
    }

    /**
     * 根据id更新 title
     * @param title
     * @param id
     */
    static updateTitle (title, id) {
        const modalComponent = Modal.privateFindComponent(id);
        if (!modalComponent) {
            return;
        }
        modalComponent.setState({ title });
    }

    /**
     * 根据id更新 body
     * @param body
     * @param id
     */
    static updateBody (body, id) {
        const modalComponent = Modal.privateFindComponent(id);
        if (!modalComponent) {
            return;
        }

        modalComponent.setState({ body });
    }

    /**
     * 根据id更新 footer
     * @param footer
     * @param id
     */
    static updateFooter (footer, id) {
        const modalComponent = Modal.privateFindComponent(id);
        if (!modalComponent) {
            return;
        }

        modalComponent.setState({ footer });
    }

    // 私有方法, 查找id相对应的ModalComponent实例。如果id不存在,返回最后一个ModalComponent实例
    static privateFindComponent (Id) {
        let id = Id;

        // 根据id查找对应的react实例
        if (!_.isString(id)) {
            try {
                id = _.last(Modal.optionArr).id;
            } catch (e) {
                return null;
            }
        }

        if (Modal.instance === null) {
            return null;
        }
        return Modal.instance.refs[id] || null;
    }

    static privateActiveComponent () {
        return Modal.privateFindComponent();
    }

    // 私有方法, 更新instance
    static privateForceUpdate () {
        if (Modal.instance) {
            Modal.instance.forceUpdate();
        }
    }

    constructor (props) {
        super(props);
        this.state = { };
    }

    componentDidMount () {
        Modal.instance = this;
    }

    componentWillUnmount () {
        Modal.instance = null;
    }

    handleMaskClick () {
        const activeModal = _.last(Modal.optionArr);   // Modal.optionArr[Modal.optionArr.length-1];
        if (activeModal && activeModal.closeByMask) {
            Modal.closeAll();
        }
    }
    handleClose (e) {
        Modal.close(e.id);
    }
    render () {
        const options = Modal.optionArr;
        const activeModal = _.last(options);
        //
        // const modalWrapStyle = _.extend({}, styles.modalWrap);
        // const modalMaskStyle = _.extend({}, styles.modalMask);

        const modalWrapStyle = { ...styles.modalWrap };
        let modalMaskStyle = { ...styles.modalMask };
        const cls = styles.modalWithoutMask;

        if (options.length > 0) {
            modalWrapStyle.display = 'block';
            if (!activeModal.showMask) {
                // _.extend(modalMaskStyle, styles.modalWithoutMask);
                modalMaskStyle = { ...modalWrapStyle, ...cls };
            }
        }

        return (
            <div className={'mc-modal-wrap'} style={modalWrapStyle}>
                <div className={'mc-modal-mask'} style={modalMaskStyle} onClick={this.handleMaskClick} />

                { options.map((option) => {
                    return (
                        <ModalComponent
                            key={option.id}
                            ref={option.id}
                            data={option}
                            isActive={option === activeModal}
                            onClose={e => this.handleClose(e)}
                        />
                    );
                }) }
            </div>
        );
    }
}

class ModalComponent extends Component {
    static defaultProps = {
        isActive: false,
        onClose: null,
        data: {
            id: undefined,
            title: null,
            body: null,
            footer: null,
            className: null,
            callback: null,
            beforeClose: null
        }
    }

    static propTypes = {
        isActive: React.PropTypes.bool,
        onClose: React.PropTypes.func,
        data: React.PropTypes.object
    }

    constructor (props) {
        super(props);
        const modal = this.props.data;
        this.state = {
            title: modal.title,
            body: modal.body,
            footer: modal.footer
        };
    }

    componentDidMount () {
        const node = ReactDom.findDOMNode(this);
        node.focus();
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.isActive !== this.props.isActive) {
            return true;
        }
        const state = this.state;
        if (nextState.title !== state.title
            || nextState.body !== state.body
            || nextState.footer !== state.footer
        ) {
            return true;
        }

        return false;
    }
    componentWillUpdate () {

    }

    handleClose () {
        this.props.onClose({ id: this.props.data.id });
    }

    handleBeforeClose () {
        const modal = this.props.data;
        return !(modal.beforeClose && modal.beforeClose() === false);
    }

    render () {
        const { id, className } = this.props.data;
        const { title, body, footer } = this.state; // 之所以取state中的,是因为这几项内容会变化

        let modalStyle = styles.modal;
        const activeStyle = styles.modalActive;
        if (this.props.isActive) {
            modalStyle = { ...modalStyle, ...activeStyle };
            // _.extend(modalStyle, styles.modalActive);
        }

        const modalClassName = `mc-modal ${className}`;

        return (
            <div id={id} className={modalClassName} style={modalStyle} tabIndex='0'>
                {title && (
                    <div className='mc-modal-header' style={styles.modalHeader}>
                        <h2 className='mc-modal-title' style={styles.modalTitle}>{title}</h2>
                        <a className='mc-modal-close' style={styles.modalClose} href='javascript:' onClick={e => this.handleClose(e)}>×</a>
                    </div>
                )}

                <div className='mc-modal-body' style={styles.modalBody}>{body}</div>

                {footer && (
                    <div className='mc-modal-footer' style={styles.modalFooter}>{footer}</div>
                )}
            </div>
        );
    }
}

const previousReactModal = window.ReactModal;
// 保证页面上只有一个Modal 元素
if (previousReactModal === undefined || previousReactModal !== Modal) {
    window.ReactModal = Modal;

    const modalContainer = document.createElement('div');

    document.body.appendChild(modalContainer);
    ReactDom.render(<Modal />, modalContainer);
}

export default Modal;
