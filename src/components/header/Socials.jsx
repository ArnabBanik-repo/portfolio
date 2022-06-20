import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'
const Socials = () => {
	return (
		<div className="socials">
			<a href="https://linkedin.com" target="_blank" rel="noreferrer">
				<BsLinkedin />
			</a>
			<a href="https://github.com" target="_blank" rel="noreferrer">
				<RiInstagramFill />
			</a>
			<a href="https://instagram.com" target="_blank" rel="noreferrer">
				<BsGithub />
			</a>
		</div>
	)
}

export default Socials
