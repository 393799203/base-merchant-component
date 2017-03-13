import React, { Component, PropTypes } from 'react';
import './style/index.less';

export default class Button extends Component {
    static defaultProps = {
        value: '确定',
        className: '',
        handleChange: null,
        disabled: false,
        isLoading: false
    };
    static propTypes = {
        children: PropTypes.node,
        value: PropTypes.string,
        className: PropTypes.string,
        handleChange: PropTypes.func,
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool
    };
    constructor (props) {
        super(props);
        this.state = {
            currentClass: 'btn ',
            disabled: props.disabled,
            isLoading: props.isLoading
        };
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
                            <img className='ml-5' src='//s17.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif' width='12' height='12' alt='加载中' />
                        </div>
                    :
                        (this.props.children || value)
                }
            </div>
        );
    }
}
