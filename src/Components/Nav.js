import React, { useState } from "react";
import "../Styles/Nav.scss";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const Nav = () => {
	const [showNav, setShowNav] = useState(false);
	const linkStyle = {
		textDecoration: "none",
		color: "white",
	};
	const [contactView, setContactView] = useState(false);
	return (
		<div className="nav-container">
			{showNav ? (
				<div className="nav">
					<Link to="/about" style={linkStyle}>
						<div className="nav__item">About</div>
					</Link>
					<Link to="/projects" style={linkStyle}>
						<div className="nav__item">Projects</div>
					</Link>
					<div
						className="nav__item"
						onClick={() => setContactView((prev) => !prev)}
					>
						Contact
					</div>
					{contactView ? <Contact /> : ""}
				</div>
			) : (
				""
			)}

			<div className="nav-menu" onClick={() => setShowNav((prev) => !prev)}>
				{showNav ? <MenuOpenIcon /> : <MenuIcon />}
			</div>
		</div>
	);
};

export default Nav;
