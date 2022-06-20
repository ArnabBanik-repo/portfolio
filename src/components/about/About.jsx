import React from 'react'
import Me from '../../assets/me-about1.jpg'
import { FaAward } from 'react-icons/fa'
import { FaGuitar } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import './about.css'
const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-img">
						<img src={Me} alt="myself" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Education</h5>
							<small>VIT Vellore</small>
						</article>
						<article className="about__card">
							<FaGuitar className="about__icon" />
							<h5>Hobbies</h5>
							<small>Music & Sports</small>
						</article>
						<article className="about__card">
							<FaFolder className="about__icon" />
							<h5>Projects</h5>
							<small>Fun Projects</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aspernatur quod numquam impedit excepturi animi velit, a
						omnis corrupti accusantium, facere fugiat iste inventore
						vitae iusto, pariatur aut assumenda id ad?
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
