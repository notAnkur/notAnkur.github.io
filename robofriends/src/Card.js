import React from 'react';

const Card = (props)=> {
	const {id, name, email} = props;
	return (
			<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="" src={`https://robohash.org/${id}?200x200`}/>
				<h4>{name}</h4>
				<p>{email}</p>
			</div>
		);
}
export default Card;