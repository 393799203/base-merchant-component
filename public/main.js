import React from 'react'
import ReactDOM from 'react-dom'

import MyComponent from '../src/MyComponent/index.js';
import routes from './route.js'

var root = document.getElementById('main-wrapper');

ReactDOM.render( routes , root);
//ReactDOM.render( <MyComponent></MyComponent> , root);