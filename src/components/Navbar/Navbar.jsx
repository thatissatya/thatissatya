import React from "react";
import "./navbar.css";
import { FiAlignRight } from "react-icons/fi";
const Links = () => {
	return (
		<div>
			<a href="#home" className="link">
				Home
			</a>
			<a href="#skills" className="link">
				Skills
			</a>
		</div>
	);
};
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
	return (
		<div className="navbar">
			<div className="title">
			</div>
			<div className="links">
				<Links />
			</div>
			<div className="toggle-links" onClick={() => {setToggleMenu(prev => !prev)}}>
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
