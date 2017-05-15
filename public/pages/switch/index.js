import React, { Component } from 'react';
import Switch from 'source_path/switch';
import Button from 'source_path/button';
import Icon from 'source_path/icon';
import Readme from './README.md';


class DisableSwitch extends Component {
    state = {
        disabled: true
    }
    toggle = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    }
    render () {
        return (
            <span>
                <Switch disabled={this.state.disabled} />
                <br />
                <Button type='primary' onClick={this.toggle}>Toggle disabled</Button>
            </span>
        );
    }
}
class TextSwitch extends Component {
    render () {
        return (<span>
            <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
            <br /><br />
            <Switch checkedChildren='1' unCheckedChildren='0' />
            <br /><br />
            <Switch checkedChildren={<Icon type='check' />} unCheckedChildren={<Icon type="close" />} />
        </span>);
    }
}
class SizeSwitch extends Component {
    render () {
        return (<span>
            <Switch />
            <br />
            <Switch size='small' />
        </span>);
    }
}
export default class SwitchView extends Component {
    render () {
        const onChange = (checked) => {
            console.log(`switch to ${checked}`);
        };
        return (
            <div className='m-b-lg m-l m-r'>
                <h2 className='p-b-5 b-b dashed'>
                    开关 - Switch
                    <a href="mactt://message/uname/qianxin" style={{border: 'none', boxShadow: 'none'}} className="m-l-lg btn-info-border btn">
                        <i className="fa fa-comments m-r-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                
                <h3>
                    1. 示例
                </h3>
                <table className="text-left">
                    <tbody>
                        <tr>
                            <td style={{ "width":"50%"}}>
                                  <h4>基本用法</h4>
                                <Switch defaultChecked={false} onChange={onChange} />
                            </td>
                            <td><h4>失效</h4>
                <DisableSwitch /></td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>文字图标</h4>
                <TextSwitch />
                                </td>
                                <td>
                                     <h4>两种尺寸</h4>
                <SizeSwitch />
                                </td>
                            </tr>
                    </tbody>
                </table>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>);
    }
}
