import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import Me from '../../assets/me1.png'
import './header.css'
const Header = () => {
	return (
		<header id="header">
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Mr.Onion</h1>
				<h5 className="text-light">Fullstack Developer</h5>

				<CTA />
				<Socials />

				<div className="me">
					<img src={Me} alt="Myself" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	)
}

export default Header
