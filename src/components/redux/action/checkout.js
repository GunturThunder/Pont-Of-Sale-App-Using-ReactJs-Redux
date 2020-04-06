import axios from 'axios'

export const postOrder = (data) => {
  return {
    type: 'POST_ORDER',
    payload: axios.post(process.env.REACT_APP_URL+'order', data)
  }
}

export const getHistory = (startDate, endDate) => {
  console.log('ini date', startDate, endDate)
  return {
    type: 'GET_HISTORY',
    payload: axios.get(process.env.REACT_APP_URL+`order?start=${startDate}&end=${endDate}`)
  }
}
