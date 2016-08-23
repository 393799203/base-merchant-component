/**
 * Author : lixi
 * Date : 16/7/21
 * Description :
 */
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.less';
const MyComponent = React.createClass({
    render(){
        return <h1 className = 'c'>this is MyComponent</h1>;
    },
});

export default MyComponent;