import axios from 'axios';

export const getUsers = () => {
    return{
        type: 'GET_USERS',
        payload: axios({
            method: "GET",
            url: "http://localhost:4040/user"
        })
    }
}

export const createUser = (data) => {
    return{
        type: 'POST_USERS',
        payload: axios({
            method: "POST",
            url: "http://localhost:4040/user/register",
            data: data
        })
    }
}