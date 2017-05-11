import React, { Component } from 'react';
import SliderBar from 'source_path/sliderbar';
import Readme from './README.md';

class NormalDemo extends Component {
    state = {
        disabled: false
    };
    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }
    render () {
        const { disabled } = this.state;
        return (
            <div>
                <SliderBar defaultValue={30} disabled={disabled} />
            </div>
        );
    }
}
class InputDemo extends Component {
    state = {
        inputValue: 1
    }
    onChange = (value) => {
        this.setState({
            inputValue: value
        });
    }
    render () {
        return (
            <div>
                <SliderBar min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
                <input type='text' defaultValue={this.state.inputValue} value={this.state.inputValue} onChange={(e) => { this.onChange(e.target.value); }} />
            </div>
        );
    }
}
class VerticalDemo extends Component {
    render () {
        const style = {
            float: 'left',
            height: 300,
            marginLeft: 70
        };
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div style={{ height: 300 }}>
                <div style={style}>
                    <SliderBar vertical defaultValue={30} />
                </div>
                <div style={style}>
                    <SliderBar vertical range step={10} defaultValue={[20, 50]} />
                </div>
                <div style={style}>
                    <SliderBar vertical range marks={marks} defaultValue={[26, 37]} />
                </div>
            </div>
        );
    }
}
class MarkDemo extends Component {
    render () {
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div>
                <h4>included=true</h4>
                <SliderBar marks={marks} defaultValue={37} />
                <SliderBar range marks={marks} defaultValue={[26, 37]} />

                <h4>included=false</h4>
                <SliderBar marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <SliderBar marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <SliderBar marks={marks} step={null} defaultValue={37} />
            </div>
        );
    }
}
export default class SliderBarView extends Component {
    render () {
        return (
            <div>
                <h2 className='p-b-5 b-b dashed'>
                    滑动输入条 - SliderBar
                    <a href='mactt://message/user/01325' style={{ border: 'none', boxShadow: 'none' }} className='m-l-lg btn-info-border btn'>
                        <i className='fa fa-comments m-r-xs' />遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 示例
                </h3>
                <table className='m-t-15 text-left'>
                    <tbody>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <h4>基本</h4>
                                <NormalDemo />
                            </td>
                            <td>
                                <h4>输入框联动</h4>
                                <InputDemo />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>垂直</h4>
                                <VerticalDemo />
                            </td>
                            <td>
                                <h4>带标签的滑块</h4>
                                <MarkDemo />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}
