var React = require('react');
/**
 * [xd 进度条组件]
 * @type {[type]}
 * @author  yefei
 * @create  2015-04-02
 * @param {[type]} [varname] [description]
 * @param {int}   [cur]    [当前进行到第几步]
 * @param {array} [stepTp] [进度条上方文案]
 * @param {array} [stepBt] [进度条下方文案]
 */

require('./index.less');

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
                <i key={i} className={"xd-process-i xd-process-i"+ i}>
                    <div className="xd-process-i-c">
                        <span>{i}</span>
                        { stepTp[0] ? stepBt[0] ?
                            <span className="xd-process-tip">{ stepTp[i-1] }</span>
                            :
                            <span className="xd-process-tip-bt hl">{ stepTp[i-1] }</span>
                            :
                            ''
                        }
                        { stepBt[i-1] ? 
                            <span className="xd-process-tip-bt">{ stepBt[i-1] }</span>
                            :
                            ''
                        }
                    </div>
                </i>
            );
        }

        return (
            <div className={"xd-process xd-process-len"+length}>
                <div className={"xd-process-wrap xd-process-step"+cur}>
                    {/*class: step样式不加为全黑，xd-process-step1 为第一步，依次类推 */}
                    <div className="xd-process-sd"></div>
                    { Steps }
                </div>
            </div>
        )
    }
});

module.exports = ProcessBar;