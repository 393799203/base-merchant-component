import React from 'react';
import { Modal }  from 'module_path/index';

require("./style/index.less");

export default React.createClass({

	//判断提示（确定、取消）
    confirmDemo(){
    	Modal.confirm('确定要删除该品牌吗？',function(){
            Modal.close();
        }.bind(this))
    },

    //自定义
    autoModalDemo(){
    	var _self = this;
        var modalid = Modal.open({
            title:"autoModal",
            body: (
                <div><button onClick={_self.alertDemo}>alertDemo</button></div>
            ),
            closeByMask: true,
            callback:function(){
            	Modal.close();
            }
        });
    },

    //关闭单个弹框
    closeDemo(){
    	Modal.close();
    },

    //关闭当前所有弹框
    closeAllDemo(){
    	Modal.closeAll();
    },

    //提示（确定）
    alertDemo(){
    	Modal.alert('确定要删除吗？',function(){
    		console.info(111);
    		Modal.closeAll();
    	})
    },

    //提示（自动消失）
    tipDemo(){
    	Modal.tip('提交成功')
    },

    render(){
        return(
		    <div className="modalDemo">
		    	<button onClick={this.confirmDemo}>confirmDemo</button>
		    	<button onClick={this.autoModalDemo}>autoModalDemo</button>
		    	<button onClick={this.alertDemo}>alertDemo</button>
		    	<button onClick={this.tipDemo}>tipDemo</button>
                
		    </div>
        );
    }
});
