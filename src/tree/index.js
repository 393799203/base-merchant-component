import React, { PropTypes } from 'react';
import classNames from 'classnames';
import McTree from './Tree';
import TreeNode from './TreeNode';
import './style/index.less';

McTree.TreeNode = TreeNode;
export default class Tree extends React.Component {
    static TreeNode = TreeNode;
    render () {
        const props = this.props;
        const { prefixCls, className, showLine } = props;
        const checkable = props.checkable;
        const classString = classNames({
            [`${prefixCls}-show-line`]: !!showLine
        }, className);
        return (
            <McTree
                {...props}
                className={classString}
                checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
            >
                { this.props.children }
            </McTree>
        );
    }
  }
Tree.defaultProps = {
    prefixCls: 'mc-tree',
    checkable: false,
    showIcon: false
};

Tree.propTypes = {
    className: PropTypes.string,
    /** 是否支持多选 */
    multiple: PropTypes.bool,
    /** 是否自动展开父节点 */
    autoExpandParent: PropTypes.bool,
    /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
    checkStrictly: PropTypes.bool,
    /** 是否支持选中 */
    checkable: PropTypes.bool,
    /** 默认展开所有树节点 */
    defaultExpandAll: PropTypes.bool,
    /** 默认展开指定的树节点 */
    defaultExpandedKeys: PropTypes.array,
    /** （受控）展开指定的树节点 */
    expandedKeys: PropTypes.array,
    /** （受控）选中复选框的树节点 */
    checkedKeys: PropTypes.oneOfType([PropTypes.array, { checked: PropTypes.array, halfChecked: PropTypes.array }]),
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys: PropTypes.array,
    /** （受控）设置选中的树节点 */
    selectedKeys: PropTypes.array,
    /** 默认选中的树节点 */
    defaultSelectedKeys: PropTypes.array,
    /** 展开/收起节点时触发 */
    onExpand: PropTypes.func,
    /** 点击复选框触发 */
    onCheck: PropTypes.func,
    /** 点击树节点触发 */
    onSelect: PropTypes.func,
    /** filter some AntTreeNodes as you need. it should return true */
    filterAntTreeNode: PropTypes.func,
    /** 异步加载数据 */
    loadData: PropTypes.func,
    /** 响应右键点击 */
    onRightClick: PropTypes.func,
    /** 设置节点可拖拽（IE>8）*/
    draggable: PropTypes.bool,
    /** 开始拖拽时调用 */
    onDragStart: PropTypes.func,
    /** dragenter 触发时调用 */
    onDragEnter: PropTypes.func,
    /** dragover 触发时调用 */
    onDragOver: PropTypes.func,
    /** dragleave 触发时调用 */
    onDragLeave: PropTypes.func,
    /** drop 触发时调用 */
    onDrop: PropTypes.func,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
    filterTreeNode: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
