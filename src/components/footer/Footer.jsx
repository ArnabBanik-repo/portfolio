import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
	return (
		<footer id="#footer" className="footer">
			<a href="#" className="footer__logo">
				ARNAB BANIK
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#portfolio">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.instagram.com/arnabbanik5/">
					<BsInstagram />
				</a>
				<a href="https://www.facebook.com/Storm2099/">
					<BsFacebook />
				</a>
				<a href="https://github.com/ArnabBanik-repo">
					<BsGithub />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
