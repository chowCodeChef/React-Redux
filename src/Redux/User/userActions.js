import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "./userTypes"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = (dispatch) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => dispatch(fetchUsersSuccess(response.data)))
            .catch((error) => dispatch(fetchUsersFailure(error.message)) )
    }
}