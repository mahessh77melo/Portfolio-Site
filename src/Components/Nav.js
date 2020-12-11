import React from "react";
import "../Styles/Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
	const linkStyle = {
		textDecoration: "none",
		color: "white",
	};
	return (
		<div className="nav">
			<Link to="/about" style={linkStyle}>
				<div className="nav__item">About</div>
			</Link>
			<Link to="/projects" style={linkStyle}>
				<div className="nav__item">Projects</div>
			</Link>
			<Link to="/interests" style={linkStyle}>
				<div className="nav__item">Interests</div>
			</Link>
			<Link to="/contact" style={linkStyle}>
				<div className="nav__item">Contact</div>
			</Link>
		</div>
	);
};

export default Nav;
