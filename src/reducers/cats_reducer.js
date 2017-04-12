export default function cats_reducer(state={loading: false, pictures: []}, action) {
  switch (action.type) {
    case "LOADING_CATS":
      return {loading: true, pictures: []}
    case 'FETCH_CATS':
      return Object.assign({}, {loading: false, pictures: action.payload}, state)
    default:
      return state
  }
}
