const React = require('react');

require('./index.less');

const PropTypes = React.PropTypes;

const Breadcrumb = React.createClass({
  propTypes: {
    breadList: PropTypes.array.isRequired,
    prefixCls: PropTypes.string
  },
  getDefaultProps() {
    return {
      prefixCls: 'xd'
    };
  },
  render() {
    const { prefixCls, breadList } = this.props;

    return (
      <div className={`${prefixCls}-breadcrumb-wrapper`}>
        <ol className={`${prefixCls}-breadcrumb`}>
          { breadList.map((item, index) =>
              <li className={ item.active ? 'active' : '' } key={ index }>
                <a href={item.url}>{item.title}</a>
              </li>
          )}
        </ol>
      </div>
    );
  }
});

Breadcrumb.propTypes = {
  breadList: PropTypes.array.isRequired,
  prefixCls: PropTypes.string
};

module.exports = Breadcrumb;
