const React = require('react');

require('./style/head.less');

const MenuBar = React.createClass({

  render() {
    return (
        <div className="head-title">
            小店组件
        </div>
    );
  }
});
module.exports = MenuBar;
