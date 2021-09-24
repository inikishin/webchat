import React, {useEffect} from "react";
import styles from "./groups-styles";
import {useSelector, useDispatch} from 'react-redux';

import {makeStyles} from "@mui/styles";
import {Box} from '@mui/material';
import {getGroups, SET_CURRENT_GROUP} from "../../services/actions/groups";

const useStyles = makeStyles(theme => (styles));

function Groups() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {list, currentGroup, isLoading, hasErrors} = useSelector(store => ({...store.groups}));

    useEffect(() => {
        dispatch(getGroups());
    }, []);

    const setCurrentGroup = (id) => {
        const group = list.find(item => (item.id === id));
        dispatch({type: SET_CURRENT_GROUP, group: group});
    }

    return (
        <Box className={classes.groupsWrapper}>
            <ul className={classes.ul}>
                {isLoading ?
                    <p>spinner</p>
                    :
                    list.map(item => (<Group key={item.id} currentGroup={currentGroup}
                                             setCurrentGroup={setCurrentGroup} {...item} />))}
            </ul>
        </Box>
    );
}

function Group({currentGroup, setCurrentGroup, id, name}) {

    const classes = useStyles();

    const handleGroupClick = () => {
        setCurrentGroup(id);
    }

    return (
        <li onClick={handleGroupClick} className={currentGroup.id === id ? classes.groupWrapperActive : classes.groupWrapper}>
            {name}
        </li>
    );
}

export default Groups;