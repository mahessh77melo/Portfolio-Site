import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import "../Styles/Contact.scss";

const Contact = () => {
	const copyToClipboard = (element) => {
		// function
		console.log(element.querySelector(".contacts__item-overlay"));
		const text = element.innerText;
		const textField = document.createElement("textarea");
		textField.innerText = text;
		document.body.appendChild(textField);
		textField.select();
		textField.setSelectionRange(0, 99999);
		document.execCommand("copy");
		document.body.removeChild(textField);
	};
	return (
		<div className="contacts">
			<a
				href="https://drive.google.com/file/d/1i1kNg_lZcIIzLdz87LUuupIr3mSV3xfA/view?usp=sharing"
				className="contacts__item contacts__item--1"
			>
				<DescriptionIcon />
				<div className="contacts__item-overlay contacts__item-overlay-1">
					Resume Doc
					<span className="triangle"></span>
				</div>
			</a>
			<a
				href="https://github.com/mahessh77melo/"
				className="contacts__item contacts__item--2"
			>
				<GitHubIcon />
				<div className="contacts__item-overlay contacts__item-overlay-2">
					mahessh77melo
					<span className="triangle"></span>
				</div>
			</a>
			<div
				onClick={(e) => copyToClipboard(e.target.closest(".contacts__item"))}
				className="contacts__item contacts__item--3"
			>
				<InstagramIcon />
				<div className="contacts__item-overlay contacts__item-overlay-3">
					@brutall_geek
					<span className="triangle"></span>
				</div>
			</div>
			<a
				href="https://twitter.com/brutall_geek"
				className="contacts__item contacts__item--4"
			>
				<TwitterIcon />
				<div className="contacts__item-overlay contacts__item-overlay-4">
					@brutall_geek
					<span className="triangle"></span>
				</div>
			</a>
			<div
				className="contacts__item contacts__item--5"
				onClick={(e) => copyToClipboard(e.target.closest(".contacts__item"))}
			>
				<img
					src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg"
					alt="Discord"
				/>
				<div className="contacts__item-overlay contacts__item-overlay-5">
					kingJames#2472
					<span className="triangle"></span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
