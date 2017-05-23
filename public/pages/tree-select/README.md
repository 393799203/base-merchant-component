### 2. 使用说明

#### 2.1 参数说明

##### Tree props

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| value   | 指定当前选中的条目	 | string/string[]       |     |   -|
| labelInValue   | 是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {key: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式   | boolean		       |     |   false|
| defaultValue   |   默认展开所有树节点		    | string/string[]      | -    | -|
| multiple	       | 支持多选（当设置 treeCheckable 时自动变为true）		  | boolean		    | -    |  false   |
| onSelect  | 被选中时调用				    | function(value, node, extra)	  | -  | []  |
| onChange     | 选中树节点时调用此函数		  | function(value, label, extra) | - |  － | 
| allowClear     | 显示清除按钮		  | boolean | - |  false | 
| onSearch     | 文本框值变化时回调	｜	function(value: string)	 | - |  － | 
| placeholder	     | 选择框默认文字	 | string | - |  － | 
| searchPlaceholder     | 搜索框默认文字		 | string	 | - |  － | 
| dropdownStyle     | 下拉菜单的样式 | object | - |  - | 
| dropdownMatchSelectWidth	     | 下拉菜单和选择器同宽		 | boolean | - |  true | 
| size     | 选择框大小，可选 large small	 | string| - |  'default' | 
| showSearch     | 在下拉中显示搜索框(仅在单选模式下生效)		 | boolean | - |  false | 
| disabled     | 是否禁用		 | boolean	 | - |  false | 
| showCheckedStrategy     | TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.	 | enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }	 | - |  TreeSelect.SHOW_CHILD | 
| treeDefaultExpandAll     | 默认展开所有树节点 | boolean	 | - |  false | 
| treeDefaultExpandedKeys     | 默认展开的树节点	 | string[] | - |  - | 
| treeCheckable     | 显示 checkbox	 | boolean | - |  false | 
| treeCheckStrictly     | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean	 | - |  false | 
| filterTreeNode     | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | boolean/Function(inputValue: string, treeNode: TreeNode) (函数需要返回bool值)		 | - |  Function | 
| treeNodeFilterProp     | 输入项过滤对应的 treeNode 属性 | string	 | - |  'value' | 
| treeNodeLabelProp     | 作为显示的 prop 设置	 | string	 | - |  'title' | 
| treeData     | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一） | array<{value, label, children, [disabled, selectable]}>	 | - |  [] | 
| treeDataSimpleMode     | 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pid:0, value:'1', label:"test1",...},...], pId 是父节点的 id) / false/Array<{ id: string, pId: string, rootPId: null }> | - |  false | 
| loadData     | 异步加载数据 | function(node) | - |  false |
| getPopupContainer     | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | Function(triggerNode) | - |  () => document.body | 

##### TreeNode props

| 参数        | 说明           | 类型         |  备注       |   默认       |  
| ------------ | ------------- | ------------ | ------------  |------------  |
| disabled   | 是否禁用	    | boolean       |     |   false  |
| key   | 此项必须设置（其值在整个树范围内唯一）	  | string	       |     |   false  |
| value   | 默认根据此属性值进行筛选（其值在整个树范围内唯一）		    | string	      | -    |     |
| title       | 树节点显示的内容	 | string/ReactNode    |     |  '---'  |
| isLeaf  | 是否是叶子节点		    | boolean  | -  | false |


#### 2.2 使用示例

##### 基本

```
import TreeSelect from '@meili/base-merchant-component/treeSelect';
const TreeNode = TreeSelect.TreeNode;

class Demo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(arguments);
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

ReactDOM.render(<Demo />, mountNode);

```

##### 从数据直接生成

```
import TreeSelect from '@meili/base-merchant-component/treeSelect';

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
}];

class Demo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(arguments);
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

ReactDOM.render(<Demo />, mountNode);
```
##### 多选

```
import TreeSelect from '@meili/base-merchant-component/treeSelect';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

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

class Demo extends React.Component {
  state = {
    value: ['0-0-0'],
  }
  onChange = (value) => {
    console.log('onChange ', value, arguments);
    this.setState({ value });
  }
  render() {
    const tProps = {
      treeData,
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

ReactDOM.render(<Demo />, mountNode);
```

##### 多选+父子节点不关联

```
import TreeSelect from '@meili/base-merchant-component/treeSelect';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

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

class Demo extends React.Component {
  state = {
     value: [{
      label:"Child Node1",
      value:'0-0-0'
    }]
  }
  onChange = (value) => {
    console.log('onChange ', value, arguments);
    this.setState({ value });
  }
  render() {
    const tProps = {
      treeData,
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

ReactDOM.render(<Demo />, mountNode);
```

##### 多选+异步数据

```
import TreeSelect from '@meili/base-merchant-component/treeSelect';

class Demo extends Component {
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
ReactDOM.render(<Demo />, mountNode);

```