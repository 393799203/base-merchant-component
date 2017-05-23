import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Select from './Select';
import TreeNode from './TreeNode';
import { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from './strategies';
import './style/index.less';

export default class TreeSelect extends Component {
    static TreeNode = TreeNode;
    static SHOW_ALL = SHOW_ALL;
    static SHOW_PARENT = SHOW_PARENT;
    static SHOW_CHILD = SHOW_CHILD;
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.oneOf(['default', 'large', 'small']),
        notFoundContent: PropTypes.oneOfType([PropTypes.ReactNode, null]),
        showSearch: PropTypes.bool,
        allowClear: PropTypes.bool,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        placeholder: PropTypes.string,
        dropdownClassName: PropTypes.string,
        dropdownStyle: PropTypes.object,
        dropdownMenuStyle: PropTypes.object,
        onSearch: PropTypes.func,
        filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        locale: PropTypes.object
    }
    static defaultProps = {
        prefixCls: 'mc-tree-select',
        showSearch: false,
        dropdownClassName: 'mc-select-tree-dropdown'
    };
    getLocale () {
        const { Locale, defaultLocale } = this.context;
        const localeFromContext = Locale && Locale[this];
        const localeFromProps = this.props.locale || {};
        return {
            ...defaultLocale,
            ...(localeFromContext || {}),
            ...localeFromProps
        };
    }
    render () {
        const locale = this.getLocale();
        const {
            prefixCls,
            className,
            size,
            notFoundContent = locale.notFoundContent,
            dropdownStyle,
            ...restProps
        } = this.props;

        const cls = classNames({
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small'
        }, className);

        let checkable = restProps.treeCheckable;
        if (checkable) {
            checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
        }

        return (
            <Select
                {...restProps}
                prefixCls={prefixCls}
                className={cls}
                dropdownStyle={{ maxHeight: '100vh', overflow: 'auto', ...dropdownStyle }}
                treeCheckable={checkable}
                notFoundContent={notFoundContent}
            />
        );
    }
}
