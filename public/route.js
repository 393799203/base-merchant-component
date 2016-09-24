import React from 'react';
import { Router, Route, IndexRoute, Redirect, useRouterHistory,hashHistory } from 'react-router';
import {createHashHistory} from 'history';
import LayoutView from './layout';
import FullPageView from './layout/fullPage';
import HomeView from './pages/home';
import ModalView from './pages/modal';
import UpModalView from './pages/upModal';
import ConfirmView from './pages/confirm';
import NotificationView from './pages/notification';
import DatepickerView from './pages/datepicker';
import FieldView from './pages/field';
import PaginationView from './pages/pagination';
import SliderView from './pages/slider';
import TabView from './pages/tab';
import ProcessBarView from './pages/processBar';
import UploadImgView from './pages/uploadImg';
import TableView from './pages/table';

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
            <Route path='processBar' component={ProcessBarView}/>
            <Route path='uploadImg' component={UploadImgView}/>
            <Route path='table' component={TableView}/>
        </Route>
    </Router>
);
