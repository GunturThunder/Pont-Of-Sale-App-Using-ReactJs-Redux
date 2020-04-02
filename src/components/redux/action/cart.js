import axios from 'axios';

export const addCart = (data) => {
  return {
    type: 'ADD_CART',
    payload: data
  }
}

export const addQty = (cart) => {
  return {
    type: 'ADD_QTY',
    payload: cart
  }
}

export const reduceQty = (cart) => {
  return {
    type: 'REDUCE_QTY',
    payload: cart
  }
}

export const deleteFromCart = (cart) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: { cart }
  }
}

export const removeCart = (cart) => {
  return {
    type: 'REMOVE_CART',
    payload: cart
  }
}

export const getHistory = (startDate, endDate) => {
  console.log('ini date', startDate, endDate)
  return {
    type : 'GET_HISTORY',
    payload:  axios.get(`${process.env.REACT_APP_API_URL}/order?start=${startDate}&end=${endDate}`)
  }
}