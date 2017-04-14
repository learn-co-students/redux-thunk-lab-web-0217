import thunk from 'redux-thunk'
import fetch from 'isomorphic-fetch'

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:3000/db')
    .then(resp => resp.json())
    .then((respJSON) => {
      return (
        dispatch({
          type: 'FETCH_CATS',
          payload: respJSON.images
        })
      )
    })
  }
}
