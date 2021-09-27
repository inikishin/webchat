import React from 'react';
import styles from './sidebar-styles';
import {makeStyles} from "@mui/styles";
import emptyAvatar from '../../assets/img/empty-avatar.jpg';
import {Box, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles(theme => (styles));

function Sidebar() {
    const classes = useStyles();

    return (
        <aside className={classes.asideWrapper}>
            <Box className={classes.avatarWrapper}>
                <img src={emptyAvatar} alt="avatar" className={classes.avatarImg} />
            </Box>
            <Box>
                <h4>WebChat</h4>
            </Box>
            <nav className={classes.menuWrapper}>
                <ul className={classes.menuList}>
                    <li className={classes.menuItem}><Typography variant="menuItem"><HomeIcon className={classes.icon} />Home</Typography></li>
                    <li className={classes.menuItem}><Typography variant="menuItem"><ChatIcon className={classes.icon} />Chat</Typography></li>
                    <li className={classes.menuItem}><Typography variant="menuItem"><SettingsIcon className={classes.icon} />Settings</Typography></li>
                </ul>

                <ul className={classes.menuList}>
                    <li className={classes.menuItem}><Typography variant="menuItem"><LogoutIcon className={classes.icon} />Log out</Typography></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;
