import  { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss"

type MenuItemsProps = {
    icon: ReactNode,
    title: string ,
    to: string , 
}

const MenuItem: React.FC<MenuItemsProps> = ({icon , title , to}) => {
    return ( 
        <NavLink className="menu-item" to={to}>
            {icon}
            <span className="title">{title}</span>
        </NavLink>
     );
}

export default MenuItem;