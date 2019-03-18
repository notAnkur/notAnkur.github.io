import React, {Component} from 'react';
import './About.css';

class About extends Component{


	render() {

		return(

			<section className="section" id="about">
				<div className="container">
					<h1 className="title blue-col">About</h1>
					<div className="columns">
					  <div className="column spl">
					  	  <br />
						  <p className="subtitle">
						  	My name is Ankur Anant.
							 I am currently a Fullstack web developer and on the path for my bachelor's degree in computer science.
							 In my free time I like to learn new technologies and create projects.
						  </p>
					  </div>

					{/*removed spl class from div below*/}
					  <div className="column has-text-centered">
						  <img className="pro_img" src={require("../../assets/profile.png")} alt='me' />
					  </div>
				  </div>
				</div>
			</section>

			);
	}

}
export default About;
