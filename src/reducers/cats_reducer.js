export default function catsReducer(state={loading: false, pictures: []}, action) {
  switch (action.type) {
    case "LOADING_CATS":
      return {loading: false, pictures: state.pictures}
    case "FETCH_CATS":
      return {loading: false, pictures: action.payload}
    default:
      return state
  }
}
