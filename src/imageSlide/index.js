/**
 * 图片轮播组件
 * @rufeng 2015-6-25
 */

var React = require('react');
var ReactDOM = require('react-dom');
var cx = require('classnames');
var _ = require('underscore');
require('./index.less');
// 过滤节点
var FILTER_CLASSNAME_REGEXP = /dot|prev|next/;

// 最小间隔时间
var MIN_INTERVAL_TIME = 1000;

var ImageSlide = React.createClass({
    propTypes: {

        // 起始位置
        index: React.PropTypes.number,

        // 是否自动播放
        auto: React.PropTypes.bool,

        // 间隔时间
        intervalTime: React.PropTypes.number,

        // 容器宽度
        width: React.PropTypes.string,

        // 容器高度
        height: React.PropTypes.string,

        // 是否显示圆点
        isShowDot: React.PropTypes.bool,

        // 是否显示左右按钮
        isShowPrevNext: React.PropTypes.bool,

        // 图片准备切换回调函数
        handleChangeStart: React.PropTypes.func,

        // 图片切换完成回调函数
        handleChangeEnd: React.PropTypes.func

    },
    getInitialState: function() {
        return {

            // 记录上一次位置
            lastIndex: this.props.index || 0,

            // 定时器
            autoPlayTimer: null,

            // 如果正在动画
            isAnimated: false

        };
    },
    getDefaultProps: function(){
        return {
            index: 0,
            auto: true,
            intervalTime: 3000,
            width: 0,
            height: 0,
            isShowDot: true,
            isShowPrevNext: false,
            handleChangeStart: _.noop,
            handleChangeEnd: function(){
                return true;
            }
        };
    },

    componentDidMount: function() {
        var lastIndex = this.state.lastIndex;

        // 如果没有内容节点
        if(typeof ReactDOM.findDOMNode(this.refs.imgList).childNodes[lastIndex] == 'undefined'){
           return;
        }

        this.props.handleChangeStart(lastIndex);
        ReactDOM.findDOMNode(this.refs.imgList).childNodes[lastIndex].style.cssText = 'z-index: 1;opacity: 1';
        ReactDOM.findDOMNode(this.refs.dotList).childNodes[lastIndex].className = 'dot c';

        // 自动播放
        this.props.auto && this.autoPlay();

        // 切换事件
        this.props.handleChangeEnd(lastIndex);

        // 鼠标离开
        !window.ActiveXObject ? document.addEventListener('mouseout', this.handleMouseOut) : document.attachEvent("mouseout", this.handleMouseOut);
        
    },

    componentWillUnmount: function(){
        var autoPlayTimer = this.state.autoPlayTimer;
        clearInterval(autoPlayTimer);
        !window.ActiveXObject ? document.removeEventListener('mouseout', this.handleMouseOut) : document.detachEvent("mouseout", this.handleMouseOut);
    },

    // 动画
    animate: function(opts) {
        var start = new Date; 
        var id = setInterval(function() {
            var timePassed = new Date - start;
            var progress = timePassed / opts.duration;

            if (progress > 1) progress = 1;
            
            var delta = opts.delta(progress);
            opts.step(delta);
            
            if (progress == 1) {
              clearInterval(id);
              opts.finish && opts.finish();
            }
        }, opts.delay || 0);
    },
    // 自动播放
    autoPlay: function(){
        var imgList = ReactDOM.findDOMNode(this.refs.imgList).childNodes;
        var intervalTime = this.props.intervalTime;
        var autoPlayTimer = this.state.autoPlayTimer;
        var index = this.state.lastIndex;

        // 动画片放起来
        ++index;
        if(autoPlayTimer) clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(function(){
            if(index >= imgList.length){
                index = 0;
            }
            this.play(index++);
        }.bind(this), intervalTime < MIN_INTERVAL_TIME ? MIN_INTERVAL_TIME : intervalTime);

        this.setState({autoPlayTimer: autoPlayTimer});
    },

    // 播放
    play: function(index){
        var imgList = ReactDOM.findDOMNode(this.refs.imgList).childNodes;
        var lastIndex = this.state.lastIndex;
        var isAnimated = this.state.isAnimated;
        
        if(index < 0){
            index = imgList.length - 1;
        }

        if(index >= imgList.length){
            index = 0;
        }
        
        // 如果点击的同一个圆点
        if(lastIndex == index){
            return;
        }
        
        var currentImg = ReactDOM.findDOMNode(this.refs.imgList).childNodes[index]; // 当前图片
        var lastImg = ReactDOM.findDOMNode(this.refs.imgList).childNodes[lastIndex]; // 上一次图片
        var currentDot = ReactDOM.findDOMNode(this.refs.dotList).childNodes[index]; // 当前圆点按钮
        var lastDot = ReactDOM.findDOMNode(this.refs.dotList).childNodes[lastIndex]; // 上一次圆点按钮
        
        // 如果非IE浏览器，走动画切换，否则简单粗暴的直切。
        if(!window.ActiveXObject){

            if(isAnimated){
                return;
            }

            // 高亮圆点
            currentDot.className = 'dot c';
            lastDot.className = 'dot';

            this.setState({isAnimated: true});
            this.props.handleChangeStart(index);

            // 图片切换
            this.animate({
                duration: MIN_INTERVAL_TIME / 2,
                delta: function(progress){
                    return progress;
                },
                step: function(delta) { 
                    currentImg.style.cssText = 'z-index: 1;opacity: '+ delta +';filter: alpha(opacity='+ (delta * 100) +');';
                    lastImg.style.cssText = 'z-index: 0;opacity: '+ (1 - delta) +';filter: alpha(opacity='+ (100 - delta * 100) +');';
                },
                finish: function(){
                    this.setState({lastIndex: index, isAnimated: false});
                    this.props.handleChangeEnd(index);
                }.bind(this)
            })
        }else{
            // 高亮圆点
            currentDot.className = 'dot c';
            lastDot.className = 'dot';

            // 显示图片
            this.props.handleChangeStart(index);
            currentImg.style.cssText = 'z-index: 1;opacity: 1';
            lastImg.style.cssText = 'z-index: 0;opacity: 0';

            this.setState({lastIndex: index});
            this.props.handleChangeEnd(index);
        }
    },

    // 圆点切换回调
    handleDotChangeCallback: function(index){
        this.play(index);
    },

    // 鼠标悬停
    handleMouseOver: function(){
        var autoPlayTimer = this.state.autoPlayTimer;
        if(autoPlayTimer) clearInterval(autoPlayTimer);
    },

    // 鼠标离开
    handleMouseOut: function(){
        this.autoPlay();
    },

    render: function() {
        var lastIndex = this.state.lastIndex;
        var isShowPrevNext = this.props.isShowPrevNext;

        /*var cx = React.addons.classSet;*/
        var dotListClasses = cx({
            'dot-list': true,
            'hide': !this.props.isShowDot
        });
        
        return (
            <div className="image-slide" style={{width: this.props.width, height: this.props.height}} onMouseOver={this.handleMouseOver}>
                <div ref="imgList" className="img-list">
                    {this.props.children}
                </div>
                <div ref="dotList" className={dotListClasses}>
                    {this.props.children.length ? this.props.children.map(function(item, i){
                        return (<Dot index={i} key = {i} handleDotChangeCallback={this.handleDotChangeCallback} />);
                    }.bind(this)) : null}
                </div>
                {isShowPrevNext ? <a className="prev-btn" onClick={this.play.bind(this, lastIndex - 1)}><img src="http://s17.mogucdn.com/p1/150625/upload_ieytemjrmvsdqmbqgizdambqmeyde_58x58.png" width={40} /></a> : null}
                {isShowPrevNext ? <a className="next-btn" onClick={this.play.bind(this, lastIndex + 1)}><img src="http://s16.mogucdn.com/p1/150625/upload_iezdgmtbmiygcmbqgizdambqmmyde_58x58.png" width={40} /></a> : null}
            </div>
        );
    }
});

// 圆点
var Dot = React.createClass({
    handleChange: function(index){
        this.props.handleDotChangeCallback(index);
    },
    render: function() {
        var index = this.props.index;
        return (
            <span className="dot" onClick={this.handleChange.bind(this, index)}></span>
        );
    }
});


module.exports = ImageSlide;
