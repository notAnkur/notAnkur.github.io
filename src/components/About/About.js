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
						  <p className="subtitle">
						  	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Aliquam eleifend mi in nulla. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Porta lorem mollis aliquam ut. Duis at consectetur lorem donec. Aliquam etiam erat velit scelerisque. Eu augue ut lectus arcu bibendum at varius. Pretium nibh ipsum consequat nisl.
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
