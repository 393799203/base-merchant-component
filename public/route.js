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
import CSSFormView from './pages/css/_module/form';

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
import LazyLoadView from './pages/compontents/lazyload';
import LazyLoadRegularDemo from './pages/compontents/lazyload/regular-demo';
import LazyLoadOverflowDemo from './pages/compontents/lazyload/overflow-demo';
import TeamtalkView from './pages/teamtalk';
import AreaCodeView from './pages/area-code';
import SwitchView from './pages/switch';
import RateView from './pages/rate';
import SliderBarView from './pages/sliderBar';
import TreeView from './pages/tree';
import TreeSelectView from './pages/tree-select';
import LayoutDemoView from './pages/layout';
import ModalView from './pages/modal';
import TableView from './pages/table';
import SelectView from './pages/select';
import ButtonView from './pages/button';
import WrapperView from './pages/wrapper';
import MenuCateView from './pages/menu-cate';
import DropdownView from './pages/dropdown';
import PopoverView from './pages/popover';

// youyou demo
import DatepickerView from './pages/yy-component-demo/datepicker';
import MonthpickerView from './pages/yy-component-demo/monthpicker';
import RangepickerView from './pages/yy-component-demo/rangepicker';
import TimepickerView from './pages/yy-component-demo/timepicker';
import BarCharts from './pages/yy-component-demo/barcharts';
import ChinaMapCharts from './pages/yy-component-demo/chinamapcharts';
import PieCharts from './pages/yy-component-demo/piecharts';
import LineCharts from './pages/yy-component-demo/linecharts';
import FieldView from './pages/yy-component-demo/field';
import FormView from './pages/yy-component-demo/form';
import AddressView from './pages/yy-component-demo/address';
import FullAddressView from './pages/yy-component-demo/full-address';
import VerifyIdentyView from './pages/yy-component-demo/verify-identy';
import VerifyPhoneView from './pages/yy-component-demo/verify-phone';
import ProcessBarView from './pages/yy-component-demo/process-bar';

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
            <Route path='css/form' component={CSSFormView} />
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
            <Route path='lazyload' component={LazyLoadView} />
            <Route path='lazyload-regular' component={LazyLoadRegularDemo} />
            <Route path='lazyload-overflow' component={LazyLoadOverflowDemo} />
            <Route path='image-uploader' component={ImageUploaderView} />
            <Route path='table' component={TableView} />
            <Route path='slider' component={SliderView} />
            <Route path='button' component={ButtonView} />
            <Route path='wrapper' component={WrapperView} />
            <Route path='dropdown' component={DropdownView} />
            <Route path='popover' component={PopoverView} />
            <Route path='switch' component={SwitchView} />
            <Route path='rate' component={RateView} />
            <Route path='sliderBar' component={SliderBarView} />
            <Route path='tree' component={TreeView} />
            <Route path='tree-select' component={TreeSelectView} />
            <Route path='teamtalk' component={TeamtalkView} />
            <Route path='layout' component={LayoutDemoView} />
            <Route path='menucate' component={MenuCateView} />
            <Route path='select' component={SelectView} />
            <Route path='areacode' component={AreaCodeView} />

            <Route path='yy-a-datepicker' component={DatepickerView} />
            <Route path='yy-a-monthpicker' component={MonthpickerView} />
            <Route path='yy-a-rangepicker' component={RangepickerView} />
            <Route path='yy-a-timepicker' component={TimepickerView} />
            <Route path='yy-b-field' component={FieldView} />
            <Route path='yy-c-bar' component={BarCharts} />
            <Route path='yy-c-chinamap' component={ChinaMapCharts} />
            <Route path='yy-c-pie' component={PieCharts} />
            <Route path='yy-c-line' component={LineCharts} />
            <Route path='yy-d-process-bar' component={ProcessBarView} />
            <Route path='yy-a-form' component={FormView} />
            <Route path='yy-b-address' component={AddressView} />
            <Route path='yy-b-fulladdress' component={FullAddressView} />
            <Route path='yy-c-verifyidenty' component={VerifyIdentyView} />
            <Route path='yy-c-verifyphone' component={VerifyPhoneView} />
        </Route>
    </Router>
);
