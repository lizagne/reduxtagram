//a reducer takes in two things:

// 1. The action (info about what happened)
// 2. copy of current state


//initialise the state with an empty array
const posts = (state=[], action) => {
	console.log(state, action);
	return state;
}

export default posts;