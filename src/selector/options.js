import React, { Component, PropTypes } from 'react';

export default class Option extends Component {
    static defaultProps = {
        optionData: {},
        handleChange: null,
        index: ''
    };
    static propTypes = {
        optionData: PropTypes.object.isRequired,
        handleChange: PropTypes.func,
        index: PropTypes.number,
        selectorId: PropTypes.string
    };
    static timer = null;

    constructor (props, context) {
        super(props, context);
        this.state = {
            showSubOption: false,
            selectorId: props.selectorId
        };
    }

    toggleValue (value) {
        const state = this.state;
        state[value] = !state[value];
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState(state);
        }, 200);
    }

    handleChange (item, subItem, event) {
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();

        if (typeof this.props.handleChange === 'function') {
            let data = {};
            if (subItem.text) {
                data = { item, subItem };
                data.text = subItem.text;
                data.value = [item.value, subItem.value].join(',');
            } else {
                data = item;
            }
            this.props.handleChange(data);
        }
    }

    render () {
        const { optionData, index } = this.props;
        const { showSubOption, selectorId } = this.state;
        const leftValue = index * 36;
        // 判断当前是否有子选项
        const hasSubOption = optionData.options && optionData.options.length;
        return (
            <li
                name={`liname${selectorId}`}
                onClick={e => this.handleChange(optionData, '', e)}
                onMouseEnter={() => this.toggleValue('showSubOption')}
                onMouseLeave={() => this.toggleValue('showSubOption')}
            >
                {optionData.text}
                <span className={hasSubOption ? 'sub-arrow' : ''} style={{ top: `${leftValue + 12}px` }}><em /></span>
                {
                    hasSubOption ?
                        <ol className={showSubOption ? '' : 'hide'} style={{ top: `${leftValue}px` }}>
                            {optionData.options.map((item, i) => {
                                return (
                                    <li name={`subliname${selectorId}`} key={i} onClick={e => this.handleChange(optionData, item, e)}>
                                        {item.text}
                                    </li>
                                );
                            })
                        }
                        </ol>
                        : null
                }
            </li>
        );
    }
}

