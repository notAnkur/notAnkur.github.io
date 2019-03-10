import React from 'react';
import './Skills.css';

const Languages = () => {
	return (

		<section className="section">
		    <div className="container">

		    	<div className='columns is-mobile is-multiline is-centered'>

			    	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/html.png')} alt='html' />
			      		<h2><strong>HTML</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/css.png')} alt='css' />
			      		<h2><strong>CSS</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/js.png')} alt='js' />
			      		<h2><strong>Javascript</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/reactjs.png')} alt='reactjs' />
			      		<h2><strong>React JS</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/java.png')} alt='java' />
			      		<h2><strong>Java</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/mysql.png')} alt='mySql' />
			      		<h2><strong>MySql</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/tools/android_studio.jpg')} alt='android studio' />
			      		<h2><strong>Android Studio</strong></h2>
			      	</div>

			      	<div className='column has-text-centered skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/tools/git.png')} alt='git' />
			      		<h2><strong>Git</strong></h2>
			      	</div>

			      	<div className='column has-text-centered holdering skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/mongodb.png')} alt='mongo' />
			      		<h2><strong>Mongo</strong></h2>
			      	</div>

					<div className='column has-text-centered holdering skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/blender.png')} alt='blender' />
			      		<div className="centered-mongo blinker">Learning!</div>
			      		<h2><strong>Blender</strong></h2>
			      	</div>

			      	<div className='column has-text-centered holdering skill-hover is-narrow right-marg'>
			      		<img src={require('../../assets/nodejs.png')} alt='nodejs' />
			      		<h2><strong>Node JS</strong></h2>
			      	</div>

		      	</div>
		    </div>
		</section>

		);
}

export default Languages;
