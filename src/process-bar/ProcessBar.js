import React, { Component, PropTypes } from 'react';
import './style/index.less';

export default class ProcessBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            cur: props.cur || 0
        };
    }
    componentWillReceiveProps (nextProps) {
        this.setState({
            cur: nextProps.cur
        });
    }
    render () {
        let { cur } = this.state;
        const { stepTp, stepBt, theme, size, className } = this.props;
        let length = Math.max(stepTp.length, stepBt.length);
        const Steps = [];
        cur = cur > 6 ? 6 : cur;
        length = length > 6 ? 6 : length;

        for (let i = 1; i <= length; i++) {
            Steps.push(
                <i key={i} className={`mc-process-i mc-process-i${i} ${i < cur ? 'mc-process-before' : ''} ${i === cur ? 'mc-process-cur' : ''}`}>
                    { stepTp[i - 1] ?
                        <div className='mc-process-tip-tp'>{ stepTp[i - 1] }</div>
                        :
                        ''
                    }
                    <div className='mc-process-i-c'>
                        { i >= cur ?
                            <span>{i}</span>
                            :
                            <span className='iconfont icon-check' />
                        }
                    </div>
                    { stepBt[i - 1] ?
                        <div className='mc-process-tip-bt'>{ stepBt[i - 1] }</div>
                        :
                        ''
                    }
                </i>
            );
        }

        return (
            <div className={`mc-process-${size} mc-process-${theme} mc-process mc-process-len${length} ${className}`}>
                <div className={`mc-process-cont mc-process-step${cur}`}>
                    {/* class: step样式不加为全灰，mc-process-step1 为第一步，依次类推 */ }
                    <div className='mc-process-wrap' />
                    <div className='mc-process-sd' />
                    { Steps }
                </div>
            </div>
        );
    }

}

ProcessBar.propTypes = {
    size: PropTypes.oneOf(['normal', 'sm', 'xs']),
    theme: PropTypes.oneOf(['danger', 'info', 'dark', 'success', 'warning']),
    className: PropTypes.string,
    stepTp: PropTypes.array,
    stepBt: PropTypes.array,
    cur: PropTypes.number
};
ProcessBar.defaultProps = {
    size: 'normal',
    theme: 'danger',
    className: '',
    stepTp: [],
    stepBt: [],
    cur: 0
};

