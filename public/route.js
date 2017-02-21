import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LayoutView from './layout/tpl.sidePage';
import FullPageView from './layout/tpl.fullPage';

import HomeView from './pages/home';
import CSSView from './pages/css';
import DocView from './pages/doc';
import DataView from './pages/data';
import RuleView from './pages/rule';

import GridView from './pages/layout/grid';
import PagerView from './pages/pager';
import PaginationView from './pages/pagination';
import NotificationView from './pages/notification';
import TooltipView from './pages/tooltip';
import TabView from './pages/compontents/tab';
import TagView from './pages/tag';
import PanelView from './pages/compontents/panel';
import ImageUploaderView from './pages/compontents/image-uploader';
import SliderView from './pages/compontents/slider';
import TeamtalkView from './pages/teamtalk';
import AreaCodeView from './pages/area-code';
import AddressView from './pages/address';
import FullAddressView from './pages/full-address';
import VerifyIdentyView from './pages/verify-identy';
import VerifyPhoneView from './pages/verify-phone';

import DatepickerView from './pages/datepicker';
import MonthpickerView from './pages/monthpicker';
import RangepickerView from './pages/rangepicker';
import TimepickerView from './pages/timepicker';
import ModalView from './pages/modal';
import TableView from './pages/table';
import SelectView from './pages/select';
import ButtonView from './pages/button';
import FieldView from './pages/field';
import ProcessBarView from './pages/process-bar';
import WrapperView from './pages/wrapper';

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
            <Route path='tag' component={TagView} />
            <Route path='pager' component={PagerView} />
            <Route path='pagination' component={PaginationView} />
            <Route path='notification' component={NotificationView} />
            <Route path='modal' component={ModalView} />
            <Route path='tooltip' component={TooltipView} />
            <Route path='image-uploader' component={ImageUploaderView} />
            <Route path='table' component={TableView} />
            <Route path='select' component={SelectView} />
            <Route path='slider' component={SliderView} />
            <Route path='button' component={ButtonView} />
            <Route path='process-bar' component={ProcessBarView} />
            <Route path='wrapper' component={WrapperView} />

            <Route path='field' component={FieldView} />
            <Route path='datepicker' component={DatepickerView} />
            <Route path='monthpicker' component={MonthpickerView} />
            <Route path='rangepicker' component={RangepickerView} />
            <Route path='timepicker' component={TimepickerView} />

            <Route path='teamtalk' component={TeamtalkView} />
            <Route path='areacode' component={AreaCodeView} />
            <Route path='address' component={AddressView} />
            <Route path='fulladdress' component={FullAddressView} />
            <Route path='verifyidenty' component={VerifyIdentyView} />
            <Route path='verifyphone' component={VerifyPhoneView} />

        </Route>
    </Router>
);
