import fetch from 'isomorphic-fetch'

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: "LOADING_CATS"})
    return fetch('https://localhost:3000/db')
      .then(resp => resp.json())
      .then((respJson) => {
        return (
          dispatch({type: "FETCH_CATS", payload: respJson.images})
        )
      })
  }
}
