import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from "../navigation/navigation";
import s from './menu.module.scss'


const Menu = () => {
    return <div className={s.container}>
        <div>
            <NavLink to={PATH.bookmarks}>Bookmarks</NavLink>
        </div>
    </div>

}


export default Menu;