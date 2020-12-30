import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/Projects.scss";

const Projects = () => {
	return (
		<div className="projects">
			<div className="project">
				<div className="project__title">Hulu Clone</div>
				<div className="project__domain">Web Dev</div>
				<div className="project__tools">
					<div className="project__tools-item">React JS</div>
					<div className="project__tools-item">TMDB api</div>
					<div className="project__tools-item">React Router</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/hulu-clone"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
			<div className="project">
				<div className="project__title">Hulu Clone</div>
				<div className="project__domain">Web Dev</div>
				<div className="project__tools">
					<div className="project__tools-item">React JS</div>
					<div className="project__tools-item">TMDB api</div>
					<div className="project__tools-item">React Router</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/hulu-clone"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
		</div>
	);
};

export default Projects;
