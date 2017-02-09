import React from 'react';
import './style/index.less';

var Tag = React.createClass({
    propTypes: {
        color: React.PropTypes.string,
        closeable: React.PropTypes.bool,
        afterClose: React.PropTypes.func,
        circle: React.PropTypes.bool
    },

    close(e){
        e.target.parentNode.style.display = "none";
        this.props.afterClose ? this.props.afterClose() : null;
    },

    render(){
        let {color,afterClose,circle,closeable} = this.props;
        let clsName = 'wrap ';
        clsName += ['red','blue','green'].indexOf(color) == -1 ? 'default' : color;
        clsName += circle ? ' circle' : '';
        return (<div className={clsName}>
          {this.props.children}
          {
            closeable ? (<span className='closeBtn' onClick={this.close}>x</span>) : null
          }
        </div>);
    }
});

module.exports = Tag;