import React from "react";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.jpg";
import Img6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

// Get this data from backend
const data = [
	{
		id: 1,
		title: "Pokemon Game",
		github: "https://github.com/ArnabBanik-repo/Pokegame",
		demo: "https://github.com/ArnabBanik-repo/Pokegame",
		image: Img1,
	},
	{
		id: 2,
		title: "Colours Mosaic",
		github: "https://github.com/ArnabBanik-repo/Color-Mosaic",
		demo: "https://github.com/ArnabBanik-repo/Color-Mosaic",
		image: Img2,
	},
	{
		id: 3,
		title: "Vtop Courses",
		github: "https://github.com/ArnabBanik-repo/vtop-test",
		demo: "https://github.com/ArnabBanik-repo/vtop-test",
		image: Img3,
	},
	{
		id: 4,
		title: "Vit OLX",
		github: "https://github.com/ArnabBanik-repo/test-login",
		demo: "https://github.com/ArnabBanik-repo/test-login",
		image: Img4,
	},
	{
		id: 5,
		title: "999 Website",
		github: "https://github.com/ArnabBanik-repo/small-project",
		demo: "https://github.com/ArnabBanik-repo/small-project",
		image: Img5,
	},
	{
		id: 6,
		title: "Best Eats Restaurant",
		github: "https://github.com/ArnabBanik-repo/IPWT_Project",
		demo: "https://github.com/ArnabBanik-repo/IPWT_Project",
		image: Img6,
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{data.map((project) => {
					return (
						<article className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={project.image} alt={project.id} />
							</div>

							<h3>{project.title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={project.github}
									className="btn"
									target="_blank"
								>
									Github
								</a>
								<a
									href={project.demo}
									className="btn btn-primary"
									target="_blank"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
