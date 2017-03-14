/* eslint-disable */
import React, {Component, PropTypes} from 'react';

class GridView extends Component {
    getChildren (num = 0) {
        const columns = 12;
        let colsWidth = columns / num;
        let arr = [];

        for (let i = 0 ; i < num; i++) {
            let className = 'bg-light dk';
            if (i % 2 === 0) {className = 'bg-light'}
            arr.push(
                <div className={`col-lg-${colsWidth} ${className} m-t p-10`} key={`${i}${+new Date()}`}>
                    <p>{`col-lg-${colsWidth}`}</p>
                </div>
            );
        }

        return arr;
    }

    render () {
        return (
            <div>
                <h3 className='p-t p-b b-b dashed'>
                    {this.props.num}、Grid 栅格布局
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/f2e/merchant-theme/blob/v3.0.0/grid.less'
                    >
                      查看 Grid 样式源码
                    </a>
                </h3>
                <h4>
                    {this.props.num}.1、 基础栅格
                </h4>
                <div className="row">
                    {this.getChildren(2)}
                </div>
                <div className="row">
                    {this.getChildren(3)}
                </div>
                <div className="row">
                    {this.getChildren(4)}
                </div>
                <div className="row">
                    {this.getChildren(6)}
                </div>
                <div className="row">
                    {this.getChildren(12)}
                </div>
                <h4>
                    {this.props.num}.2、 左右偏移
                </h4>
                <div className="row m-t">
                    <div className="col-lg-4 bg-light p-10">
                        <p>col-lg-4</p>
                    </div>
                    <div className="col-lg-4 col-offset-4  bg-light dk p-10">
                        <p>col-lg-4 col-offset-4</p>
                    </div>
                </div>
                <div className="row m-t">
                    <div className="col-lg-1 bg-light p-10">
                        <p>col-lg-1</p>
                    </div>
                    <div className="col-lg-3 col-offset-3 bg-light dk p-10">
                         <p>col-lg-3 col-offset-3</p>
                    </div>
                </div>
                <div className="row m-t">
                    <div className="col-lg-6 col-offset-3 bg-light p-10">
                         <p>col-lg-6 col-offset-3</p>
                    </div>
                </div>
                <h4>
                    {this.props.num}.3、 排列顺序
                </h4>
                <p className="m-t">(1) 正向：</p>
                <div className="row m-t">
                    <div className="col-lg-3 bg-light p-10">
                        <p>col-lg-3</p>
                    </div>
                    <div className="col-lg-9 bg-light dk p-10">
                        <p>col-lg-9</p>
                    </div>
                </div>
                <p className="m-t">(2) 反向：</p>
                <div className="row m-t">
                    <div className="col-lg-3 col-push-9 bg-light p-10">
                        <p>col-lg-3 col-push-9</p>
                    </div>
                    <div className="col-lg-9 col-pull-3 bg-light dk p-10">
                        <p>col-lg-9 col-pull-3</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridView;
/* eslint-enable */
