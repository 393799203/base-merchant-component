/* eslint-disable */
import React, {Component, PropTypes} from 'react';
import 'source_path/less/grid.less';
import './style/index.less';

class GridDemo extends Component {
    getChildren (num = 0, className = '') {
        const columns = 12;
        let colsWidth = columns / num;
        let arr = [];

        for (let i = 0 ; i < num; i++) {
            arr.push(
                <div className={`col-lg-${colsWidth} ${className}`} key={`${i}${+new Date()}`}>
                    <p>{`col-lg-${colsWidth}`}</p>
                </div>
            );
        }
            
        return arr;
    }

    render () {
        return (
            <div className='mb-lg ml mr'>
                <h2 className='pb-5 b-b dashed'>
                    栅格系统 - Grid
                    <a href="mactt://message/user/01173" style={{border: 'none', boxShadown: 'none'}} className="ml-lg btn-info-border btn">
                        <i className="fa fa-comments mr-xs"></i>遇到问题？联系作者
                    </a>
                </h2>
                <h3>
                    1. 基础栅格
                </h3>
                <div className="one-row mc-row">
                    {this.getChildren(2)}
                </div>
                <div className="one-row mc-row">
                    {this.getChildren(3)}
                </div>
                <div className="one-row mc-row">
                    {this.getChildren(4)}
                </div>
                <div className="one-row mc-row">
                    {this.getChildren(6)}
                </div>
                <div className="one-row mc-row">
                    {this.getChildren(12)}
                </div>
                <h3>
                    2. 区块间隔
                </h3>
                <div className="one-row mc-row nega-indent">
                    {this.getChildren(3, 'gutter')}
                </div>
                <div className="one-row mc-row nega-indent">
                    {this.getChildren(4, 'gutter')}
                </div>
                <h3>
                    3. 左右偏移
                </h3>
                <div className="one-row mc-row">
                    <div className="col-lg-4">
                         <p>col-lg-4</p>
                    </div>
                    <div className="col-lg-4 col-offset-4">
                         <p>col-lg-4 col-offset-4</p>
                    </div>
                </div>
                <div className="one-row mc-row">
                    <div className="col-lg-1">
                         <p>col-lg-1</p>
                    </div>
                    <div className="col-lg-3 col-offset-3">
                         <p>col-lg-3 col-offset-3</p>
                    </div>
                </div>
                <div className="one-row mc-row">
                    <div className="col-lg-6 col-offset-3">
                         <p>col-lg-6 col-offset-3</p>
                    </div>
                </div>
                <h3>
                    4. 排列顺序
                </h3>
                <p>(1) 正向：</p>
                <div className="one-row mc-row">
                    <div className="col-lg-3">
                        <p>col-lg-3</p>
                    </div>
                    <div className="col-lg-9">
                        <p>col-lg-9</p>
                    </div>
                </div>
                <p>(2) 反向：</p>
                <div className="one-row mc-row">
                    <div className="col-lg-3 col-push-9">
                        <p>col-lg-3 col-push-9</p>
                    </div>
                    <div className="col-lg-9 col-pull-3">
                        <p>col-lg-9 col-pull-3</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridDemo;
/* eslint-enable */
