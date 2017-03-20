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
import FormView from './_module/form';
import './style/index.less';

export default class CSSAllView extends Component {
    render () {
        return (
            <div>
                <GridView num={1} />
                <BgView num={2} />
                <ButtonView num={3} />
                <FormView num={4} />
                <TextView num={5} />
                <TableView num={6} />
                <PanelView num={7} />
                <UtilView num={8} />
                <IconView num={9} />
            </div>
        );
    }
}
/* eslint-enable */

