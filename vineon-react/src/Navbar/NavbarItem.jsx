import React from "react";
import "./NavbarItem.css";
import {Link} from "react-router-dom";

export const NavbarItem = ({path, title, callback}) => {
    return(
        <button className="navbar-item" type="button">
            <Link to={path} onClick={callback?callback():null}>
                {title}
            </Link>
        </button>
    );
}
