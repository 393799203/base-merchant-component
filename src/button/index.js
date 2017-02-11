import React, { Component, PropTypes } from 'react';
import './style/index.less';
import '../_theme/less/button.less';

export default class Button extends Component {
    static defaultProps = {
        value: '确定',
        className: '',
        handleChange: null,
        disabled: false,
        isLoading: false
    };
    static propTypes = {
        value: PropTypes.string,
        className: PropTypes.string,
        handleChange: PropTypes.func,
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool
    };
    constructor (props) {
        super(props);
        this.state = {
            currentClass: 'xd-btn',
            disabled: props.disabled,
            isLoading: props.isLoading
        };
    }
    componentWillReceiveProps (nextProps) {
        const state = this.state;
        if ('disabled' in nextProps) {
            state.disabled = nextProps.disabled;
        }
        if ('isLoading' in nextProps) {
            state.isLoading = nextProps.isLoading;
        }
        this.setState(state);
    }
    handleChange (e) {
        let { currentClass } = this.state;
        currentClass += ' clicked ';
        this.setState({
            currentClass
        });
        if (typeof this.props.handleChange === 'function') {
            this.props.handleChange(e);
        }
    }
    render () {
        const { value, className = '', disabled, isLoading, ...other } = this.props;
        let { currentClass } = this.state;
        if (disabled) {
            currentClass += ' disabled ';
        }
        return (
            <div className={currentClass + className} onClick={e => this.handleChange(e)} {...other} >
                {
                    isLoading
                    ?
                        <div>
                            加载中
                            <img src='//s17.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif' width='12' height='12' alt='加载中' />
                        </div>
                    :
                        value
                }
            </div>
        );
    }
}
