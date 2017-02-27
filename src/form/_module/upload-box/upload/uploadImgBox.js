/**
** 上传照片
*/
import React , { Component, PropTypes } from 'react';
import Modal from '../../../../modal';
import UploadImg from '../../../../image-uploader';

import './uploadImgBox.less';

const noop = function () {};

export default class UploadImgBox extends Component {
    static propTypes = {
        imgList: PropTypes.array,
        onChange: PropTypes.func,
        className: PropTypes.string,
        demoImg: PropTypes.string,
        mostImg: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        leastImg: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    };

    constructor (props) {
        super(props);
        this.state = {
            imgList: this.changeImgList(props.imgList || [{}]),
            onChange : props.onChange || noop,
            className : props.className || '',
            mostImg : props.mostImg || '-1',
            leastImg : props.leastImg || 1,
            demoImg:props.demoImg || '',
            returnData : this.changeImgList(props.imgList) || []
        };
    }

    //初始化获取数据
    componentDidMount () {
        let {leastImg , imgList} = this.state;
        if(leastImg){
            if(imgList.length < leastImg){
                for(let i = imgList.length;i<leastImg ; i++){
                    imgList[i] = {};
                }
            }
            this.setState({
                imgList : imgList
            });
        }
    }


    changeImgList (list) {
        let result = [];
        if(list && typeof list == 'string'){
            result[0] = {img : list};
        }
        else if(list && list.length && typeof list[0] == 'string'){
            for(let i = 0 ; i<list.length ; i++){
                result[i] = {img : list[i]};
            }
        }
        else{
            result = list;
        }
        return result;
    }

    //删除图片
    deleteImg (e, index) {
        let imgList = this.state.imgList;
        let leastImg = this.state.leastImg;
        imgList.splice(index, 1);

        if(imgList.length < leastImg){
            imgList.push({});
        }

        this.setState({
            imgList : imgList
        },()=>{
            let returnData = this.clearEmptyData(imgList);
            this.state.onChange(returnData);
        });
    }

    //添加图片
    addImg (index) {
        let state = this.state;
        if(index < state.imgList.length-1 || state.imgList.length == state.mostImg ){
            return false;
        }else{
            let imgList = this.state.imgList;
            imgList.push({});
            this.setState({
                imgList : imgList
            });
        }
    }

    //开始上传
    handleUploadStart (index) {
        let imgList = this.state.imgList;
        imgList.splice(index, 1, {isUploading: true});
        this.setState({
            imgList:imgList
        });
    }

    //上传结束
    handleUploadFinish ( index, resData) {
        let imgList = this.state.imgList;
        if(resData && resData.length && resData[0].result){
            let img = resData[0].result.url || '';
            imgList.splice(index, 1, {img: img});
            let returnData = this.clearEmptyData(imgList);
            this.setState({
                imgList : imgList
            },function () {
                this.state.onChange(returnData);
                this.addImg(index);
            });
        }else{
            Modal.alert('上传失败，请重新上传，建议jpg、jpeg、bmp格式，最大不超过5M。');
            let imgList = this.state.imgList;
            imgList.splice(index, 1, '');
            this.setState({
                imgList : imgList
            });
        }
    }

    clearEmptyData (imgList) {
        let returnData = [];
        let list = JSON.parse(JSON.stringify(imgList));
        for(let i = 0 ; i < list.length ; i++){
            if(list[i].img){
                returnData[returnData.length] = list[i];
            }
        }
        return returnData;
    }

    //上传失败
    handleUploadFailed (index) {
        Modal.alert('上传失败，请重新上传，建议jpg、jpeg、bmp格式，最大不超过5M。');
        let imgList = this.state.imgList;
        imgList.splice(index, 1, '');
        this.setState({
            imgList : imgList
        });
    }

    render () {
        let {imgList , className , mostImg , demoImg} = this.state;
        return (
            <div className={className ? className+' fl upload-img-box-wrapper' : 'fl upload-img-box-wrapper'}>
                {
                    imgList.map( (item, index) => {
                        return (
                            <div className='upload-container-box' key={index}>
                                {item.isUploading ? 
                                    <div className='upload-update-btn'>
                                        <img src='//s10.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif' className='loading-img'/>
                                    </div>
                                    : 
                                    <div className='upload-update-btn'>
                                        <UploadImg
                                            onStart={ this.handleUploadStart.bind(this, index) } 
                                            onFinish={ this.handleUploadFinish.bind(this, index) }
                                            onFailed={ this.handleUploadFailed.bind(this, index) }/>
                                        {item.img ?
                                            <img
                                                src={item.img}
                                                className='img-thumb'
                                                width='100px'
                                                height='100px'/>
                                            :
                                            <span className='upload-btn'>上传图片</span>
                                        }
                                    </div>
                                }
                                <span 
                                    className='delete-btn' 
                                    onClick={ (e) => { this.deleteImg(e, index) } }>
                                    ×
                                </span>
                                { demoImg ? <a className='demoImg' href={demoImg} target='_block'>查看示例></a> : null }
                            </div>
                        );
                    })
                }
                {imgList.length < mostImg || mostImg == '-1' ?
                    <div className='upload-container-box'>
                        <span className='upload-add' onClick={ () => { this.addImg() } }>+</span>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}    