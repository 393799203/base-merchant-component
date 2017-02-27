import React, { Component, PropTypes } from 'react';

export default class SubMenu extends Component {

    static defaultProps = {
        menus: [],
        title: ''
    };
    static propTypes = {
        menus: PropTypes.array.isRequired,
        title: propTypes.string
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
        let items = this.props.menus;
        let title = this.props.title;

        function MenuItem(props){
            const color = props.titleColor ? { 'color': props.titleColor } : null;
            return (
                <a className="item-link" id={props.id} href={props.link} style={color}>{props.title}</a>
            );
        }
        function MySubMenu(props){
            if(props.items && props.items.length > 0){
                return (
                    <div className="sub-menu">
                        <div className="sub-title">{props.title}</div>
                        <div className="sub-bd">
                            { props.items.map( ( it ,key) => {
                                return <MenuItem id={it.id} title={it.title} link={props.link} titleColor={props.titleColor} key={key} />
                            })}
                        </div>

                    </div>
                )
            }else{
                return <div></div>
            }
        }

        return (
            <MySubMenu items={items} title={title} />
        )
    }
}

