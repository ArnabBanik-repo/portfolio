import React from "react";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
const App = () => {
	return (
		<div className="App">
			<Header />
			<Nav />
			<About />
			<Experience />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
