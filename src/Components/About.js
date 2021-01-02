import React from "react";
import "../Styles/About.scss";
import Avatar from "@material-ui/core/Avatar";

const About = () => {
	return (
		<div className="about-container">
			<div className="about">
				<div className="about__left">
					<h1 className="about__left--header">About Me</h1>
					<p className="about__left--content">
						Born and brought up in Pondicherry, a small Union territory in South
						India which was once a french colony. I made my schooling at Petit
						Seminaire Higher Secondary School. I was a PCMB student, that's what
						they call us. Biology was something that always hindered me from
						excellence. So I fell into the 'above-average' group. We like
						calling ourselves like that xD. As it turned out, I chose what 90%
						of higher secondary graduates choose. <strong>B. Tech.</strong>
					</p>
					<p className="about__left--content">
						Maybe I felt like Electrostatics and Electromagnetism were too easy
						in schooling so I went with EEE. My frnds and seniors warned me
						about the department I was going to get into, the following year. At
						first, I thought it was just them messing around with me. Obviously,
						they weren't. Otherwise, I won't be studying CSS and JavaScript in
						my final year. God I hated my department. But college had another
						side. The hostel life side. Basketball, movie watching, messing
						around with your seniors and juniors, and other such things the day
						scholars never get to experience in their entire life, (no offense
						intended).
					</p>
					<p className="about__left--content">
						I was in my 6th semester on feb 2020 trying to take up my attendence
						to 80%. We all know what's next. Let's skip the Covid part. Thank
						god! Lockdown drove me into start learning Python, after two months
						of Money heist and Better Call Saul. (Try these two is you find
						time). Python led me to pandas, and then basic ML and then for
						whatever reason, I started studying Django. Can't say I learnt
						Django the way my Udemy instructor wanted me to, but dude!!! Web dev
						was awesome! I had a Udemy streak for a 4 month span between which I
						got placed too. Lockdown changed me a lot. And Bro! thanks for
						reading this far. Maybe we can be frnds, if we already aren't.
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
		</div>
	);
};

export default About;
