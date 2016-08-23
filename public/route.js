import React from 'react';
import { Router, Route, IndexRoute, Redirect, useRouterHistory,hashHistory } from 'react-router';
import {createHashHistory} from 'history';
import { MyComponent } from '../src/MyComponent/index.js';

const history = useRouterHistory(createHashHistory)({queryKey: false});
export default (
    <Router history={hashHistory}  >
        <Route path='/' component={MyComponent}>
            <IndexRoute
                getComponent={(location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('../src/MyComponent/index.js'));
                    });
                } }
                />
        </Route>
    </Router>
);
