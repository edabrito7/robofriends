import React from 'react';
import Card from './Card'
import '../Containers/App.css'

const CardList = ({robots}) => {
	const CardArray = robots.map ((user,i) => {
		return <Card 
		key={i}
		id={robots[i].id} 
		name={robots[i].name} 
		username={robots[i].username} 
		email={robots[i].email}/>;
			})
	

	return (
		<div className="container">
			{ CardArray };
  		</div>
	);
}


export default CardList;