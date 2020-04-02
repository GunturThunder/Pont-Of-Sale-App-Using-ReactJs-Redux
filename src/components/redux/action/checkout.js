import axios from 'axios'

export const postOrder = (data) => {
    // console.log(data)
    return {
      type: 'POST_ORDER',
      payload: axios.post(`http://localhost:4040/order`, data)
    }
  }
  
  export const getHistory = (startDate, endDate) => {
    console.log('ini date', startDate, endDate)
    return {
      type : 'GET_HISTORY',
      payload:  axios.get(`http://localhost:4040/order?start=${startDate}&end=${endDate}`)
    }
  }