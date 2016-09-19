import React from 'react';
import { Router, Route, IndexRoute, Redirect, useRouterHistory,hashHistory } from 'react-router';
import {createHashHistory} from 'history';
import LayoutView from './layout/index';
import FullPageView from './layout/fullPage';
import HomeView from './pages/home/index';
import ModalView from './pages/modal/index';
import UpModalView from './pages/upModal/index';
import ConfirmView from './pages/confirm/index';
import NotificationView from './pages/notification/index';
import DatepickerView from './pages/datepicker/index';
import FieldView from './pages/field/index';
import PaginationView from './pages/pagination/index';
import SliderView from './pages/slider/index';
import TabView from './pages/tab/index';
import TableView from './pages/table/index';

const history = useRouterHistory(createHashHistory)({queryKey: false});
export default (
    <Router history={hashHistory}>
        <Route path='/' component={FullPageView}>
            <IndexRoute component={HomeView}/>
        </Route>
        <Route component={LayoutView}>
            <Route path='modal' component={ModalView}/>
            <Route path='upModal' component={UpModalView}/>
            <Route path='confirm' component={ConfirmView}/>
            <Route path='notification' component={NotificationView}/>
            <Route path='datepicker' component={DatepickerView}/>
            <Route path='field' component={FieldView}/>
            <Route path='pagination' component={PaginationView}/>
            <Route path='slider' component={SliderView}/>
            <Route path='tab' component={TabView}/>
            <Route path='table' component={TableView}/>
        </Route>
    </Router>
);
