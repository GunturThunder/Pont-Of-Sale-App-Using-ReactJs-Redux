export const addCart = (data,id_product) => {
    return {
      type: 'ADD_CART',
      payload: data,id_product
    }
  }
  
  export const addQty = (id_product) => {
    return {
      type: 'ADD_QTY',
      payload: id_product
    }
  }
  
  export const reduceQty = (id_product) => {
      return {
        type: 'REDUCE_QTY',
        payload: id_product
      }
    }