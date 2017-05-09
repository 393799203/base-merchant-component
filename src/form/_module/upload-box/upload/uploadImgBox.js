/**
** 上传照片
*/
import React, { Component, PropTypes } from 'react';
import UploadImg from '../../../../image-uploader';
import Notification from '../../../../notification';

import './uploadImgBox.less';

const noop = function () {};

export default class uploadImgBox extends Component {
    static propTypes = {
        imgList: PropTypes.any,
        onChange: PropTypes.func,
        className: PropTypes.string,
        demoImg: PropTypes.string,
        mostImg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        leastImg: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    constructor (props) {
        super(props);
        this.state = {
            imgList: this.changeImgList(props.imgList || [{}]),
            onChange: props.onChange || noop,
            className: props.className || '',
            mostImg: props.mostImg || '-1',
            leastImg: props.leastImg || 1,
            demoImg: props.demoImg || '',
            returnData: this.changeImgList(props.imgList) || []
        };
    }

    // 初始化获取数据
    componentDidMount () {
        const { leastImg, imgList } = this.state;
        if (leastImg) {
            if (imgList.length < leastImg) {
                for (let i = imgList.length; i < leastImg; i++) {
                    imgList[i] = {};
                }
            }
            this.state.imgList = imgList;
        }
    }

    // 数据改变后更新state
    componentWillReceiveProps (nextProps) {
        this.setState({
            imgList: this.changeImgList(nextProps.imgList || [{}])
        });
    }

    changeImgList (list) {
        let result = [{}];
        if(!list){
            return result;
        }
        
        if (list && typeof list === 'string') {
            result[0] = { img: list };
        } else if (list && list.length && typeof list[0] === 'string') {
            for (let i = 0; i < list.length; i++) {
                result[i] = { img: list[i] };
            }
        } else {
            result = list;
        }
        return result;
    }

    // 删除图片
    deleteImg (e, index) {
        const imgList = this.state.imgList;
        const leastImg = this.state.leastImg;
        imgList.splice(index, 1);

        if (imgList.length < leastImg) {
            imgList.push({});
        }

        this.setState({
            imgList
        }, () => {
            const returnData = this.clearEmptyData(imgList);
            this.state.onChange(returnData);
        });
    }

    // 添加图片
    addImg (index) {
        const state = this.state;
        if (index < state.imgList.length - 1 || state.imgList.length === state.mostImg) {
            return;
        }
        const imgList = this.state.imgList;
        imgList.push({});
        this.setState({
            imgList
        });
    }

    before (files, index) {
        const imgList = this.state.imgList;
        imgList.splice(index, 1, { isUploading: true });
        this.setState({
            imgList
        });
    }

    success (uploadList, index) {
        const url = uploadList && uploadList[0].url;
        const imgList = this.state.imgList;
        imgList.splice(index, 1, { img: url });
        const returnData = this.clearEmptyData(imgList);
        this.setState({
            imgList
        }, () => {
            this.state.onChange(returnData);
            this.addImg(index);
        });
    }

    clearEmptyData (imgList) {
        const returnData = [];
        const list = JSON.parse(JSON.stringify(imgList));
        for (let i = 0; i < list.length; i++) {
            if (list[i].img) {
                returnData[returnData.length] = list[i];
            }
        }
        return returnData;
    }

    fail (failList, successList, index) {
        Notification.error({
            message: '图片上传失败'
        });
        const imgList = this.state.imgList;
        imgList.splice(index, 1, '');
        this.setState({
            imgList
        });
    }

    render () {
        const {
            imgList,
            className,
            mostImg,
            demoImg
        } = this.state;
        return (
            <div className={`${className} fl upload-img-box-wrapper`} >
                {imgList && imgList.length ?
                    imgList.map((item, index) => {
                        return (
                            <div className='upload-container-box' key={index}>
                                {item.isUploading ?
                                    <div className='upload-update-btn'>
                                        <img
                                            alt={'loading'}
                                            src='//s10.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif'
                                            className='loading-img'
                                        />
                                    </div>
                                    :
                                    <div className='upload-update-btn'>
                                        <UploadImg
                                            before={files => this.before(files, index)}
                                            success={a => this.success(a, index)}
                                            fail={(a, b) => this.fail(a, b, index)}
                                        />
                                        {item.img ?
                                            <img
                                                alt={item.img}
                                                src={item.img}
                                                className='img-thumb'
                                                width='100px'
                                                height='100px'
                                            />
                                            :
                                            <span className='upload-btn'>上传图片</span>
                                        }
                                    </div>
                                }
                                <span
                                    className='delete-btn'
                                    onClick={e => this.deleteImg(e, index)}
                                >
                                    ×
                                </span>
                                {demoImg ?
                                    <a
                                        className='demoImg'
                                        href={demoImg}
                                        target='_block'
                                    >
                                        {'查看示例>'}
                                    </a>
                                    : null
                                }
                            </div>
                        );
                    })
                    :
                    null
                }
                {imgList.length < mostImg || mostImg === '-1' ?
                    <div className='upload-container-box'>
                        <span className='upload-add' onClick={() => this.addImg()}>+</span>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}
