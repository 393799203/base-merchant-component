import React, { Component, PropTypes } from 'react';
import Tag from './tag';

export default class TagGroup extends Component {
    static getData (name) {
        return TagGroup.data[name];
    }
    constructor (props) {
        super(props);
        this.state = {
            options: props.options || []
        };
        this.addData(props.name, props.options || [], true);
    }
    componentWillReceiveProps (nextProps) {
        const { name, options = [] } = nextProps;
        this.addData(name, options);
        this.setState({ options });
    }
    componentWillUnmount () {
        const { name } = this.props;
        this.removeData(name);
    }
    toggleTag (index) {
        const { name } = this.props;
        const copy = this.state;
        copy.options[index].checked = !copy.options[index].checked;

        this.addData(name, copy.options);
        this.setState(copy, () => {
            this.props.onChange();
        });
    }
    addData (name, options, isInit) {
        TagGroup.data = TagGroup.data ? TagGroup.data : {};
        /* eslint-disable */
        if (TagGroup.data[name] && isInit) {
            console.error(`TagGroup 组件的 name 属性必须为唯一值, 但是页面中存在两个或两个以上 name 值为 ${name} 的 TagGroup`);
        }
        /* eslint-enable */
        TagGroup.data[name] = options;
    }
    removeData (name) {
        if (TagGroup.data && TagGroup.data[name]) {
            delete TagGroup.data[name];
        }
    }
    render () {
        const { theme, className, shape, type, icon, isAddon } = this.props;
        const { options } = this.state;
        const iconChecked = icon.checked ? `mc-tag-addon iconfont icon-${icon.checked}` : 'mc-tag-addon iconfont icon-close';
        const iconDefault = icon.default ? `mc-tag-addon iconfont icon-${icon.default}` : 'mc-tag-addon iconfont icon-add';
        return (
            <div className={isAddon ? `mc-tag-group mc-tag-group-addon ${className}` : `mc-tag-group ${className}`}>
                {
                    options.map((item, index) => {
                        return (
                            <div className='mc-tag-wrapper' key={index} onClick={() => { if (!item.disabled) { this.toggleTag(index); } }}>
                                <Tag
                                    className={item.checked ? 'mc-tag-checked' : ''}
                                    theme={item.checked ? theme : 'default'}
                                    shape={shape}
                                    type={type}
                                    disabled={item.disabled}
                                >
                                    <span className='mc-tag-text'>{item.text}</span>
                                    <i
                                        className={item.checked ? iconChecked : iconDefault}
                                    />
                                </Tag>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

TagGroup.defaultProps = {
    name: '',
    theme: 'danger',
    className: '',
    shape: 'normal',
    type: 'fill',
    options: [],
    icon: {},
    isAddon: false,
    onChange: () => {}
};

TagGroup.propTypes = {
    name: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['danger', 'warning', 'success', 'info', 'default', 'dark']),
    className: PropTypes.string,
    shape: PropTypes.oneOf(['round', 'normal']),
    type: PropTypes.oneOf(['fill', 'border']),
    options: PropTypes.array.isRequired,
    children: PropTypes.node,
    icon: PropTypes.object,
    isAddon: PropTypes.bool,
    onChange: PropTypes.func
};
