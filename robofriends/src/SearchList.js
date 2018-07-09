import React from 'react'

const SearchList = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
			<input
			className='pa3 ba b--green bg-lightest-blue' 
			type = "search" 
			placeholder="Search robo friends here" 
			onChange={ searchChange}
			/>
		</div>
	);
}

export default SearchList;