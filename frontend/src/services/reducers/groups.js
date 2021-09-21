import {GET_GROUPS_REQUEST, GET_GROUPS_SUCCESS, GET_GROUPS_FAILED, SET_CURRENT_GROUP} from "../actions/groups";

const initialState = {
    list: [],
    currentGroup: {},
    isLoading: false,
    hasErrors: false
}

export const groups = (state = initialState, action) => {
    switch (action.type) {

        case GET_GROUPS_REQUEST: {
            return {...state, isLoading: true}
        }

        case GET_GROUPS_SUCCESS: {
            return {...state, isLoading: false, list: action.data}
        }

        case GET_GROUPS_FAILED: {
            return {...state, isLoading: false, hasErrors: true}
        }

        case SET_CURRENT_GROUP: {
            return {...state, currentGroup: action.group}
        }

        default: {
            return {...state}
        }
    }
}