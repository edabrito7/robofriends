import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from './constans.js';

const initialStateSearch = {
	searchField: ''
};


export const searchRobots = (state=initialStateSearch, actions={}) => {
	switch (actions.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: actions.payload } )
		default:
		return state;
	}
}  

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, actions={}) => {
	switch(actions.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true } );
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: actions.payload, isPending: false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: actions.payload, isPending: false})
		default:
		return state;
	}
}