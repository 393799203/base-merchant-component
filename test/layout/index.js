import React from 'react';
import Head from './head/head';
import Navigation from './navigation/navigation';
import { barList } from './barList';

require('../../base/less/base.less');
require('./style/index.less');

export default React.createClass({
    render(){
        return(
            <div>
                <Head />
                <Navigation barList={ barList } />
                <div id="content" className="demo-content">
                    <div className="app-content-body">
                        <h3>demo演示：</h3>
                        <div className="PL100 PT40 textL">
                            { this.props.children }
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
});
