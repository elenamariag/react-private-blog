import React from "react";
import {NavLink} from "react-router-dom";
import styles from './navigation.css';

function Navigation (){
    return (
        <nav>
            <ul className="menu-box">
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/Login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/Blogs">Blogs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;