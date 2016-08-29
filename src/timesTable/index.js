/**
 * 设置时间段表
 * author: @jichi
 * create: 2015-11
 * @param {[type]}      [varname]        [description]            [example]
 * @param {[string]}    [requestUrl]     [如果按了确定按钮就做ajax请求，请传API地址]
 * @param {[string]}    [itemId]     [如果按了确定按钮就做ajax请求，请传itemId]
 * @param {[string]}    [timeRange]         [时间点]                 ['1;2;3;4']
 *
 * 向父组件传[timeRange] 字段， 类型为{obj}
 */

var React = require('react');
var Modal = require('../../lib/modal/index');
var cx = require('classnames');
require('./index.less');

var _ = require('underscore');
var $ = require('jquery')


var TimesView = React.createClass({

    getDefaultProps: function () {
        var hourData = [];
        for (var i=0; i<=23; i++) {
            hourData.push(i);
        }

        return {
            weekData: [
                "星期一","星期二","星期三","星期四","星期五","星期六","星期日"
            ],
            hourData: hourData,
            perWidth: 30,
            perHeight: 22,
            xItem: 24, //横坐标
            yItem: 7, //纵坐标
            isWork: true,
            dataItem: {},
        };
    },

    getInitialState: function() {
        return {
            timeRange: '',
            groupStart: {
                day: -1,
                hour: -1
            },
            groupEnd: {
                day: -1,
                hour: -1
            },
            pointStart: {
                X: 0,
                Y: 0
            },
            pointEnd: {
                X: 0,
                Y: 0
            },
            tablePoint: {
                X: 0,
                Y: 0
            },
            selectBox: {
                width: 0,
                height: 0,
                top: 0,
                left: 0
            },
            moving: false
        };
    },

    componentWillMount: function() {
        var me = this,
            state = this.state,
            props = this.props,
            timeRange = props.timeRange;
        state.timeRange = timeRange ? timeRange.split(';') : [];
        me.setState(state);
    },

    componentDidMount: function() {
        var state = this.state;

        state.tablePoint.X = $('.select-table').offset().left;
        state.tablePoint.Y = $('.select-table').offset().top;
        this.setState(state);
    },

    render: function() {
        var that = this,
            state = this.state;

        if ($('.xd-modal').length) {
            var top = $('.xd-modal').css('top').split('px')[0];
            if (parseFloat(top) < 389) {
                $('.xd-modal').css('top', '420px');
            }
        }

        return (
                <div className="time-select-table-box">
                    <table className="select-table mb20">
                        <tbody>
                            <tr className="select-head">
                                <td className="title" rowSpan="2" key='time'>星期/时间</td>
                                <td onMouseDown={that.mouseDown.bind(null, 0, -1)} className="period" colSpan="6" key='time0-6'>00:00-06:00</td>
                                <td onMouseDown={that.mouseDown.bind(null, 0, -1)} className="period" colSpan="6" key='time6-12'>06:00-12:00</td>
                                <td onMouseDown={that.mouseDown.bind(null, 0, -1)} className="period" colSpan="6" key='time12-18'>12:00-18:00</td>
                                <td onMouseDown={that.mouseDown.bind(null, 0, -1)} className="period" colSpan="6" key='time18-24'>18:00-24:00</td>
                            </tr>

                            <tr className="select-head" id="hourHead">
                                {that.props.hourData.map(function (value, index){
                                    return (
                                        <td key = {index} onMouseDown={that.mouseDown.bind(null, 0, index)} className="hour">{index}</td>
                                    )
                                })}
                            </tr>

                            {this.props.weekData.map(function (value, day){
                                return (
                                    <tr className="select-content" key={day}>
                                        <td onMouseDown={that.mouseDown.bind(null, day, 0)} className="day">{value}</td>
                                        {that.props.hourData.map(function (item, hour){
                                            let key = value + hour;
                                            var dayBool = false,
                                                hourBool = false;

                                            if (state.groupStart.day <= state.groupEnd.day) {
                                                dayBool = day >= state.groupStart.day && day <= state.groupEnd.day;
                                            } else {
                                                dayBool = day >= state.groupEnd.day && day <= state.groupStart.day;
                                            }

                                            if (state.groupStart.hour <= state.groupEnd.hour) {
                                                hourBool = hour >= state.groupStart.hour && hour <= state.groupEnd.hour;
                                            } else {
                                                hourBool = hour >= state.groupEnd.hour && hour <= state.groupStart.hour;
                                            }


                                            (day >= state.groupStart.day && day <= state.groupEnd.day || (!day >= state.groupStart.day && !day <= state.groupEnd.day)) && hour >= state.groupStart.hour && hour <= state.groupEnd.hour
                                            var classes = cx({
                                                'brick': true,
                                                'fixed': _.contains(state.timeRange, (day*24+hour).toString()),
                                                'select': dayBool && hourBool
                                            });

                                            return (
                                                <td key={key}className={classes} onMouseDown={that.mouseDown.bind(null, day, hour)} onMouseUp={that.mouseUp.bind(that, day, hour)} onMouseMove={that.mouseMove}></td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                    <div className="select-box" style={{width: (state.selectBox.width+'px'), position: 'absolute', height: (state.selectBox.height+'px'), top: (state.selectBox.top+'px'), left: (state.selectBox.left+'px')}} onMouseMove={that.mouseMove}>
                    </div>

                </div>
            )
    },

    mouseDown: function(day, hour, e) {
        var x,y,state = this.state

        state.mouseDown = true;
        state.tablePoint = {
            X: $('.select-table').offset().left,
            Y: $('.select-table').offset().top
        };

        y = parseInt((e.pageY-state.tablePoint.Y-44)/(this.props.perHeight+1)),
        x = parseInt((e.pageX-state.tablePoint.X-80)/(this.props.perWidth));

        day = (day < 0) ? y : day;
        hour = (hour < 0) ? x : hour;

        state.groupStart = {
            day: day,
            hour: hour
        };

        state.groupEnd = {
            day: day,
            hour: hour
        };

        state.pointStart = {
            X: e.pageX,
            Y: e.pageY
        }

        state.selectBox = {
            top: state.pointStart.Y-state.tablePoint.Y+1,
            left: state.pointStart.X-state.tablePoint.X+1,
            width: 0,
            height: 0
        }

        state.moving = true;

        this.setState(state);
    },

    mouseUp: function(day, hour) {
        var state = this.state;

        if (!state.mouseDown) {
            return;
        };
        state.groupEnd = {
            day: day,
            hour: hour
        };

        state.moving = false;
        state.mouseDown = false;
        // this.setState(state);
        if (state.groupEnd.day === state.groupStart.day && state.groupEnd.hour === state.groupStart.hour) {
            this.singleSelect(day, hour, _.contains(state.timeRange, (day*24+hour).toString()))
        } else {
            this.groupSelect();
        }
    },

    mouseMove: function(e) {
        var state = this.state;

        if (!state.moving) {
            return;
        }

        state.groupEnd = {
            day: parseInt((e.pageY-state.tablePoint.Y-44)/(this.props.perHeight+1)),
            hour: parseInt((e.pageX-state.tablePoint.X-80)/(this.props.perWidth))
        };
        state.pointEnd = {
            X: e.pageX,
            Y: e.pageY
        };

        // 兼容从右下往左上拉
        // if (state.pointEnd.X < state.pointStart.X) {
        //     state.pointEnd.X =  state.pointStart.X - state.pointEnd.X;
        //     state.pointStart.X = state.pointStart.X - state.pointEnd.X;
        //     state.pointEnd.X =  state.pointStart.X + state.pointEnd.X;
        // }

        // if (state.pointEnd.Y < state.pointStart.Y) {
        //     state.pointEnd.Y =  state.pointStart.Y - state.pointEnd.Y;
        //     state.pointStart.Y = state.pointStart.Y - state.pointEnd.Y;
        //     state.pointEnd.Y =  state.pointStart.Y + state.pointEnd.Y;
        // }

        if (state.pointEnd.X < state.pointStart.X) {
            state.selectBox.left = state.pointEnd.X-state.tablePoint.X+1;
        }

        if (state.pointEnd.Y < state.pointStart.Y) {
            state.selectBox.top = state.pointEnd.Y-state.tablePoint.Y+1;
        }


        state.selectBox.width = Math.abs(state.pointEnd.X-state.pointStart.X-2);
        state.selectBox.height = Math.abs(state.pointEnd.Y-state.pointStart.Y-2);

        // state.selectBox = {
        //     width:
        //     height: state.pointEnd.Y-state.pointStart.Y-2
        // }

        this.setState(state);
    },

    groupSelect: function() {
        var that = this,
            state = this.state,
            prop = this.props,
            timeRange = state.timeRange,
            groupStart = {},
            groupEnd = {};

            // groupStart = state.groupStart;
            // groupEnd = state.groupEnd;

        groupStart = {
            day: state.groupStart.day <= state.groupEnd.day ? state.groupStart.day : state.groupEnd.day,
            hour: state.groupStart.hour <= state.groupEnd.hour ? state.groupStart.hour : state.groupEnd.hour
        };

        groupEnd = {
            day: state.groupStart.day <= state.groupEnd.day ? state.groupEnd.day : state.groupStart.day,
            hour: state.groupStart.hour <= state.groupEnd.hour ? state.groupEnd.hour : state.groupStart.hour
        };

        var isFixed = true,
            tempRange = [];

        var start = groupStart.day*24+groupStart.hour;
        var end = groupEnd.day*24+groupEnd.hour;

        for (var day = groupStart.day; day<=groupEnd.day; day++) {
            for (var index = (day*24+groupStart.hour); index<=(day*24+groupEnd.hour); index++) {
                isFixed = isFixed && _.contains(state.timeRange, index.toString());
                tempRange.push(index.toString());
            }
        }

        var remindText = this.props.weekData[groupStart.day]+'至'+this.props.weekData[groupEnd.day]+groupStart.hour+':00-'+(groupEnd.hour+1)+':00，'+(isFixed ? '取消': '选择')+'在该时段内推广';

        Modal.confirm(remindText, function(){
            if (isFixed) {
                timeRange = _.filter(timeRange, function (value){return !_.contains(tempRange, value)});
            } else {
                for (var i=0; i<tempRange.length; i++){
                    if (!_.contains(timeRange, tempRange[i])){
                        timeRange.push(tempRange[i]);
                    }
                }
            }

            that.setTime(timeRange);

        });
    },

    singleSelect: function(day, hour, isFixed) {
        var that = this,
            state = this.state,
            prop = this.props,
            timeRange = state.timeRange;

        var remindText = this.props.weekData[day]+hour+':00-'+(hour+1)+':00，'+(isFixed ? '取消': '选择')+'在该时段内推广';
        Modal.confirm(remindText, function(){
            var num = (day*24+hour).toString();
            if (isFixed) {
                timeRange = _.filter(timeRange, function (value){return value != num});
            } else {
                timeRange.push(num);
            }

            that.setTime(timeRange);
        });
    },

    // 确认选择时段回调
    intRender:function(timeRange){
        var state = this.state,
            that = this;
        state.timeRange = timeRange;
        state.selectBox = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        };
        state.groupStart = {
            day: -1,
            hour: -1
        };
        state.groupEnd = {
            day: -1,
            hour: -1
        };
        that.setState(state);
        Modal.close();
    },

    //设置时间段
    setTime: function(timeRange) {
        var that = this,
            prop = this.props,
            state = this.state,
            requestUrl = prop.requestUrl?prop.requestUrl:false,
            requestData = {timeRange: timeRange.join(';')};

        if(!requestUrl){
            that.intRender(timeRange);
        }else{
            requestData.itemId = itemId;
            $.post(requestUrl, requestData, function(retData, textStatus, xhr){
                if(retData.status.code == 1001){
                    that.intRender(timeRange);
                }else{
                    Modal.alert(retData.result.msg || retData.status.msg);
                }
            }, 'json');
        }

        //像父组件传时间点字段
        PubSub.publish('timeRange', requestData);

    }
});

module.exports = TimesView;