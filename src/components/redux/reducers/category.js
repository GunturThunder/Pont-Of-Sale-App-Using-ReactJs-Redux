const initialState = {
    categorys: []
}

const category = (state = initialState, action) => {
    // console.log(action.type);
   switch(action.type){
       case 'GET_CATEGORYS_PENDING':
           return{
               ...state
           }
        case 'GET_CATEGORYS_REJECTED':
            return{
                ...state
            }
        case 'GET_CATEGORYS_FULFILLED':
           return{
               ...state,
               categorys: action.payload.data.result
           }
        case 'POST_CATEGORYS_PENDING':
            return{
                ...state,
                // isLoading: true,
            }
        case 'POST_CATEGORYS_REJECTED':
            return{
                ...state,
                // isLoading: true
            }
        case 'POST_CATEGORYS_FULFILLED':
            console.log(action.payload)
            const newCategorys = [...state.categorys, action.payload.data.result];
            return{
                ...state,
                // isLoading: false,
                categorys: newCategorys
            }
        case 'UPDATE_CATEGORYS_PENDING':
            return{
                ...state,
                // isLoading: true
            }
        
        case 'UPDATE_CATEGORYS_REJECTED':
            return{
                ...state,
                // isLoading: true
            }
    
        case 'UPDATE_CATEGORYS_FULFILLED':
            // console.log(action.payload.data.result)
            const newCategoryAfterUpdate = state.categorys.map(category => {
                if(category.id_category === parseInt(action.payload.data.result.id_category)){
                    return action.payload.data.result;
                }

                return category;
            })
            return{
                ...state,
                // isLoading: false,
                categorys: newCategoryAfterUpdate
            }
        case 'DELETE_CATEGORYS_PENDING':
            return{
                ...state,
                // isLoading: true
            }
            
        case 'DELETE_CATEGORYS_REJECTED':
            return{
                ...state,
                // isLoading: true
            }
        
        case 'DELETE_CATEGORYS_FULFILLED':
            const newCategoryAfterDelete = state.categorys.filter(category => category.id_category !== action.payload.data.result);
            console.log(action.payload.data.result)
            return{
                ...state,
                // isLoading: false,
                categorys: newCategoryAfterDelete
            }
        default:
            return state;
   }
}

export default category;