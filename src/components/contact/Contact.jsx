import React, { useRef } from "react";
import { SiGmail } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			"service_udtxkvh",
			"template_8btzerm",
			form.current,
			"OpydpIWHTF1XcDgn4"
		);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<SiGmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5 className="text-light">arnabbanik9@gmail.com</h5>
						<a href="mailto:arnabbanik9@gmail.com" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<SiInstagram className="contact__option-icon" />
						<h4>Instagram</h4>
						<h5 className="text-light">arnabbanik5</h5>
						<a
							href="https://www.instagram.com/direct/t/"
							target="_blank"
						>
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<SiWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5 className="text-light">+918697134869</h5>
						<a
							href="https://api.whatsapp.com/send?phone=8697134869"
							target="_blank"
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email Address"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your message"
						required
					></textarea>
					<button className="btn btn-primary">Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
