const initialState = {
  cart: [],
  total: 0,
  totalPurchase: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      // console.log("zul",...state.cart)
      // const newCart = [...state.cart, action.payload]
      const newCart = state.cart.map(cart => {
        if (cart.id_product === action.payload.id_product) {
          // cart.qty = cart.qty + 1
          return action.payload
        }
        return cart
      })
      let existedCartData = state.cart.find(product => product.id_product === action.payload.id_product)
      if (existedCartData) {
        return {
          ...state,
          cart: newCart,
          // total: state.total + action.payload.price
        }
      }
      else {
        let newTotal = state.total + action.payload.price
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: newTotal,
          totalPurchase: state.totalPurchase + 1

        }
      }
    // console.log(action.payload.id_product)

    // return {
    //   ...state,
    //   cart: newCart,
    // totalPurchase :  state.totalPurchase + 1
    // }
    case 'ADD_QTY':
      const newQtyCart = state.cart.map(cart => {
        if (cart.id_product === action.payload.id_product) {
          cart.qty = cart.qty + 1
        }
        return cart
      })
      let newTotal = state.total + action.payload.price
      return {
        ...state,
        cart: newQtyCart,
        total: newTotal
      }

    case 'REDUCE_QTY':
      const newQty = state.cart.map(cart => {
        if (cart.id_product === action.payload.id_product) {
          cart.qty = cart.qty - 1
        }
        return cart
      })
      let newwTotal = state.total - action.payload.price
      return {
        ...state,
        cart: newQty,
        total: newwTotal
      }

    case 'DELETE_FROM_CART':
      const newProductAfterDelete = state.cart.filter(
        product => product.id_product !== action.payload.cart.id_product
      )
      console.log(action.payload)
      return {
        ...state,
        cart: newProductAfterDelete,
        totalPurchase: state.totalPurchase - 1,
        total: action.payload.cart.total
      }
    case 'REMOVE_CART':
      return {
        ...state,
        totalPurchase: 0,
        total: 0,
        cart: []
      }
    case "GET_HISTORY_PENDING":
      return {
        ...state
      };
    case "GET_HISTORY_REJECTED":
      return {
        ...state
      };
    case "GET_HISTORY_FULFILLED":
      console.log(action.payload)
      return {
        ...state,
        histories: action.payload.data
      };
    default:
      return state
  }
}

export default cart;