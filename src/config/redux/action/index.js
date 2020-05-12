export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({type: 'CHANGE_USER', value: 'Mdradityatama'})
  }, 2000)
}
