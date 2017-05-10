import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import './style/index.less';

const noop = () => {};
export default class Switch extends Component {
    constructor (props) {
        super(props);
        let checked = false;
        if ('checked' in props) {
            checked = !!props.checked;
        } else {
            checked = !!props.defaultChecked;
        }
        this.state = { checked };
    }
    componentWillReceiveProps (nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    setChecked (checked) {
        if (!('checked' in this.props)) {
            this.setState({
                checked
            });
        }
        this.props.onChange(checked);
    }

    toggle () {
        const checked = !this.state.checked;
        this.setChecked(checked);
    }

    handleKeyDown (e) {
        if (e.keyCode === 37) {
            this.setChecked(false);
        }
        if (e.keyCode === 39) {
            this.setChecked(true);
        }
    }

    handleMouseUp (e) {
        if (this.node) {
            this.node.blur();
        }
        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    }
    render () {
        const { prefixCls, disabled, size, checkedChildren, unCheckedChildren, ...restProps } = this.props;
        const checked = this.state.checked;
        const switchClassName = classNames({
            [`${prefixCls}-small`]: size === 'small',
            [prefixCls]: true,
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled
        });
        return (
            <span
                {...restProps}
                className={switchClassName}
                tabIndex={disabled ? -1 : 0}
                ref={(ref) => { this.node = ref; }}
                onKeyDown={(e) => { this.handleKeyDown(e); }}
                onClick={disabled ? noop : () => { this.toggle(); }}
                onMouseUp={(e) => { this.handleMouseUp(e); }}
            >
                <span className={`${prefixCls}-inner`}>
                    {checked ? checkedChildren : unCheckedChildren}
                </span>
            </span>
        );
    }
}
Switch.defaultProps = {
    prefixCls: 'mc-switch',
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop
};

Switch.propTypes = {
    prefixCls: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    className: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onMouseUp: PropTypes.func,
    onChange: PropTypes.any,
    checkedChildren: PropTypes.node,
    unCheckedChildren: PropTypes.node,
    disabled: PropTypes.bool
};
