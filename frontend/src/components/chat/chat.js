import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {WS_CONNECTION_START, WS_SEND_MESSAGE} from "../../services/actions/chat";

function Chat() {

    const {wsConnected} = useSelector(store => ({...store.chat}))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: WS_CONNECTION_START, payload: {roomNumber: 1}});

    }, [dispatch])

    useEffect(() => {
        if (wsConnected) {
            dispatch({type: WS_SEND_MESSAGE, payload: {message: '1111'}});
        }
    }, [wsConnected])

    return (
        <div>
            1
        </div>
    )
}

export default Chat;