import {getUsersRequest} from "../handleApi";

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';


export const getUsers = () => {
    return function (dispatch) {
        dispatch({type: GET_USERS_REQUEST});

        getUsersRequest().then((result) => {
            if (result && result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Error in request to API: ${result.status}`);
            }
        }).then((data) => {
                dispatch({type: GET_USERS_SUCCESS, data: data.results});
            }
        ).catch((e) => {
            dispatch({type: GET_USERS_FAILED, errorMessage: e});
        });
    }
}