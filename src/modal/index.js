import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';
import styles from './style/index';
import './style/index.less';

class ModalController extends Component {

    static modals = [];
    static prefix = 'mc-';
    static instance = null;
    static layoutStyle = {};
    static v = '0.2.0';

    /**
     * Open a modal
     * @param {object} options Modal设置（title、class、id等）
     */
    static open (options) {
        const defaultOptions = {
            // options for modal
            title: null,
            body: null,
            footer: null,
            className: null,
            callback: null,
            beforeClose: null,
            // options for modal controller
            isAbsolute: false,
            showMask: true,
            closeByMask: false
        };

        if (options.classes !== undefined) {
            // console.log('Option `classes` is deprecated, use className instead');
            options.className = options.classes;
            delete options.classes;
        }

        options = _.extend(defaultOptions, options);

        if (options.id !== undefined) {
            options.id = String(options.id);
            if (ModalController._findComponent(options.id) !== null) {
                console.log('A modal with ID %s has existed', options.id);
                return null;
            }
        } else {
            options.id = _.uniqueId('ReactModal-');
        }

        ModalController.modals.push(options);
        ModalController._forceUpdate();

        return options.id;
    };

    /**
     * Close a modal
     * @param {string} [id] - Modal ID (optional)
     * @return {ModalController}
     */
    static close (id) {
        let index = -1;

        if (_.isString(id)) {
            index = _.findIndex(ModalController.modals, function (modal) {
                return modal.id === id;
            });

            if (index < 0) {
                // console.log('modal with ID %s not found', id);
                return ModalController;
            }
        }

        const modalComponent = ModalController._findComponent(id);
        if (modalComponent && modalComponent.handleBeforeClose()) {
            ModalController.modals.splice(index, 1);
            ModalController._forceUpdate();
        }
        return ModalController;
    };

    static closeAll () {
        const activeComponent = ModalController._activeComponent();
        if (activeComponent && activeComponent.handleBeforeClose()) {
            ModalController.modals = [];
            ModalController._forceUpdate();
        }

        return ModalController;
    };

    /**
     * Open a alert modal
     * @param {string} msg
     * @param {function} [callback=Modal.close]
     * @param {object} [options] Modal设置（title、class、id等）
     */
    static alert (msg, callback, options) {
        if (!_.isFunction(callback)) {
            options = options || callback;
            callback = ModalController.close;
        }

        const defaultOptions = {
            body: (
                <div style={styles.alertWrap}>
                    <div style={styles.alertContent}>{msg}</div>
                </div>
            ),
            footer: (
                <div>
                    <button className={ModalController.prefix + 'btn primary'} style={{ marginRight: 0 }} onClick={callback} > {options && options.confirm ? options.confirm : '确定'}</button>
                </div>
            ),
            closeByMask: false,
            callback: callback
        };

        options = _.extend(defaultOptions, options);

        return ModalController.open(options);
    };

    /**
     * Open a confirm modal
     * @param {string} msg
     * @param {function} [callback=_.noop]
     * @param {object} [options] Modal设置（title、class、id等）
     */
    static confirm (msg, callback, options) {
        if (!_.isFunction(callback)) {
            options = options || callback;
            callback = _.noop;
        }

        const defaultOptions = {
            body: (
                <div style={styles.alertWrap}>
                    <div style={styles.alertContent}>{msg}</div>
                </div>
            ),
            footer: (
                <div>
                    <button className={ModalController.prefix + 'btn'} onClick={ModalController.close}>取消
                    </button>
                    <button className={ModalController.prefix + 'btn primary'} style={{ marginRight: 0 }} onClick={callback}>{(options && options.confirm) || '确定'}
                    </button>
                </div>
            ),
            closeByMask: false,
            callback: callback
        };

        options = _.extend(defaultOptions, options);

        return ModalController.open(options);
    }
    /**
     * Open a tip modal
     * @param {string} msg
     * @param {function|int} [callback]
     * @param {int|object} [delay=800] time before the tip dismisses
     * @param {object} [options] Modal设置（title、class、id等）
     */
    static tip (msg, callback, delay, options) {
        if (!_.isFunction(callback)) {
            options = delay;
            delay = callback;
            callback = _.noop;
        }
        if (!_.isNumber(delay)) {
            options = delay;
            delay = 800;
        }

        const defaultOptions = {
            body: (
                <div style={styles.alertWrap}>{msg}</div>
            ),
            closeByMask: false
        };

        options = _.extend(defaultOptions, options);

        const modalId = ModalController.open(options);

        callback = _.compose(callback, ModalController.close.bind(ModalController, modalId));

        if (delay > 0) {
            setTimeout(function () {
                callback();
            }, delay);
        }

        return modalId;
    };

    static update (id) {
        const modalComponent = ModalController._findComponent(id);

        if (!modalComponent) {
            return;
        }

        modalComponent.forceUpdate();
    };

    static updateTitle (title, id) {
        var modalComponent = id ? ModalController._findComponent(id) : ModalController._activeComponent();
        if (!modalComponent) {
            return;
        }

        modalComponent.setState({
            title: title
        });
    };

    static noConflict () {
        window.ReactModal = _previousReactModal;

        return ModalController;
    };

    static withPrefix (prefix) {
        if (ModalController.prefix !== prefix) {
            ModalController.prefix = prefix;
            ModalController._forceUpdate();
        }

        return ModalController;
    };
    // Private method
    static _activeComponent () {
        let activeID;
        try {
            activeID = _.last(ModalController.modals).id;
        } catch (e) {
            return null;
        }

        return ModalController.instance.refs[activeID] || null;
    };

    static _findComponent (id) {
        if (ModalController.instance === null) {
            return null;
        }

        if (!_.isString(id)) {
            try {
                id = _.last(ModalController.modals).id;
            } catch (e) {
                return null;
            }
        }

        return ModalController.instance.refs[id] || null;
    };

    static _forceUpdate () {
        if (ModalController.instance === null) {
            return;
        }

        ModalController.instance.forceUpdate();
    }

    constructor (props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {
        ModalController.instance = this;
    }

    componentWillUnmount () {
        ModalController.instance = null;
    }

    /*componentWillUpdate() {
     console.time('ModalController render');
     },

     componentDidUpdate() {
     console.timeEnd('ModalController render');
     },*/

    render () {
        ModalController.layoutStyle = {};

        const modals = ModalController.modals;
        const activeModal = _.last(modals);
        const modalsCount = modals.length;

        let modalWrapStyle = _.extend({}, styles.modalWrap);
        let modalMaskStyle = _.extend({}, styles.modalMask);

        if (modalsCount > 0) {
            modalWrapStyle.display = 'block';

            if (!activeModal.showMask) {
                _.extend(modalMaskStyle, styles.modalWithoutMask);
            }

            if (activeModal.isAbsolute) {
                modalWrapStyle.position = 'absolute';

                const scrollTop = window.pageYOffset || document.body.scrollTop;
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                ModalController.layoutStyle.top = scrollTop + (windowHeight / 2);
            }
        }

        return (
            <div className={ModalController.prefix + 'modal-wrap'} style={modalWrapStyle}>

                <div style={modalMaskStyle} onClick={this.handleMaskClick}></div>

                {modals.map(function (modal) {
                    return (
                        <Modal key={modal.id} ref={modal.id} data={modal} active={modal === activeModal} />
                    );
                }, this)}
            </div>
        );
    }

    handleMaskClick () {
        const activeModal = _.last(ModalController.modals);
        if (!activeModal.closeByMask) {
            return;
        }

        ModalController.closeAll();
    }
}

class Modal extends Component {
    static defaultProps = {
        active: false
    };
    constructor (props) {
        super(props);
        const modal = this.props.data;
        this.state = {
            title: modal.title,
            body: modal.body,
            footer: modal.footer,
            style: {},
            width: 0,
            height: 0
        };
    }
    componentDidMount () {
        this.locate();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.active !== this.props.active) {
            return true;
        }

        let state = this.state;
        if (nextState.title !== state.title
            || nextState.width !== state.width
            || nextState.height !== state.height) {
            return true;
        }

        if (!_.isEqual(ModalController.layoutStyle, this.layoutStyle)) {
            return true;
        }

        return false;
    }

    componentDidUpdate () {
        this.locate();
    }

    render () {
        const prefix = ModalController.prefix;

        const { id, className } = this.props.data;
        const { title, body, footer, style } = this.state;

        this.layoutStyle = ModalController.layoutStyle;

        let modalStyle = _.extend({}, styles.modal, ModalController.layoutStyle, style);

        if (this.props.active) {
            _.extend(modalStyle, styles.modalActive);
        }

        const modalClassName = _.compact([prefix + 'modal', className]).join(' ');

        return (
            <div id={id} className={modalClassName} style={modalStyle}>
                {title && (
                    <div className={prefix + 'modal-header'} style={styles.modalHeader}>
                        <h2 className={prefix + 'title'} style={styles.modalTitle}>{title}</h2>
                        <a className={prefix + 'modal-close'} style={styles.modalClose} href='javascript:' onClick={this.close.bind(this)}>×</a>
                    </div>
                )}

                <div className={prefix + 'modal-body'} style={styles.modalBody}>{body}</div>
                {footer && (
                    <div className={prefix + 'modal-footer'} style={styles.modalFooter}>{footer}</div>
                )}
            </div>
        );
    }

    locate () {
        // console.time('Modal ' + this.props.data.id + ' locate');

        const modalDOM = ReactDom.findDOMNode(this);
        const height = modalDOM.offsetHeight;
        const width = modalDOM.offsetWidth;
        const state = this.state;

        if (Math.abs(width - state.width) > 3 || Math.abs(height - state.height) > 3) {
            // console.log('Modal ' + this.props.data.id + ' need relocate');
            let marginTop = height / -2;
            if (marginTop + ModalController.layoutStyle.top < 0) {
                marginTop = -ModalController.layoutStyle.top;
            }
            // @woer 弹出层高度太大的时候兼容
            // console.log(height + "弹出层高度");
            // console.log($(window).height() + "屏幕高度");
            // console.log(marginTop);

            // var screenHeight = $(window).height();
            // if(!ModalController.layoutStyle.top){
            //   (height > screenHeight) && (marginTop = $(window).height()/-2)
            // }

            this.setState({
                width: width,
                height: height,
                style: {
                    marginTop: marginTop,
                    marginLeft: width / -2
                    // maxHeight: screenHeight,
                    // overflowY: 'scroll'
                }
            });
        }
        // console.timeEnd('Modal ' + this.props.data.id + ' locate');
    }

    close () {
        ModalController.close(this.props.data.id);
    }

    handleBeforeClose () {
        var modal = this.props.data;
        return !(modal.beforeClose && modal.beforeClose() === false);
    }
}

const _previousReactModal = window.ReactModal;

if (_previousReactModal === undefined || _previousReactModal !== ModalController) {
    window.ReactModal = ModalController;

    const modalContainer = document.createElement('div');

    document.body.appendChild(modalContainer);
    ReactDom.render(<ModalController />, modalContainer);
}

export default ModalController;
