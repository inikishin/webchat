import {getGroupsRequest} from "../handleApi";

export const GET_GROUPS_REQUEST = 'GET_GROUPS_REQUEST';
export const GET_GROUPS_SUCCESS = 'GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILED = 'GET_GROUPS_FAILED';
export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';

export const getGroups = () => {
    return function (dispatch) {
        dispatch({type: GET_GROUPS_REQUEST});

        getGroupsRequest().then((result) => {
            if (result && result.ok) {
                return result.json();
            } else {
                return Promise.reject(`Error in request to API: ${result.status}`);
            }
        }).then((data) => {
                dispatch({type: GET_GROUPS_SUCCESS, data: data.results});
            }
        ).catch((e) => {
            dispatch({type: GET_GROUPS_FAILED, errorMessage: e});
        });
    }
}
