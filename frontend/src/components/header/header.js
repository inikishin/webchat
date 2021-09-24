import React from 'react';
import styles from './header-styles';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => (styles));

function Header() {
    const classes = useStyles();

    return (
        <header className={classes.headerWrapper}>
            <h1>WebChat</h1>
        </header>
    )
}

export default Header;
