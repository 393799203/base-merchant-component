import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LayoutView from './layout/tpl.sidePage';
import FullPageView from './layout/tpl.fullPage';

import HomeView from './pages/home';
import CSSView from './pages/css';
import DocView from './pages/doc';
import DataView from './pages/data';
import RuleView from './pages/rule';

import TabView from './pages/tab';
import PagerView from './pages/pager';
import PaginationView from './pages/pagination';
import NotificationView from './pages/notification';
import TooltipView from './pages/tooltip';
import SwitchTabView from './pages/compontents/tab';
import PanelView from './pages/compontents/panel';
import GridView from './pages/layout/grid';

import DatePickerView from './pages/datepicker';

export default (
    <Router history={hashHistory}>
        <Route path='/' component={FullPageView}>
            <IndexRoute component={HomeView} />
            <Route path='css' component={CSSView} />
            <Route path='doc' component={DocView} />
            <Route path='data' component={DataView} />
            <Route path='rule' component={RuleView} />
        </Route>
        <Route component={LayoutView}>
            <Route path='grid' component={GridView} />
            <Route path='panel' component={PanelView} />
            <Route path='tab' component={TabView} />
            <Route path='pager' component={PagerView} />
            <Route path='pagination' component={PaginationView} />
            <Route path='notification' component={NotificationView} />
            <Route path='tooltip' component={TooltipView} />
            <Route path='switchtab' component={SwitchTabView} />
            <Route path='datepicker' component={DatePickerView} />
        </Route>
    </Router>
);
