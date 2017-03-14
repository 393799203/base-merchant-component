/* eslint-disable */
import React, { Component } from 'react';
import GridView from './_module/grid';
import BgView from './_module/bg';
import ButtonView from './_module/button';
import TextView from './_module/text';
import TableView from './_module/table';
import IconView from './_module/icon';
import PanelView from './_module/panel';
import UtilView from './_module/util';
import './style/index.less';

export default class CSSAllView extends Component {
    render () {
        return (
            <div>
                <GridView num={1} />
                <BgView num={2} />
                <ButtonView num={3} />
                <TextView num={4} />
                <TableView num={5} />
                <PanelView num={6} />
                <UtilView num={7} />
                <IconView num={8} />
            </div>
        );
    }
}
/* eslint-enable */

