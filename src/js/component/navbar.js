import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<button className="buttonGo btn ms-5"  style={{ background: 'rgb(205, 205, 225)' ,  colour: 'rgb(205, 205, 225)' }}>CL Go Home</button>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="buttonSurf btn me-5" style={{ background: 'rgb(64, 64, 173)',  colour: 'rgb(205, 205, 225)'}} >CL Surf Contact</button>
				</Link>
			</div>
		</nav>
	);
};


