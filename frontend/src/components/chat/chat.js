import React, {useEffect} from 'react';
import styles from './chat-styles';

import {useSelector, useDispatch} from 'react-redux';
import {WS_CLEAR_HISTORY, WS_CONNECTION_START, WS_SEND_MESSAGE} from "../../services/actions/chat";

import {makeStyles} from "@mui/styles";
import Groups from "../groups/groups";
import Messages from "../messages/messages";
import {Container, Grid} from "@mui/material";
import Header from "../header/header";

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
        <Container maxWidth='xl'>
            <Header/>
            <Grid container spacing={2} className={classes.chatWrapper}>
                <Grid item xs={4} className={classes.columnWrapper}>
                    <Groups/>
                </Grid>
                <Grid item xs={8}>
                    <Messages/>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Chat;