import axios from 'axios';

export const getCategorys = () => {
    return{
        type: 'GET_CATEGORYS',
        payload: axios({
            method: "GET",
            url: "http://localhost:4040/category"
        })
    }
}

export const updateCategory = (id_category, data) => {
    return{
        type: "UPDATE_CATEGORYS",
        payload: axios({
            method: "PATCH",
            url: `http://localhost:4040/category/${id_category}`,
            data: data
        })
    }
}

export const createCategory = (data) => {
    return{
        type: 'POST_CATEGORYS',
        payload: axios({
            method: "POST",
            url: "http://localhost:4040/category",
            data: data
        })
    }
}

export const deleteCategory = (id_categoy) => {
    return{
        type: "DELETE_CATEGORYS",
        payload: axios({
            method: "DELETE",
            url: `http://localhost:4040/category/${id_categoy}`
        })
    }
}