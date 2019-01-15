import React from 'react';
import './Footer.css';
import Contact from '../Contact/Contact.js';

const Footer = () => {

		return(

			<footer className="footer fcol footer-radius" id="footerId">
				<Contact />

			    <div className="content has-text-centered">
			      <p>
			        <strong>Copyright &copy; 2018 Ankur Anant.</strong>
			      </p>
			      <p>
			    	  Developed using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="r-link">React</a>
			    	  , <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer" className="b-link">Bulma</a><br />
			    	  Icons from <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a>
			      </p>
			    </div>
			</footer>


			);

	}

export default Footer;