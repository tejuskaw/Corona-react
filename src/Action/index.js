import axios from 'axios'
export default () => {
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
/*
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}
*/
