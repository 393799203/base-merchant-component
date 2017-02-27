import React, { Component, PropTypes } from 'react';
import SubMenu from 'SubMenu';
import './style/index.less';

export default class Menu extends Component {

    static defaultProps = {
        menus: []
    };
    static propTypes = {
        menus: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state =  {

        };
    }

    componentDidMount() {

    }

    // bindHover(e){
    //
    //     console.log(e.target);
    //     let parentId = $(e.target).attr('data-id');
    //     var list = this.state.menu;
    //     let menus = list.length && list.filter((v)=>{
    //        return v.id == parentId;
    //     });
    //     this.setState({currentMenu: menus[0]});
    //
    // }

    render() {
        let menus = this.props.menus;

        return (
            <div className="menu-box">
                <ul className="menu-bd">
                    { menus && menus.map( ( item, key ) => {
                        return (
                            <li className="menu-item" key={key}>
                                <a className="item" href={item.link} data-id={item.id} >{item.title}</a>
                                <SubMenu menus={item.items} title={item.title} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

