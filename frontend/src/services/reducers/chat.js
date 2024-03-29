import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE, WS_CLEAR_HISTORY,
} from "../actions/chat";

const initialState = {
    wsConnected: false,
    messages: [],
    error: ''
}

export const chat = (state = initialState, action) => {

    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                error: "",
                wsConnected: true
            };
        }

        case WS_CONNECTION_ERROR: {
            console.log(action.payload);
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        }

        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                error: '',
                wsConnected: false
            };
        }

        case WS_GET_MESSAGE: {
            return {
                ...state,
                error: '',
                messages: state.messages.length
                    ? [...state.messages, action.payload]
                    : [action.payload]
            };
        }

        case WS_CLEAR_HISTORY: {
            return {...state, messages: []}
        }

        default: {
            return {...state}
        }
    }
}