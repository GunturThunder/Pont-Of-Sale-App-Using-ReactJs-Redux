const initialState = {
    products: [],
    totalPage:[]
}

const product = (state = initialState, action) => {
    // console.log(action.type);
   switch(action.type){
       case 'GET_SEARCHPRODUCTS_PENDING':
            return {
                ...state
            }
        case 'GET_SEARCHPRODUCTS_REJECTED':
            return {
                ...state
            }
        case 'GET_SEARCHPRODUCTS_FULFILLED':
            // console.log(action.payload)
            return {
                ...state,
                products: action.payload.data.result
            }
        case 'GET_PAGINATION_FULFILLED':
            // console.log(action.payload)
            return {
                ...state,
                products: action.payload.data.result,
            }    
        case 'GET_SORTPRODUCTS_PENDING':
            return {
                ...state
            }
        case 'GET_SORTPRODUCTS_REJECTED':
            return {
                ...state
            }
        case 'GET_SORTPRODUCTS_FULFILLED':
            // console.log(action.payload)
            return {
                ...state,
                products: action.payload.data.result

            }
       case 'GET_PRODUCTS_PENDING':
           return{
               ...state
           }
        case 'GET_PRODUCTS_REJECTED':
            return{
                ...state
            }
        case 'GET_PRODUCTS_FULFILLED':
            console.log(action.payload)
           return{
               ...state,
               products: action.payload.data.result,
               totalPage: action.payload.data.totalPage
           }
        case 'POST_PRODUCT_PENDING':
            return{
                ...state,
                // isLoading: true,

            }
        case 'POST_PRODUCT_REJECTED':
            return{
                ...state,
                // isLoading: true
            }
        case 'POST_PRODUCT_FULFILLED':
            const newProducts = [action.payload.data.result];
            return{
                ...state,
                // isLoading: false,
                products: newProducts
            }
        case 'UPDATE_PRODUCT_PENDING':
            return{
                ...state,
                // isLoading: true
            }
        
        case 'UPDATE_PRODUCT_REJECTED':
            return{
                ...state,
                // isLoading: true
            }
    
        case 'UPDATE_PRODUCT_FULFILLED':
            const newProductAfterUpdate = state.products.map(product => {
                if(product.id_product === action.payload.data.result.id_product){
                    return action.payload.data.result;
                }

                return product;
            })
            return{
                ...state,
                // isLoading: false,
                products: newProductAfterUpdate
            }
        case 'DELETE_PRODUCT_PENDING':
            return{
                ...state,
                // isLoading: true
            }
            
        case 'DELETE_PRODUCT_REJECTED':
            return{
                ...state,
                // isLoading: true
            }
        
        case 'DELETE_PRODUCT_FULFILLED':
            const newProductAfterDelete = state.products.filter(product => product.id_product !== action.payload.data.result);
            return{
                ...state,
                // isLoading: false,
                products: newProductAfterDelete
            }
        default:
            return state;
   }
}

export default product;