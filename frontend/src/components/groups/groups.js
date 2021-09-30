import React, {useEffect} from "react";
import styles from "./groups-styles";
import {useSelector, useDispatch} from 'react-redux';

import {makeStyles} from "@mui/styles";
import {Box, Button, Card, Typography} from '@mui/material';
import {getGroups, SET_CURRENT_GROUP} from "../../services/actions/groups";

import emptyAvatar from '../../assets/img/empty-avatar.jpg';
import {formatDistance} from "date-fns";

const useStyles = makeStyles(theme => (styles));

function Groups() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {list, currentGroup, isLoading} = useSelector(store => ({...store.groups}));
    const userList = useSelector(store => (store.users.list));

    useEffect(() => {
        dispatch(getGroups());
    }, []);

    const setCurrentGroup = (id) => {
        const group = list.find(item => (item.id === id));
        dispatch({type: SET_CURRENT_GROUP, group: group});
    }

    return (
        <Box className={classes.groupsWrapper}>
            <div className={classes.groupsHeader}>
                <div>
                    <Typography variant='h1'>Chats</Typography>
                    <Typography variant='h4'>Recent Chats</Typography>
                </div>
                <div>
                    <Button variant='contained' size='large'>+ Create New Chat</Button>
                </div>
            </div>
            <ul className={classes.ul}>
                {isLoading ?
                    <p>spinner</p>
                    :
                    list.map(item => (<Group key={item.id} currentGroup={currentGroup}
                                             setCurrentGroup={setCurrentGroup} userList={userList} {...item} />))}
            </ul>
        </Box>
    );
}

function Group({currentGroup, setCurrentGroup, userList, id, name, last_activity}) {

    const classes = useStyles();

    let lastUser = undefined;
    if ('user' in last_activity) {
        lastUser = userList.find(item => (item.id===last_activity.user))
    }

    const handleGroupClick = () => {
        setCurrentGroup(id);
    }

    return (
        <li onClick={handleGroupClick} className={classes.li}>
            <Card className={currentGroup.id === id ? classes.groupWrapperActive : classes.groupWrapper}>
                <Box className={classes.groupHeader}>
                    <Box display='flex'>
                        <Box><img src={lastUser ? lastUser.avatar : emptyAvatar} alt="avatar" className={classes.avatarImg}/></Box>
                        <Box>
                            <Typography variant='h3' marginBottom={1}>{name}</Typography>
                            <Typography variant='infoGroup' color={(currentGroup.id === id) && 'white'}>
                                {"posted" in last_activity && formatDistance(new Date(lastUser.last_login), new Date(), {addSuffix: true})}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography color={(currentGroup.id === id) && 'white'}>
                            {"posted" in last_activity &&
                                formatDistance(new Date(last_activity.posted), new Date(), {addSuffix: true})}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant='h3' color={(currentGroup.id === id) && 'white'}>{lastUser && lastUser.username+':'}</Typography>
                    <Typography color={(currentGroup.id === id) && 'white'}>
                        {"message" in last_activity ?
                                last_activity.message
                                :
                                'no messages'}
                    </Typography>
                </Box>
            </Card>
        </li>
    );
}

export default Groups;