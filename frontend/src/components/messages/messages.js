import React, {useRef} from 'react';
import styles from './messages-styles';

import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {WS_SEND_MESSAGE} from "../../services/actions/chat";

const useStyles = makeStyles(theme => (styles));

function Messages() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {wsConnected, messages} = useSelector(store => ({...store.chat}));
    const {currentGroup} = useSelector(store => ({...store.groups}));
    const userList = useSelector(store => (store.users.list));
    const {currentUser} = useSelector(store => ({...store.auth}));

    return (
        <>
            {messages.map(item => (<Message {...item} userList={userList} />))}
            <SendMessage group={currentGroup.id} user={currentUser.id} />
        </>
    );
}

function Message({message, user, posted, userList}) {
    const classes = useStyles();

    const userObj = userList.find(item => (item.id===user));

    return (
        <p>{userObj.username} ({posted}): {message}</p>
    );
}

function SendMessage({group, user}) {
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const send = () => {
        if (group) {
            dispatch({type: WS_SEND_MESSAGE, payload: {user: user, group: group, message: inputRef.current.value}})
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={send}>Send</button>
        </>
    )
}

export default Messages;