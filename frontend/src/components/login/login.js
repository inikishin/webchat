import React, {useEffect, useState} from 'react';
import styles from './login-style'
import {useSelector, useDispatch} from 'react-redux';

import {makeStyles} from '@mui/styles';
import {Card, CardHeader, CardContent, FormControl, InputLabel, MenuItem, Select, Button, Box} from '@mui/material';
import {getUsers} from "../../services/actions/users";
import {LOGIN} from "../../services/actions/auth";

const useStyles = makeStyles(theme => (styles));

function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {list, isLoading, hasErrors} = useSelector(store => ({...store.users}));
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        dispatch(getUsers());

        const savedUser = localStorage.getItem('last_user');
        savedUser && setCurrentUser(JSON.parse(savedUser));
        // TODO Fix incorrect caption in Input
    }, [dispatch]);

    const handleUserChange = (e) => {
        setCurrentUser(list.find(item => (item.id === e.target.value)));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('last_user', JSON.stringify(currentUser));
        dispatch({type: LOGIN, user: currentUser});
    }

    return (
        <div className={classes.loginContainer}>
            <Card className={classes.card}>
                <CardHeader title="Login" subheader="Please select user" className={classes.cardHeader}/>
                <CardContent>
                    <form>
                        <FormControl fullWidth>
                            <InputLabel>Username</InputLabel>
                            <Select name="username"
                                    label={currentUser.username ? currentUser.username : 'Username'}
                                    onChange={handleUserChange}
                                    value={currentUser.id}>
                                {list.map(item => (<MenuItem value={item.id}>{item.username}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <Box marginTop={5}>
                            <Button type="submit" variant="contained" onClick={handleSubmit}
                                    disabled={isLoading} size="large">Enter</Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;