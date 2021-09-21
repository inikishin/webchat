import {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED} from "../actions/users";

const initialState = {
    list: [],
    isLoading: false,
    hasErrors: false
}

export const users = (state = initialState, action) => {
    switch (action.type) {

        case GET_USERS_REQUEST: {
            return {...state, isLoading: true}
        }

        case GET_USERS_SUCCESS: {
            return {...state, isLoading: false, list: action.data}
        }

        case GET_USERS_FAILED: {
            return {...state, isLoading: false, hasErrors: true}
        }

        default: {
            return {...state}
        }
    }
}