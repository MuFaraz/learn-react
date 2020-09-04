import React from 'react'
import {NavLink} from 'react-router-dom'; //use can also use Link 
import '../App.css';

const Menu =()=>{
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
        <NavLink exact activeClassName="active_class" to="/About">About</NavLink>
        </>
    )
}
export default Menu;