import React from 'react'
import { Router , Route, IndexRoute, Redirect , hashHistory } from 'react-router'

import CoreLayout from '../layout/index';
import Home from '../demo/home/index';
import Modal from '../demo/modal/index';
import Field from '../demo/field/index';
import PageNav from '../demo/pageNav/index';
import Pagination from '../demo/pagination/index';
import AddressEditor from '../demo/addressEditor/index';
import Breadcrumb from '../demo/breadcrumb/index';
import Countdown from '../demo/countdown/index';
import Placeholder from '../demo/placeholder/index';
import ProcessBar from '../demo/processBar/index';
import RecordPublisher from '../demo/recordPublisher/index';
import ImageSlide from '../demo/imageSlide/index';
import Stars from '../demo/stars/index';
import ToolTip from '../demo/toolTip/index';
import ImageUploader from '../demo/ImageUploader/index';
import FileUploader from '../demo/fileUploader/index';
import TimesView from '../demo/timesView/index';
import Capture from '../demo/capture/index';
import TeamTalk from '../demo/teamTalk/index';

export default (
    <Router history={ hashHistory } >
        <Route path='/' component={CoreLayout} >
            <IndexRoute component={Home} />
            <Route path='/modal' component={Modal}/>
            <Route path='/field' component={Field}/>
            <Route path='/pageNav' component={PageNav}/>
            <Route path='/pagination' component={Pagination}/>
            <Route path='/addressEditor' component={AddressEditor}/>
            <Route path='/breadcrumb' component={Breadcrumb}/>
            <Route path='/countdown' component={Countdown}/>
            <Route path='/placeholder' component={Placeholder}/>
            <Route path='/processBar' component={ProcessBar}/>
            <Route path='/recordPublisher' component={RecordPublisher}/>
            <Route path='/imageSlide' component={ImageSlide}/>
            <Route path='/stars' component={Stars}/>
            <Route path='/toolTip' component={ToolTip}/>
            <Route path='/imageUploader' component={ImageUploader}/>
            <Route path='/fileUploader' component={FileUploader}/>
            <Route path='/timesView' component={TimesView}/>
            <Route path='/capture' component={Capture}/>
            <Route path='/teamTalk' component={TeamTalk}/>
        </Route>
    </Router>
);
