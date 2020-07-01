import React from 'react';
import '../Containers/App.css'


const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height:'500px' }}>
			{props.children}
		</div>
		); 

}

export default Scroll