## 2. 属性 - Props

| props        |   必填       | 说明           | 类型         |   默认值       |
| ------------ | ------------ | ------------- | ------------ | ------------  |
| value        | 否           |   默认区号        | string       | 86         |
| className    | 否           |样式名          | string       | 组件默认样式    |
| onChange     | 是           |改变选项后回调函数   | function     | -    |

## 3. 使用示例

	export default class AreaCodeView extends Component {
	    constructor () {
	        super();
	        this.state = {
				code: '86'
	        }
	    }
	    handleChange(code){
	        this.setState({
				code: code
	        })
	    }
	    render () {
	    	let {code} = this.state;
	        return (
	            <div>
                    <AreaCode
						value={code}
						className="xd-select"
						onChange = {(code) => this.handleChange(code)} />
	            </div>
	        )
	    }
	}
	







