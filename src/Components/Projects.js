import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import "../Styles/Projects.scss";
import Nav from "./Nav";

const Projects = () => {
	return (
		<div className="projects">
			<Nav />
			{/* Hulu clone */}
			<div className="project">
				<div className="project__title">Hulu Clone</div>
				<div className="project__domain">Web Dev</div>
				<div className="project__tools">
					<div className="project__tools-item">React JS</div>
					<div className="project__tools-item">TMDB api</div>
					<div className="project__tools-item">React Router</div>
				</div>
				<div className="project__links">
					<a
						href="https://github.com/mahessh77melo/hulu-clone"
						className="project__link"
					>
						<GitHubIcon />
					</a>
					<a
						href="https://hulu-clone-f9922.web.app/"
						className="project__link link-web"
					>
						<WebIcon />
					</a>
				</div>
			</div>
			{/* Discord messenger clone */}
			<div className="project">
				<div className="project__title">Discord Messenger Clone</div>
				<div className="project__domain">Web Dev</div>
				<div className="project__tools">
					<div className="project__tools-item">React JS</div>
					<div className="project__tools-item">Google auth</div>
					<div className="project__tools-item">Firebase realtime db</div>
				</div>
				<div className="project__links">
					<a
						href="https://github.com/mahessh77melo/DiscordClone"
						className="project__link"
					>
						<GitHubIcon />
					</a>
					<a
						href="https://discord-react-d789f.web.app/"
						className="project__link link-web"
					>
						<WebIcon />
					</a>
				</div>
			</div>
			{/* Discord bot */}
			<div className="project">
				<div className="project__title">The Movie Nerd</div>
				<div className="project__domain">Discord Bot</div>
				<div className="project__tools">
					<div className="project__tools-item">Discord.js</div>
					<div className="project__tools-item">TMDB api</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/Discord_bot"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
			{/* Forkify */}
			<div className="project">
				<div className="project__title">Forkify</div>
				<div className="project__domain">Web Dev</div>
				<div className="project__tools">
					<div className="project__tools-item">JavaScript</div>
					<div className="project__tools-item">AJAX</div>
					<div className="project__tools-item">Parcel</div>
				</div>
				<div className="project__links">
					<a
						href="https://github.com/mahessh77melo/forkify-mahesh/tree/master/18-forkify/starter"
						className="project__link"
					>
						<GitHubIcon />
					</a>
					<a
						href="https://forkify-by-walter-white.netlify.app/"
						className="project__link link-web"
					>
						<WebIcon />
					</a>
				</div>
			</div>
			{/* JS behind the scenes */}
			<div className="project">
				<div className="project__title">JS behind the scenes</div>
				<div className="project__domain">Markdown</div>
				<div className="project__tools">
					<div className="project__tools-item">JavaScript</div>
					<div className="project__tools-item">AJAX</div>
					<div className="project__tools-item">OOP</div>
					<div className="project__tools-item">JS engines</div>
					<div className="project__tools-item">ESnext</div>
				</div>
				<div className="project__links">
					<a
						href="https://github.com/mahessh77melo/JS-behind-the-scenes"
						className="project__link"
					>
						<GitHubIcon />
					</a>
				</div>
			</div>
			{/* Doctor.com */}
			<div className="project">
				<div className="project__title">Doctor.com</div>
				<div className="project__domain">Full stack</div>
				<div className="project__tools">
					<div className="project__tools-item">MongoDB</div>
					<div className="project__tools-item">AJAX</div>
					<div className="project__tools-item">Node.js</div>
					<div className="project__tools-item">Express</div>
					<div className="project__tools-item">scss</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/graphql-react-hooks"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
			{/* JS jonas - Natours */}
			<div className="project">
				<div className="project__title">Natours</div>
				<div className="project__domain">Web Design</div>
				<div className="project__tools">
					<div className="project__tools-item">scss</div>
					<div className="project__tools-item">css</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/Natours-SCSS"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
			{/* Flask covid project */}
			<div className="project">
				<div className="project__title">Covid Tracker</div>
				<div className="project__domain">Web dev</div>
				<div className="project__tools">
					<div className="project__tools-item">Python</div>
					<div className="project__tools-item">covid package</div>
					<div className="project__tools-item">chart.js</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/Natours-SCSS"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
			{/* graphQL */}
			<div className="project">
				<div className="project__title">GraphQL playground</div>
				<div className="project__domain">Web dev</div>
				<div className="project__tools">
					<div className="project__tools-item">graphQL</div>
					<div className="project__tools-item">React JS</div>
					<div className="project__tools-item">react hooks</div>
					<div className="project__tools-item">apollo-server</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/graphql-react-hooks"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
			{/* Lebron james data analysis */}
			<div className="project">
				<div className="project__title">Lebron James Analysis</div>
				<div className="project__domain">Data Analysis</div>
				<div className="project__tools">
					<div className="project__tools-item">Python</div>
					<div className="project__tools-item">pandas</div>
					<div className="project__tools-item">matplotlib</div>
					<div className="project__tools-item">jupyter notebook</div>
				</div>
				<a
					href="https://github.com/mahessh77melo/kingjames"
					className="project__link"
				>
					<GitHubIcon />
				</a>
			</div>
		</div>
	);
};

export default Projects;
