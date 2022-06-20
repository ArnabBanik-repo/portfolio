import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBookmarkStar } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { IoIosContact } from 'react-icons/io'

import './nav.css'

const Nav = () => {
	const [activeNav, makeActive] = useState('#')
	return (
		<nav>
			<a
				href="#"
				className={activeNav === '#' ? 'active' : ''}
				onClick={() => makeActive('#')}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => makeActive('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				onClick={() => makeActive('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<BsBookmarkStar />
			</a>
			<a
				href="#services"
				onClick={() => makeActive('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<RiServiceLine />
			</a>
			<a
				href="#contact"
				onClick={() => makeActive('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<IoIosContact />
			</a>
		</nav>
	)
}

export default Nav
