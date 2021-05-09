import axios from 'axios'
const hi = () => {
  return async function (dispatch) {
    const data = await axios.get(
      'https://coronavirus-19-api.herokuapp.com/countries'
    )
    return dispatch({
      type: 'FETCH',
      payload: data,
    })
  }
}
export default hi
/*
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}
*/
