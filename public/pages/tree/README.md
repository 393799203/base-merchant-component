### 2. 使用说明

#### 2.1 参数说明

##### Tree props

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| multiple   | 支持点选多个节点（节点本身） | boolean       |     |   false|
| checkable   | 节点前添加 Checkbox 复选框	   | boolean		       |     |   false|
| defaultExpandAll   |   默认展开所有树节点		    | boolean      | -    | false|
| defaultExpandedKeys       | 默认展开指定的树节点	  | string[]	    | -    |  []   |
| expandedKeys  | （受控）展开指定的树节点			    | string[]	  | -  | []  |
| autoExpandParent     | 是否自动展开父节点	  | boolean | - |  true | 
| defaultCheckedKeys     | 默认选中复选框的树节点	  | string[] | - |  []] | 
| checkedKeys     | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联 | string[] \ {checked: string[], halfChecked: string[]}		 | - |  [] | 
| checkStrictly     | checkable状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | - |  false | 
| defaultSelectedKeys     | 默认选中的树节点	 | string[]	 | - |  [] | 
| selectedKeys     | （受控）设置选中的树节点	 | string[] | - |  - | 
| onExpand     | 展开/收起节点时触发	 | function(expandedKeys, {expanded: bool, node}) | - |  - | 
| onCheck     | 点击复选框触发	 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) | - |  - | 
| onSelect     | 点击树节点触发	 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | - |  - | 
| filterTreeNode     | 按需筛选树节点（高亮），返回true	 | function(node)	 | - |  - | 
| loadData     | 异步加载数据	 | function(node)	 | - |  - | 
| onRightClick     | 响应右键点击 | function({event, node})	 | - |  - | 
| draggable     | 设置节点可拖拽（IE>8） | boolean | - |  false | 
| onDragStart     | 开始拖拽时调用 | function({event, node}) | - |  - | 
| onDragEnter     | dragenter 触发时调用 | function({event, node, expandedKeys})	 | - |  - | 
| onDragOver     | dragover 触发时调用 | function({event, node})	 | - |  - | 
| onDragLeave     | dragleave 触发时调用 | function({event, node})	 | - |  - | 
| onDragEnd     | dragend 触发时调用 | function({event, node})	 | - |  - | 
| onDrop     | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys})	 | - |  - | 
| showLine     | 是否展示连接线 | boolean | - |  false | 
| showIcon     | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | - |  false | 

##### TreeNode props

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| disabled   | 禁掉响应    | boolean       |     |   false  |
| disableCheckbox   | 禁掉 checkbox    | boolean	       |     |   false  |
| title   | 标题		    | string\ReactNode	      | -    |  '---'   |
| key       | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！	  | string    | -    |  内部计算出的节点位置  |
| isLeaf  | 设置为叶子节点		    | boolean  | -  | false |


#### 2.2 使用示例
##### 基本
```

import Tree from '@meili/base-merchant-component/lib/sliderbar';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  render() {
    return (
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}
```
##### 拖拽
```
import Tree from '@meili/base-merchant-component/lib/sliderbar';
const TreeNode = Tree.TreeNode;

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

class Demo extends React.Component {
  state = {
    gData,
    expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
  }
  onDragEnter = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }
  onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      ar.splice(i, 0, dragObj);
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    }
    this.setState({
      gData: data,
    });
  }
  render() {
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    );
  }
}
```
##### 可搜索
```
import Tree from '@meili/base-merchant-component/lib/sliderbar';

const TreeNode = Tree.TreeNode;

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

class SearchTree extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
  }
  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.key.indexOf(value) > -1) {
        return getParentKey(item.key, gData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }
  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data => data.map((item) => {
      const index = item.key.search(searchValue);
      const beforeStr = item.key.substr(0, index);
      const afterStr = item.key.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.key}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} />;
    });
    return (
      <div>
        <Search style={{ width: 300 }} placeholder="Search" onChange={this.onChange} />
        <Tree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop(gData)}
        </Tree>
      </div>
    );
  }
}

```
##### 连接线

```
import Tree from '@meili/base-merchant-component/lib/sliderbar';
const TreeNode = Tree.TreeNode;

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  render() {
    return (
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title="leaf" key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}

```
##### 异步数据加载

```
import Tree from '@meili/base-merchant-component/lib/sliderbar';
const TreeNode = Tree.TreeNode;

function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
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

class Demo extends React.Component {
  state = {
    treeData: [],
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        treeData: [
          { name: 'pNode 01', key: '0-0' },
          { name: 'pNode 02', key: '0-1' },
          { name: 'pNode 03', key: '0-2', isLeaf: true },
        ],
      });
    }, 100);
  }
  onSelect = (info) => {
    console.log('selected', info);
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
    const loop = data => data.map((item) => {
      if (item.children) {
        return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
    });
    const treeNodes = loop(this.state.treeData);
    return (
      <Tree onSelect={this.onSelect} loadData={this.onLoadData}>
        {treeNodes}
      </Tree>
    );
  }
}

```