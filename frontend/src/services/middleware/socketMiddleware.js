import {WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE, WS_SEND_MESSAGE} from "../actions/chat";

export const socketMiddleware = () => {
    return (store) => {

        let socket = null;

        return (next => (action) => {
            const {dispatch} = store;
            const {type, payload} = action;

            if (type === WS_CONNECTION_START) {
                if (socket) {
                    socket.close(1000, 'reconnect needed');
                }
                socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${payload.roomNumber}/`);
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({type: WS_CONNECTION_SUCCESS, payload: undefined});
                };

                socket.onerror = event => {
                    dispatch({type: WS_CONNECTION_ERROR, payload: event.toString()});
                };

                socket.onmessage = event => {
                    const parsedData = JSON.parse(event.data);
                    dispatch({type: WS_GET_MESSAGE, payload: parsedData});
                };

                socket.onclose = event => {
                    dispatch({type: WS_CONNECTION_CLOSED, payload: undefined});
                };

                if (type === WS_SEND_MESSAGE) {
                    console.log(payload);
                    socket.send(JSON.stringify(payload));
                }
            }
            next(action);
        })
    }
}