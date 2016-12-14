import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LayoutView from './layout/tpl.sidePage';
import FullPageView from './layout/tpl.fullPage';

import HomeView from './pages/home';
import CSSView from './pages/css';
import DocView from './pages/doc';

import TabView from './pages/tab';
import PaginationView from './pages/pagination';

export default (
    <Router history={hashHistory}>
        <Route path='/' component={FullPageView}>
            <IndexRoute component={HomeView} />
            <Route path='css' component={CSSView} />
            <Route path='doc' component={DocView} />
        </Route>
        <Route component={LayoutView}>
            <Route path='tab' component={TabView} />
            <Route path='pagination' component={PaginationView} />
        </Route>
    </Router>
);
