import React from 'react';




const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className="pa3">
			<input 
			className="pa3 ba g--green bg-lightest-blue"
			type="search" placeholder="Seach Robots"
			onChange={ searchChange } />
		</div>
		);
}

export default SearchBox;