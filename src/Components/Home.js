import React from "react";
import "../Styles/Home.scss";
import Nav from "./Nav";

const Home = () => {
	return (
		<div className="home">
			<Nav />
			<div className="center">
				<div className="center__title">
					Hey, this is <span className="name">MaHesh</span>
				</div>
				<div className="center__description">
					Trying to put a smile on everyone's face.
				</div>
			</div>
		</div>
	);
};

export default Home;
