import React from "react";
import "../Styles/About.scss";
import Avatar from "@material-ui/core/Avatar";
import Alert from "./Alert";

const About = () => {
	return (
		<div className="about-container">
			<div className="about">
				<div className="about__left">
					<h1 className="about__left--header">About Me</h1>
					<p className="about__left--content">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Repellendus corrupti pariatur itaque inventore saepe consequuntur
						quas totam? Laudantium a eos iusto harum mollitia repellat earum
						nemo doloribus architecto minus. Eius?
					</p>
					<p className="about__left--content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a
						neque similique, in obcaecati exercitationem! Minus nemo dicta
						aliquam similique eveniet odio et architecto beatae repudiandae,
						commodi, quidem blanditiis omnis?
					</p>
				</div>
				<div className="about__right">
					<Avatar
						className="about__right--pic"
						// google profile pic
						src="https://lh3.googleusercontent.com/urNa4OPPF0YZ8k0oWsDp4Ocbp0Hz8AHHiM9EyNeBgc9scee-W6qApAzdkop03ZH_-o6wLynfj9Y7A7pOpOxeM9Lo8RXAwooSGt_n5o4QkT0eeuU_dQ1GDnYsxW45YK-PcknhIYcVYw=w2400"
						alt="Mahesh"
					/>
					<div className="about__right--content">
						<h1 className="name">Magesh J</h1>
					</div>
				</div>
			</div>
			<Alert text={"this is an alert"} />
		</div>
	);
};

export default About;
