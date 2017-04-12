const catsReducer = (state={loading: false, pictures: []}, action) => {
	switch (action.type) {
		case "FETCH_CATS":
			return Object.assign({}, state, {loading: false, pictures: action.payload})
		case "LOADING_CATS":
      		return Object.assign({}, state, {loading: true}) 
		default:
			return state
	}
}

export default catsReducer