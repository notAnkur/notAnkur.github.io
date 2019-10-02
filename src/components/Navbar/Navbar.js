import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import Scroll from 'react-scroll-to-element';

class Navbar extends Component {

	render() {


		document.addEventListener('DOMContentLoaded', () => {

				  // Get all "navbar-burger" elements
				  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

				  // Check if there are any navbar burgers
				  if ($navbarBurgers.length > 0) {

				    // Add a click event on each of them
				    $navbarBurgers.forEach( el => {
				      el.addEventListener('click', () => {

				        // Get the target from the "data-target" attribute
				        const target = el.dataset.target;
				        const $target = document.getElementById(target);

				        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				        el.classList.toggle('is-active');
				        $target.classList.toggle('is-active');

				      });
				    });
				  }

				});


		return(

				<div className="has-text-centered">
					<section className="hero is-info is-large header-radius hero-img" id="home">
						  <div className="hero-head">
						    <nav className="navbar is-fixed-top is-transparent">
						      <div className="container">
						        <div className="navbar-brand">
						          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
						            <span></span>
						            <span></span>
						            <span></span>
						          </span>
						        </div>
						        <div id="navbarMenuHeroB" className="navbar-menu">
					        	<div className="navbar-end nav-col top-margin-navbar">

						          	<Scroll type="id" element="home" timeout={80}>
							  			<a href="#home" className="navbar-item onC is-active" id="homeId">
								            Home
						            	</a>
									</Scroll>

					            	<Scroll type="id" element="about" timeout={80}>
							  			<a href="#about" className="navbar-item onC is-active" id="aboutId">
											About
							           	</a>
									</Scroll>

									<Scroll type="id" element="skills" timeout={80}>
							  			<a href="#skills" className="navbar-item onC is-active" id="skillId">
											Skills
					           			</a>
									</Scroll>

									<Scroll type="id" element="proj" timeout={80}>
							 			<a href="#projects" className="navbar-item onC is-active" id="projId">
											Projects
					           			</a>
									</Scroll>

									<a href="https://notankur.artstation.com/" target='_blank' rel='noopener noreferrer' className="navbar-item onC is-active" id="projId">
										3D Art
									</a>

									<Scroll type="id" element="footerId" timeout={80}>
							  			<a href="#contact" className="navbar-item onC is-active" id="contactId">
											Contact
					          			</a>
									</Scroll>

						        </div>
						        </div>
						      </div>
						    </nav>
						  </div>

						  <div className="hero-body hero-bg header-radius">
						  <div className="hero-bg-overlay">
						    <div className="container has-text-centered">
						      <h1 className="title title-l">
						        Ankur Anant
						      </h1>
							      <div className="text-wrapper">
								    <div className="animated-words title-m h-anim">
								       	<span>Student</span>
										<span>Full Stack Web Developer</span>
										<span>3D Modeler</span>
										<span>Aspiring 3D animator</span>
								        <span>Making bots bleep bloop</span>
								    </div>
								</div>
						    </div>
						    </div>
						  </div>
					</section>
				</div>
			);
	}
}

export default Navbar;
