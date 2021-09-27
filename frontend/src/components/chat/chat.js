import React, {useEffect} from 'react';
import styles from './chat-styles';

import {useSelector, useDispatch} from 'react-redux';
import {WS_CLEAR_HISTORY, WS_CONNECTION_START, WS_SEND_MESSAGE} from "../../services/actions/chat";

import {makeStyles} from "@mui/styles";
import Groups from "../groups/groups";
import Messages from "../messages/messages";
import {Box, Container, Grid} from "@mui/material";
import Sidebar from "../sidebar/sidebar";

const useStyles = makeStyles(theme => (styles));

function Chat() {

    const classes = useStyles();
    const {wsConnected} = useSelector(store => ({...store.chat}))
    const {currentGroup} = useSelector(store => ({...store.groups}))
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentGroup) {
            dispatch({type: WS_CLEAR_HISTORY});
            dispatch({type: WS_CONNECTION_START, payload: {roomNumber: currentGroup.id}});
        }
    }, [dispatch, currentGroup])


    return (
        <div className={classes.mainPageWrapper}>
            <Sidebar/>
            <div className={classes.chatWrapper}>
                <div className={classes.groupsWrapper}>
                    <Groups/>
                </div>
                <div className={classes.messagesWrapper}>
                    <Messages/>
                </div>
            </div>
        </div>

    )
}

export default Chat;