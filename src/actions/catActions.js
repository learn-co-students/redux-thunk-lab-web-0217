require('isomorphic-fetch')

export function fetchCats() {
	return (dispatch) => {
		dispatch({type: 'LOADING_CATS'})
		return fetch('http://localhost:3000/db')
		.then(resp => resp.json())
		.then(catPics => dispatch({ type: 'FETCH_CATS', payload: catPics.images }))
	}
}