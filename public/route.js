import React from 'react';
import { Router, Route, IndexRoute, Redirect, useRouterHistory,hashHistory } from 'react-router';
import {createHashHistory} from 'history';
import LayoutView from './layout';
import FullPageView from './layout/fullPage';
import CSSView from './pages/css';
import DocView from './pages/doc';

import HomeView from './pages/home';
import ModalView from './pages/modal';
import UpModalView from './pages/upModal';
import ConfirmView from './pages/confirm';
import NotificationView from './pages/notification';
import DatepickerView from './pages/datepicker';
import FieldView from './pages/field';

import FormView from './pages/form';
import PaginationView from './pages/pagination';
import SliderView from './pages/slider';
import TabView from './pages/tab';
import ProcessBarView from './pages/processBar';
import UploadImgView from './pages/uploadImg';
import TableView from './pages/table';

import SelectView from './pages/select';
import AddressView from './pages/addressSelector';

const history = useRouterHistory(createHashHistory)({queryKey: false});
export default (
    <Router history={hashHistory}>
        <Route path='/' component={FullPageView}>
            <IndexRoute component={HomeView}/>
            <Route path='css' component={CSSView}/>
            <Route path='doc' component={DocView}/>
        </Route>
        <Route component={LayoutView}>
            <Route path='modal' component={ModalView}/>
            <Route path='upModal' component={UpModalView}/>
            <Route path='confirm' component={ConfirmView}/>
            <Route path='notification' component={NotificationView}/>
            <Route path='datepicker' component={DatepickerView}/>
            <Route path='field' component={FieldView}/>
            <Route path='form' component={FormView}/>
            <Route path='pagination' component={PaginationView}/>
            <Route path='slider' component={SliderView}/>
            <Route path='tab' component={TabView}/>
            <Route path='processBar' component={ProcessBarView}/>
            <Route path='uploadImg' component={UploadImgView}/>
            <Route path='table' component={TableView}/>
            <Route path='select' component={SelectView}/>
            <Route path='address' component={AddressView}/>
        </Route>
    </Router>
);
