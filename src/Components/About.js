import React from "react";
import "../Styles/About.scss";
import Avatar from "@material-ui/core/Avatar";
import Nav from "./Nav";

const About = () => {
	return (
		<div className="about-container">
			<div className="about">
				<div className="about__left">
					<h1 className="about__left--header">
						About <span>(random BS about myself)</span>{" "}
					</h1>
					<p className="about__left--content">
						Born and brought up in Pondicherry, a small Union territory in South
						India. I made my schooling at Petit Seminaire Higher Secondary
						School as a PCMB student, that's what they call us. Biology was
						something that always hindered me from excellence. So I fell into
						the 'above-average' group. We like calling ourselves that xD. As it
						turned out, I chose what 90% of higher secondary graduates choose.{" "}
						<strong>B. Tech.</strong>
					</p>
					<p className="about__left--content">
						Maybe I felt like Electrostatics and Electromagnetism were too easy
						in schooling so I went with EEE. My frnds and seniors warned me
						about the department I was going to get into, the following year. At
						first, I thought it was just them messing around with me. Obviously,
						they weren't. Otherwise, I won't be studying CSS and JavaScript in
						my final year. In college, I was a lot into sports and NBA. I was in
						my 6th semester on feb 2020 trying to take up my attendence to 80%.
						And then Covid hit the world and everyone of us were sent to our
						homes. Thank god! Lockdown drove me into start learning Python,
						after two months of Peaky Blinders and Better Call Saul. (Try these
						two if you find time). Python led me to pandas, and then for
						whatever reason, I started studying Django. Can't say I learnt
						Django the way my Udemy instructor wanted me to, but dude!!! Web dev
						was awesome!
					</p>
					<p className="about__left--content">
						I had a 150 day Udemy streak during which I learnt a lot of
						JavaScript (still learning) and SQL. And then I started exploring
						various JavaScript libraries and frameworks like React, Node js,
						Express, Mongoose and even graphQL. Lockdown changed me a lot. I
						don't really know what drove me this far, but I hope that same{" "}
						<strong>F = M*a</strong> drives you too. Right now I have one year
						experience in Salesforce platform (mostly LWC) while working at
						Deloitte USI. And Bro! thanks for reading this far. Maybe we can be
						frnds, if we already aren't. P.S : I play Dota 20+ hrs a week.
					</p>
				</div>
				<div className="about__right">
					<Nav />
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
