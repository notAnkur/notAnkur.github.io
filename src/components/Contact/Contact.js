import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component{

    render() {
        return(

            <section className="section" id="skills">
                <div className="container has-text-centered">
				    <h1 className="title blue-col">Contact</h1><br />

                    <a  href='https://github.com/anantankur' target='_blank' rel='noopener noreferrer'>
                        <img className='social_icon marg' src={require("../../assets/github.png")} alt="github"/>
                    </a>

                    <a  href='https://twitter.com/notAnkur' target='_blank' rel= 'noopener noreferrer'>
                        <img className='social_icon marg' src={require("../../assets/twitter.png")} alt="twitter"/>
                    </a>

                    <a  href='https://www.linkedin.com/in/ankuranant' target='_blank' rel= 'noopener noreferrer'>
                        <img className='social_icon marg' src={require("../../assets/linkedin.png")} alt="linkedin"/>
                    </a>

                    <a  href='mailto:hello@ankuranant.dev?subject=Hi Ankur' target='_blank' rel= 'noopener noreferrer'>
                        <img className='social_icon' src={require("../../assets/mail.png")} alt="email"/>
                    </a>

			    </div>
		    </section>
        );
    }
}

export default Contact;
