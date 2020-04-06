import axios from 'axios'

export const getCategorys = () => {
  return {
    type: 'GET_CATEGORYS',
    payload: axios({
      method: 'GET',
      url: process.env.REACT_APP_URL + 'category'
    })
  }
}

export const updateCategory = (id_category, data) => {
  return {
    type: 'UPDATE_CATEGORYS',
    payload: axios({
      method: 'PATCH',
      url: process.env.REACT_APP_URL + `category/${id_category}`,
      data: data
    })
  }
}

export const createCategory = (data) => {
  return {
    type: 'POST_CATEGORYS',
    payload: axios({
      method: 'POST',
      url: process.env.REACT_APP_URL + 'category',
      data: data
    })
  }
}

export const deleteCategory = (id_categoy) => {
  return {
    type: 'DELETE_CATEGORYS',
    payload: axios({
      method: 'DELETE',
      url: process.env.REACT_APP_URL + `category/${id_categoy}`
    })
  }
}
