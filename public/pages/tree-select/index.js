
import React, { Component } from 'react';
import TreeSelect from 'source_path/treeSelect';
import Readme from './README.md';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);
const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};
generateList(gData);
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ label: `leaf ${key}-${i}`, name: `leaf ${key}-${i}`, key: `${key}-${i}`, value: `${key}-${i}` });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach((item) => {
      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
        curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  const loop = (data) => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}
const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  children: [{
    label: 'Child Node3',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: 'Child Node4',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: 'Child Node5',
    value: '0-1-2',
    key: '0-1-2',
  }],
}];
const TreeNode = TreeSelect.TreeNode;

class MulipleDemo extends Component {
  state = {
    value: ['0-0-0'],
    treeData:treeData
  }
  onChange = (value) => {
    this.setState({ value });
  }
  onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({ treeData });
        resolve();
      }, 1000);
    });
  }
  render() {
    const tProps = {
      treeData:this.state.treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}
class MulipleDemo2 extends Component {
  state = {
    value: [{
      label:"Child Node1",
      value:'0-0-0'
    }],
    treeData:treeData
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    const tProps = {
      treeData:this.state.treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      treeCheckStrictly:true,
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}
class MulipleDemo3 extends Component {
  state = {
    value: [{
      label:'Child Node1',
      value:'0-0-0'
    }],
    treeData:treeData
  }
  onChange = (value) => {
    this.setState({ value });
  }
  onLoadData = (treeNode) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({ treeData });
        resolve();
      }, 1000);
    });
  }
  render() {
    const tProps = {
      treeData:this.state.treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      treeCheckStrictly:true,
      loadData: this.onLoadData,
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}
class TreeDataDemo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    return (
      <TreeSelect
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
      />
    );
  }
}

class BaseDemo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value,label) => {
    console.log(value);
    this.setState({ value });
  }
  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}



export default class TreeSelectView extends React.Component {
    render () {
      return (
         <div>
            <h2 className='p-b-5 b-b dashed'>
                  树选择 - tree-select
              <a href='mactt://message/uname/qianxin' style={{ border: 'none', boxShadow: 'none' }} className="m-l-lg btn-info-border btn">
                  <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
              </a>
              </h2>

                    <h3>
                        1. 示例
                    </h3>
              <table className='text-left'>
                <tbody>
                <tr>
                  <td>
                    <h4>基本</h4>
                    <BaseDemo />
                    </td>
                  <td>
                    <h4>从数据直接生成</h4>
                    <TreeDataDemo/>
                  </td>
                  
                </tr>
                <tr><td>
                   <h4>多选</h4>
                  <MulipleDemo />
                  </td><td>
                   <h4>多选+父子节点不关联</h4>
                    <MulipleDemo2 />
                  </td></tr><tr><td>
                   <h4>多选+异步数据</h4>
                  <MulipleDemo3 />
                  </td></tr>
                </tbody>

              </table>
                        <div dangerouslySetInnerHTML={{ __html: Readme }}></div>

        </div>
      )
    }
}
