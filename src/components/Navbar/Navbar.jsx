import React from "react";
import "./navbar.css";
import { FiAlignRight } from "react-icons/fi";
import { Navigation } from "../data/common";
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    return (
        <div className="navbar">
            <div className="links">
            <div>
            {
                Navigation.map(navigator=> <a href={navigator.url} className={navigator.type}>{navigator.name}</a>)
            }
            </div>
            </div>
            <div className="toggle-links" onClick={() => { setToggleMenu(prev => !prev) }}>
                <FiAlignRight className="hamburger-icon" />
            </div>
            {toggleMenu
                ?
                <div className="toggle-menu">
                    <Links />
                </div>
                :
                null}
        </div>
    );
};
export default Navbar;
