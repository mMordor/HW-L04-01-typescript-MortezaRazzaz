import React from 'react'
import style from './NavBar.module.scss'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className={style.bar}>
            
        <NavLink className={({isActive})=> isActive ? style.selected : style.unselected} to={"/income"}>
            <div>
               درآمد
            </div>
        </NavLink>

        <NavLink className={({isActive})=> isActive ? style.selected : style.unselected} to={"cost"}>
            <div>
               هزینه
            </div>
        </NavLink>
            
    </div>
  )
}

export default NavBar