import React, {useRef} from 'react';
import styles from './messages-styles';

import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import {WS_SEND_MESSAGE} from "../../services/actions/chat";

import {IconButton, Paper, TextField, Typography} from '@mui/material';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import emptyAvatar from "../../assets/img/empty-avatar.jpg";

import { formatDistance } from 'date-fns';

const useStyles = makeStyles(theme => (styles));

function Messages() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {wsConnected, messages} = useSelector(store => ({...store.chat}));
    const {currentGroup} = useSelector(store => ({...store.groups}));
    const userList = useSelector(store => (store.users.list));
    const {currentUser} = useSelector(store => ({...store.auth}));

    return (
        <Paper className={classes.messagesWrapper}>
            <div className={classes.headerWrapper}>
                <div className={classes.headerTextWrapper}>
                    <div><img src={emptyAvatar} alt="avatar" className={classes.avatarImg}/></div>
                    <div>
                        <Typography variant='h3' marginBottom={1}>Chat</Typography>
                        <Typography variant='infoGroup'>last online 5 hours ago</Typography>
                    </div>
                </div>
                <div className={classes.headerActionsWrapper}>
                    <IconButton size='large'><AttachFileIcon/></IconButton>
                    <IconButton size='large'><MoreVertIcon/></IconButton>
                </div>
            </div>

            <div className={classes.messagesMainWrapper}>
                <ul className={classes.messagesList}>
                    {messages.map(item => (
                        (currentUser.id === item.user) ?
                            <OwnMessage {...item} userList={userList} />
                            :
                            <Message {...item} userList={userList}/>
                    ))}
                </ul>
                <SendMessage group={currentGroup.id} user={currentUser.id}/>
            </div>
        </Paper>
    );
}

function Message({message, user, posted, userList}) {
    const classes = useStyles();

    const userObj = userList.find(item => (item.id === user));

    return (
        <div className={classes.messageWrapper}>
            <div><img src={userObj.avatar} alt={userObj.username} className={classes.avatarImg}/></div>
            <div className={classes.messageTextDate}>
                <div className={classes.message}>
                    <Typography variant='h3' color={'white'}>{userObj.username}:</Typography>
                    <Typography color='white'>{message}</Typography>
                </div>
                <div className={classes.messageDate}>
                    <Typography color='#9ba3b6'>
                        {formatDistance(new Date(posted), new Date(), {addSuffix: true})}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

function OwnMessage({message, user, posted, userList}) {
    const classes = useStyles();

    const userObj = userList.find(item => (item.id === user));

    return (
        <div className={classes.ownMessageWrapper}>
            <div className={classes.messageTextDate}>
                <div className={classes.ownMessage}>
                    <Typography variant='h3'>{userObj.username}:</Typography>
                    <Typography>{message}</Typography>
                </div>
                <div className={classes.messageDate}>
                    <Typography color='#9ba3b6'>
                        {formatDistance(new Date(posted), new Date(), {addSuffix: true})}
                    </Typography>
                </div>
            </div>
            <div><img src={userObj.avatar} alt={userObj.username} className={classes.avatarImg}/></div>
        </div>
    );
}

function SendMessage({group, user}) {
    const inputRef = useRef(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const send = () => {
        if (group) {
            dispatch({type: WS_SEND_MESSAGE, payload: {user: user, group: group, message: inputRef.current.value}})
            inputRef.current.value = '';
        }
    }

    return (
        <div className={classes.sendAreaWrapper}>
            <IconButton size="medium" color="primary" variant="filled"><AddIcon/></IconButton>
            <TextField inputRef={inputRef} multiline fullWidth defaultValue="Type a message here" maxRows={2}
                       variant="standard"/>
            <IconButton size="medium" color="primary" variant="filled" onClick={send}><SendIcon/></IconButton>
        </div>
    )
}

export default Messages;