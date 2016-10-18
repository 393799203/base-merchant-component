import React from 'react';
import './style/index.less';

var ProcessBar = React.createClass({
    getDefaultProps: function () {
        return {
            cur: 0,
            stepTp: [],
            stepBt: []
        };
    },

    getInitialState: function () {
        return {
            cur: 0
        };
    },

    componentWillMount: function () {
        var me = this,
            state = me.state,
            props = me.props;

        state.cur = props.cur;
        me.setState(state);
    },

    componentWillReceiveProps: function (nextProps) {
        var me = this,
            state = me.state;

        state.cur = nextProps.cur;
        me.setState(state);
    },

    render: function(){
        var state = this.state,
            props = this.props;

        var cur = state.cur,
            stepTp = props.stepTp,
            stepBt = props.stepBt;

        var length = Math.max(stepTp.length, stepBt.length);
        var Steps = [];

        for (var i = 1; i <= length; i++) {
            Steps.push(
                <i key={i} className={"mc-process-i mc-process-i"+ i}>
                    <div className="mc-process-i-c">
                        <span>{i}</span>
                        { stepTp[0] ? stepBt[0] ?
                            <span className="mc-process-tip">{ stepTp[i-1] }</span>
                            :
                            <span className="mc-process-tip-bt hl">{ stepTp[i-1] }</span>
                            :
                            ''
                        }
                        { stepBt[i-1] ?
                            <span className="mc-process-tip-bt">{ stepBt[i-1] }</span>
                            :
                            ''
                        }
                    </div>
                </i>
            );
        }

        return (
            <div className={"mc-process mc-process-len"+length}>
                <div className={"mc-process-wrap mc-process-step"+cur}>
                    {/*class: step样式不加为全黑，mc-process-step1 为第一步，依次类推 */}
                    <div className="mc-process-sd"></div>
                    { Steps }
                </div>
            </div>
        )
    }
});

module.exports = ProcessBar;
