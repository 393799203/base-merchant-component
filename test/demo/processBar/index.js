import React from 'react';
import { ProcessBar }  from 'module_path/index';
require('./style/index.less');

export default React.createClass({
    render(){
    	var STEPS = [
		    [
		        '橱窗位：5',
		        '曝光流量: ☻',
		        '报名特权: ☻☻'
		    ],
		    [
		        '橱窗位：10',
		        '曝光流量: ☻',
		        '报名特权: ☻☻'
		    ],
		    [
		        '橱窗位：20',
		        '曝光流量: ☻☻',
		        '报名特权: ☻☻☻'
		    ],
		    [
		        '橱窗位：30',
		        '曝光流量: ☻☻☻',
		        '报名特权: ☻☻☻',
		        '街利贷首次借款利息9折（日利率0.045%）'
		    ],
		    [
		        '橱窗位：40',
		        '曝光流量: ☻☻☻☻☻',
		        '报名特权: ☻☻☻☻☻',
		        '专属客户经理',
		        '街利贷首次借款利息8折（日利率0.04%）'
		    ]
		];

		var stepTps = [
		    [
		        '第一步'
		    ],
		    [
		        '第二步'
		    ],
		    [
		        '第三部'
		    ],
		    [
		        '第四部',
		    ],
		    [
		        '第五部'
		    ]
		];

        return(
            <div className="processBarDemo">
            	<p>进度条下方文案（stepBt）</p>
                <ProcessBar 
                	stepBt={STEPS} cur={4}/>

                <p>stepTp</p>
                <ProcessBar 
                	stepTp={stepTps} cur={4}/>

                <p>进度条上方与下方文案（stepBt、stepTp）</p>
                
                <ProcessBar 
                	stepBt={STEPS} cur={4} stepTp={stepTps}/>
            </div>
        );
    }
});
