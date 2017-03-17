import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LayoutView from './layout/tpl.sidePage';
import FullPageView from './layout/tpl.fullPage';

import HomeView from './pages/home';
import CSSView from './pages/css';
import CSSAllView from './pages/css/all';
import CSSBgView from './pages/css/_module/bg';
import CSSButtonView from './pages/css/_module/button';
import CSSGridView from './pages/css/_module/grid';
import CSSIconView from './pages/css/_module/icon';
import CSSPanelView from './pages/css/_module/panel';
import CSSTableView from './pages/css/_module/table';
import CSSTextView from './pages/css/_module/text';
import CSSUtilView from './pages/css/_module/util';

import DocView from './pages/doc';
import DataView from './pages/data';
import RuleView from './pages/rule';

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
import BarCharts from './pages/barcharts';
import ChinaMapCharts from './pages/chinamapcharts';
import PieCharts from './pages/piecharts';
import LineCharts from './pages/linecharts';
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
import FormView from './pages/form';
import ProcessBarView from './pages/process-bar';
import WrapperView from './pages/wrapper';
import MenuCateView from './pages/menu-cate';
import DropdownView from './pages/dropdown';

export default (
    <Router history={hashHistory}>
        <Route path='/' component={FullPageView}>
            <IndexRoute component={HomeView} />
            <Route path='css' component={CSSView} />
            <Route path='css/all' component={CSSAllView} />
            <Route path='css/bg' component={CSSBgView} />
            <Route path='css/button' component={CSSButtonView} />
            <Route path='css/grid' component={CSSGridView} />
            <Route path='css/icon' component={CSSIconView} />
            <Route path='css/panel' component={CSSPanelView} />
            <Route path='css/table' component={CSSTableView} />
            <Route path='css/text' component={CSSTextView} />
            <Route path='css/util' component={CSSUtilView} />
            <Route path='doc' component={DocView} />
            <Route path='data' component={DataView} />
            <Route path='rule' component={RuleView} />
        </Route>
        <Route component={LayoutView}>
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
            <Route path='slider' component={SliderView} />
            <Route path='button' component={ButtonView} />
            <Route path='process-bar' component={ProcessBarView} />
            <Route path='wrapper' component={WrapperView} />
            <Route path='dropdown' component={DropdownView} />

            <Route path='b-select' component={SelectView} />
            <Route path='b-field' component={FieldView} />
            <Route path='a-form' component={FormView} />
            <Route path='a-datepicker' component={DatepickerView} />
            <Route path='a-monthpicker' component={MonthpickerView} />
            <Route path='a-rangepicker' component={RangepickerView} />
            <Route path='a-timepicker' component={TimepickerView} />
            <Route path='a-areacode' component={AreaCodeView} />
            <Route path='a-address' component={AddressView} />
            <Route path='a-fulladdress' component={FullAddressView} />
            <Route path='a-verifyidenty' component={VerifyIdentyView} />
            <Route path='a-verifyphone' component={VerifyPhoneView} />

            <Route path='teamtalk' component={TeamtalkView} />
            <Route path='charts-bar' component={BarCharts} />
            <Route path='charts-chinamap' component={ChinaMapCharts} />
            <Route path='charts-pie' component={PieCharts} />
            <Route path='charts-line' component={LineCharts} />

            <Route path='menucate' component={MenuCateView} />

        </Route>
    </Router>
);
