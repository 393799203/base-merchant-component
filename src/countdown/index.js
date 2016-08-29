var React = require('react');

var Countdown = React.createClass({
    getDefaultProps: function () {
        return {
            remaining: 0,
            showSecond: true,
            stopped: false
        };
    },

    getInitialState: function () {
        return this.calculate(this.props.remaining);
    },

    componentDidMount: function () {
        if (!this.props.stopped) {
            this.timer = setInterval(function () {
                this.setState(this.calculate(this.state.remaining - 1));
            }.bind(this), 1000);
        }
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },    

    calculate: function (remaining) {
        var state = {};

        if (remaining <= 0) {
            remaining = 0;
            clearInterval(this.timer);
        }

        state.remaining = remaining;
        state.day = Math.floor(remaining / 86400);
        remaining %= 86400;
        state.hour = Math.floor(remaining / 3600);
        remaining %= 3600;
        state.minute = Math.floor(remaining / 60);
        state.second = remaining % 60;

        return state;
    },

    render: function () {
        return (
            <div className="J_Countdown">
                <strong className="countdown-day" key="countdown-day">{this.state.day}</strong>天
                <strong className="countdown-hour" key="countdown-hour">{this.state.hour}</strong>时
                <strong className="countdown-minute" key="countdown-minute">{this.state.minute}</strong>分
                {this.props.showSecond ? [<strong className="countdown-second" key="countdown-second">{this.state.second}</strong>, '秒'] : ''}
            </div>
        );
    }
});

module.exports = Countdown;
