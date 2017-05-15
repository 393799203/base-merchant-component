import React, { Component } from 'react';
import Rate from 'source_path/rate';
import Icon from 'source_path/icon';
import Readme from './README.md';

export default class RateView extends Component {
    state = {
        value: 3,
        count: null
    }
    handleChange = (value) => {
        this.setState({ value });
    }
    render () {
        const { value } = this.state;
        return (
            <div>
                <h2 className='p-b-5 b-b dashed'>
                        评分 - Rate
                    <a href='mactt://message/uname/qianxin' style={{ border: 'none', boxShadow: 'none' }} className="m-l-lg btn-info-border btn">
                        <i className='fa fa-comments m-r-xs'></i>遇到问题？联系作者
                    </a>
                    </h2>
                    <h3>
                        1. 示例
                    </h3>
                <table className='text-left'>
                    <tbody>
                        <tr>
                            <td style={{ width:'50%' }}>
                                <h4>基本</h4>
                                <Rate />
                            </td>
                            <td>
                                <h4>半星</h4>
                                <Rate allowHalf defaultValue={2.5} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>只读</h4>
                                <Rate disabled defaultValue={2} />
                            </td>
                            <td>
                                <h4>文案展示</h4>
                                <span>
                                    <Rate onChange={this.handleChange} value={value} />
                                    {value && <span>{value} stars</span>}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>其他字符</h4>
                               <Rate character={<Icon type="likefill" />} allowHalf />
                                <br />
                                <Rate character="A" allowHalf style={{ fontSize: 36 }} />
                                <br />
                                <Rate character="好" allowHalf />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div dangerouslySetInnerHTML={{ __html: Readme }} />
            </div>
        );
    }
}