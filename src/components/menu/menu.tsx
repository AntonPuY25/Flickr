import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../navigation/navigation";



const Menu = () => {
    return <>
      <div>
          <NavLink to={PATH.search}>Search</NavLink>
      </div>
       <div>
           <NavLink to={PATH.bookmarks}>Bookmarks</NavLink>
       </div>
    </>

}


export default Menu;