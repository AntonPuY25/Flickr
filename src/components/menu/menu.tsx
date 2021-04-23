import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../navigation/navigation";
import s from './menu.module.scss'
import BookIcon from '@material-ui/icons/Book';
import CloudIcon from '@material-ui/icons/Cloud';
const Menu = () => {
    return <div className={s.container}>
        <div>
            <NavLink to={PATH.pictures+'/'+1}><CloudIcon  color={"inherit"} fontSize={"large"}/></NavLink>

        </div>
        <div>
            <NavLink to={PATH.bookmarks}><BookIcon  color={"inherit"} fontSize={"large"}/></NavLink>
        </div>
    </div>

}


export default Menu;