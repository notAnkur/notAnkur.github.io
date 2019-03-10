import React from 'react';
import './Projects.css';
import 'bulma/css/bulma.css';

const pData = require('./projectData.json');

const Projects = () => {

	return(

			<section className="section" id="proj">
			    <div className="container">
				    <h1 className="title blue-col">Projects</h1><br />
					<div id="card-holder" className="card-hold tile columns is-ancestor is-mobile is-multiline is-centered has-text-centered">
						{
							pData.map((data) => (
								<div className="cards" key={data.id}>
									<div className="card-item">
								  		<div className="card-image">
											<img src={require(`../../proj/${data.name}.png`)} alt="b-gen" />
								  		</div>
								  		<div className="card-info">
											<h2 className="card-title"><a href={data.demo} target="_blank" rel="noopener noreferrer">{data.name}</a></h2>
											{data.desc==null ? "" : <h2 className="card-intro">{data.desc}</h2>}
											<p className="card-intro"><b>Language: </b>{data.stack}</p>
											<p className="card-intro"><b>Position: </b> {data.role}</p>
								  		</div>
										<a className="button" href={data.repo} target='_blank' rel='noopener noreferrer'>
										    <span className="icon">
										    <img src={require('../../assets/github.png')} alt='github' />
										    </span>
										    <span>GitHub</span>
									  	</a>
									</div>
					  			</div>
							))
						}

					</div>

			    </div>
			</section>

		);
}

export default Projects;
