import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import "../Styles/Contact.scss";
import Alert from "./Alert";

const Contact = () => {
	const [showAlert, setShowAlert] = useState(false);
	const copyToClipboard = (element) => {
		// function
		console.log(element.querySelector(".contacts__item-overlay"));
		const text = element.innerText;
		// creating a text-area and inserting the text into it
		const textField = document.createElement("textarea");
		textField.innerText = text;
		document.body.appendChild(textField);
		textField.select();
		textField.setSelectionRange(0, 99999);
		//  this method copies the selected content
		document.execCommand("copy");
		// use and throw
		document.body.removeChild(textField);
		setShowAlert(true);
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
			<a
				href="https://www.linkedin.com/in/magesh-j-melo/"
				className="contacts__item contacts__item--6"
			>
				<LinkedInIcon />
				<div className="contacts__item-overlay contacts__item-overlay-6">
					Magesh J<span className="triangle"></span>
				</div>
			</a>
			<div
				onClick={(e) => copyToClipboard(e.target.closest(".contacts__item"))}
				className="contacts__item contacts__item--3"
			>
				<InstagramIcon />
				<div className="contacts__item-overlay contacts__item-overlay-3">
					@walter_white_308
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
					src="https://img.icons8.com/ios/344/discord-logo.png"
					alt="Discord"
				/>
				<div className="contacts__item-overlay contacts__item-overlay-5">
					WalterWhite#2472
					<span className="triangle"></span>
				</div>
			</div>
			<div
				className="contacts__item contacts__item--8"
				onClick={(e) => copyToClipboard(e.target.closest(".contacts__item"))}
			>
				<img
					src="https://cdn.iconscout.com/icon/free/png-256/steam-2288551-1933796.png"
					alt="Steam"
				/>
				<div className="contacts__item-overlay contacts__item-overlay-8">
					1174204140
					<span className="triangle"></span>
				</div>
			</div>
			<div
				onClick={(e) => copyToClipboard(e.target.closest(".contacts__item"))}
				className="contacts__item contacts__item--7"
			>
				<ContactMailIcon />
				<div className="contacts__item-overlay contacts__item-overlay-3">
					magesh.lbj23@gmail.com
					<span className="triangle"></span>
				</div>
			</div>
			{showAlert ? <Alert text={"Copied to Clipboard"} /> : ""}
		</div>
	);
};

export default Contact;
