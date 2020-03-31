const initialState = {
  cart: [],
  totalPurchase:0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const newCart = [...state.cart, action.payload]
      return {
        ...state,
        cart: newCart,
        totalPurchase :  state.totalPurchase + 1
      }

    case 'ADD_QTY':
      const newQtyCart = state.cart.map(cart => {
        if (cart.id_product === action.payload) {
          cart.qty = cart.qty + 1
        }
        return cart
      })
      return {
        ...state,
        cart: newQtyCart
      }

    case 'REDUCE_QTY':
      const newQty = state.cart.map(cart => {
        if (cart.id_product === action.payload) {
          cart.qty = cart.qty - 1
        }
        return cart
      })
      return {
        ...state,
        cart: newQty
      }

    case 'DELETE_FROM_CART':
      const newProductAfterDelete = state.cart.filter(
        product => product.id_product !== action.payload.id_product
      )
      console.log(action.payload.id_product, state.cart)
      return {
        ...state,
        cart: newProductAfterDelete,
        totalPurchase: state.totalPurchase - 1
      }

    default:
      return state
  }
}

export default cart;