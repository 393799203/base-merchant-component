/**
** 上传照片
*/
import React, { Component, PropTypes } from 'react';
import Modal from '../../../../modal';
import UploadImg from '../../../../image-uploader';
import Datepicker from '../../../../datepicker';
import Util from '../../../../_module/js/util.js';

import './uploadImgList.less';

const noop = function () {};

export default class UploadImgList extends Component {
    static propTypes = {
        imgList: PropTypes.array,
        onChange: PropTypes.func,
        className: PropTypes.string,
        demoImg: PropTypes.string,
        mostImg: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        leastImg: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        disabledDate: PropTypes.func
    };

    constructor (props) {
        super(props);
        this.state = {
            imgList: props.imgList && props.imgList.length ? props.imgList : [{}],//默认图片列表
            onChange : props.onChange || noop,//图片变化事件
            className : props.className || '',
            demoImg : props.demoImg || '',//模版图片
            mostImg : props.mostImg || -1,
            leastImg : props.leastImg || 1,
            disabledDate : props.disabledDate || noop
        };
    }

    // //数据改变后更新state
    componentWillReceiveProps (nextProps) {
        this.setState({
            imgList : nextProps.imgList && nextProps.imgList.length ? nextProps.imgList : [{}]
        },function () {
            this.initImgList();
        });
    }

    //初始化获取数据
    componentDidMount () {
        //初始话imgList
        this.initImgList();
        
    }

    initImgList () {
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
        }, function (){
            this.state.onChange(this.state.imgList);
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

    before (files, index) {
        let imgList = this.state.imgList;
        imgList.splice(index, 1, {isUploading: true});
        this.setState({
            imgList:imgList
        });
    }

    success (uploadList, index) {
        let url = uploadList && uploadList[0].url;
        let imgList = this.state.imgList;
        imgList.splice(index, 1, {img: url});
        let returnData = this.clearEmptyData(imgList);
        this.setState({
            imgList : imgList
        },function () {
            this.state.onChange(returnData);
            this.addImg(index);
        });
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

    fail (failList, successList, index) {
        Notification.error({
            message: '图片上传失败'
        });
        let imgList = this.state.imgList;
        imgList.splice(index, 1, '');
        this.setState({
            imgList : imgList
        });
    }

    //切换到期时间
    changeType (index, e) {
        let imgList = this.state.imgList;
        imgList[index].endTime = e;
        this.setState({
            imgList : imgList
        }, function (){
            this.state.onChange(this.state.imgList);
        });
    }

    onChange (date, index) {
        let imgList = this.state.imgList;
        if(date){
            imgList[index].endTime = parseInt(parseInt(date.getTime().toString(),10)/1000,10);
        }else{
            imgList[index].endTime = '';
        }
        this.setState({
            imgList : imgList
        }, function (){
            this.state.onChange(this.state.imgList);
        });
    }

    disabledDate (current) {
        let disabledDate = this.state.disabledDate;
        return disabledDate(current);
    }

    render () {
        let { imgList, className, demoImg, mostImg }=this.state;
        return (
            <div className={className ? className+' fl upload-img-list-wrapper' : 'fl upload-img-list-wrapper'}>
                {
                    imgList.map( (item, index) => {
                        let endTime = item.endTime;
                        if(isNaN(endTime)){
                            endTime = '';
                        }
                        return (
                            <div className='upload-container-list mr20' key={index}>
                                {item.isUploading ?
                                    <div className='upload-update-btn'>
                                        <img src='//s10.mogujie.com/img/fpay/ubzlo_ieyden3fha3teobtmiytambqgqyde_24x24.gif' className='loading-img'/>
                                    </div>
                                    :
                                    <div className='upload-update-btn'>
                                        <UploadImg
                                            before={(files) => this.before(files, index)}
                                            success={(a) => this.success(a, index)}
                                            fail={(a, b) => this.fail(a, b, index)}
                                        />
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
                                
                                { demoImg && index == 0 ?
                                    <a className='demoImg' href={demoImg} target='_block'>查看示例></a>
                                    :
                                    <div className='demoImg'></div>
                                }

                                <div className='item-group'>
                                    <label className='endtime-label fl'>
                                        <span className='text-primary'>*</span>
                                        到期时间:
                                    </label>
                                    <div className='brand-tab clearfix'>
                                        <div className='fl mr10'>
                                            <input
                                                className='xd-radio'
                                                type='checkbox'
                                                onChange={ noop }
                                                checked={ endTime == '-1' ? true : false }/>
                                            <span onClick={ () => this.changeType(index, '-1') }>长期</span>
                                        </div>
                                        <div className='fl'>
                                            <input
                                                className='xd-radio'
                                                type='checkbox'
                                                onChange={ noop }
                                                checked={ endTime == '-1' ? false : true }/>
                                            <span onClick={ () => this.changeType(index, '') }>短期</span>
                                        </div>
                                        {endTime == '-1' ? 
                                            null:
                                            <Datepicker
                                                className='ml40 mt10'
                                                value={Util.dateFormat(endTime, 'yy-mm-dd')}
                                                format='yyyy-MM-dd'
                                                onChange={(date) => this.onChange(date, index)} 
                                                disabledDate = {(e) => this.disabledDate(e)}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {imgList.length < mostImg  || mostImg == '-1' ?
                    <div className='upload-container-list'>
                        <span className='upload-add' onClick={ () => { this.addImg() } }>+</span>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}