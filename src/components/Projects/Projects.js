import React from 'react';
import './Projects.css';
import 'bulma/css/bulma.css';

const Projects = () => {

	return(

			<section className="section" id="proj">
			    <div className="container">
				    <h1 className="title blue-col">Projects</h1><br />
				    <div className="tile columns is-ancestor is-mobile is-multiline is-centered has-text-centered">

				    <div className="tile column is-parent parent-hov centralized">
				        <article className="tile is-child notification bg-color-div">
			       			<figure className="image is-4by3">
				            	<img className='proj' src={require('../../proj/background_gen.png')} alt="b-gen" />
				          	</figure>
				          	<br />
				          	<div className='has-text-centered'>
						        <p className="title sizing-big"><a href = "https://anantankur.github.io/background-gen/" target="_blank" rel="noopener noreferrer">Gradient Generator</a></p>
						        <p className="subtitle sizing">HTML, CSS, JS</p>
						        <a className="button" href='https://github.com/anantankur/background-color-generator' target='_blank' rel='noopener noreferrer'>
								    <span className="icon">
								    <img src={require('../../assets/github.png')} alt='github' />
								    </span>
								    <span>GitHub</span>
							  	</a>
					        </div>
				        </article>
				      </div>

				      <div className="tile column is-parent parent-hov centralized">
				        <article className="tile is-child notification bg-color-div">
						  <figure className="image is-4by3 wh_full">
				            <img className='proj' src={require('../../proj/slack-bot.png')} alt="bot" />
				          </figure>
						  <br />
						  <div className='has-text-centered'>
					          <p className="title sizing-big">Hello Bot(Slack)</p>
					          <p className="subtitle sizing p-bottom">Node JS, Express JS</p>
							  <a className="button" href='https://github.com/anantankur/isBot' target='_blank' rel='noopener noreferrer'>
							    <span className="icon">
							    <img src={require('../../assets/github.png')} alt='github' />
							    </span>
							    <span>GitHub</span>
							  </a>
						  </div>
				        </article>
				      </div>

							<div className="tile column is-parent parent-hov centralized">
				        <article className="tile is-child notification bg-color-div">
				          <figure className="image is-4by3">
				            <img className='proj' src={require('../../proj/robo.png')} alt="tictactoe" />
				          </figure>
				          <br />
				          <div className='has-text-centered'>
					          <p className="title sizing-big"><a href = "https://anantankur.github.io/robo" target="_blank" rel="noopener noreferrer">Tic Tac Toe</a></p>
					          <p className="subtitle sizing">Java</p>
					          <a className="button" href='https://github.com/anantankur/robo' target='_blank' rel='noopener noreferrer'>
							    <span className="icon">
							    <img src={require('../../assets/github.png')} alt='github' />
							    </span>
							    <span>GitHub</span>
							  </a>
						  </div>
				        </article>
				      </div>

				      <div className="tile column is-parent parent-hov centralized">
				        <article className="tile is-child notification bg-color-div">
				          <figure className="image is-4by3">
				            <img className='proj' src={require('../../proj/robo.png')} alt="robo" />
				          </figure>
				          <br />
				          <div className='has-text-centered'>
					          <p className="title sizing-big"><a href = "https://anantankur.github.io/robo" target="_blank" rel="noopener noreferrer">ROBO FRIENDS</a></p>
					          <p className="subtitle sizing">REACT JS</p>
					          <a className="button" href='https://github.com/anantankur/robo' target='_blank' rel='noopener noreferrer'>
							    <span className="icon">
							    <img src={require('../../assets/github.png')} alt='github' />
							    </span>
							    <span>GitHub</span>
							  </a>
						  </div>
				        </article>
				      </div>

				      <div className="tile column is-parent parent-hov centralized">
				        <article className="tile is-child notification bg-color-div">
				          <figure className="image is-4by3">
				            <img className='proj' src={require('../../proj/list.png')} alt="to-do-list" />
				          </figure>
				          <br />
				          <div className='has-text-centered'>
					          <p className="title sizing-big"><a href = "https://anantankur.github.io/list" target="_blank" rel="noopener noreferrer">To-Do-List</a></p>
					          <p className="subtitle sizing">HTML, CSS, JS</p>
					          <a className="button" href='https://github.com/anantankur/to-do-list' target='_blank' rel='noopener noreferrer'>
							    <span className="icon">
							    <img src={require('../../assets/github.png')} alt='github' />
							    </span>
							    <span>GitHub</span>
							  </a>
						  </div>
				        </article>
				      </div>

				      <div className="tile column is-parent parent-hov centralized">
				        <article className="tile is-child notification bg-color-div">
				          <figure className="image is-4by3">
				            <img className='proj lefty' src={require('../../proj/thrive.png')} alt="thriving cities" />
				          </figure>
				          <br />
				          <div className='has-text-centered'>
					          <p className="title sizing-big"><a href = "https://anantankur.github.io/thriving" target="_blank" rel="noopener noreferrer">THRIVING CITIES</a></p>
					          <p className="subtitle sizing">HTML, CSS, JS</p>
					          <a className="button" href='https://github.com/anantankur/thriving-cities' target='_blank' rel='noopener noreferrer'>
							    <span className="icon">
							    <img src={require('../../assets/github.png')} alt='github' />
							    </span>
							    <span>GitHub</span>
							  </a>
						  </div>
				        </article>
				      </div>
					</div>

			    </div>
			</section>

		);
}

export default Projects;
