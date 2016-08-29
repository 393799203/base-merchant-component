import React from 'react';
import { Link } from 'react-router';

require('./style/navigation.less');

const MenuBar = React.createClass({

    getInitialState: function() {
        return {
            barList:this.props.barList
        };
    },

    //页面初始化，左侧导航默认选中
    componentWillMount: function() {
        var barList = this.state.barList;
        var activeUrl1 = window.location.href.split("?");

        if(activeUrl1.length){
            var activeUrl2 = activeUrl1[0].split("/");
            var item = 0;
            if(activeUrl2.length > 3 && activeUrl2[activeUrl2.length-1]){
                var activeurl = activeUrl2[activeUrl2.length-1];

                for(var i = 0;i<barList.length;i++){
                    var url = barList[i].linkUrl.split("/");
                    if(url.length>1 && url[1] == activeurl){
                        item = i;
                        break;
                    }
                }
                this.handleClick( item ,  barList );
            }
        }
    },

    //点击左侧导航，修改选中样式
    handleClick( index ,  items ){

        items.find( item  => {
            if( item.isCurrent ){
                item.isCurrent = false;
                return true;
            }else{
                return false;
            }
        });
        items[ index ].isCurrent = true;
    },

    render(){
        let barList = this.state.barList;
        return(
            <div className="navigation">
                <ul>
                    {barList.map( ( item , index ) => {
                        return(
                            <li key={ index } className={ item.isCurrent ? 'active' : '' }>
                                <Link to={ item.linkUrl } 
                                    onClick={ ( e ) => this.handleClick( index , barList ) }>
                                    <span>{ item.permissionName }</span>
                                </Link>
                            </li>
                        )}	
                    )}
                </ul>
            </div>
        );
    }
});

module.exports = MenuBar;

