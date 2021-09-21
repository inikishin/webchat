import {LOGIN, LOGOUT} from "../actions/auth";

const initialState = {
    isAuthenticated: false,
    currentUser: {}
}

export const auth = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN: {
            return {...state, isAuthenticated: true, currentUser: action.user}
        }

        case LOGOUT: {
            return {...state, isAuthenticated: false, currentUser: {}}
        }

        default: {
            return {...state}
        }
    }
}